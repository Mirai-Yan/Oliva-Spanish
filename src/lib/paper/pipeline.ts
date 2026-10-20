import { batchImages, emptyMaterial, readMaterial, type Material } from './material'
import { sanitizePaper, type SanitizeResult } from './sanitize'
import { emptyQuestions, SECTIONS, type PaperConfig, type SectionId } from './types'

/**
 * Large papers in two stages, with the model calls injected (so the flow is testable):
 * A) read photo crops in small batches into study material, B) write each question type from that material.
 */

export interface PipelineImage {
  blob: Blob
  label: string
}

export interface PipelineDeps {
  /** one batch of images → raw material JSON (image numbers 1..n are local to the batch) */
  extract: (images: PipelineImage[], signal?: AbortSignal) => Promise<unknown>
  /** one question type from the material → raw paper JSON */
  generate: (section: SectionId, count: number, avoid: string[], signal?: AbortSignal) => Promise<unknown>
  sleep?: (ms: number) => Promise<void>
}

export interface Progress {
  stage: 'extract' | 'generate'
  done: number
  total: number
  /** seconds we are waiting because of the free-tier rate limit */
  waiting?: number
  section?: SectionId
}

const defaultSleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))
const RETRY_DELAYS = [5_000, 15_000, 30_000]

/** Retry rate-limit (429) and server (5xx) failures with growing pauses; anything else fails at once. */
export async function withRetry<T>(fn: () => Promise<T>, opts: { sleep?: (ms: number) => Promise<void>; onWait?: (s: number) => void; signal?: AbortSignal } = {}): Promise<T> {
  const sleep = opts.sleep ?? defaultSleep
  for (let attempt = 0; ; attempt++) {
    try {
      return await fn()
    } catch (e) {
      const status = (e as { status?: number })?.status ?? 0
      const retryable = status === 429 || status >= 500
      if (!retryable || attempt >= RETRY_DELAYS.length || opts.signal?.aborted) throw e
      const ms = RETRY_DELAYS[attempt]
      opts.onWait?.(Math.round(ms / 1000))
      await sleep(ms)
      opts.onWait?.(0)
    }
  }
}

/** Run async jobs with limited parallelism, preserving result order. */
async function pool<T, R>(items: T[], limit: number, fn: (item: T, i: number) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length)
  let next = 0
  const worker = async () => {
    while (next < items.length) {
      const i = next++
      out[i] = await fn(items[i], i)
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker))
  return out
}

/**
 * Stage A. `cached[i]` (when present) is reused instead of re-reading image i.
 * Returns material per image (null where its batch failed) and the failed image indices.
 */
export async function extractAll(
  images: PipelineImage[],
  deps: PipelineDeps,
  opts: { cached?: (Material | undefined)[]; concurrency?: number; signal?: AbortSignal; onProgress?: (p: Progress) => void } = {},
): Promise<{ perImage: (Material | null)[]; failed: number[]; lastError?: unknown }> {
  const perImage: (Material | null)[] = images.map((_, i) => opts.cached?.[i] ?? null)
  const todo = images.map((im, i) => ({ im, i, size: im.blob.size })).filter((x) => !perImage[x.i])
  const batches = batchImages(todo)
  let done = images.length - todo.length
  const failed: number[] = []
  let lastError: unknown
  let waiting = 0
  const report = () => opts.onProgress?.({ stage: 'extract', done, total: images.length, waiting: waiting || undefined })
  report()

  await pool(batches, opts.concurrency ?? 2, async (batch) => {
    if (opts.signal?.aborted) return
    try {
      const raw = await withRetry(() => deps.extract(batch.map((b) => b.im), opts.signal), {
        sleep: deps.sleep,
        signal: opts.signal,
        onWait: (s) => {
          waiting = s
          report()
        },
      })
      const m = readMaterial(raw)
      // split the batch answer back per image (src is 1..batch length)
      const parts = batch.map(() => emptyMaterial())
      const owner = (src?: number) => parts[src && src >= 1 && src <= batch.length ? src - 1 : 0]
      for (const v of m.vocab) owner(v.src).vocab.push({ ...v, src: undefined })
      for (const g of m.grammar) owner(g.src).grammar.push({ ...g, src: undefined })
      for (const s of m.sentences) owner(s.src).sentences.push({ ...s, src: undefined })
      batch.forEach((b, k) => (perImage[b.i] = parts[k]))
    } catch (e) {
      if (opts.signal?.aborted) return
      lastError = e
      failed.push(...batch.map((b) => b.i))
    } finally {
      done += batch.length
      report()
    }
  })
  failed.sort((a, b) => a - b)
  return { perImage, failed, lastError }
}

/** Number every item with its (1-based) image so the generator can spread questions over all photos. */
export function tagSources(perImage: (Material | null)[]): Material[] {
  return perImage.map((m, i) =>
    m
      ? {
          vocab: m.vocab.map((v) => ({ ...v, src: i + 1 })),
          grammar: m.grammar.map((g) => ({ ...g, src: i + 1 })),
          sentences: m.sentences.map((s) => ({ ...s, src: i + 1 })),
        }
      : emptyMaterial(),
  )
}

const itemKey = (x: unknown) => {
  const o = x as Record<string, string>
  return (o.es ?? o.sentence ?? o.question ?? '').toLowerCase()
}

/** Stage B: one request per question type (long papers would be cut off in one answer), plus one top-up when short. */
export async function generateSections(
  config: PaperConfig,
  deps: PipelineDeps,
  opts: { signal?: AbortSignal; onProgress?: (p: Progress) => void } = {},
): Promise<SanitizeResult> {
  const wanted = SECTIONS.filter((s) => config.sections[s.id].count > 0)
  const questions = emptyQuestions()
  let title = ''
  let scope = ''
  let dropped = 0
  let lastError: unknown
  let waiting = 0
  for (const [k, s] of wanted.entries()) {
    if (opts.signal?.aborted) break
    const report = () => opts.onProgress?.({ stage: 'generate', done: k, total: wanted.length, section: s.id, waiting: waiting || undefined })
    report()
    const want = config.sections[s.id].count
    const ask = (count: number, avoid: string[]) =>
      withRetry(() => deps.generate(s.id, count, avoid, opts.signal), {
        sleep: deps.sleep,
        signal: opts.signal,
        onWait: (sec) => {
          waiting = sec
          report()
        },
      })
    try {
      const first = sanitizePaper(await ask(want, []), config)
      title ||= first.paper.title === '拍照试卷' ? '' : first.paper.title
      scope ||= first.paper.scope
      dropped += first.dropped
      let got = first.paper.questions[s.id] as unknown[]
      if (got.length < want) {
        const extra = sanitizePaper(await ask(want - got.length, got.map(itemKey)), config, { cap: false })
        const seen = new Set(got.map(itemKey))
        got = [...got, ...(extra.paper.questions[s.id] as unknown[]).filter((x) => !seen.has(itemKey(x)))].slice(0, want)
      }
      questions[s.id] = got as never
    } catch (e) {
      if (opts.signal?.aborted) break
      lastError = e
    }
  }
  opts.onProgress?.({ stage: 'generate', done: wanted.length, total: wanted.length })
  if (!wanted.some((s) => questions[s.id].length) && lastError) throw lastError
  const shortfall: SanitizeResult['shortfall'] = {}
  for (const s of wanted) {
    const miss = config.sections[s.id].count - questions[s.id].length
    if (miss > 0) shortfall[s.id] = miss
  }
  return { paper: { title: title || '拍照试卷', scope, config, questions }, shortfall, dropped }
}
