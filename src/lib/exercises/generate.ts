import type { ContentDB } from '../../content'
import type { Cloze, GrammarPoint, Lesson, PronItem, Reading, Sentence, Skill, Unit, Word } from '../../content/types'
import { conjugate, PERSONS, TENSE_BY_ID, type Tense } from '../conjugate'
import { sample, searchKey, shuffle, uniqBy, wordTokens } from '../text/normalize'
import { stressIndex, syllabify } from '../text/syllables'
import type { Exercise } from './types'
import { hasAI } from '../../store/settings'

// ---------- word display helpers ----------

/** Proper nouns (España, México, China) are written with a capital and take no article. */
const isProper = (w: Word) => /^\p{Lu}/u.test(w.es)

export function article(w: Word): string {
  if (w.pos !== 'n' || !w.g || isProper(w)) return ''
  if (w.g === 'f') {
    const first = syllabify(w.es)[0] ?? ''
    // el agua, el hambre: feminine nouns starting with stressed a-
    if (/^h?[aá]/i.test(first) && stressIndex(w.es) === 0 && syllabify(w.es).length > 1) return 'el'
    return 'la'
  }
  return w.g === 'm' ? 'el' : 'el/la'
}

/** Dictionary-style label: "el libro", "el profesor, la profesora", "alto, alta". */
export function wordLabel(w: Word): string {
  if (w.pos === 'n' && w.g && !isProper(w)) {
    const art = article(w)
    if (w.f) return `${art === 'el/la' ? 'el' : art} ${w.es}, la ${w.f}`
    return `${art} ${w.es}`
  }
  if (w.f) return `${w.es}, ${w.f}`
  return w.es
}

/** What to read aloud for a word. */
export function wordSpeech(w: Word): string {
  if (w.pos === 'n' && w.g && !isProper(w)) {
    const art = article(w)
    if (w.f) return `${art === 'el/la' ? 'el' : art} ${w.es}, la ${w.f}`
    return art === 'el/la' ? `el ${w.es}, la ${w.es}` : `${art} ${w.es}`
  }
  if (w.f) return `${w.es}, ${w.f}`
  return w.es
}

/** Accepted typed answers for a word. */
export function wordAnswers(w: Word): string[] {
  const out = [w.es]
  if (w.pos === 'n' && w.g && !isProper(w)) {
    const art = article(w)
    if (art === 'el/la') out.push(`el ${w.es}`, `la ${w.es}`)
    else out.push(`${art} ${w.es}`)
    if (w.f) out.push(w.f, `la ${w.f}`)
  } else if (w.f) out.push(w.f, `${w.es}, ${w.f}`)
  return uniqBy(out, (x) => x)
}

// ---------- pools ----------

function levelWords(db: ContentDB, unit: Unit | undefined): Word[] {
  if (!unit) return db.words
  return db.words.filter((w) => w.level === unit.level)
}

function distract<T>(target: T, pool: T[], n: number, key: (t: T) => string, prefer?: (t: T) => boolean): T[] {
  const tk = key(target)
  const cand = uniqBy(
    pool.filter((p) => p !== target && key(p) !== tk),
    key,
  )
  const good = shuffle(cand.filter((c) => (prefer ? prefer(c) : true)))
  const rest = shuffle(cand.filter((c) => (prefer ? !prefer(c) : false)))
  return [...good, ...rest].slice(0, n)
}

function makeChoice<T>(target: T, others: T[], label: (t: T) => string) {
  const opts = shuffle([target, ...others])
  return { options: opts.map(label), answer: opts.indexOf(target) }
}

function wordPool(db: ContentDB, unit: Unit | undefined, words: Word[]): Word[] {
  const unitWords = unit?.words ?? []
  const lvl = levelWords(db, unit)
  return uniqBy([...words, ...unitWords, ...lvl], (w) => w.id)
}

// ---------- single exercise builders ----------

