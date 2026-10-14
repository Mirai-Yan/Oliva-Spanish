import { extractJSON } from '../gemini/client'
import { sanitizePaper } from './sanitize'
import { DEFAULT_CONFIG, SECTIONS, type Paper, type PaperConfig } from './types'

const APP = 'oliva-paper'

/** A shareable paper file (questions only, no photos). */
export function paperFileText(p: Paper): string {
  return JSON.stringify({ app: APP, version: 1, paper: { title: p.title, scope: p.scope, config: p.config, questions: p.questions } }, null, 1)
}

export function paperFileName(p: Paper): string {
  const safe = p.title.replace(/[\\/:*?"<>|\s]+/g, '-').slice(0, 40) || 'paper'
  return `oliva-试卷-${safe}.json`
}

/** Merge a possibly partial / foreign config with the defaults so old files keep working. */
function readConfig(raw: unknown): PaperConfig {
  const c = (raw && typeof raw === 'object' ? raw : {}) as Partial<PaperConfig>
  const sections = { ...DEFAULT_CONFIG.sections }
  for (const { id } of SECTIONS) {
    const s = c.sections?.[id]
    if (s && Number.isFinite(s.count) && Number.isFinite(s.points)) sections[id] = { count: Math.max(0, Math.round(s.count)), points: Math.max(0, s.points) }
  }
  return {
    sections,
    level: (c.level as PaperConfig['level']) ?? DEFAULT_CONFIG.level,
    minutes: Number.isFinite(c.minutes) ? Math.max(0, c.minutes!) : 0,
    note: typeof c.note === 'string' ? c.note : '',
  }
}

/**
 * Read a shared paper file (or pasted text). Keeps the sender's option order so
 * everyone takes exactly the same paper, and the same printed answer key.
 */
export function parsePaperFile(text: string): Paper {
  const data = extractJSON<Record<string, unknown>>(text)
  if (data?.app !== APP || !data.paper) throw new Error('这不是 Oliva 的试卷文件')
  const p = data.paper as Record<string, unknown>
  const config = readConfig(p.config)
  const { paper } = sanitizePaper(p, config, { shuffle: false, cap: false })
  // the file's actual question counts win over the stored config
  for (const { id } of SECTIONS) config.sections[id].count = paper.questions[id].length
  if (SECTIONS.every((s) => !paper.questions[s.id].length)) throw new Error('试卷里没有可用的题目')
  return paper
}
