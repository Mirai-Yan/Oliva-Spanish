import { levenshtein, normalizeAnswer, stripAccents } from '../text/normalize'

/** Words of a lyric line as displayed (punctuation kept on the word, punctuation-only bits dropped). */
export function singTokens(line: string): string[] {
  return line.split(/\s+/).filter((w) => /\p{L}/u.test(w))
}

const key = (w: string) => stripAccents(normalizeAnswer(w)).replace(/\s+/g, '')

/**
 * Which displayed words were heard (speech recognition), using the same tokens the UI shows,
 * so the colouring always lines up with the words on screen.
 */
export function singScore(heard: string, line: string): { tokens: string[]; hits: boolean[]; score: number } {
  const tokens = singTokens(line)
  const pool = stripAccents(normalizeAnswer(heard)).split(' ').filter(Boolean)
  const hits = tokens.map((t) => {
    const k = key(t)
    const i = pool.findIndex((x) => x === k || (k.length >= 5 && levenshtein(x, k) <= 1))
    if (i < 0) return false
    pool.splice(i, 1)
    return true
  })
  return { tokens, hits, score: tokens.length ? hits.filter(Boolean).length / tokens.length : 0 }
}

/** YouTube video id from a URL or a bare id. */
export function youtubeId(input: string): string | null {
  const s = input.trim()
  if (/^[\w-]{11}$/.test(s)) return s
  try {
    const u = new URL(s)
    if (u.hostname.endsWith('youtu.be')) return u.pathname.slice(1, 12) || null
    const v = u.searchParams.get('v')
    if (v && /^[\w-]{11}$/.test(v)) return v
    const m = u.pathname.match(/\/(?:embed|shorts|live|v)\/([\w-]{11})/)
    return m ? m[1] : null
  } catch {
    return null
  }
}
