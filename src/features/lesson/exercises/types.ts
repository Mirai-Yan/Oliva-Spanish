import type { Exercise, Outcome } from '../../../lib/exercises/types'

export interface ExProps<K extends Exercise['kind']> {
  ex: Extract<Exercise, { kind: K }>
  /** feedback phase: input frozen */
  locked: boolean
  outcome?: Outcome
  /** register how to grade the current input (null = nothing to check yet) */
  setAnswer: (fn: (() => Outcome) | null) => void
  /** finish immediately with this outcome (match done, speak skipped…) */
  finish: (o: Outcome) => void
  /** ask the player to check now (Enter key inside an input) */
  submit: () => void
}