const wref = (w: Word) => ({ unit: w.unit, words: [w.id] })

export function exMeaning(w: Word, pool: Word[]): Exercise {
  const others = distract(w, pool, 3, (x) => x.zh, (x) => x.pos === w.pos)
  const c = makeChoice(w, others, (x) => x.zh)
  return {
    key: `mean:${w.id}`,
    kind: 'choice',
    skill: 'vocab',
    ref: wref(w),
    title: '选择正确的意思',
    prompt: wordLabel(w),
    promptLang: 'es',
    audio: wordSpeech(w),
    optionLang: 'zh',
    ...c,
  }
}

export function exTranslateWord(w: Word, pool: Word[]): Exercise {
  const others = distract(w, pool, 3, (x) => wordLabel(x), (x) => x.pos === w.pos)
  const c = makeChoice(w, others, wordLabel)
  return {
    key: `trw:${w.id}`,
    kind: 'choice',
    skill: 'vocab',
    ref: wref(w),
    title: '用西班牙语怎么说？',
    prompt: w.zh,
    promptLang: 'zh',
    optionLang: 'es',
    speakOptions: true,
    ...c,
  }
}

export function exListenWord(w: Word, pool: Word[]): Exercise {
  const others = distract(w, pool, 3, (x) => wordLabel(x), (x) => x.pos === w.pos)
  const c = makeChoice(w, others, wordLabel)
  return {
    key: `lsw:${w.id}`,
    kind: 'choice',
    skill: 'listen',
    ref: wref(w),
    title: '你听到的是哪个？',
    audio: wordSpeech(w),
    audioOnly: true,
    optionLang: 'es',
    ...c,
  }
}

export function exDictWord(w: Word): Exercise {
  return {
    key: `dcw:${w.id}`,
    kind: 'type',
    skill: 'listen',
    ref: wref(w),
    title: '听写：写出你听到的单词',
    audio: wordSpeech(w),
    answers: wordAnswers(w),
    placeholder: '用西班牙语输入…',
  }
}

export function exRecallWord(w: Word): Exercise {
  return {
    key: `rcw:${w.id}`,
    kind: 'type',
    skill: 'vocab',
    ref: wref(w),
    title: '写出这个词的西班牙语',
    prompt: w.zh,
    promptLang: 'zh',
    sub: w.pos === 'n' && w.g ? '名词可以带冠词' : undefined,
    answers: wordAnswers(w),
    placeholder: '用西班牙语输入…',
  }
}

export function exMatch(words: Word[]): Exercise {
  const ws = uniqBy(words, (w) => w.zh).slice(0, 5)
  return {
    key: `match:${ws.map((w) => w.id).join(',')}`,
    kind: 'match',
    skill: 'vocab',
    ref: { unit: ws[0]?.unit, words: ws.map((w) => w.id) },
    title: '把对应的词配对',
    pairs: ws.map((w) => [wordLabel(w), w.zh]),
  }
}

type SentLike = Pick<Sentence, 'id' | 'es' | 'zh' | 'alt' | 'g' | 'distract'> & { unit?: string }

const sref = (s: SentLike) => ({ unit: s.unit, grammar: s.g })

export function exBuild(s: SentLike, pool: SentLike[]): Exercise {
  const tokens = wordTokens(s.es)
  const tokenKeys = new Set(tokens.map((t) => searchKey(t)))
  let extra = s.distract ?? []
  if (extra.length < 2) {
    const fromPool = shuffle(pool.flatMap((p) => wordTokens(p.es))).filter((t) => !tokenKeys.has(searchKey(t)))
    extra = uniqBy([...extra, ...fromPool], (t) => searchKey(t)).slice(0, Math.min(4, Math.max(2, Math.ceil(tokens.length / 2))))
  }
  return {
    key: `build:${s.id}`,
    kind: 'build',
    skill: 'grammar',
    ref: sref(s),
    title: '用词块拼出这句话',
    prompt: s.zh,
    promptLang: 'zh',
    tokens: shuffle([...tokens, ...extra]),
    answers: [s.es, ...(s.alt ?? [])],
  }
}

