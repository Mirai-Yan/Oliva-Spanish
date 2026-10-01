import dict from 'dictionary-es'
import nspell from 'nspell'
import { describe, expect, it } from 'vitest'
import { build, type LevelPack } from './index'
import a0 from './a0'
import a1 from './a1'
import { conjugate, gerund, participle, isVerbInfinitive, type Tense } from '../lib/conjugate'
import { DERIVED, VERBS } from '../lib/conjugate/verbs'

/**
 * Spell-checks every Spanish string in the course with a Hunspell Spanish dictionary.
 * Convention in the Markdown: **bold** and *italic* hold Spanish in `body` / `pitfalls` / `latam`;
 * in `origin` only **bold** is Spanish (italics there are Latin or other source words).
 */

const spell = nspell(dict as unknown as { aff: Buffer; dic: Buffer })
const packs: LevelPack[] = [a0, a1]
const db = build(packs)

// names, places and foreign words that a Spanish dictionary does not list
const ALLOW = new Set(
  [
    // people & places in dialogues / readings
    'Li', 'Ming', 'Wang', 'Lei', 'Chengdu', 'Shanghái', 'Pekín', 'Guadalajara', 'Elena', 'Tom', 'Anna', 'Javier', 'Ruiz', 'López', 'García',
    // English words used in pronunciation comparisons
    'think', 'this', 'water', 'ladder', 'church', 'she', 'yes', 'hello', 'wifi',
    // correct Spanish words missing from the Hunspell list
    'pingüino', 'yeísmo', 'Londres', 'Texas',
    // spelling fragments taught in A0 (qu, gu, gü, ll, rr…)
    'qu', 'gu', 'gü', 'gue', 'gui', 'güe', 'güi', 'qui', 'll', 'rr', 'ch', 'ja', 'je', 'ji', 'jo', 'ju', 'za', 'zo', 'zu', 'ga', 'go', 'gu', 'ge', 'gi', 'ca', 'co', 'cu', 'ce', 'ci',
    // archaic forms quoted in history notes
    'vuesa', 'vuesarced', 'Quixote', 'coraçón',
  ].map((w) => w.toLowerCase()),
)

const CJK = /[　-〿一-鿿＀-￯]/
const PHONETIC = /[θʃʒɾɲʝɣβðɹ[\]]/

function tokens(text: string): string[] {
  // "ca-sa" (syllabified) is checked as "casa"; "-ción" style suffixes are skipped
  return text
    .replace(/(\p{L})-(?=\p{L})/gu, '$1')
    .split(/[^\p{L}]+/u)
    .filter((t) => t && !/^-/.test(t))
}

interface Hit {
  where: string
  word: string
  text: string
}

function check(where: string, text: string | undefined, out: Hit[]) {
  if (!text || CJK.test(text) || PHONETIC.test(text)) return
  for (const t of tokens(text)) {
    if (t.length <= 1) continue
    if (ALLOW.has(t.toLowerCase())) continue
    if (spell.correct(t) || spell.correct(t.toLowerCase())) continue
    out.push({ where, word: t, text })
  }
}

/**
 * Spanish fragments inside Markdown: **bold** and (optionally) *italic*.
 * Skips deliberate mistakes (❌ … ✅), syllables marked inside a word (ha-*blar*),
 * affixes (-ción, fl-) and one- or two-letter sound fragments (ie, pr, th).
 */
function fragments(md: string | undefined, italics: boolean): string[] {
  if (!md) return []
  const text = md.replace(/❌[^✅\n]*/g, '')
  const out: string[] = []
  for (const m of text.matchAll(/(?<![\p{L}-])\*\*([^*]+)\*\*(?![\p{L}-])/gu)) out.push(m[1])
  if (italics) {
    const noBold = text.replace(/\*\*[^*]+\*\*/g, ' ')
    for (const m of noBold.matchAll(/(?<![\p{L}*-])\*([^*\n]+)\*(?![\p{L}*-])/gu)) out.push(m[1])
  }
  return out
    .flatMap((f) => f.split(/[、，,/／→]/))
    .map((f) => f.trim())
    .filter((f) => !/^-|-$/.test(f) && (f.match(/\p{L}/gu)?.length ?? 0) > 2)
}

