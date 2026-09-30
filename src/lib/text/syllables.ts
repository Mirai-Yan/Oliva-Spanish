/**
 * Spanish orthographic syllabification and stress.
 * Follows the RAE rules: ch/ll/rr are single consonants, qu/gu before e/i keep a silent u,
 * inseparable onset clusters (pl, br, tr…), strong/weak vowels for diphthongs and hiatus.
 */

const ACCENTED = 'áéíóú'
const STRONG = 'aeoáéó'
const PLAIN_OF: Record<string, string> = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u' }
const ACCENT_OF: Record<string, string> = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' }
const INSEPARABLE = new Set(['pl', 'pr', 'bl', 'br', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'tr', 'kl', 'kr'])

type Unit = { t: string; v: boolean }

const isVowelChar = (c: string) => 'aeiouáéíóúü'.includes(c)

function units(word: string): Unit[] {
  const w = word.toLowerCase()
  const out: Unit[] = []
  let i = 0
  while (i < w.length) {
    const c = w[i]
    const two = w.slice(i, i + 2)
    const next2 = w[i + 2] ?? ''
    if (two === 'ch' || two === 'll' || two === 'rr') {
      out.push({ t: two, v: false })
      i += 2
      continue
    }
    if ((two === 'qu' || two === 'gu') && 'eiéí'.includes(next2)) {
      out.push({ t: two, v: false })
      i += 2
      continue
    }
    if (c === 'y') {
      const nextChar = w[i + 1]
      const prevIsVowel = out.length > 0 && out[out.length - 1].v
      // y acts as a vowel at word end (hoy, muy), alone, or before a consonant
      const asVowel = nextChar === undefined ? prevIsVowel || w.length === 1 : !isVowelChar(nextChar) && prevIsVowel
      out.push({ t: c, v: asVowel || w.length === 1 })
      i += 1
      continue
    }
    out.push({ t: c, v: isVowelChar(c) })
    i += 1
  }
  return out
}

const isStrong = (t: string) => STRONG.includes(t)
const isAccentedWeak = (t: string) => t === 'í' || t === 'ú'

/** Should two adjacent vowels be split into separate syllables (hiatus)? */
function hiatus(a: string, b: string): boolean {
  const va = a === 'y' ? 'i' : a
  const vb = b === 'y' ? 'i' : b
  if (isStrong(va) && isStrong(vb)) return true
  if (isAccentedWeak(va) || isAccentedWeak(vb)) return true
  if (va === vb) return true // e.g. "chiita"
  return false
}

export function syllabify(word: string): string[] {
  if (!word) return []
  const us = units(word)
  // nuclei: indices of vowel runs, split at hiatus
  type Nucleus = { start: number; end: number } // inclusive unit indices
  const nuclei: Nucleus[] = []
  let i = 0
  while (i < us.length) {
    if (!us[i].v) {
      i++
      continue
    }
    let j = i
    while (j + 1 < us.length && us[j + 1].v && !hiatus(us[j].t, us[j + 1].t)) j++
    nuclei.push({ start: i, end: j })
    i = j + 1
  }
  if (nuclei.length === 0) return [word]

  // decide boundaries between nuclei
  const cuts: number[] = [] // unit index where a new syllable starts
  for (let n = 0; n < nuclei.length - 1; n++) {
    const from = nuclei[n].end + 1
    const to = nuclei[n + 1].start // exclusive
    const cons = us.slice(from, to).map((u) => u.t)
    const k = cons.length
    let cut: number
    if (k === 0) cut = from
    else if (k === 1) cut = from
    else if (k === 2) cut = INSEPARABLE.has(cons[0] + cons[1]) ? from : from + 1
    else if (k === 3) cut = INSEPARABLE.has(cons[1] + cons[2]) ? from + 1 : from + 2
    else cut = from + 2
    cuts.push(cut)
  }

  // map unit cuts back to character positions of the original word (preserve case)
  const out: string[] = []
  let charPos = 0
  const unitStartChar: number[] = []
  for (const u of us) {
    unitStartChar.push(charPos)
    charPos += u.t.length
  }
  let prev = 0
  for (const c of cuts) {
    const pos = unitStartChar[c]
    out.push(word.slice(prev, pos))
    prev = pos
  }
  out.push(word.slice(prev))
  return out.filter(Boolean)
}

const hasWrittenAccent = (s: string) => [...s.toLowerCase()].some((c) => ACCENTED.includes(c))

/** Index of the stressed syllable. */
export function stressIndex(word: string, syls = syllabify(word)): number {
  const accented = syls.findIndex(hasWrittenAccent)
  if (accented >= 0) return accented
  if (syls.length === 1) return 0
  const last = word.toLowerCase().slice(-1)
  if ('aeiouns'.includes(last)) return syls.length - 2
  return syls.length - 1
}

export function removeAccents(word: string): string {
  return [...word].map((c) => PLAIN_OF[c] ?? c).join('')
}

/** Put a written accent on the nucleus of the given syllable. */
function accentSyllable(syl: string): string {
  const chars = [...syl]
  let idx = chars.findIndex((c) => STRONG.includes(c))
  if (idx < 0) {
    // only weak vowels: accent the last one (cuídate, destruí)
    for (let k = chars.length - 1; k >= 0; k--) {
      if ('iu'.includes(chars[k])) {
        idx = k
        break
      }
    }
  }
  if (idx < 0) return syl
  chars[idx] = ACCENT_OF[chars[idx]] ?? chars[idx]
  return chars.join('')
}

/**
 * Given a word without written accent and the syllable (counted from the end, 0 = last)
 * that must carry the stress, add a written accent only when the default rules would
 * put the stress elsewhere.
 */
export function withStressFromEnd(plainWord: string, fromEnd: number): string {
  const syls = syllabify(plainWord)
  const target = syls.length - 1 - fromEnd
  if (target < 0) return plainWord
  if (stressIndex(plainWord, syls) === target) return plainWord
  syls[target] = accentSyllable(syls[target])
  return syls.join('')
}

/** Attach enclitic pronouns keeping the original stress (levanta + te → levántate). */
export function attachEnclitic(form: string, clitic: string): string {
  const syls = syllabify(form)
  const stressed = stressIndex(form, syls)
  const fromEndOriginal = syls.length - 1 - stressed
  const plain = removeAccents(form)
  const combined = plain + clitic
  const cliticSyls = syllabify(clitic).length
  return withStressFromEnd(combined, fromEndOriginal + cliticSyls)
}
