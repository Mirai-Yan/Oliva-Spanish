import { create } from 'zustand'
import type { Exercise } from '../lib/exercises/types'

export interface Run {
  kind: 'mistakes' | 'exam' | 'level' | 'placement' | 'conj' | 'paper'
  level?: string
  title: string
  exercises: Exercise[]
  timeLimit?: number
  unitIds?: string[]
  retryWrong?: boolean
  /** points per exercise key (papers); the score is then earned / total points */
  points?: Record<string, number>
  paperId?: number
  /** show the "skip" button on listening/speaking items (default true) */
  allowSkip?: boolean
}

interface RunStore {
  run: Run | null
  start: (r: Run) => void
  clear: () => void
}

/** Hands a prepared exercise list to the full-screen runner page. */
export const useRun = create<RunStore>((set) => ({
  run: null,
  start: (run) => set({ run }),
  clear: () => set({ run: null }),
}))
