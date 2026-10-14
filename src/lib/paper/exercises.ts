import type { Exercise, ExRef } from '../exercises/types'
import { SECTIONS, type Paper, type PaperConfig, type SectionId } from './types'

const CJK = /[㐀-鿿]/
export const CN_NUM = ['一', '二', '三', '四', '五', '六']

/** Sections that actually have questions, in paper order, with their Chinese numeral. */
export function paperSections(p: Paper): { id: SectionId; label: string; num: string; n: number; per: number; total: number }[] {
  return SECTIONS.filter((s) => p.questions[s.id].length > 0).map((s, i) => {
    const n = p.questions[s.id].length
    const per = p.config.sections[s.id].points
    return { id: s.id, label: s.label, num: CN_NUM[i], n, per, total: n * per }
  })
}

export function paperTotal(p: Paper): number {
  return paperSections(p).reduce((a, s) => a + s.total, 0)
}

export function configTotal(c: PaperConfig): number {
  return SECTIONS.reduce((a, s) => a + c.sections[s.id].count * c.sections[s.id].points, 0)
}

/** Split n matching pairs into groups of 3–5 (fewer only when n < 3). */
export function matchGroups(n: number): number[] {
  if (n <= 5) return n ? [n] : []
  const g = Math.ceil(n / 5)
  const base = Math.floor(n / g)
  return Array.from({ length: g }, (_, i) => base + (i < n % g ? 1 : 0))
}

/**
 * Turn a paper into runnable exercises plus a points table.
 * Keys are paper:<id>:<section>:<n> so results can be grouped by section.
 */
export function paperToExercises(p: Paper, paperId: number): { exercises: Exercise[]; points: Record<string, number> } {
  const exercises: Exercise[] = []
  const points: Record<string, number> = {}
  const ref: ExRef = { source: { paperId, title: p.title } }
  const key = (sec: SectionId, i: number) => `paper:${paperId}:${sec}:${i}`

  for (const s of paperSections(p)) {
    const head = `${s.num}、${s.label}`
    if (s.id === 'match') {
      let start = 0
      matchGroups(s.n).forEach((size, gi, all) => {
        const pairs = p.questions.match.slice(start, start + size).map((m) => [m.es, m.zh] as [string, string])
        start += size
        const k = key('match', gi)
        points[k] = size * s.per
        exercises.push({ kind: 'match', key: k, skill: 'vocab', ref, title: all.length > 1 ? `${head}（第 ${gi + 1} 组）` : head, pairs, graded: true })
      })
      continue
    }
    p.questions[s.id].forEach((_, i) => {
      const k = key(s.id, i)
      points[k] = s.per
      const n = `${head} ${i + 1}.`
      switch (s.id) {
        case 'tf': {
          const t = p.questions.tf[i]
          const explain = [t.explain, t.fix ? `正确说法：${t.fix}` : ''].filter(Boolean).join(' ')
          exercises.push({
            kind: 'choice',
            key: k,
            skill: t.focus === 'grammar' ? 'grammar' : 'vocab',
            ref,
            title: `${n} 这句话对吗？`,
            prompt: t.sentence,
            promptLang: 'es',
            options: ['正确', '错误'],
            optionLang: 'zh',
            answer: t.correct ? 0 : 1,
            explain: explain || undefined,
          })
          break
        }
        case 'choice': {
          const c = p.questions.choice[i]
          exercises.push({
            kind: 'choice',
            key: k,
            skill: 'grammar',
            ref,
            title: n,
            prompt: c.question,
            promptLang: c.questionLang,
            options: c.options,
            optionLang: c.options.some((o) => CJK.test(o)) ? 'zh' : 'es',
            answer: c.answer,
            explain: c.explain,
            letters: true,
          })
          break
        }
        case 'cloze': {
          const c = p.questions.cloze[i]
          exercises.push({
            kind: 'type',
            key: k,
            skill: 'grammar',
            ref,
            title: `${n} 填空`,
            cloze: c.sentence,
            sub: c.hintZh,
            answers: [c.answer, ...(c.alts ?? [])],
            strict: true,
            placeholder: '填入…',
            explain: c.explain,
          })
          break
        }
        case 'listen': {
          const l = p.questions.listen[i]
          exercises.push({
            kind: 'choice',
            key: k,
            skill: 'listen',
            ref,
            title: `${n} 听录音，选出意思`,
            audio: l.es,
            audioOnly: true,
            options: l.options,
            optionLang: 'zh',
            answer: l.answer,
            explain: `原句：${l.es}${l.zh ? `（${l.zh}）` : ''}`,
            letters: true,
          })
          break
        }
      }
    })
  }
  return { exercises, points }
}