export function exSentMeaning(s: SentLike, pool: SentLike[]): Exercise {
  const others = distract(s, pool, 2, (x) => x.zh)
  const c = makeChoice(s, others, (x) => x.zh)
  return {
    key: `smean:${s.id}`,
    kind: 'choice',
    skill: 'read',
    ref: sref(s),
    title: '这句话是什么意思？',
    prompt: s.es,
    promptLang: 'es',
    audio: s.es,
    optionLang: 'zh',
    ...c,
  }
}

export function exSentListen(s: SentLike, pool: SentLike[]): Exercise {
  const others = distract(s, pool, 2, (x) => x.es)
  const c = makeChoice(s, others, (x) => x.es)
  return {
    key: `slisten:${s.id}`,
    kind: 'choice',
    skill: 'listen',
    ref: sref(s),
    title: '你听到的是哪一句？',
    audio: s.es,
    audioOnly: true,
    optionLang: 'es',
    ...c,
  }
}

export function exSentDictation(s: SentLike): Exercise {
  return {
    key: `sdict:${s.id}`,
    kind: 'type',
    skill: 'listen',
    ref: sref(s),
    title: '听写：写下你听到的句子',
    audio: s.es,
    answers: [s.es, ...(s.alt ?? [])],
    sub: s.zh,
    placeholder: '用西班牙语输入…',
  }
}

export function exSentTranslate(s: SentLike): Exercise {
  return {
    key: `strans:${s.id}`,
    kind: 'type',
    skill: 'write',
    ref: sref(s),
    title: '翻译成西班牙语',
    prompt: s.zh,
    promptLang: 'zh',
    answers: [s.es, ...(s.alt ?? [])],
    placeholder: '用西班牙语输入…',
  }
}

export function exSpeak(s: { id: string; es: string; zh?: string; unit?: string; g?: string[] }): Exercise {
  return {
    key: `speak:${s.id}`,
    kind: 'speak',
    skill: 'speak',
    ref: { unit: s.unit, grammar: s.g },
    title: '大声跟读',
    text: s.es,
    zh: s.zh,
  }
}

export function exCloze(c: Cloze, unit?: string): Exercise {
  const ref = { unit, grammar: c.g }
  if (c.options?.length) {
    const opts = shuffle(c.options)
    return {
      key: `cloze:${c.id}`,
      kind: 'choice',
      skill: 'grammar',
      ref,
      title: '选择正确的一项填空',
      cloze: c.text,
      sub: c.zh,
      optionLang: 'es',
      options: opts,
      answer: opts.indexOf(c.answers[0]),
      explain: c.explain,
    }
  }
  return {
    key: `cloze:${c.id}`,
    kind: 'type',
    skill: 'grammar',
    ref,
    title: c.hint ? `填空（${c.hint}）` : '填空',
    cloze: c.text,
    sub: c.zh,
    answers: c.answers,
    strict: true,
    explain: c.explain,
    placeholder: '填入…',
  }
}

const SUBJECT = ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos']
const SUBJECT_ALT = ['yo', 'tú', 'ella', 'nosotras', 'vosotras', 'ellas']
const SUBJECT_USTED = [null, null, 'usted', null, null, 'ustedes']

export function exConj(verb: string, tense: Tense, person: number, unit?: string, g?: string): Exercise | null {
  const form = conjugate(verb, tense)[person]
  if (!form) return null
  const subjects = [SUBJECT[person], SUBJECT_ALT[person], SUBJECT_USTED[person]].filter(Boolean) as string[]
  const subj = tense === 'imp' || tense === 'impNeg' ? `(${PERSONS[person]})` : subjects[Math.floor(Math.random() * subjects.length)]
  return {
    key: `conj:${verb}:${tense}:${person}`,
    kind: 'type',
    skill: 'grammar',
    ref: { unit, grammar: g ? [g] : undefined },
    title: `动词变位 · ${TENSE_BY_ID[tense].zh}`,
    cloze: `${subj} ___`,
    sub: `${verb}（${PERSONS[person]}）`,
    answers: [form],
    strict: true,
    placeholder: `${verb} → …`,
  }
}

