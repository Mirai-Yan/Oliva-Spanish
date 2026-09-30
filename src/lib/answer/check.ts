import { levenshtein, normalizeAnswer, stripAccents } from '../text/normalize'

export interface CheckResult {
  ok: boolean
  /** accepted but with a small problem worth pointing out */
  warn?: 'accent' | 'typo'
  /** the closest accepted answer (for display) */
  best: string
}

export interface CheckOptions {
  /** single-word grammar answers (conjugation, cloze): no typo tolerance, accents required */
  strict?: boolean
  /** user preference: treat missing accents as wrong */
  strictAccents?: boolean
}

function commonSuffix(a: string, b: string): number {
  let n = 0
  while (n < a.length && n < b.length && a[a.length - 1 - n] === b[b.length - 1 - n]) n++
  return n
}

/** One-letter slip in a longer word, but never in the ending (which carries person/gender/number). */
function wordTypoOk(a: string, b: string): boolean {
  if (a === b) return true
  if (Math.min(a.length, b.length) < 5) return false
  if (levenshtein(a, b) !== 1) return false
  return commonSuffix(a, b) >= 2
}

function typoMatch(user: string, ans: string): boolean {
  const u = user.split(' ')
  const a = ans.split(' ')
  if (u.length !== a.length) return false
  let typos = 0
  for (let i = 0; i < u.length; i++) {
    if (u[i] === a[i]) continue
    if (!wordTypoOk(u[i], a[i])) return false
    typos++
  }
  return typos <= Math.max(1, Math.floor(a.length / 6))
}

export function checkAnswer(userRaw: string, answers: string[], opts: CheckOptions = {}): CheckResult {
  const user = normalizeAnswer(userRaw)
  const norm = answers.map((a) => normalizeAnswer(a))
  const best = answers[0] ?? ''
  if (!user) return { ok: false, best }

  const exact = norm.findIndex((a) => a === user)
  if (exact >= 0) return { ok: true, best: answers[exact] }

  const userPlain = stripAccents(user)
  const accentIdx = norm.findIndex((a) => stripAccents(a) === userPlain)
  if (accentIdx >= 0) {
    if (opts.strict || opts.strictAccents) return { ok: false, warn: 'accent', best: answers[accentIdx] }
    return { ok: true, warn: 'accent', best: answers[accentIdx] }
  }

  if (!opts.strict) {
    const typoIdx = norm.findIndex((a) => typoMatch(userPlain, stripAccents(a)))
    if (typoIdx >= 0) return { ok: true, warn: 'typo', best: answers[typoIdx] }
  }

  // pick the closest answer to show
  let bestIdx = 0
  let bestD = Infinity
  norm.forEach((a, i) => {
    const d = levenshtein(stripAccents(a), userPlain)
    if (d < bestD) {
      bestD = d
      bestIdx = i
    }
  })
  return { ok: false, best: answers[bestIdx] ?? best }
}

/** Word-level diff for speech recognition feedback: which target words were heard. */
export function wordMatchScore(heard: string, target: string): { score: number; hits: boolean[] } {
  const t = stripAccents(normalizeAnswer(target)).split(' ').filter(Boolean)
  const h = stripAccents(normalizeAnswer(heard)).split(' ').filter(Boolean)
  const pool = h.slice()
  const hits = t.map((w) => {
    const i = pool.findIndex((x) => x === w || (w.length >= 5 && levenshtein(x, w) <= 1))
    if (i >= 0) {
      pool.splice(i, 1)
      return true
    }
    return false
  })
  const score = t.length ? hits.filter(Boolean).length / t.length : 0
  return { score, hits }
}
