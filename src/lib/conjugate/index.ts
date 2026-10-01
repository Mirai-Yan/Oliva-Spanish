import { DERIVED, VERBS, type Six, type StemChange, type VerbSpec } from './verbs'
import { attachEnclitic, removeAccents, stressIndex, syllabify, withStressFromEnd } from '../text/syllables'
import { searchKey } from '../text/normalize'

export type Tense =
  | 'pres'
  | 'pret'
  | 'impf'
  | 'fut'
  | 'cond'
  | 'pperf'
  | 'plusc'
  | 'futperf'
  | 'condperf'
  | 'subj'
  | 'subjImpf'
  | 'subjImpfSe'
  | 'subjPerf'
  | 'subjPlusc'
  | 'subjFut'
  | 'imp'
  | 'impNeg'

export type Forms = (string | null)[]

export interface TenseInfo {
  id: Tense
  zh: string
  es: string
  mood: '陈述式' | '虚拟式' | '命令式'
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1'
}

export const TENSES: TenseInfo[] = [
  { id: 'pres', zh: '现在时', es: 'Presente', mood: '陈述式', level: 'A1' },
  { id: 'pperf', zh: '现在完成时', es: 'Pretérito perfecto', mood: '陈述式', level: 'A2' },
  { id: 'pret', zh: '简单过去时', es: 'Pretérito indefinido', mood: '陈述式', level: 'A2' },
  { id: 'impf', zh: '过去未完成时', es: 'Pretérito imperfecto', mood: '陈述式', level: 'A2' },
  { id: 'fut', zh: '将来未完成时', es: 'Futuro simple', mood: '陈述式', level: 'A2' },
  { id: 'cond', zh: '简单条件式', es: 'Condicional simple', mood: '陈述式', level: 'B1' },
  { id: 'plusc', zh: '过去完成时', es: 'Pluscuamperfecto', mood: '陈述式', level: 'B1' },
  { id: 'futperf', zh: '将来完成时', es: 'Futuro compuesto', mood: '陈述式', level: 'B1' },
  { id: 'condperf', zh: '复合条件式', es: 'Condicional compuesto', mood: '陈述式', level: 'B2' },
  { id: 'subj', zh: '虚拟式现在时', es: 'Presente de subjuntivo', mood: '虚拟式', level: 'B1' },
  { id: 'subjPerf', zh: '虚拟式现在完成时', es: 'Pretérito perfecto de subjuntivo', mood: '虚拟式', level: 'B1' },
  { id: 'subjImpf', zh: '虚拟式过去未完成时 (-ra)', es: 'Imperfecto de subjuntivo', mood: '虚拟式', level: 'B2' },
  { id: 'subjImpfSe', zh: '虚拟式过去未完成时 (-se)', es: 'Imperfecto de subjuntivo (-se)', mood: '虚拟式', level: 'B2' },
  { id: 'subjPlusc', zh: '虚拟式过去完成时', es: 'Pluscuamperfecto de subjuntivo', mood: '虚拟式', level: 'B2' },
  { id: 'subjFut', zh: '虚拟式将来时', es: 'Futuro de subjuntivo', mood: '虚拟式', level: 'C1' },
  { id: 'imp', zh: '命令式（肯定）', es: 'Imperativo afirmativo', mood: '命令式', level: 'A2' },
  { id: 'impNeg', zh: '命令式（否定）', es: 'Imperativo negativo', mood: '命令式', level: 'A2' },
]

export const TENSE_BY_ID = Object.fromEntries(TENSES.map((t) => [t.id, t])) as Record<Tense, TenseInfo>

export const PERSONS = ['yo', 'tú', 'él / ella / usted', 'nosotros', 'vosotros', 'ellos / ellas / ustedes']
export const PERSONS_SHORT = ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos']
const REFLEXIVE = ['me', 'te', 'se', 'nos', 'os', 'se']

type Cls = 'ar' | 'er' | 'ir'
type Ortho = 'car' | 'gar' | 'zar' | 'guar' | 'gj' | 'cz' | 'zc' | 'guir' | 'quir' | 'uir' | null