function exReadingQ(r: Reading, qi: number): Exercise {
  const q = r.questions[qi]
  const zh = /[一-鿿]/.test(q.q)
  if (q.type === 'tf') {
    return {
      key: `rq:${r.id}:${qi}`,
      kind: 'choice',
      skill: 'read',
      ref: { unit: r.unit },
      title: `阅读理解 · ${r.title}`,
      prompt: q.q,
      promptLang: zh ? 'zh' : 'es',
      optionLang: 'zh',
      options: ['正确', '错误'],
      answer: q.answer ? 0 : 1,
      explain: q.explain,
    }
  }
  return {
    key: `rq:${r.id}:${qi}`,
    kind: 'choice',
    skill: 'read',
    ref: { unit: r.unit },
    title: `阅读理解 · ${r.title}`,
    prompt: q.q,
    promptLang: zh ? 'zh' : 'es',
    optionLang: /[一-鿿]/.test(q.options.join('')) ? 'zh' : 'es',
    options: q.options,
    answer: q.answer,
    explain: q.explain,
  }
}

function pronExercises(items: PronItem[], unit: string): Exercise[] {
  const spells = items.filter((i) => i.type === 'spell') as Extract<PronItem, { type: 'spell' }>[]
  const out: Exercise[] = []
  for (const it of items) {
    if (it.type === 'pair') {
      const heard = Math.random() < 0.5 ? it.a : it.b
      const opts = shuffle([it.a, it.b])
      out.push({
        key: `pair:${it.a}:${it.b}`,
        kind: 'choice',
        skill: 'listen',
        ref: { unit, grammar: [it.g] },
        title: '你听到的是哪个？',
        sub: it.focus,
        audio: heard,
        audioOnly: true,
        options: opts,
        optionLang: 'es',
        answer: opts.indexOf(heard),
        speakOptions: true,
        voiceLang: it.spain ? 'es-ES' : undefined,
      })
    } else if (it.type === 'stress') {
      const syls = syllabify(it.word)
      out.push({
        key: `stress:${it.word}`,
        kind: 'stress',
        skill: 'listen',
        ref: { unit, grammar: [it.g] },
        title: '重音在哪个音节？点一下',
        word: it.word,
        syllables: syls,
        answer: stressIndex(it.word, syls),
      })
    } else {
      const r = Math.random()
      if (r < 0.4 && spells.length >= 3) {
        const others = distract(it, spells, 2, (x) => x.word)
        const c = makeChoice(it, others, (x) => x.word)
        out.push({
          key: `sp-l:${it.word}`,
          kind: 'choice',
          skill: 'listen',
          ref: { unit, grammar: [it.g] },
          title: '你听到的是哪个？',
          audio: it.word,
          audioOnly: true,
          optionLang: 'es',
          ...c,
        })
      } else if (r < 0.75) {
        out.push({
          key: `sp-d:${it.word}`,
          kind: 'type',
          skill: 'listen',
          ref: { unit, grammar: [it.g] },
          title: '听写：写出你听到的词',
          audio: it.word,
          sub: it.zh,
          answers: [it.word],
          placeholder: '按照读音拼写…',
        })
      } else {
        out.push(exSpeak({ id: `sp-${it.word}`, es: it.word, zh: it.zh, unit, g: [it.g] }))
      }
    }
  }
  return out
}

// ---------- lessons ----------

function unitSentences(u: Unit): SentLike[] {
  return u.sentences.map((s) => ({ ...s, unit: u.id }))
}

