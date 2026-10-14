import type { Exercise, Outcome } from '../exercises/types'
import { SECTION_LABEL, type SectionId } from './types'

export interface PointsBreakdown {
  earned: number
  total: number
  /** per section: c = points earned, t = section points */
  sections: Record<string, { label: string; c: number; t: number }>
}

/** paper exercise keys look like paper:<id>:<section>:<n> */
export function sectionOfKey(key: string): SectionId | null {
  const s = key.split(':')[2]
  return s && s in SECTION_LABEL ? (s as SectionId) : null
}

const round1 = (n: number) => Math.round(n * 10) / 10

/**
 * Weighted score. The total always comes from the whole paper (`points`),
 * so skipped or unanswered questions simply earn nothing.
 */
export function scorePoints(items: { ex: Exercise; outcome: Outcome }[], points: Record<string, number>): PointsBreakdown {
  const sections: PointsBreakdown['sections'] = {}
  let total = 0
  for (const [key, p] of Object.entries(points)) {
    total += p
    const sec = sectionOfKey(key) ?? 'other'
    const row = (sections[sec] ??= { label: sec === 'other' ? '其他' : SECTION_LABEL[sec as SectionId], c: 0, t: 0 })
    row.t += p
  }
  let earned = 0
  for (const { ex, outcome } of items) {
    const p = points[ex.key]
    if (!p || outcome.skipped) continue
    const frac = outcome.score ?? (outcome.correct ? 1 : 0)
    const got = p * Math.min(1, Math.max(0, frac))
    earned += got
    const sec = sectionOfKey(ex.key) ?? 'other'
    if (sections[sec]) sections[sec].c += got
  }
  for (const s of Object.values(sections)) {
    s.c = round1(s.c)
    s.t = round1(s.t)
  }
  return { earned: round1(earned), total: round1(total), sections }
}
