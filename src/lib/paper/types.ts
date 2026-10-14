import type { Level } from '../../content/types'

/** The five question types of a photo paper, in paper order. */
export type SectionId = 'match' | 'tf' | 'choice' | 'cloze' | 'listen'

export const SECTIONS: { id: SectionId; label: string; desc: string; unit: string }[] = [
  { id: 'match', label: '单词匹配', desc: '西语单词和中文意思连线', unit: '对' },
  { id: 'tf', label: '判断正误', desc: '判断句子的用词和语法对不对', unit: '题' },
  { id: 'choice', label: '单项选择', desc: 'A / B / C 三选一', unit: '题' },
  { id: 'cloze', label: '填空', desc: '在句子空格里写出正确的词', unit: '题' },
  { id: 'listen', label: '听力', desc: '听一句西语，选出意思', unit: '题' },
]

export const SECTION_LABEL = Object.fromEntries(SECTIONS.map((s) => [s.id, s.label])) as Record<SectionId, string>

export interface SectionConfig {
  /** number of questions (pairs for matching) */
  count: number
  /** points per question (per pair for matching) */
  points: number
}

export interface PaperConfig {
  sections: Record<SectionId, SectionConfig>
  level: Level
  /** 0 = no time limit */
  minutes: number
  /** free-text scope note from the learner ("只考生词表") */
  note: string
}

export interface MatchItem {
  es: string
  zh: string
}
export interface TfItem {
  sentence: string
  /** is the Spanish sentence correct as written */
  correct: boolean
  focus?: 'vocab' | 'grammar'
  /** Chinese explanation */
  explain: string
  /** corrected sentence when it is wrong */
  fix?: string
}
export interface ChoiceItem {
  question: string
  questionLang: 'es' | 'zh'
  options: string[]
  answer: number
  explain?: string
}
export interface ClozeItem {
  /** Spanish sentence with exactly one ___ */
  sentence: string
  answer: string
  alts?: string[]
  hintZh?: string
  explain?: string
}
export interface ListenItem {
  /** Spanish sentence read aloud */
  es: string
  zh: string
  /** Chinese meanings */
  options: string[]
  answer: number
}

export interface PaperQuestions {
  match: MatchItem[]
  tf: TfItem[]
  choice: ChoiceItem[]
  cloze: ClozeItem[]
  listen: ListenItem[]
}

export interface Paper {
  title: string
  /** what the paper covers, in Chinese */
  scope: string
  config: PaperConfig
  questions: PaperQuestions
}

export const DEFAULT_CONFIG: PaperConfig = {
  sections: {
    match: { count: 10, points: 2 },
    tf: { count: 10, points: 2 },
    choice: { count: 10, points: 3 },
    cloze: { count: 5, points: 4 },
    listen: { count: 5, points: 2 },
  },
  level: 'A1',
  minutes: 0,
  note: '',
}

export const emptyQuestions = (): PaperQuestions => ({ match: [], tf: [], choice: [], cloze: [], listen: [] })
