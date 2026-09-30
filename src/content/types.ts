export type Level = 'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1'
export const LEVELS: Level[] = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1']

export const LEVEL_INFO: Record<Level, { name: string; desc: string }> = {
  A0: { name: '发音入门', desc: '字母、发音与拼读规则' },
  A1: { name: '入门级', desc: '能用简单句介绍自己、处理日常最基本的交流' },
  A2: { name: '初级', desc: '能描述过去的经历、日常生活和身边环境' },
  B1: { name: '中级', desc: '能应对旅行中的大多数情况，表达观点和愿望' },
  B2: { name: '中高级', desc: '能流利地与母语者交流，理解复杂文章的主旨' },
  C1: { name: '高级', desc: '能灵活有效地在社交、学术和职业场合使用语言' },
}

export type POS = 'n' | 'v' | 'adj' | 'adv' | 'prep' | 'conj' | 'pron' | 'art' | 'det' | 'interj' | 'num' | 'phr'

export const POS_ZH: Record<POS, string> = {
  n: '名词',
  v: '动词',
  adj: '形容词',
  adv: '副词',
  prep: '介词',
  conj: '连词',
  pron: '代词',
  art: '冠词',
  det: '限定词',
  interj: '感叹词',
  num: '数词',
  phr: '短语',
}

/**
 * Compact vocabulary entry.
 * es: lemma. For nouns g gives gender; f gives the feminine form when it differs (profesor → profesora).
 */
export interface Word {
  id: string
  es: string
  zh: string
  pos: POS
  g?: 'm' | 'f' | 'mf'
  f?: string
  pl?: string
  /** example sentence [es, zh] */
  ex?: [string, string]
  /** etymology / 词源, Chinese prose with the chain e.g. 拉丁语 filius → hijo */
  ety?: string
  /** English (or other) cognate hint */
  en?: string
  /** Latin American variant or usage */
  latam?: string
  note?: string
  emoji?: string
  level: Level
  tags?: string[]
  /** set by the loader */
  unit?: string
}

export interface GrammarPoint {
  id: string
  title: string
  titleEs?: string
  level: Level
  /** one-line summary shown in lessons */
  summary: string
  /** Markdown body (Chinese), may contain tables */
  body: string
  examples: [string, string][]
  /** 语法溯源 Markdown */
  origin?: string
  /** common mistakes of Chinese learners */
  pitfalls?: string[]
  latam?: string
  /** conjugation tables to show: verbs × tenses */
  tables?: { verbs: string[]; tense: import('../lib/conjugate').Tense }[]
  unit?: string
}

export interface Sentence {
  id: string
  es: string
  zh: string
  /** other acceptable Spanish versions */
  alt?: string[]
  /** grammar point ids this sentence practises */
  g?: string[]
  /** extra wrong tokens for word-bank exercises */
  distract?: string[]
}

export interface Cloze {
  id: string
  /** Spanish with a single blank written as ___ */
  text: string
  answers: string[]
  /** if present: multiple choice, first answer must be among options */
  options?: string[]
  hint?: string
  zh?: string
  g?: string[]
  explain?: string
}

export interface ConjDrill {
  verbs: string[]
  tenses: import('../lib/conjugate').Tense[]
  persons?: number[]
  g?: string
}

export interface DialogueLine {
  who: string
  es: string
  zh: string
}

export interface Dialogue {
  id: string
  title: string
  lines: DialogueLine[]
}

export type Question =
  | { type: 'mc'; q: string; options: string[]; answer: number; explain?: string }
  | { type: 'tf'; q: string; answer: boolean; explain?: string }

export interface Reading {
  id: string
  level: Level
  title: string
  titleZh: string
  topic: string
  /** paragraphs, each a list of [es, zh] sentence pairs */
  paras: [string, string][][]
  /** inflected forms or names → Chinese gloss, when not derivable from the dictionary */
  gloss?: Record<string, string>
  questions: Question[]
  unit?: string
}

export interface WritingPrompt {
  id: string
  prompt: string
  /** target length in words */
  words: [number, number]
  hints?: string[]
}

/** Pronunciation drill items (A0). g = the pronunciation topic (grammar point id) it belongs to. */
export type PronItem = { g: string } & (
  | { type: 'pair'; a: string; b: string; focus: string }
  | { type: 'stress'; word: string }
  | { type: 'spell'; word: string; zh?: string }
)

export interface Unit {
  id: string
  level: Level
  order: number
  title: string
  titleEs: string
  icon: string
  goals: string[]
  grammar: GrammarPoint[]
  words: Word[]
  sentences: Sentence[]
  cloze: Cloze[]
  conj?: ConjDrill[]
  dialogues?: Dialogue[]
  readings: Reading[]
  writing?: WritingPrompt[]
  pron?: PronItem[]
  /** number of words per vocab lesson (default 8) */
  chunk?: number
}

export type LessonKind = 'vocab' | 'grammar' | 'listen' | 'read' | 'pron' | 'test'

export interface Lesson {
  id: string
  unitId: string
  kind: LessonKind
  title: string
  words?: string[]
  grammar?: string
  reading?: string
  dialogue?: string
}

export type Skill = 'vocab' | 'grammar' | 'listen' | 'speak' | 'read' | 'write'
export const SKILL_ZH: Record<Skill, string> = {
  vocab: '词汇',
  grammar: '语法',
  listen: '听力',
  speak: '口语',
  read: '阅读',
  write: '写作',
}
