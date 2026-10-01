import { create } from 'zustand'
import type { Exercise } from '../lib/exercises/types'

export interface Run {
  kind: 'mistakes' | 'exam' | 'level' | 'placement' | 'conj'
  level?: string
  title: string
  exercises: Exercise[]
  timeLimit?: number
  unitIds?: string[]
  retryWrong?: boolean
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
