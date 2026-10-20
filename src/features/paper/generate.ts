import { generateJSON, type GPart } from '../../lib/gemini/client'
import { MATERIAL_SCHEMA, materialPrompt, PAPER_SCHEMA, paperPrompt } from '../../lib/gemini/prompts'
import { materialToText, type Material } from '../../lib/paper/material'
import type { PipelineDeps } from '../../lib/paper/pipeline'
import { mergeQuestions, sanitizePaper, type SanitizeResult } from '../../lib/paper/sanitize'
import { SECTIONS, type PaperConfig, type PaperQuestions, type SectionId } from '../../lib/paper/types'
import { blobToBase64 } from './image'

export interface PaperImage {
  blob: Blob
  label: string
}

const counts = (config: PaperConfig) => Object.fromEntries(SECTIONS.map((s) => [s.id, config.sections[s.id].count])) as Record<SectionId, number>

async function imageParts(images: PaperImage[]): Promise<GPart[]> {
  const parts: GPart[] = []
  for (const [i, im] of images.entries()) {
    parts.push({ inline: { mimeType: im.blob.type || 'image/jpeg', data: await blobToBase64(im.blob) } })
    parts.push({ text: `↑ 图 ${i + 1}：${im.label}` })
  }
  return parts
}

function sentencesOf(q: PaperQuestions): string[] {
  return [...q.match.map((m) => m.es), ...q.tf.map((t) => t.sentence), ...q.choice.map((c) => c.question), ...q.cloze.map((c) => c.sentence), ...q.listen.map((l) => l.es)]
}

async function ask(images: PaperImage[], config: PaperConfig, want: Partial<Record<SectionId, number>>, avoid: string[], signal?: AbortSignal) {
  const parts = await imageParts(images)
  const text = paperPrompt({ level: config.level, note: config.note, counts: want, images: images.length, avoid })
  return generateJSON<unknown>({ messages: [{ role: 'user', text, parts }], schema: PAPER_SCHEMA, temperature: 0.6, timeoutMs: 150_000, signal })
}

/**
 * Generate a paper from photo crops. If the model returns too few questions,
 * ask once more for just the missing ones.
 */
export async function generatePaper(images: PaperImage[], config: PaperConfig, signal?: AbortSignal, onStage?: (s: string) => void): Promise<SanitizeResult> {
  onStage?.('AI 正在读图并出题…')
  const first = sanitizePaper(await ask(images, config, counts(config), [], signal), config)
  if (!Object.keys(first.shortfall).length) return first
  onStage?.('题目还不够，正在补题…')
  try {
    const extra = sanitizePaper(await ask(images, config, first.shortfall, sentencesOf(first.paper.questions), signal), config, { cap: false })
    const questions = mergeQuestions(first.paper.questions, extra.paper.questions, config)
    const shortfall: SanitizeResult['shortfall'] = {}
    for (const { id } of SECTIONS) {
      const miss = config.sections[id].count - questions[id].length
      if (miss > 0) shortfall[id] = miss
    }
    return { paper: { ...first.paper, questions }, shortfall, dropped: first.dropped + extra.dropped }
  } catch {
    return first
  }
}

/** Up to this many regions go to Gemini in one request; more are read in batches first (see pipeline). */
export const DIRECT_MAX = 8

/** Real Gemini calls for the large-paper pipeline. `materialText` is read lazily (it exists only after stage A). */
export function geminiDeps(config: PaperConfig, materialText: () => string): PipelineDeps {
  return {
    extract: async (images, signal) =>
      generateJSON<unknown>({
        messages: [{ role: 'user', text: materialPrompt({ images: images.length, level: config.level, note: config.note }), parts: await imageParts(images) }],
        schema: MATERIAL_SCHEMA,
        temperature: 0.2,
        timeoutMs: 150_000,
        signal,
      }),
    generate: (section, count, avoid, signal) =>
      generateJSON<unknown>({
        messages: [{ role: 'user', text: paperPrompt({ level: config.level, note: config.note, counts: { [section]: count }, images: 0, avoid, materialText: materialText() }) }],
        schema: PAPER_SCHEMA,
        temperature: 0.6,
        timeoutMs: 150_000,
        signal,
      }),
  }
}

/**
 * Regenerate one section of an existing paper (keeps the other sections):
 * from the stored text material for large papers, otherwise from the images.
 */
export async function regenerateSection(
  src: { images: PaperImage[]; material?: Material },
  config: PaperConfig,
  section: SectionId,
  current: PaperQuestions,
  signal?: AbortSignal,
): Promise<PaperQuestions> {
  const want = { [section]: config.sections[section].count } as Partial<Record<SectionId, number>>
  const avoid = sentencesOf({ ...current, [section]: [] } as PaperQuestions)
  const raw = src.material
    ? await geminiDeps(config, () => materialToText(src.material!)).generate(section, config.sections[section].count, avoid, signal)
    : await ask(src.images, config, want, avoid, signal)
  const fresh = sanitizePaper(raw, config)
  return { ...current, [section]: fresh.paper.questions[section] }
}

/** Prompt for the Gemini web app (no API key): the learner uploads the stitched image there. */
export function handoffPrompt(config: PaperConfig, images: number): string {
  return paperPrompt({ level: config.level, note: config.note, counts: counts(config), images, handoff: true })
}
