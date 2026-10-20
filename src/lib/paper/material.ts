/**
 * Study material extracted from many photo regions (stage A of large papers),
 * merged into one compact text the question generator works from (stage B).
 */

export interface MaterialWord {
  es: string
  zh: string
  /** 1-based image number it came from */
  src?: number
}
export interface MaterialGrammar {
  point: string
  note?: string
  src?: number
}
export interface MaterialSentence {
  es: string
  zh?: string
  src?: number
}

export interface Material {
  vocab: MaterialWord[]
  grammar: MaterialGrammar[]
  sentences: MaterialSentence[]
}

export const emptyMaterial = (): Material => ({ vocab: [], grammar: [], sentences: [] })

export const MATERIAL_LIMITS = { vocab: 600, grammar: 120, sentences: 400 }

const str = (v: unknown) => (typeof v === 'string' ? v.replace(/\s+/g, ' ').trim() : '')
const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) ? Math.round(v) : undefined)
const arr = (v: unknown): Record<string, unknown>[] => (Array.isArray(v) ? v.filter((x) => x && typeof x === 'object') : [])
const key = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\p{L}\p{N} ]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()

/** Clean one raw model answer; `offset` maps batch-local image numbers (1..n) to global ones. */
export function readMaterial(raw: unknown, offset = 0): Material {
  const o = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>
  const src = (v: unknown) => {
    const n = num(v)
    return n && n > 0 ? n + offset : undefined
  }
  return {
    vocab: arr(o.vocab)
      .map((x) => ({ es: str(x.es), zh: str(x.zh), src: src(x.src) }))
      .filter((x) => x.es && x.zh),
    grammar: arr(o.grammar)
      .map((x) => ({ point: str(x.point), note: str(x.note) || undefined, src: src(x.src) }))
      .filter((x) => x.point),
    sentences: arr(o.sentences)
      .map((x) => ({ es: str(x.es), zh: str(x.zh) || undefined, src: src(x.src) }))
      .filter((x) => x.es.length > 2),
  }
}

/**
 * Merge per-batch materials: de-duplicate, then cap each list while keeping
 * every source image represented (round-robin by image), so a 100-photo paper
 * is not dominated by the first pages.
 */
export function mergeMaterial(parts: Material[], limits = MATERIAL_LIMITS): Material {
  const dedupe = <T,>(items: T[], k: (t: T) => string) => {
    const seen = new Set<string>()
    return items.filter((t) => {
      const kk = k(t)
      if (!kk || seen.has(kk)) return false
      seen.add(kk)
      return true
    })
  }
  const spread = <T extends { src?: number }>(items: T[], cap: number) => {
    if (items.length <= cap) return items
    const bySrc = new Map<number, T[]>()
    for (const t of items) {
      const s = t.src ?? 0
      if (!bySrc.has(s)) bySrc.set(s, [])
      bySrc.get(s)!.push(t)
    }
    const queues = [...bySrc.values()]
    const out: T[] = []
    for (let round = 0; out.length < cap; round++) {
      let added = false
      for (const q of queues) {
        if (round < q.length && out.length < cap) {
          out.push(q[round])
          added = true
        }
      }
      if (!added) break
    }
    return out
  }
  const all = parts.reduce<Material>((m, p) => ({ vocab: [...m.vocab, ...p.vocab], grammar: [...m.grammar, ...p.grammar], sentences: [...m.sentences, ...p.sentences] }), emptyMaterial())
  return {
    vocab: spread(dedupe(all.vocab, (v) => key(v.es)), limits.vocab),
    grammar: spread(dedupe(all.grammar, (g) => key(g.point)), limits.grammar),
    sentences: spread(dedupe(all.sentences, (s) => key(s.es)), limits.sentences),
  }
}

export const materialSize = (m: Material) => ({ vocab: m.vocab.length, grammar: m.grammar.length, sentences: m.sentences.length })

/** Compact text for the question-generation prompt. */
export function materialToText(m: Material): string {
  const tag = (s?: number) => (s ? `〔图${s}〕` : '')
  const lines: string[] = []
  if (m.vocab.length) lines.push('【单词和短语】', ...m.vocab.map((v) => `${v.es} = ${v.zh}${tag(v.src)}`))
  if (m.grammar.length) lines.push('', '【语法点】', ...m.grammar.map((g) => `${g.point}${g.note ? `：${g.note}` : ''}${tag(g.src)}`))
  if (m.sentences.length) lines.push('', '【原文例句】', ...m.sentences.map((s) => `${s.es}${s.zh ? `（${s.zh}）` : ''}${tag(s.src)}`))
  return lines.join('\n')
}

/** Group images into request-sized batches: at most `maxCount` images and `maxBytes` of image data each. */
export function batchImages<T extends { size: number }>(items: T[], maxCount = 8, maxBytes = 12 * 1024 * 1024): T[][] {
  const out: T[][] = []
  let cur: T[] = []
  let bytes = 0
  for (const it of items) {
    if (cur.length && (cur.length >= maxCount || bytes + it.size > maxBytes)) {
      out.push(cur)
      cur = []
      bytes = 0
    }
    cur.push(it)
    bytes += it.size
  }
  if (cur.length) out.push(cur)
  return out
}