const END = {
  pres: { ar: ['o', 'as', 'a', 'amos', 'áis', 'an'], er: ['o', 'es', 'e', 'emos', 'éis', 'en'], ir: ['o', 'es', 'e', 'imos', 'ís', 'en'] },
  pret: { ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'], er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'], ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'] },
  impf: { ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'], er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'], ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'] },
  subj: { ar: ['e', 'es', 'e', 'emos', 'éis', 'en'], er: ['a', 'as', 'a', 'amos', 'áis', 'an'], ir: ['a', 'as', 'a', 'amos', 'áis', 'an'] },
}
const FUT = ['é', 'ás', 'á', 'emos', 'éis', 'án']
const COND = ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían']
const STRONG_PRET = ['e', 'iste', 'o', 'imos', 'isteis', 'ieron']
const STRONG_POS = [0, 1, 2, 5]

const PLAIN: Record<string, string> = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u' }
const ACC: Record<string, string> = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' }

interface Parsed {
  inf: string // original infinitive without "se", may carry accent (oír)
  plain: string // without accent
  cls: Cls
  stem: string
  spec: VerbSpec
  ortho: Ortho
}

export function isVerbInfinitive(w: string): boolean {
  return /(ar|er|ir|ír)(se)?$/.test(w)
}

function splitReflexive(inf: string): { base: string; reflexive: boolean } {
  const m = inf.match(/^(.*(?:ar|er|ir|ír))se$/)
  if (m && m[1].length >= 2) return { base: m[1], reflexive: true }
  return { base: inf, reflexive: false }
}

function parse(inf: string): Parsed {
  const plain = inf.replace(/ír$/, 'ir')
  const cls = plain.slice(-2) as Cls
  const stem = plain.slice(0, -2)
  const spec = VERBS[inf] ?? VERBS[plain] ?? {}
  let ortho: Ortho = null
  if (plain.endsWith('car')) ortho = 'car'
  else if (plain.endsWith('gar')) ortho = 'gar'
  else if (plain.endsWith('zar')) ortho = 'zar'
  else if (plain.endsWith('guar')) ortho = 'guar'
  else if (plain.endsWith('guir')) ortho = 'guir'
  else if (plain.endsWith('quir')) ortho = 'quir'
  else if (plain.endsWith('uir')) ortho = 'uir'
  else if (plain.endsWith('ger') || plain.endsWith('gir')) ortho = 'gj'
  else if (plain.endsWith('cer') || plain.endsWith('cir')) {
    const before = stem[stem.length - 2]
    ortho = before && 'aeiou'.includes(before) && !spec.noZc ? 'zc' : 'cz'
  }
  return { inf, plain, cls, stem, spec, ortho }
}

function changeStem(stem: string, type: StemChange | undefined, cls: Cls, strong: boolean): string {
  if (!type) return stem
  const replaceLast = (from: string, to: string) => {
    const i = stem.lastIndexOf(from)
    if (i < 0) return stem
    let rep = to
    if (i === 0 && to === 'ue') rep = 'hue'
    // g + ue keeps the u sounded: avergonzar → avergüenzo
    if (to === 'ue' && stem[i - 1] === 'g') rep = 'üe'
    if (i === 0 && to === 'ie') rep = 'ye'
    return stem.slice(0, i) + rep + stem.slice(i + from.length)
  }
  if (strong) {
    switch (type) {
      case 'ie':
        return replaceLast('e', 'ie')
      case 'ue':
        return replaceLast('o', 'ue')
      case 'i':
        return replaceLast('e', 'i')
      case 'uue':
        return replaceLast('u', 'ue')
      case 'iie':
        return replaceLast('i', 'ie')
      case 'acc-i':
        return replaceLast('i', 'í')
      case 'acc-u':
        return replaceLast('u', 'ú')
    }
  }
  if (cls !== 'ir') return stem
  if (type === 'ie' || type === 'i') return replaceLast('e', 'i')
  if (type === 'ue') return replaceLast('o', 'u')
  return stem
}

