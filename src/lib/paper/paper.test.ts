import { describe, expect, it } from 'vitest'
import type { Outcome } from '../exercises/types'
import { configTotal, matchGroups, paperToExercises, paperTotal } from './exercises'
import { sanitizePaper } from './sanitize'
import { scorePoints, sectionOfKey } from './score'
import { paperFileText, parsePaperFile } from './share'
import { DEFAULT_CONFIG, type PaperConfig } from './types'

/** deterministic rng for shuffles */
function seeded(seed = 7) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

const config: PaperConfig = {
  ...DEFAULT_CONFIG,
  sections: {
    match: { count: 4, points: 2 },
    tf: { count: 2, points: 2 },
    choice: { count: 2, points: 3 },
    cloze: { count: 2, points: 4 },
    listen: { count: 1, points: 2 },
  },
}

const raw = {
  title: 'Unidad 3 · La casa',
  scope: '家居词汇和 estar 的用法',
  match: [
    { es: 'la cocina', zh: '厨房' },
    { es: 'el salón', zh: '客厅' },
    { es: 'la cocina', zh: '厨房（重复）' },
    { es: 'el baño', zh: '浴室' },
    { es: '', zh: '空' },
    { es: 'el dormitorio', zh: '卧室' },
    { es: 'la terraza', zh: '露台' },
  ],
  tf: [
    { sentence: 'La cocina está al lado del salón.', correct: true, focus: 'grammar', explain: '表示位置用 estar。' },
    { sentence: 'El baño es a la derecha.', correct: 'false', focus: 'grammar', explain: '位置要用 estar。', fix: 'El baño está a la derecha.' },
    { sentence: 'Sin respuesta', explain: '缺少 correct' },
  ],
  choice: [
    { question: '¿Dónde ___ las llaves?', questionLang: 'es', options: ['están', 'son', 'hay', 'estás'], answer: 0, explain: '位置用 estar。' },
    { question: '“客厅”用西语怎么说？', options: ['A. el salón', 'B. la cocina', 'C. el baño'], answer: 'A' },
    { question: 'Sin opciones', options: ['solo'], answer: 0 },
  ],
  cloze: [
    { sentence: 'Mi casa ___ muy luminosa.', answer: 'es', hintZh: '我的房子很明亮。' },
    { sentence: 'Hay dos dormitorios en el piso.', answer: 'dormitorios' },
    { sentence: 'Sin hueco aquí.', answer: 'nada' },
  ],
  listen: [{ es: 'La terraza es pequeña.', zh: '露台很小。', options: ['露台很小。', '露台很大。', '厨房很小。'], answer: 0 }],
}

describe('sanitizePaper', () => {
  const { paper, shortfall, dropped } = sanitizePaper(raw, config, { rng: seeded() })

  it('drops invalid / duplicate items and caps counts', () => {
    expect(paper.title).toBe('Unidad 3 · La casa')
    expect(paper.questions.match.map((m) => m.es)).toEqual(['la cocina', 'el salón', 'el baño', 'el dormitorio'])
    expect(paper.questions.tf).toHaveLength(2)
    expect(paper.questions.choice).toHaveLength(2)
    expect(paper.questions.cloze).toHaveLength(2)
    expect(dropped).toBeGreaterThanOrEqual(5)
    expect(shortfall).toEqual({})
  })

  it('parses string booleans and keeps the fix', () => {
    expect(paper.questions.tf[1]).toMatchObject({ correct: false, fix: 'El baño está a la derecha.' })
  })

  it('keeps three options with the answer after shuffling', () => {
    const [c1, c2] = paper.questions.choice
    expect(c1.options).toHaveLength(3)
    expect(c1.options[c1.answer]).toBe('están')
    expect(c1.options).not.toContain('estás')
    expect(c2.options[c2.answer]).toBe('el salón')
    expect(c2.questionLang).toBe('zh')
    const l = paper.questions.listen[0]
    expect(l.options[l.answer]).toBe('露台很小。')
  })

  it('creates the blank when the model forgot it', () => {
    expect(paper.questions.cloze[1].sentence).toBe('Hay dos ___ en el piso.')
    expect(paper.questions.cloze.every((c) => c.sentence.split('___').length === 2)).toBe(true)
  })

  it('reports shortfall', () => {
    const r = sanitizePaper({ tf: [] }, config)
    expect(r.shortfall).toMatchObject({ match: 4, tf: 2, choice: 2, cloze: 2, listen: 1 })
  })
})

describe('paperToExercises + scorePoints', () => {
  const { paper } = sanitizePaper(raw, config, { rng: seeded(3) })
  const { exercises, points } = paperToExercises(paper, 42)

  it('builds keyed exercises with section points', () => {
    expect(new Set(exercises.map((e) => e.key)).size).toBe(exercises.length)
    expect(exercises.every((e) => sectionOfKey(e.key))).toBe(true)
    expect(Object.values(points).reduce((a, b) => a + b, 0)).toBe(paperTotal(paper))
    expect(paperTotal(paper)).toBe(4 * 2 + 2 * 2 + 2 * 3 + 2 * 4 + 1 * 2)
    const tf = exercises.find((e) => e.key === 'paper:42:tf:1')
    expect(tf).toMatchObject({ kind: 'choice', answer: 1, options: ['正确', '错误'] })
    expect(exercises[0]).toMatchObject({ kind: 'match', graded: true })
    expect(exercises[0].title.startsWith('一、单词匹配')).toBe(true)
    expect(exercises.every((e) => e.ref.source?.paperId === 42)).toBe(true)
  })

  it('weights points, gives partial credit, and counts missing answers as 0', () => {
    const ok: Outcome = { correct: true, user: '', expected: '' }
    const items = exercises
      .filter((e) => !e.key.includes(':listen:'))
      .map((ex) => ({ ex, outcome: ex.kind === 'match' ? { correct: false, user: '', expected: '', score: 0.5 } : ok }))
    const r = scorePoints(items, points)
    expect(r.total).toBe(28)
    expect(r.earned).toBe(28 - 4 - 2) // half the matching, no listening
    expect(r.sections.match).toMatchObject({ c: 4, t: 8 })
    expect(r.sections.listen).toMatchObject({ c: 0, t: 2 })
  })

  it('splits matching into groups of 3–5', () => {
    expect(matchGroups(4)).toEqual([4])
    expect(matchGroups(7)).toEqual([4, 3])
    expect(matchGroups(10)).toEqual([5, 5])
    expect(matchGroups(11)).toEqual([4, 4, 3])
    expect(matchGroups(0)).toEqual([])
  })

  it('totals the configuration', () => {
    expect(configTotal(DEFAULT_CONFIG)).toBe(100)
  })
})

describe('share files', () => {
  it('round-trips a paper without reshuffling', () => {
    const { paper } = sanitizePaper(raw, config, { rng: seeded(11) })
    const back = parsePaperFile(paperFileText(paper))
    expect(back.questions).toEqual(paper.questions)
    expect(back.title).toBe(paper.title)
  })
  it('rejects other files', () => {
    expect(() => parsePaperFile('{"app":"oliva","version":1}')).toThrow(/不是 Oliva 的试卷/)
  })
})
