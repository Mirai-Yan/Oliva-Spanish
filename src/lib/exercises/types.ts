import type { Dialogue, GrammarPoint, Reading, Skill, Word, WritingPrompt } from '../../content/types'

export interface ExRef {
  unit?: string
  words?: string[]
  grammar?: string[]
  /** where a non-course question came from (a photo paper) — used to group the mistake notebook */
  source?: { paperId: number; title: string }
}

interface Base {
  /** stable key of the underlying item, used for the mistake notebook */
  key: string
  skill: Skill
  ref: ExRef
  /** instruction line shown above the exercise */
  title: string
}

export type Lang = 'es' | 'zh'

export type Exercise = Base &
  (
    | { kind: 'teach-word'; word: Word }
    | { kind: 'teach-grammar'; grammar: GrammarPoint }
    | { kind: 'teach-dialogue'; dialogue: Dialogue }
    | { kind: 'teach-reading'; reading: Reading }
    | {
        kind: 'choice'
        prompt?: string
        promptLang?: Lang
        /** text to play as audio (listening) */
        audio?: string
        /** hide prompt text and rely on audio */
        audioOnly?: boolean
        /** Spanish sentence with ___ shown above options */
        cloze?: string
        sub?: string
        options: string[]
        optionLang: Lang
        answer: number
        explain?: string
        /** read the options aloud when tapped */
        speakOptions?: boolean
        /** the contrast only exists in this accent (casa / caza needs a Spain voice) */
        voiceLang?: 'es-ES'
        /** label options A / B / C (papers) */
        letters?: boolean
      }
    | {
        kind: 'match'
        pairs: [string, string][]
        /** papers: wrong tries cost points (score = clean share) instead of always passing */
        graded?: boolean
      }
    | {
        kind: 'type'
        prompt?: string
        promptLang?: Lang
        audio?: string
        cloze?: string
        sub?: string
        answers: string[]
        strict?: boolean
        placeholder?: string
        explain?: string
      }
    | { kind: 'build'; prompt: string; promptLang: Lang; audio?: string; tokens: string[]; answers: string[] }
    | { kind: 'speak'; text: string; zh?: string }
    | { kind: 'stress'; word: string; syllables: string[]; answer: number }
    | { kind: 'write'; prompt: WritingPrompt; level: string }
  )

export type ExerciseKind = Exercise['kind']

export const isTeach = (e: Exercise) => e.kind.startsWith('teach-')

export interface Outcome {
  correct: boolean
  /** what the learner answered (for the notebook / AI) */
  user: string
  /** the canonical correct answer to display */
  expected: string
  warn?: 'accent' | 'typo'
  /** skipped (e.g. can't speak now) — not counted */
  skipped?: boolean
  /** partial credit 0..1 (graded matching); when absent, correct = 1 and wrong = 0 */
  score?: number
}
