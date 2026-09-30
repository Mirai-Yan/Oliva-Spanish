import { describe, expect, it } from 'vitest'
import { build, type LevelPack } from './index'
import a0 from './a0'
import a1 from './a1'
import { lessonSession, unitTest, buildExam } from '../lib/exercises/generate'
import { conjugate } from '../lib/conjugate'
import { isTeach } from '../lib/exercises/types'
import { normalizeAnswer, wordTokens } from '../lib/text/normalize'

const packs: LevelPack[] = [a0, a1]
const db = build(packs)

function dupes(ids: string[]) {
  const seen = new Set<string>()
  return ids.filter((id) => (seen.has(id) ? true : (seen.add(id), false)))
}

describe('content integrity', () => {
  it('ids are unique', () => {
    expect(dupes(db.words.map((w) => w.id))).toEqual([])
    expect(dupes(db.grammar.map((g) => g.id))).toEqual([])
    expect(dupes(db.readings.map((r) => r.id))).toEqual([])
    expect(dupes(db.lessons.map((l) => l.id))).toEqual([])
    expect(dupes(db.units.map((u) => u.id))).toEqual([])
    expect(dupes(db.sentences.map((s) => s.id))).toEqual([])
    expect(dupes(db.units.flatMap((u) => u.cloze.map((c) => c.id)))).toEqual([])
    expect(dupes(db.units.flatMap((u) => (u.dialogues ?? []).map((d) => d.id)))).toEqual([])
  })

  for (const u of db.units) {
    describe(u.id, () => {
      const gids = new Set(u.grammar.map((g) => g.id))
      it('words', () => {
        for (const w of u.words) {
          expect(w.es.trim(), w.id).not.toBe('')
          expect(w.zh.trim(), w.id).not.toBe('')
          if (w.pos === 'n') expect(w.g, `${w.id} needs gender`).toBeTruthy()
          if (w.ex) expect(w.ex.length, w.id).toBe(2)
        }
      })
      it('sentences reference real grammar', () => {
        for (const s of u.sentences) {
          expect(s.es.trim()).not.toBe('')
          expect(s.zh.trim()).not.toBe('')
          for (const g of s.g ?? []) expect(gids.has(g), `${s.id} → ${g}`).toBe(true)
        }
      })
      it('cloze items are well formed', () => {
        for (const c of u.cloze) {
          expect(c.text.split('___').length - 1, c.id).toBe(1)
          expect(c.answers.length, c.id).toBeGreaterThan(0)
          if (c.options) {
            expect(c.options, c.id).toContain(c.answers[0])
            expect(dupes(c.options), c.id).toEqual([])
          }
          for (const g of c.g ?? []) expect(gids.has(g), `${c.id} → ${g}`).toBe(true)
        }
      })
      it('conjugation drills work', () => {
        for (const d of u.conj ?? []) {
          if (d.g) expect(gids.has(d.g)).toBe(true)
          for (const v of d.verbs) for (const t of d.tenses) expect(conjugate(v, t).filter(Boolean).length, `${v} ${t}`).toBeGreaterThan(0)
        }
      })
      it('readings', () => {
        for (const r of u.readings) {
          expect(r.paras.flat().length).toBeGreaterThan(2)
          for (const q of r.questions) if (q.type === 'mc') expect(q.answer).toBeLessThan(q.options.length)
        }
      })
      it('pronunciation items', () => {
        for (const p of u.pron ?? []) {
          expect(gids.has(p.g), p.g).toBe(true)
          if (p.type === 'pair') expect(p.a).not.toBe(p.b)
        }
      })
      it('every lesson generates valid exercises', () => {
        for (const l of db.lessonsByUnit.get(u.id) ?? []) {
          for (const review of [false, true]) {
            const ex = lessonSession(db, l.id, review)
            const scored = ex.filter((e) => !isTeach(e))
            expect(scored.length, `${l.id} scored`).toBeGreaterThanOrEqual(5)
            for (const e of scored) {
              if (e.kind === 'choice') {
                expect(e.answer, e.key).toBeGreaterThanOrEqual(0)
                expect(e.answer, e.key).toBeLessThan(e.options.length)
                expect(new Set(e.options).size, `${e.key} options unique: ${e.options.join('|')}`).toBe(e.options.length)
                expect(e.options.length, e.key).toBeGreaterThanOrEqual(2)
              }
              if (e.kind === 'build') {
                const bank = e.tokens.map(normalizeAnswer)
                for (const t of wordTokens(e.answers[0]).map(normalizeAnswer)) expect(bank, `${e.key} bank has ${t}`).toContain(t)
              }
              if (e.kind === 'type') expect(e.answers[0]?.trim(), e.key).toBeTruthy()
              if (e.kind === 'match') expect(e.pairs.length, e.key).toBeGreaterThanOrEqual(3)
            }
          }
        }
      })
      it('unit test has enough questions', () => {
        expect(unitTest(db, u).length).toBeGreaterThanOrEqual(10)
      })
    })
  }

  it('custom exam mixes units', () => {
    const ex = buildExam(db, { unitIds: db.units.filter((u) => u.level === 'A1').map((u) => u.id), skills: ['vocab', 'grammar', 'listen', 'read'], count: 30 })
    expect(ex.length).toBe(30)
    expect(new Set(ex.map((e) => e.key)).size).toBe(30)
  })

  it('lookup finds inflected forms', () => {
    expect(db.lookup('somos')?.word.es).toBe('ser')
    expect(db.lookup('españolas')?.word.es).toBe('español')
    expect(db.lookup('Hola')?.word.es).toBe('hola')
    expect(db.lookup('profesora')?.word.es).toBe('profesor')
  })
})