describe('Spanish spelling in course content', () => {
  it('has no misspelled words', () => {
    const hits: Hit[] = []
    for (const u of db.units) {
      for (const w of u.words) {
        check(`${w.id}.es`, w.es, hits)
        check(`${w.id}.f`, w.f, hits)
        check(`${w.id}.pl`, w.pl, hits)
        check(`${w.id}.ex`, w.ex?.[0], hits)
      }
      for (const g of u.grammar) {
        g.examples.forEach(([es], i) => check(`${g.id}.ex${i}`, es, hits))
        for (const f of fragments(g.body, true)) check(`${g.id}.body`, f, hits)
        for (const f of fragments(g.latam, true)) check(`${g.id}.latam`, f, hits)
        for (const p of g.pitfalls ?? []) for (const f of fragments(p, true)) check(`${g.id}.pitfall`, f, hits)
        for (const f of fragments(g.origin, false)) check(`${g.id}.origin`, f, hits)
        check(`${g.id}.titleEs`, g.titleEs, hits)
      }
      for (const s of u.sentences) [s.es, ...(s.alt ?? []), ...(s.distract ?? [])].forEach((t) => check(s.id, t, hits))
      // distractor options can be deliberately wrong (canciónes), so only answers are checked
      for (const c of u.cloze) for (const a of c.answers) check(c.id, c.text.replace('___', a), hits)
      for (const d of u.dialogues ?? []) d.lines.forEach((l, i) => check(`${d.id}.${i}`, l.es, hits))
      for (const r of u.readings) {
        check(`${r.id}.title`, r.title, hits)
        r.paras.flat().forEach(([es], i) => check(`${r.id}.s${i}`, es, hits))
        for (const q of r.questions) {
          check(`${r.id}.q`, q.q, hits)
          if (q.type === 'mc') q.options.forEach((o) => check(`${r.id}.opt`, o, hits))
        }
      }
      for (const w of u.writing ?? []) w.hints?.forEach((h) => check(`${w.id}.hint`, h, hits))
      for (const p of u.pron ?? []) {
        if (p.type === 'pair') {
          check('pair', p.a, hits)
          check('pair', p.b, hits)
        } else check(p.type, p.word, hits)
      }
      check(`${u.id}.titleEs`, u.titleEs, hits)
    }
    expect(hits.map((h) => `${h.where}: «${h.word}» in "${h.text}"`)).toEqual([])
  })
})

describe('Spanish spelling of generated conjugations', () => {
  const TENSES: Tense[] = ['pres', 'pret', 'impf', 'fut', 'cond', 'subj', 'subjImpf', 'subjImpfSe', 'imp']
  // valid forms the dictionary happens not to list
  // (atén: atener is only used as atenerse → atente)
  const OK = new Set<string>(['atén', 'contén', 'oíd', 'reíd', 'freíd', 'sonreíd', 'olamos', 'oláis', 'solí', 'soliste', 'solió', 'solimos', 'solisteis', 'solieron'])
  const verbs = [
    ...new Set([
      ...Object.keys(VERBS).filter((v) => v !== 'cribir'),
      ...Object.keys(DERIVED),
      ...db.words.filter((w) => w.pos === 'v' && isVerbInfinitive(w.es)).map((w) => w.es.replace(/se$/, '')),
    ]),
  ]
  it('every simple form is a real Spanish word', () => {
    const bad: string[] = []
    for (const v of verbs) {
      for (const t of TENSES) {
        conjugate(v, t).forEach((f, i) => {
          if (f && !OK.has(f) && !spell.correct(f)) bad.push(`${v} ${t}[${i}] ${f}`)
        })
      }
      for (const f of [gerund(v), participle(v)]) if (!spell.correct(f)) bad.push(`${v} ${f}`)
    }
    expect(bad).toEqual([])
  })
})
