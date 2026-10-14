import { emptyQuestions, SECTIONS, type ChoiceItem, type ClozeItem, type ListenItem, type MatchItem, type Paper, type PaperConfig, type PaperQuestions, type SectionId, type TfItem } from './types'

export interface SanitizeOptions {
  /** shuffle choice / listening options once (fresh AI output); keep the order for imported papers */
  shuffle?: boolean
  /** cap each section at the configured count (fresh AI output); imports keep everything */
  cap?: boolean
  rng?: () => number
}

export interface SanitizeResult {
  paper: Paper
  /** questions still missing per section */
  shortfall: Partial<Record<SectionId, number>>
  /** how many raw items were dropped as invalid */
  dropped: number
}

const CJK = /[㐀-鿿]/

const str = (v: unknown): string => (typeof v === 'string' ? v.replace(/\s+/g, ' ').trim() : typeof v === 'number' ? String(v) : '')
const arr = (v: unknown): unknown[] => (Array.isArray(v) ? v : [])
const obj = (v: unknown): Record<string, unknown> => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : {})

function bool(v: unknown): boolean | null {
  if (typeof v === 'boolean') return v
  const s = str(v).toLowerCase()
  if (['true', 'correct', 'verdadero', '正确', '对', 'v', 't', 'yes', 'sí', 'si'].includes(s)) return true
  if (['false', 'incorrect', 'falso', '错误', '错', 'f', 'no'].includes(s)) return false
  return null
}

/** answer given as index, letter (A/B/C) or the option text */
function answerIndex(v: unknown, options: string[]): number {
  if (typeof v === 'number' && Number.isInteger(v)) return v >= 0 && v < options.length ? v : -1
  const s = str(v)
  if (/^[A-Fa-f]$/.test(s)) return 'abcdef'.indexOf(s.toLowerCase())
  if (/^\d+$/.test(s)) return Number(s) < options.length ? Number(s) : -1
  return options.findIndex((o) => o.toLowerCase() === s.toLowerCase())
}

function shuffleIdx(n: number, rng: () => number): number[] {
  const a = Array.from({ length: n }, (_, i) => i)
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Clean option list: trimmed, unique, at most 3 (always keeping the answer), answer remapped. */
function cleanOptions(rawOptions: unknown, rawAnswer: unknown, shuffle: boolean, rng: () => number): { options: string[]; answer: number } | null {
  const opts = arr(rawOptions).map((o) => str(o).replace(/^[A-Fa-f][.)、]\s*/, ''))
  const ans = answerIndex(rawAnswer, opts)
  if (ans < 0 || !opts[ans]) return null
  const seen = new Set<string>()
  const keep: { t: string; isAns: boolean }[] = []
  opts.forEach((t, i) => {
    const k = t.toLowerCase()
    if (!t || seen.has(k)) return
    seen.add(k)
    keep.push({ t, isAns: i === ans })
  })
  // three options (a/b/c): the answer plus the first two distractors
  const answerItem = keep.find((k) => k.isAns)!
  const distractors = keep.filter((k) => !k.isAns).slice(0, 2)
  if (!distractors.length) return null
  let items = [answerItem, ...distractors]
  // restore the model's original relative order before any shuffle
  items.sort((a, b) => keep.indexOf(a) - keep.indexOf(b))
  if (shuffle) items = shuffleIdx(items.length, rng).map((i) => items[i])
  return { options: items.map((k) => k.t), answer: items.findIndex((k) => k.isAns) }
}

/** Normalize blanks to a single ___; if there is none, blank out the answer when it appears once. */
function clozeSentence(sentence: string, answer: string): string | null {
  let s = sentence.replace(/_{2,}|＿+|\(\s*\)|（\s*）|\[\s*\]/g, '___')
  const blanks = s.split('___').length - 1
  if (blanks === 1) return s
  if (blanks > 1) return null
  if (!answer) return null
  const re = new RegExp(`(^|[^\\p{L}])(${answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?=$|[^\\p{L}])`, 'giu')
  const hits = [...s.matchAll(re)]
  if (hits.length !== 1) return null
  s = s.replace(re, (_m, pre) => `${pre}___`)
  return s
}

