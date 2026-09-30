import { buildFormIndex, TENSE_BY_ID, PERSONS, type FormHit } from '../lib/conjugate'
import { searchKey } from '../lib/text/normalize'
import type { GrammarPoint, Lesson, Level, Reading, Sentence, Unit, Word } from './types'
import { LEVELS } from './types'

export interface LevelPack {
  level: Level
  units: Unit[]
  /** words in the level word book that are not taught in a unit */
  extraWords?: Word[]
  /** library readings not attached to a unit */
  readings?: Reading[]
}

const LOADERS: Partial<Record<Level, () => Promise<{ default: LevelPack }>>> = {
  A0: () => import('./a0'),
  A1: () => import('./a1'),
}

export interface ContentDB {
  levels: Level[]
  units: Unit[]
  unitById: Map<string, Unit>
  unitIndex: Map<string, number>
  lessons: Lesson[]
  lessonById: Map<string, Lesson>
  lessonsByUnit: Map<string, Lesson[]>
  words: Word[]
  wordById: Map<string, Word>
  grammar: GrammarPoint[]
  grammarById: Map<string, GrammarPoint>
  readings: Reading[]
  readingById: Map<string, Reading>
  sentences: (Sentence & { unit: string })[]
  search: (q: string, limit?: number) => Word[]
  lookup: (form: string) => LookupResult | null
}

export interface LookupResult {
  word: Word
  /** how the form relates to the lemma, e.g. "tener 的简单过去时 · nosotros" */
  how?: string
}

/** Split a unit into lessons: vocab and grammar interleaved, then listening, readings and the unit test. */
export function buildLessons(u: Unit): Lesson[] {
  const out: Lesson[] = []
  if (u.pron?.length) {
    u.grammar.forEach((g, i) => out.push({ id: `${u.id}-p${i + 1}`, unitId: u.id, kind: 'pron', title: g.title, grammar: g.id }))
    out.push({ id: `${u.id}-t`, unitId: u.id, kind: 'test', title: '单元测试' })
    return out
  }
  const size = u.chunk ?? 8
  const vocab: Lesson[] = []
  for (let i = 0; i < u.words.length; i += size) {
    let chunk = u.words.slice(i, i + size)
    // avoid a tiny last chunk
    if (u.words.length - (i + size) > 0 && u.words.length - (i + size) < 4) {
      chunk = u.words.slice(i)
      i = u.words.length
    }
    vocab.push({ id: `${u.id}-v${vocab.length + 1}`, unitId: u.id, kind: 'vocab', title: `词汇 ${vocab.length + 1}`, words: chunk.map((w) => w.id) })
  }
  const gram: Lesson[] = u.grammar.map((g, i) => ({ id: `${u.id}-g${i + 1}`, unitId: u.id, kind: 'grammar', title: g.title, grammar: g.id }))
  const n = Math.max(vocab.length, gram.length)
  for (let i = 0; i < n; i++) {
    if (vocab[i]) out.push(vocab[i])
    if (gram[i]) out.push(gram[i])
  }
  if ((u.dialogues?.length ?? 0) > 0 || u.sentences.length >= 6) {
    out.push({ id: `${u.id}-l`, unitId: u.id, kind: 'listen', title: '听说练习', dialogue: u.dialogues?.[0]?.id })
  }
  u.readings.forEach((r, i) => out.push({ id: `${u.id}-r${i + 1}`, unitId: u.id, kind: 'read', title: r.title, reading: r.id }))
  out.push({ id: `${u.id}-t`, unitId: u.id, kind: 'test', title: '单元测试' })
  return out
}

let db: ContentDB | null = null
let loading: Promise<ContentDB> | null = null

export function getContent(): ContentDB {
  if (!db) throw new Error('content not loaded')
  return db
}

export function loadContent(): Promise<ContentDB> {
  if (db) return Promise.resolve(db)
  loading ??= (async () => {
    const packs = await Promise.all(
      LEVELS.filter((l) => LOADERS[l]).map((l) => LOADERS[l]!().then((m) => m.default)),
    )
    db = build(packs)
    return db
  })()
  return loading
}

