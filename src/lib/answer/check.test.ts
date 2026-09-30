import { describe, expect, it } from 'vitest'
import { checkAnswer, wordMatchScore } from './check'

describe('checkAnswer', () => {
  it('exact and punctuation-insensitive', () => {
    expect(checkAnswer('¿Cómo te llamas?', ['¿Cómo te llamas?']).ok).toBe(true)
    expect(checkAnswer('como te llamas', ['¿Cómo te llamas?'])).toMatchObject({ ok: true, warn: 'accent' })
    expect(checkAnswer('  Hola,   María ', ['Hola, María.']).ok).toBe(true)
  })
  it('accents strict', () => {
    expect(checkAnswer('esta', ['está'], { strict: true }).ok).toBe(false)
    expect(checkAnswer('esta', ['está'], { strictAccents: true }).ok).toBe(false)
  })
  it('typos', () => {
    expect(checkAnswer('Soy estudinte', ['Soy estudiante'])).toMatchObject({ ok: true, warn: 'typo' })
    expect(checkAnswer('Yo hablas chino', ['Yo hablo chino']).ok).toBe(false)
    expect(checkAnswer('hablas', ['hablo'], { strict: true }).ok).toBe(false)
    expect(checkAnswer('Ella es alto', ['Ella es alta']).ok).toBe(false)
  })
  it('alternatives', () => {
    expect(checkAnswer('Me llamo Ana', ['Mi nombre es Ana', 'Me llamo Ana']).ok).toBe(true)
  })
})

describe('wordMatchScore', () => {
  it('scores heard words', () => {
    const r = wordMatchScore('hola me llamo ana', '¡Hola! Me llamo Ana.')
    expect(r.score).toBe(1)
    expect(wordMatchScore('hola', 'Hola, me llamo Ana').score).toBe(0.25)
  })
})
