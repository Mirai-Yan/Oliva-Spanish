import dict from 'dictionary-es'
import nspell from 'nspell'
import { describe, expect, it } from 'vitest'
import { build, type LevelPack } from './index'
import a0 from './a0'
import a1 from './a1'
import a2 from './a2'
import b1 from './b1'
import b2 from './b2'
import c1 from './c1'
import { conjugate, gerund, participle, isVerbInfinitive, type Tense } from '../lib/conjugate'
import { DERIVED, VERBS } from '../lib/conjugate/verbs'
import { NAMES } from './names'
import { SCENARIOS } from './roleplay'

/**
 * Spell-checks every Spanish string in the course with a Hunspell Spanish dictionary.
 * Convention in the Markdown: **bold** and *italic* hold Spanish in `body` / `pitfalls` / `latam`;
 * in `origin` only **bold** is Spanish (italics there are Latin or other source words).
 */

const spell = nspell(dict as unknown as { aff: Buffer; dic: Buffer })
const packs: LevelPack[] = [a0, a1, a2, b1, b2, c1]
const db = build(packs)

// names, places and foreign words that a Spanish dictionary does not list
const ALLOW = new Set(
  [
    ...NAMES,
    // English words used in pronunciation comparisons
    'think', 'this', 'water', 'ladder', 'church', 'she', 'yes', 'hello', 'wifi', 'ask',
    // correct Spanish words missing from the Hunspell list
    'pingüino', 'yeísmo', 'chile', 'yuanes', 'yoga', 'videollamada', 'pobrecito', 'microplástico', 'microplásticos', 'perfeccionista', 'fregona', 'superpoder', 'superpoderes', 'climatóloga', 'climatólogo', 'alzhéimer', 'mmm', 'reutilizable', 'reutilizables', 'ok', 'cerrajera', 'leísta', 'leístas', 'deslocalización', 'desertificación', 'ultimátums', 'nominalización', 'ojito',
    // spelling fragments taught in A0 (qu, gu, gü, ll, rr…)
    'qu', 'gu', 'gü', 'gue', 'gui', 'güe', 'güi', 'qui', 'll', 'rr', 'ch', 'ja', 'je', 'ji', 'jo', 'ju', 'za', 'zo', 'zu', 'ga', 'go', 'gu', 'ge', 'gi', 'ca', 'co', 'cu', 'ce', 'ci', 'ie', 'ue',
    // regional forms taught in C1 (voseo, Caribbean / Rioplatense words, accents imitated in examples)
    'comé', 'decí', 'hablá', 'querés', 'sabés', 'tené', 'vení', 'comés', 'hablás', 'hablés', 'llamás', 'podés', 'tenés', 'estái', 'sho', 'shamo', 'cashe', 'plasha', 'tranqui', 'cafecito', 'chévere', 'guagua', 'pibe', 'piba', 'email', 'cooficial', 'pluricéntrica', 'favorcito', 'cosita', 'pelín', 'reformuladores', 'reformulador', 'autoayuda', 'modalización', 'contraargumentación', 'imprevisión', 'morriña', 'déficits', 'ciberseguridad',
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

const CLITICS = ['selos', 'selas', 'selo', 'sela', 'melo', 'mela', 'telo', 'tela', 'noslo', 'nosla', 'oslo', 'osla', 'los', 'las', 'les', 'nos', 'lo', 'la', 'le', 'me', 'te', 'se', 'os']
const PLAIN: Record<string, string> = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u' }

/** Verb forms with attached pronouns (caliéntalo, explicárselo, levantémonos) are not in the word list. */
function withEnclitics(w: string): boolean {
  for (const c of CLITICS) {
    if (!w.endsWith(c) || w.length - c.length < 2) continue
    const base = [...w.slice(0, -c.length)].map((ch) => PLAIN[ch] ?? ch).join('')
    for (const cand of [base, base + 's', base + 'd', w.slice(0, -c.length)]) if (spell.correct(cand)) return true
  }
  return false
}

interface Hit {
  where: string
  word: string
  text: string
}

function check(where: string, text: string | undefined, out: Hit[]) {
  if (!text || CJK.test(text) || PHONETIC.test(text)) return
  // capitalised words inside a sentence are names; sentence-initial words are still checked
  const midNames = new Set<string>()
  for (const m of text.matchAll(/(?<=[\p{L},;:]\s+)(\p{Lu}\p{L}+)/gu)) midNames.add(m[1])
  for (const t of tokens(text)) {
    if (t.length <= 1) continue
    if (midNames.has(t)) continue
    if (ALLOW.has(t.toLowerCase())) continue
    // productive superlatives (carísimo, facilísimo) are not listed in the dictionary
    if (/ísim[oa]s?$/.test(t.toLowerCase())) continue
    if (spell.correct(t) || spell.correct(t.toLowerCase()) || withEnclitics(t.toLowerCase())) continue
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
    // keep bold text inside italics: *Estoy haciéndo**lo**.* → *Estoy haciéndolo.*
    const noBold = text.replace(/\*\*([^*]+)\*\*/g, '$1')
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
      // word-bank distractors may be deliberately wrong forms (quieremos), so they are not checked
      for (const s of u.sentences) [s.es, ...(s.alt ?? [])].forEach((t) => check(s.id, t, hits))
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
    for (const sc of SCENARIOS) {
      check(`${sc.id}.opening`, sc.opening, hits)
      check(`${sc.id}.titleEs`, sc.titleEs, hits)
      sc.phrases.forEach(([es]) => check(`${sc.id}.phrase`, es.replace(/…/g, ' '), hits))
    }
    for (const w of db.words.filter((x) => !x.unit)) {
      check(`${w.id}.es`, w.es, hits)
      check(`${w.id}.f`, w.f, hits)
      check(`${w.id}.pl`, w.pl, hits)
      check(`${w.id}.ex`, w.ex?.[0], hits)
    }
    expect(hits.map((h) => `${h.where}: «${h.word}» in "${h.text}"`)).toEqual([])
  })
})

describe('Spanish spelling of generated conjugations', () => {
  const TENSES: Tense[] = ['pres', 'pret', 'impf', 'fut', 'cond', 'subj', 'subjImpf', 'subjImpfSe', 'imp']
  // valid forms the dictionary happens not to list
  // (atén: atener is only used as atenerse → atente)
  const OK = new Set<string>(['atén', 'abstén', 'palian', 'palie', 'palies', 'palien', 'rehúyo', 'rehúyes', 'rehúye', 'rehúyen', 'rehúya', 'rehúyas', 'rehúyan', 'contén', 'oíd', 'reíd', 'freíd', 'sonreíd', 'olamos', 'oláis', 'solí', 'soliste', 'solió', 'solimos', 'solisteis', 'solieron'])
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