/** Join stem + ending applying Spanish spelling rules. */
function join(stem: string, ending: string, p: Parsed): string {
  const e0 = ending[0] ?? ''
  const front = 'eé'.includes(e0)
  const back = 'aáoó'.includes(e0)
  let s = stem
  let e = ending
  switch (p.ortho) {
    case 'car':
      if (front && s.endsWith('c')) s = s.slice(0, -1) + 'qu'
      break
    case 'gar':
      if (front && s.endsWith('g')) s = s + 'u'
      break
    case 'zar':
      if (front && s.endsWith('z')) s = s.slice(0, -1) + 'c'
      break
    case 'guar':
      if (front && s.endsWith('gu')) s = s.slice(0, -2) + 'gü'
      break
    case 'gj':
      if (back && s.endsWith('g')) s = s.slice(0, -1) + 'j'
      break
    case 'cz':
      if (back && s.endsWith('c')) s = s.slice(0, -1) + 'z'
      break
    case 'zc':
      if (back && s.endsWith('c')) s = s.slice(0, -1) + 'zc'
      break
    case 'guir':
      if (back && s.endsWith('gu')) s = s.slice(0, -1)
      break
    case 'quir':
      if (back && s.endsWith('qu')) s = s.slice(0, -2) + 'c'
      break
    case 'uir':
      if (s.endsWith('u')) {
        if ('aeoáéó'.includes(e0)) s = s + 'y'
        else if (e0 === 'i' && e.length > 1 && 'aeoó'.includes(e[1])) e = 'y' + e.slice(1)
      }
      return s + e
  }
  const last = s[s.length - 1]
  if (p.cls !== 'ar' && last && 'aeo'.includes(last)) {
    // vowel stems: leer → leyó, leído, leyendo
    if (e0 === 'i' && e.length > 1 && 'aeoó'.includes(e[1])) e = 'y' + e.slice(1)
    else if (e0 === 'i') e = 'í' + e.slice(1)
  } else if ((s.endsWith('ñ') || s.endsWith('ll')) && e0 === 'i' && e.length > 1 && 'aeoó'.includes(e[1])) {
    e = e.slice(1)
  }
  return s + e
}

function six(fn: (i: number) => string | null): Forms {
  return [0, 1, 2, 3, 4, 5].map(fn)
}

function applyOver(forms: Forms, over: Six | Partial<Record<number, string>> | undefined): Forms {
  if (!over) return forms
  if (Array.isArray(over)) return over.slice()
  return forms.map((f, i) => (over as Record<number, string>)[i] ?? f)
}

function accentLastVowel(s: string): string {
  for (let i = s.length - 1; i >= 0; i--) {
    if (ACC[s[i]]) return s.slice(0, i) + ACC[s[i]] + s.slice(i + 1)
  }
  return s
}

function pretStemOf(p: Parsed): string | undefined {
  if (p.spec.pretStem) return p.spec.pretStem
  if (p.plain.endsWith('ducir')) return p.stem.slice(0, -1) + 'j'
  return undefined
}

function presentOf(p: Parsed): Forms {
  const { spec, stem, cls } = p
  const forms = six((i) => {
    if (i === 0 && spec.yo) return spec.yo
    const st = STRONG_POS.includes(i) ? changeStem(stem, spec.stem, cls, true) : stem
    return join(st, END.pres[cls][i], p)
  })
  return applyOver(forms, spec.over?.pres)
}

function subjOf(p: Parsed): Forms {
  const { spec, stem, cls } = p
  let forms: Forms
  if (spec.subjStem || spec.yo) {
    const base = spec.subjStem ?? spec.yo!.slice(0, -1)
    forms = six((i) => base + END.subj[cls][i])
  } else {
    forms = six((i) => {
      const st = STRONG_POS.includes(i) ? changeStem(stem, spec.stem, cls, true) : changeStem(stem, spec.stem, cls, false)
      return join(st, END.subj[cls][i], p)
    })
  }
  return applyOver(forms, spec.over?.subj)
}

function pretOf(p: Parsed): Forms {
  const { spec, stem, cls } = p
  const strong = pretStemOf(p)
  let forms: Forms
  if (strong) {
    forms = six((i) => {
      let e = STRONG_PRET[i]
      if (i === 5 && strong.endsWith('j')) e = 'eron'
      return strong + e
    })
  } else {
    forms = six((i) => {
      const st = i === 2 || i === 5 ? changeStem(stem, spec.stem, cls, false) : stem
      return join(st, END.pret[cls][i], p)
    })
  }
  return applyOver(forms, spec.over?.pret)
}

/**
 * RAE 2010: words that are a single syllable in writing take no accent mark
 * (guio, guie, fie, crio, hui, huis), except diacritic ones like dé / sé, which have a single vowel.
 * Forms with an accented í / ú next to a strong vowel are hiatus (oí, leí, reís) and keep it.
 */