export function sanitizePaper(raw: unknown, config: PaperConfig, opts: SanitizeOptions = {}): SanitizeResult {
  const { shuffle = true, cap = true, rng = Math.random } = opts
  const r = obj(raw)
  // tolerate {paper:{...}} and {questions:{...}} wrappers
  const inner = r.paper ? obj(r.paper) : r
  const qsrc = Object.keys(obj(inner.questions)).length ? obj(inner.questions) : inner
  const q: PaperQuestions = emptyQuestions()
  let dropped = 0

  const seenMatch = new Set<string>()
  for (const it of arr(qsrc.match)) {
    const o = obj(it)
    const es = str(o.es)
    const zh = str(o.zh)
    if (!es || !zh || seenMatch.has(es.toLowerCase()) || seenMatch.has(zh)) {
      dropped++
      continue
    }
    seenMatch.add(es.toLowerCase())
    seenMatch.add(zh)
    q.match.push({ es, zh } satisfies MatchItem)
  }

  const seenSent = new Set<string>()
  const fresh = (s: string) => {
    const k = s.toLowerCase()
    if (seenSent.has(k)) return false
    seenSent.add(k)
    return true
  }

  for (const it of arr(qsrc.tf)) {
    const o = obj(it)
    const sentence = str(o.sentence)
    const correct = bool(o.correct)
    if (!sentence || correct == null || !fresh(sentence)) {
      dropped++
      continue
    }
    const item: TfItem = { sentence, correct, explain: str(o.explain) }
    const focus = str(o.focus)
    if (focus === 'vocab' || focus === 'grammar') item.focus = focus
    const fix = str(o.fix)
    if (!correct && fix && fix.toLowerCase() !== sentence.toLowerCase()) item.fix = fix
    q.tf.push(item)
  }

  for (const it of arr(qsrc.choice)) {
    const o = obj(it)
    const question = str(o.question)
    const cleaned = cleanOptions(o.options, o.answer, shuffle, rng)
    if (!question || !cleaned || !fresh(question)) {
      dropped++
      continue
    }
    const lang = str(o.questionLang)
    const item: ChoiceItem = { question, questionLang: lang === 'zh' || lang === 'es' ? lang : CJK.test(question) ? 'zh' : 'es', ...cleaned }
    const explain = str(o.explain)
    if (explain) item.explain = explain
    q.choice.push(item)
  }

  for (const it of arr(qsrc.cloze)) {
    const o = obj(it)
    const answer = str(o.answer)
    const sentence = clozeSentence(str(o.sentence), answer)
    if (!answer || !sentence || !fresh(sentence)) {
      dropped++
      continue
    }
    const item: ClozeItem = { sentence, answer }
    const alts = arr(o.alts).map(str).filter((a) => a && a.toLowerCase() !== answer.toLowerCase())
    if (alts.length) item.alts = [...new Set(alts)]
    const hintZh = str(o.hintZh)
    if (hintZh) item.hintZh = hintZh
    const explain = str(o.explain)
    if (explain) item.explain = explain
    q.cloze.push(item)
  }

  for (const it of arr(qsrc.listen)) {
    const o = obj(it)
    const es = str(o.es)
    const cleaned = cleanOptions(o.options, o.answer, shuffle, rng)
    if (!es || !cleaned || !fresh(es)) {
      dropped++
      continue
    }
    q.listen.push({ es, zh: str(o.zh), ...cleaned } satisfies ListenItem)
  }

  const shortfall: SanitizeResult['shortfall'] = {}
  for (const { id } of SECTIONS) {
    const want = config.sections[id].count
    if (cap && q[id].length > want) q[id] = q[id].slice(0, want) as never
    if (q[id].length < want) shortfall[id] = want - q[id].length
  }

  return {
    paper: {
      title: str(inner.title) || '拍照试卷',
      scope: str(inner.scope),
      config,
      questions: q,
    },
    shortfall,
    dropped,
  }
}

/** Add top-up questions to an existing paper, skipping duplicates and respecting the configured counts. */
export function mergeQuestions(base: PaperQuestions, extra: PaperQuestions, config: PaperConfig): PaperQuestions {
  const out = emptyQuestions()
  for (const { id } of SECTIONS) {
    const key = (x: unknown) => {
      const o = x as Record<string, string>
      return (o.es ?? o.sentence ?? o.question ?? '').toLowerCase()
    }
    const seen = new Set(base[id].map(key))
    const add = (extra[id] as unknown[]).filter((x) => !seen.has(key(x)))
    out[id] = [...base[id], ...add].slice(0, Math.max(config.sections[id].count, base[id].length)) as never
  }
  return out
}
