import { describe, expect, it } from 'vitest'
import { isLrc, lineAt, parseLrc, plainLines, toLrc } from './lrc'
import { pickBest, type LrclibRecord } from './lrclib'
import { singScore, youtubeId } from './sing'
import { expandTranslation, parseNumberedTranslation, uniqueLines } from './translate'

// invented lines only — never real song lyrics
const LRC = `[ti:Canción de prueba]
[ar:Nadie]
[offset:+500]
[00:05.00]Hola, mañana sale el sol
[00:09.50][00:30.25]Camino por la calle mayor
[00:14.2]
[00:20.123]<00:20.12>Mi gato <00:21.00>duerme en el sofá`

describe('parseLrc', () => {
  const lines = parseLrc(LRC)
  it('reads stamps, repeats, gaps and the offset', () => {
    expect(lines.map((l) => l.t)).toEqual([4.5, 9, 13.7, 19.623, 29.75])
    expect(lines[1].text).toBe('Camino por la calle mayor')
    expect(lines[4].text).toBe('Camino por la calle mayor')
    expect(lines[2].text).toBe('')
    expect(lines[3].text).toBe('Mi gato duerme en el sofá')
  })
  it('finds the current line', () => {
    expect(lineAt(lines, 0)).toBe(-1)
    expect(lineAt(lines, 4.5)).toBe(0)
    expect(lineAt(lines, 15)).toBe(2)
    expect(lineAt(lines, 999)).toBe(4)
  })
  it('round-trips through toLrc', () => {
    const again = parseLrc(toLrc(lines))
    expect(again.map((l) => l.text)).toEqual(lines.map((l) => l.text))
    expect(again[3].t).toBeCloseTo(19.62, 2)
    expect(isLrc(toLrc(lines))).toBe(true)
    expect(isLrc('Hola\nAdiós')).toBe(false)
    expect(plainLines('  Hola  amigo \n\n Adiós ')).toEqual(['Hola amigo', 'Adiós'])
  })
})

describe('pickBest', () => {
  const rec = (id: number, duration: number, synced = true): LrclibRecord => ({ id, trackName: 'x', artistName: 'y', duration, syncedLyrics: synced ? '[00:01.00]a' : null })
  it('prefers synced versions with the closest length', () => {
    expect(pickBest([rec(1, 200), rec(2, 241), rec(3, 239, false)], 240)?.id).toBe(2)
    expect(pickBest([rec(1, 200)], 240)).toBeNull()
    expect(pickBest([rec(1, 200)])?.id).toBe(1)
  })
})

describe('singScore', () => {
  it('colours the displayed words', () => {
    const r = singScore('mi gato duerme en el sofa', 'Mi gato duerme — en el sofá.')
    expect(r.tokens).toEqual(['Mi', 'gato', 'duerme', 'en', 'el', 'sofá.'])
    expect(r.hits.every(Boolean)).toBe(true)
    const p = singScore('mi perro duerme', 'Mi gato duerme')
    expect(p.hits).toEqual([true, false, true])
    expect(p.score).toBeCloseTo(2 / 3)
  })
  it('reads YouTube ids', () => {
    expect(youtubeId('https://www.youtube.com/watch?v=abcdefghijk&t=3')).toBe('abcdefghijk')
    expect(youtubeId('https://youtu.be/abcdefghijk?si=x')).toBe('abcdefghijk')
    expect(youtubeId('https://music.youtube.com/watch?v=abcdefghijk')).toBe('abcdefghijk')
    expect(youtubeId('abcdefghijk')).toBe('abcdefghijk')
    expect(youtubeId('no es un enlace')).toBeNull()
  })
})


describe('lyric translation helpers', () => {
  it('translates repeated lines once', () => {
    const { unique, index } = uniqueLines(['Hola', '', 'Adiós', 'Hola'])
    expect(unique).toEqual(['Hola', 'Adiós'])
    expect(expandTranslation(index, ['你好', '再见'])).toEqual(['你好', '', '再见', '你好'])
  })
  it('reads a pasted numbered list', () => {
    const r = parseNumberedTranslation('好的：\n1. 你好\n2、 再见\n**3.** 不算\n3） 早上好\n主题：一首关于问候的歌', 3)
    expect(r.lines).toEqual(['你好', '再见', '早上好'])
    expect(r.summary).toBe('一首关于问候的歌')
    expect(r.found).toBe(3)
  })
})