export function monosyllableAccent(form: string): string {
  if (!/[áéíóú]/.test(form)) return form
  const plain = removeAccents(form)
  const vowels = plain.match(/[aeiouü]/g) ?? []
  if (vowels.length < 2) return form
  if (/[íú][aeo]|[aeo][íú]/.test(form)) return form
  return syllabify(plain).length === 1 ? plain : form
}

function simple(inf: string, tense: Tense): Forms {
  const spec = (VERBS[inf] ?? VERBS[inf.replace(/ír$/, 'ir')] ?? {}) as VerbSpec
  if (spec.defective?.includes(tense)) return [null, null, null, null, null, null]
  return simpleRaw(inf, tense).map((f) => (f == null ? null : monosyllableAccent(f)))
}

function simpleRaw(inf: string, tense: Tense): Forms {
  const p = parse(inf)
  const { spec, stem, cls, plain } = p
  switch (tense) {
    case 'pres':
      return presentOf(p)
    case 'pret':
      return pretOf(p)
    case 'impf':
      return applyOver(
        six((i) => join(stem, END.impf[cls][i], p)),
        spec.over?.impf,
      )
    case 'fut': {
      const base = spec.futStem ?? plain
      return applyOver(
        six((i) => base + FUT[i]),
        spec.over?.fut,
      )
    }
    case 'cond': {
      const base = spec.futStem ?? plain
      return applyOver(
        six((i) => base + COND[i]),
        spec.over?.cond,
      )
    }
    case 'subj':
      return subjOf(p)
    case 'subjImpf':
    case 'subjImpfSe':
    case 'subjFut': {
      const p3 = pretOf(p)[5]!
      const base = p3.slice(0, -3)
      const suf = tense === 'subjImpf' ? 'ra' : tense === 'subjImpfSe' ? 'se' : 're'
      const ends = [suf, suf + 's', suf, suf + 'mos', suf + 'is', suf + 'n']
      return six((i) => (i === 3 ? accentLastVowel(base) : base) + ends[i])
    }
    case 'imp': {
      const pres = presentOf(p)
      const sj = subjOf(p)
      const forms: Forms = [null, spec.impTu ?? pres[2], sj[2], sj[3], inf.slice(0, -1) + 'd', sj[5]]
      return applyOver(forms, spec.over?.imp)
    }
    default:
      throw new Error('not a simple tense: ' + tense)
  }
}

function gerundSimple(inf: string): string {
  const p = parse(inf)
  if (p.spec.ger) return p.spec.ger
  const st = changeStem(p.stem, p.spec.stem, p.cls, false)
  return join(st, p.cls === 'ar' ? 'ando' : 'iendo', p)
}

function participleSimple(inf: string): string {
  const p = parse(inf)
  if (p.spec.part) return p.spec.part
  return join(p.stem, p.cls === 'ar' ? 'ado' : 'ido', p)
}

// ---- derived (prefixed) verbs ----

function prefixForm(prefix: string, form: string): string {
  const combined = prefix + form
  // re + hice → rehíce: a stressed i/u after a silent h would otherwise form a diphthong with the prefix vowel
  const hm = form.match(/^h([iu])/)
  if (hm && /[aeo]$/.test(prefix) && stressIndex(form) === 0 && syllabify(form).length > 1) {
    return prefix + 'h' + (hm[1] === 'i' ? 'í' : 'ú') + form.slice(2)
  }
  if (syllabify(form).length === 1) {
    // monosyllables gain a written accent when they become the last syllable of a longer word (ten → mantén)
    const plain = [...combined].map((c) => PLAIN[c] ?? c).join('')
    return withStressFromEnd(plain, 0)
  }
  return combined
}

function derivedSimple(inf: string, tense: Tense): Forms {
  const d = DERIVED[inf]
  if (!d) return simple(inf, tense)
  const [prefix, base] = d
  const forms = simple(base, tense).map((f) => (f == null ? null : prefixForm(prefix, f)))
  if (tense === 'imp' && base === 'decir') forms[1] = prefix + 'dice'
  return forms
}