function exampleSentences(words: Word[]): SentLike[] {
  return words.filter((w) => w.ex).map((w) => ({ id: `ex-${w.id}`, es: w.ex![0], zh: w.ex![1], unit: w.unit }))
}

function vocabLesson(db: ContentDB, u: Unit, l: Lesson, review: boolean): Exercise[] {
  const words = (l.words ?? []).map((id) => db.wordById.get(id)!).filter(Boolean)
  const pool = wordPool(db, u, words)
  const steps: Exercise[] = []
  for (let i = 0; i < words.length; i += 2) {
    const pair = words.slice(i, i + 2)
    for (const w of pair) {
      if (!review) steps.push({ key: `teach:${w.id}`, kind: 'teach-word', skill: 'vocab', ref: wref(w), title: '新单词', word: w })
      steps.push(Math.random() < 0.7 ? exMeaning(w, pool) : exListenWord(w, pool))
    }
    if (pair.length === 2 && Math.random() < 0.6) steps.push(exTranslateWord(pair[Math.floor(Math.random() * 2)], pool))
  }
  const practice: Exercise[] = []
  if (words.length >= 3) practice.push(exMatch(sample(words, Math.min(5, words.length))))
  sample(words, 2).forEach((w) => practice.push(exDictWord(w)))
  sample(words, 2).forEach((w) => practice.push(exTranslateWord(w, pool)))
  const exs = exampleSentences(words)
  const sentPool = [...exs, ...unitSentences(u)]
  sample(exs, 2).forEach((s) => practice.push(exBuild(s, sentPool)))
  sample(words, 1).forEach((w) => practice.push(exRecallWord(w)))
  const sp = sample(exs, 1)[0]
  if (sp) practice.push(exSpeak(sp))
  return [...steps, ...shuffle(practice)]
}

function grammarLesson(db: ContentDB, u: Unit, l: Lesson, review: boolean): Exercise[] {
  const g = db.grammarById.get(l.grammar!)!
  const out: Exercise[] = []
  if (!review) out.push({ key: `teach:${g.id}`, kind: 'teach-grammar', skill: 'grammar', ref: { unit: u.id, grammar: [g.id] }, title: '语法点', grammar: g })
  const cloze = u.cloze.filter((c) => c.g?.includes(g.id))
  const sents = unitSentences(u)
  const own = sents.filter((s) => s.g?.includes(g.id))
  const conj = (u.conj ?? []).filter((c) => !c.g || c.g === g.id)
  const practice: Exercise[] = []
  sample(cloze, 5).forEach((c) => practice.push(exCloze(c, u.id)))
  for (const d of conj) {
    for (let k = 0; k < 3; k++) {
      const verb = d.verbs[Math.floor(Math.random() * d.verbs.length)]
      const tense = d.tenses[Math.floor(Math.random() * d.tenses.length)]
      const persons = d.persons ?? [0, 1, 2, 3, 4, 5]
      const e = exConj(verb, tense, persons[Math.floor(Math.random() * persons.length)], u.id, g.id)
      if (e && !practice.some((p) => p.key === e.key)) practice.push(e)
    }
  }
  const picked = sample(own.length >= 3 ? own : [...own, ...sents], 5)
  picked.forEach((s, i) => {
    if (i < 2) practice.push(exBuild(s, sents))
    else if (i === 2) practice.push(exSentTranslate(s))
    else if (i === 3) practice.push(exSentMeaning(s, sents))
    else practice.push(exSentListen(s, sents))
  })
  return [...out, ...shuffle(practice).slice(0, 13)]
}