export function build(packs: LevelPack[]): ContentDB {
  const units: Unit[] = []
  const words: Word[] = []
  const grammar: GrammarPoint[] = []
  const readings: Reading[] = []
  const sentences: (Sentence & { unit: string })[] = []
  for (const p of packs) {
    const us = p.units.slice().sort((a, b) => a.order - b.order)
    for (const u of us) {
      // sentence / cloze ids are written per unit; make them globally unique
      u.sentences.forEach((s) => !s.id.startsWith(u.id) && (s.id = `${u.id}-${s.id}`))
      u.cloze.forEach((c) => !c.id.startsWith(u.id) && (c.id = `${u.id}-${c.id}`))
      units.push(u)
      u.words.forEach((w) => words.push({ ...w, unit: u.id, level: w.level ?? u.level }))
      u.grammar.forEach((g) => grammar.push({ ...g, unit: u.id }))
      u.readings.forEach((r) => readings.push({ ...r, unit: u.id }))
      u.sentences.forEach((s) => sentences.push({ ...s, unit: u.id }))
    }
    p.extraWords?.forEach((w) => words.push(w))
    p.readings?.forEach((r) => readings.push(r))
  }
  const lessons = units.flatMap(buildLessons)
  const lessonsByUnit = new Map<string, Lesson[]>()
  lessons.forEach((l) => {
    const arr = lessonsByUnit.get(l.unitId) ?? []
    arr.push(l)
    lessonsByUnit.set(l.unitId, arr)
  })

  const wordById = new Map(words.map((w) => [w.id, w]))
  const byKey = new Map<string, Word[]>()
  const addKey = (k: string, w: Word) => {
    if (!k) return
    const arr = byKey.get(k) ?? []
    if (!arr.includes(w)) arr.push(w)
    byKey.set(k, arr)
  }
  for (const w of words) {
    addKey(searchKey(w.es), w)
    if (w.f) addKey(searchKey(w.f), w)
    if (w.pl) addKey(searchKey(w.pl), w)
    // "el libro" style lemma without article; "levantarse" also under "levantar"
    const noSe = w.pos === 'v' ? w.es.replace(/se$/, '') : ''
    if (noSe && noSe !== w.es) addKey(searchKey(noSe), w)
  }

  let formIndex: Map<string, FormHit[]> | null = null
  const verbForms = () => {
    formIndex ??= buildFormIndex(words.filter((w) => w.pos === 'v' && /(ar|er|ir|ír)(se)?$/.test(w.es)).map((w) => w.es))
    return formIndex
  }

  const lookup = (form: string): LookupResult | null => {
    const k = searchKey(form)
    if (!k) return null
    const direct = byKey.get(k)
    if (direct?.length) return { word: direct[0] }
    const hits = verbForms().get(k)
    if (hits?.length) {
      const h = hits[0]
      const w = words.find((x) => x.es === h.verb && x.pos === 'v')
      if (w) {
        const tense = h.tense === 'ger' ? '副动词' : h.tense === 'part' ? '过去分词' : TENSE_BY_ID[h.tense].zh
        const person = h.person >= 0 ? ` · ${PERSONS[h.person]}` : ''
        return { word: w, how: `${h.verb} 的${tense}${person}` }
      }
    }
    const tries: [string, string][] = []
    if (k.endsWith('ces')) tries.push([k.slice(0, -3) + 'z', '复数'])
    if (k.endsWith('es')) tries.push([k.slice(0, -2), '复数'])
    if (k.endsWith('s')) tries.push([k.slice(0, -1), '复数'])
    if (k.endsWith('as')) tries.push([k.slice(0, -2) + 'o', '阴性复数'])
    if (k.endsWith('a')) tries.push([k.slice(0, -1) + 'o', '阴性'])
    if (k.endsWith('os')) tries.push([k.slice(0, -1), '复数'])
    for (const [t, how] of tries) {
      const w = byKey.get(t)?.[0]
      if (w) return { word: w, how: `${w.es} 的${how}` }
    }
    return null
  }

  const search = (q: string, limit = 50): Word[] => {
    const k = searchKey(q)
    if (!k) return []
    const zh = q.trim()
    const scored: [number, Word][] = []
    for (const w of words) {
      const wk = searchKey(w.es)
      let s = -1
      if (wk === k) s = 100
      else if (wk.startsWith(k)) s = 80 - wk.length
      else if (w.zh.includes(zh)) s = 60 - w.zh.length
      else if (wk.includes(k)) s = 40 - wk.length
      if (s >= 0) scored.push([s, w])
    }
    const res = scored.sort((a, b) => b[0] - a[0]).map((x) => x[1])
    const viaForm = lookup(q)
    if (viaForm && !res.includes(viaForm.word)) res.unshift(viaForm.word)
    return res.slice(0, limit)
  }

  return {
    levels: packs.map((p) => p.level),
    units,
    unitById: new Map(units.map((u) => [u.id, u])),
    unitIndex: new Map(units.map((u, i) => [u.id, i])),
    lessons,
    lessonById: new Map(lessons.map((l) => [l.id, l])),
    lessonsByUnit,
    words,
    wordById,
    grammar,
    grammarById: new Map(grammar.map((g) => [g.id, g])),
    readings,
    readingById: new Map(readings.map((r) => [r.id, r])),
    sentences,
    search,
    lookup,
  }
}
