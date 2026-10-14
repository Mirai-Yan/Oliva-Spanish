import { describe, expect, it } from 'vitest'
import { ARTISTS, SONGS, artistById } from './catalog'
import { COUNTRY, STYLES } from './types'

describe('song catalog', () => {
  it('has unique ids and valid references', () => {
    expect(new Set(SONGS.map((s) => s.id)).size).toBe(SONGS.length)
    expect(new Set(ARTISTS.map((a) => a.id)).size).toBe(ARTISTS.length)
    expect(new Set(SONGS.map((s) => s.youtubeId)).size).toBe(SONGS.length)
    for (const s of SONGS) {
      expect(artistById.has(s.artistId), s.id).toBe(true)
      expect(s.youtubeId, s.id).toMatch(/^[\w-]{11}$/)
      expect(['A2', 'B1', 'B2', 'C1']).toContain(s.level)
      expect(STYLES.map((x) => x.id)).toContain(s.style)
      expect(s.durationSec).toBeGreaterThan(60)
      expect(s.note.length).toBeGreaterThan(10)
    }
    for (const a of ARTISTS) {
      expect(COUNTRY[a.country], a.id).toBeTruthy()
      expect(SONGS.some((s) => s.artistId === a.id), `${a.id} has songs`).toBe(true)
    }
  })

  it('never ships lyrics', () => {
    for (const s of SONGS) {
      const keys = Object.keys(s)
      expect(keys.some((k) => /lyric|lrc$|letra/i.test(k)), s.id).toBe(false)
      // notes are short original comments, not quoted verses
      expect(s.note.length).toBeLessThan(200)
      expect(/[«“"][^»”"]{25,}[»”"]/.test(s.note), s.id).toBe(false)
    }
  })

  it('covers every style and level', () => {
    for (const st of STYLES) expect(SONGS.filter((s) => s.style === st.id).length).toBeGreaterThanOrEqual(8)
    for (const lv of ['A2', 'B1', 'B2', 'C1']) expect(SONGS.some((s) => s.level === lv)).toBe(true)
  })
})