export function gerund(verb: string): string {
  const { base, reflexive } = splitReflexive(verb)
  const d = DERIVED[base]
  const g = d ? prefixForm(d[0], gerundSimple(d[1])) : gerundSimple(base)
  return reflexive ? attachEnclitic(g, 'se') : g
}

export function participle(verb: string): string {
  const { base } = splitReflexive(verb)
  const d = DERIVED[base]
  return d ? d[0] + participleSimple(d[1]) : participleSimple(base)
}

const COMPOUND: Partial<Record<Tense, Tense>> = {
  pperf: 'pres',
  plusc: 'impf',
  futperf: 'fut',
  condperf: 'cond',
  subjPerf: 'subj',
  subjPlusc: 'subjImpf',
}

/** Conjugate a verb (reflexive infinitives like "levantarse" supported) for all six persons. */
export function conjugate(verb: string, tense: Tense): Forms {
  const { base, reflexive } = splitReflexive(verb)
  const d = DERIVED[base]
  const spec = VERBS[d ? d[1] : base] ?? VERBS[(d ? d[1] : base).replace(/ír$/, 'ir')]
  if (spec?.defective?.includes(tense)) return [null, null, null, null, null, null]
  const auxTense = COMPOUND[tense]
  if (auxTense) {
    const aux = simple('haber', auxTense)
    const part = participle(base)
    return six((i) => (reflexive ? REFLEXIVE[i] + ' ' : '') + aux[i] + ' ' + part)
  }
  if (tense === 'impNeg') {
    const sj = derivedSimple(base, 'subj')
    return six((i) => (i === 0 ? null : 'no ' + (reflexive ? REFLEXIVE[i] + ' ' : '') + sj[i]))
  }
  const forms = derivedSimple(base, tense)
  if (!reflexive) return forms
  if (tense === 'imp') {
    return forms.map((f, i) => {
      if (f == null) return null
      if (i === 1) return attachEnclitic(f, 'te')
      if (i === 2 || i === 5) return attachEnclitic(f, 'se')
      if (i === 3) return attachEnclitic(f.replace(/s$/, ''), 'nos')
      // vosotros: drop -d (levantaos, poneos, vestíos); irse → idos
      if (base === 'ir') return 'idos'
      const stemPart = f.slice(0, -1)
      if (stemPart.endsWith('i')) return stemPart.slice(0, -1) + 'íos'
      return stemPart + 'os'
    })
  }
  return forms.map((f, i) => (f == null ? null : REFLEXIVE[i] + ' ' + f))
}

export function conjugateOne(verb: string, tense: Tense, person: number): string | null {
  return conjugate(verb, tense)[person] ?? null
}

/** Is the verb irregular in any tense (used for tags in the dictionary)? */
export function isIrregular(verb: string): boolean {
  const { base } = splitReflexive(verb)
  const d = DERIVED[base]
  const b = d ? d[1] : base
  const spec = VERBS[b]
  if (!spec) return b.endsWith('ducir') || /[aeiou]c(er|ir)$/.test(b) || (/uir$/.test(b) && !/guir$/.test(b))
  return true
}

// ---- reverse lookup ----

export interface FormHit {
  verb: string
  tense: Tense | 'ger' | 'part'
  person: number
}

const SIMPLE_FOR_INDEX: Tense[] = ['pres', 'pret', 'impf', 'fut', 'cond', 'subj', 'subjImpf', 'subjImpfSe', 'imp']

export function buildFormIndex(verbs: string[]): Map<string, FormHit[]> {
  const idx = new Map<string, FormHit[]>()
  const add = (form: string, hit: FormHit) => {
    const k = searchKey(form)
    const arr = idx.get(k)
    if (arr) {
      if (!arr.some((h) => h.verb === hit.verb && h.tense === hit.tense && h.person === hit.person)) arr.push(hit)
    } else idx.set(k, [hit])
  }
  for (const v of verbs) {
    const { base } = splitReflexive(v)
    try {
      for (const t of SIMPLE_FOR_INDEX) {
        derivedSimple(base, t).forEach((f, i) => f && add(f, { verb: v, tense: t, person: i }))
      }
      add(gerund(base), { verb: v, tense: 'ger', person: -1 })
      add(participle(base), { verb: v, tense: 'part', person: -1 })
    } catch {
      /* skip malformed */
    }
  }
  return idx
}