function listenLesson(u: Unit, l: Lesson, review: boolean): Exercise[] {
  const out: Exercise[] = []
  const dlg = u.dialogues?.find((d) => d.id === l.dialogue)
  if (dlg && !review) out.push({ key: `teach:${dlg.id}`, kind: 'teach-dialogue', skill: 'listen', ref: { unit: u.id }, title: '听对话', dialogue: dlg })
  const sents = unitSentences(u)
  const dlgSents: SentLike[] = (dlg?.lines ?? []).map((ln, i) => ({ id: `${dlg!.id}-${i}`, es: ln.es, zh: ln.zh, unit: u.id }))
  const pool = [...sents, ...dlgSents]
  const practice: Exercise[] = []
  sample(pool, 3).forEach((s) => practice.push(exSentListen(s, pool)))
  sample(pool, 3).forEach((s) => practice.push(exSentDictation(s)))
  sample(pool, 3).forEach((s) => practice.push(exSpeak(s)))
  sample(dlgSents.length ? dlgSents : sents, 2).forEach((s) => practice.push(exBuild(s, pool)))
  return [...out, ...shuffle(uniqBy(practice, (e) => e.key))]
}

function readLesson(db: ContentDB, u: Unit, l: Lesson): Exercise[] {
  const r = db.readingById.get(l.reading!)!
  const out: Exercise[] = [{ key: `teach:${r.id}`, kind: 'teach-reading', skill: 'read', ref: { unit: u.id }, title: '阅读短文', reading: r }]
  r.questions.forEach((_, i) => out.push(exReadingQ(r, i)))
  const sents: SentLike[] = r.paras.flat().map(([es, zh], i) => ({ id: `${r.id}-s${i}`, es, zh, unit: u.id }))
  // short sentences from the text make good word-bank / speaking items; fall back to the unit's sentences
  let short = sents.filter((s) => wordTokens(s.es).length <= 12)
  if (short.length < 3) short = [...short, ...unitSentences(u).filter((s) => wordTokens(s.es).length <= 10)]
  sample(short, 2).forEach((s) => out.push(exBuild(s, sents)))
  sample(short, 1).forEach((s) => out.push(exSpeak(s)))
  if (r.questions.length < 4) sample(sents, 1).forEach((s) => out.push(exSentMeaning(s, sents)))
  const w = u.writing?.[0]
  if (w && hasAI()) out.push({ key: `write:${w.id}:${u.id}`, kind: 'write', skill: 'write', ref: { unit: u.id }, title: '读后写', prompt: w, level: u.level })
  return out
}

function pronLesson(u: Unit, l: Lesson, review: boolean, db: ContentDB): Exercise[] {
  const g = db.grammarById.get(l.grammar!)!
  const items = (u.pron ?? []).filter((p) => p.g === g.id)
  const out: Exercise[] = []
  if (!review) out.push({ key: `teach:${g.id}`, kind: 'teach-grammar', skill: 'listen', ref: { unit: u.id, grammar: [g.id] }, title: '发音要点', grammar: g })
  let ex = pronExercises(items, u.id)
  if (ex.length < 8) ex = [...ex, ...pronExercises(items, u.id)]
  return [...out, ...shuffle(uniqBy(ex, (e) => e.key)).slice(0, 12)]
}

// ---------- tests & exams ----------

export type ExamSkill = 'vocab' | 'grammar' | 'listen' | 'read' | 'speak'

export interface ExamConfig {
  unitIds: string[]
  /** restrict to these grammar points (empty = all of the chosen units) */
  grammarIds?: string[]
  skills: ExamSkill[]
  count: number
}

