/** Lowercase (case never counts), unify accent encoding, drop punctuation and collapse whitespace so answers compare fairly. */
export function normalizeAnswer(s: string): string {
  return s
    .normalize('NFC')
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[¿?¡!.,;:"“”«»()[\]…—–\-/]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Remove diacritics (á→a, ñ→n, ü→u). */
export function stripAccents(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC')
}

/** Key used for accent-insensitive search/indexing. */
export function searchKey(s: string): string {
  return stripAccents(normalizeAnswer(s))
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
    }
    prev = cur
  }
  return prev[b.length]
}

/** Split a Spanish sentence into display tokens (words keep inner apostrophes, punctuation dropped). */
export function wordTokens(s: string): string[] {
  return s
    .replace(/[¿?¡!.,;:"“”«»()…—–]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n)
}

export function uniqBy<T>(arr: T[], key: (t: T) => string): T[] {
  const seen = new Set<string>()
  return arr.filter((t) => {
    const k = key(t)
    if (seen.has(k)) return false
    seen.add(k)
    return true
  })
}

/** Split Spanish text into sentences, keeping the closing punctuation. */
export function splitSentences(text: string): string[] {
  const out: string[] = []
  const re = /[^.!?…]+[.!?…]+["»”)]*\s*|[^.!?…]+$/g
  for (const m of text.matchAll(re)) {
    const t = m[0].trim()
    if (t) out.push(t)
  }
  return out
}