/** All candidate scored exercises for a unit, grouped by skill. */
export function unitCandidates(db: ContentDB, u: Unit, grammarFilter?: Set<string>): Record<ExamSkill, Exercise[]> {
  const res: Record<ExamSkill, Exercise[]> = { vocab: [], grammar: [], listen: [], read: [], speak: [] }
  const pool = wordPool(db, u, u.words)
  const gOk = (g?: string[]) => !grammarFilter || !grammarFilter.size || (g ?? []).some((x) => grammarFilter.has(x))
  if (u.pron?.length) {
    const items = u.pron.filter((p) => gOk([p.g]))
    pronExercises(items, u.id).forEach((e) => (e.kind === 'speak' ? res.speak : res.listen).push(e))
    return res
  }
  for (const w of u.words) {
    const r = Math.random()
    res.vocab.push(r < 0.4 ? exMeaning(w, pool) : r < 0.75 ? exTranslateWord(w, pool) : exRecallWord(w))
    res.listen.push(Math.random() < 0.5 ? exListenWord(w, pool) : exDictWord(w))
  }
  for (let i = 0; i + 4 < u.words.length; i += 5) res.vocab.push(exMatch(u.words.slice(i, i + 5)))
  u.cloze.filter((c) => gOk(c.g)).forEach((c) => res.grammar.push(exCloze(c, u.id)))
  for (const d of u.conj ?? []) {
    if (!gOk(d.g ? [d.g] : undefined)) continue
    for (const v of d.verbs) {
      const t = d.tenses[Math.floor(Math.random() * d.tenses.length)]
      const ps = d.persons ?? [0, 1, 2, 3, 4, 5]
      const e = exConj(v, t, ps[Math.floor(Math.random() * ps.length)], u.id, d.g)
      if (e) res.grammar.push(e)
    }
  }
  const sents = unitSentences(u)
  sents.forEach((s, i) => {
    if (gOk(s.g)) res.grammar.push(i % 2 ? exBuild(s, sents) : exSentTranslate(s))
    res.listen.push(i % 2 ? exSentListen(s, sents) : exSentDictation(s))
    res.speak.push(exSpeak(s))
  })
  for (const r of u.readings) r.questions.forEach((_, i) => res.read.push(exReadingQ({ ...r, unit: u.id }, i)))
  sents.forEach((s) => res.read.push(exSentMeaning(s, sents)))
  if (grammarFilter?.size) {
    // with a grammar filter, vocab/listening/reading items are not about those points
    res.vocab = []
    res.listen = res.listen.filter((e) => gOk(e.ref.grammar))
    res.read = []
    res.speak = res.speak.filter((e) => gOk(e.ref.grammar))
  }
  return res
}

/** Spread `count` questions over skills and units as evenly as possible. */
export function buildExam(db: ContentDB, cfg: ExamConfig): Exercise[] {
  const gf = cfg.grammarIds?.length ? new Set(cfg.grammarIds) : undefined
  const units = cfg.unitIds.map((id) => db.unitById.get(id)).filter(Boolean) as Unit[]
  const buckets: Exercise[][] = []
  for (const u of units) {
    const c = unitCandidates(db, u, gf)
    for (const s of cfg.skills) if (c[s].length) buckets.push(shuffle(uniqBy(c[s], (e) => e.key)))
  }
  const out: Exercise[] = []
  const seen = new Set<string>()
  let progress = true
  while (out.length < cfg.count && progress) {
    progress = false
    for (const b of shuffle(buckets)) {
      const e = b.shift()
      if (!e) continue
      progress = true
      if (seen.has(e.key)) continue
      seen.add(e.key)
      out.push(e)
      if (out.length >= cfg.count) break
    }
  }
  return shuffle(out)
}

export function unitTest(db: ContentDB, u: Unit): Exercise[] {
  const skills: ExamSkill[] = u.pron?.length ? ['listen', 'speak'] : ['vocab', 'grammar', 'listen', 'read', 'speak']
  const c = unitCandidates(db, u)
  const want: Record<ExamSkill, number> = u.pron?.length
    ? { vocab: 0, grammar: 0, listen: 12, read: 0, speak: 3 }
    : { vocab: 5, grammar: 6, listen: 4, read: 3, speak: 2 }
  const out: Exercise[] = []
  for (const s of skills) out.push(...shuffle(uniqBy(c[s], (e) => e.key)).slice(0, want[s]))
  return shuffle(out)
}

export function lessonSession(db: ContentDB, lessonId: string, review = false): Exercise[] {
  const l = db.lessonById.get(lessonId)
  if (!l) return []
  const u = db.unitById.get(l.unitId)!
  switch (l.kind) {
    case 'vocab':
      return vocabLesson(db, u, l, review)
    case 'grammar':
      return grammarLesson(db, u, l, review)
    case 'listen':
      return listenLesson(u, l, review)
    case 'read':
      return readLesson(db, u, l)
    case 'pron':
      return pronLesson(u, l, review, db)
    case 'test':
      return unitTest(db, u)
  }
}

export function skillOf(e: Exercise): Skill {
  return e.skill
}

/** Human label for the knowledge point an exercise belongs to (exam breakdown). */
export function pointLabel(db: ContentDB, e: Exercise): { id: string; label: string } {
  const g = e.ref.grammar?.[0]
  if (g) {
    const gp: GrammarPoint | undefined = db.grammarById.get(g)
    if (gp) return { id: `g:${g}`, label: gp.title }
  }
  const u = e.ref.unit ? db.unitById.get(e.ref.unit) : undefined
  const skillZh: Record<Skill, string> = { vocab: '词汇', grammar: '语法', listen: '听力', speak: '口语', read: '阅读', write: '写作' }
  return { id: `${e.skill}:${u?.id ?? ''}`, label: `${skillZh[e.skill]}${u ? ' · ' + u.title : ''}` }
}

// ---------- placement & level exams ----------

const pick = <T,>(arr: T[], n: number) => shuffle(arr).slice(0, n)

/** 10 quick text-based questions sampling a whole level (used by the placement test). */
export function placementStage(db: ContentDB, level: string, size = 10): Exercise[] {
  const units = db.units.filter((u) => u.level === level)
  const vocab: Exercise[] = []
  const grammar: Exercise[] = []
  const read: Exercise[] = []
  for (const u of units) {
    const c = unitCandidates(db, u)
    vocab.push(...c.vocab.filter((e) => e.kind === 'choice'))
    grammar.push(...c.grammar.filter((e) => e.kind === 'choice' || e.kind === 'build' || e.key.startsWith('cloze:')))
    read.push(...c.read.filter((e) => e.kind === 'choice' && e.key.startsWith('smean:')))
  }
  const nv = Math.round(size * 0.35)
  const nr = Math.round(size * 0.2)
  const out = uniqBy([...pick(vocab, nv), ...pick(grammar, size - nv - nr), ...pick(read, nr)], (e) => e.key)
  return shuffle(out)
}

/** A level final exam: grammar & vocabulary, listening, reading (2 texts), optional writing. */
export function buildLevelExam(db: ContentDB, level: string): Exercise[] {
  const units = db.units.filter((u) => u.level === level)
  const gv: Exercise[] = []
  const listen: Exercise[] = []
  for (const u of units) {
    const c = unitCandidates(db, u)
    gv.push(...c.grammar, ...c.vocab.filter((e) => e.kind !== 'match'))
    listen.push(...c.listen)
  }
  const out: Exercise[] = [...pick(uniqBy(gv, (e) => e.key), 14), ...pick(uniqBy(listen, (e) => e.key), 6)]
  const readings = pick(
    db.readings.filter((r) => r.level === level && r.questions.length >= 2),
    2,
  )
  for (const r of readings) {
    out.push({ key: `teach:${r.id}`, kind: 'teach-reading', skill: 'read', ref: { unit: r.unit }, title: '阅读理解：先读短文', reading: r })
    r.questions.forEach((_, i) => out.push(exReadingQ(r, i)))
  }
  const prompts = units.flatMap((u) => (u.writing ?? []).map((w) => ({ w, u })))
  const wp = pick(prompts, 1)[0]
  if (wp && hasAI()) out.push({ key: `write:${wp.w.id}:${wp.u.id}`, kind: 'write', skill: 'write', ref: { unit: wp.u.id }, title: '写作', prompt: wp.w, level })
  return out
}
