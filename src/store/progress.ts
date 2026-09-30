import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { computeStreak, dayKey } from '../lib/date'
import type { Level, Skill } from '../content/types'

export interface LessonRecord {
  count: number
  best: number
  last: number
}

export interface UnitRecord {
  passed: boolean
  best: number
  /** passed via test-out without doing lessons */
  skipped?: boolean
}

interface ProgressState {
  lessons: Record<string, LessonRecord>
  units: Record<string, UnitRecord>
  xp: Record<string, number>
  seconds: Record<string, number>
  totalXp: number
  skills: Partial<Record<Skill, { c: number; t: number }>>
  placement: { level: Level; unitId: string | null; date: number } | null
  /** all lessons of units up to and including this order index are unlocked (placement / test-out) */
  unlockIndex: number
  completeLesson: (lessonId: string, r: { xp: number; accuracy: number; seconds: number; skills?: Partial<Record<Skill, { c: number; t: number }>> }) => void
  recordUnitTest: (unitId: string, score: number, passed: boolean, skipped?: boolean) => void
  addXp: (n: number, seconds?: number) => void
  addSkills: (skills: Partial<Record<Skill, { c: number; t: number }>>) => void
  setPlacement: (level: Level, unitId: string | null, unlockIndex: number) => void
  raiseUnlock: (index: number) => void
  replace: (s: Partial<ProgressState>) => void
  reset: () => void
}

const EMPTY = {
  lessons: {},
  units: {},
  xp: {},
  seconds: {},
  totalXp: 0,
  skills: {},
  placement: null,
  unlockIndex: -1,
}

function mergeSkills(a: ProgressState['skills'], b: ProgressState['skills'] = {}) {
  const out = { ...a }
  for (const [k, v] of Object.entries(b)) {
    const key = k as Skill
    const cur = out[key] ?? { c: 0, t: 0 }
    out[key] = { c: cur.c + (v?.c ?? 0), t: cur.t + (v?.t ?? 0) }
  }
  return out
}

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      ...EMPTY,
      completeLesson: (lessonId, r) =>
        set((s) => {
          const today = dayKey()
          const prev = s.lessons[lessonId]
          return {
            lessons: {
              ...s.lessons,
              [lessonId]: { count: (prev?.count ?? 0) + 1, best: Math.max(prev?.best ?? 0, r.accuracy), last: Date.now() },
            },
            xp: { ...s.xp, [today]: (s.xp[today] ?? 0) + r.xp },
            seconds: { ...s.seconds, [today]: (s.seconds[today] ?? 0) + r.seconds },
            totalXp: s.totalXp + r.xp,
            skills: mergeSkills(s.skills, r.skills),
          }
        }),
      recordUnitTest: (unitId, score, passed, skipped) =>
        set((s) => {
          const prev = s.units[unitId]
          return {
            units: {
              ...s.units,
              [unitId]: { passed: passed || !!prev?.passed, best: Math.max(prev?.best ?? 0, score), skipped: skipped || prev?.skipped },
            },
          }
        }),
      addXp: (n, seconds = 0) =>
        set((s) => {
          const today = dayKey()
          return {
            xp: { ...s.xp, [today]: (s.xp[today] ?? 0) + n },
            seconds: { ...s.seconds, [today]: (s.seconds[today] ?? 0) + seconds },
            totalXp: s.totalXp + n,
          }
        }),
      addSkills: (skills) => set((s) => ({ skills: mergeSkills(s.skills, skills) })),
      setPlacement: (level, unitId, unlockIndex) =>
        set((s) => ({ placement: { level, unitId, date: Date.now() }, unlockIndex: Math.max(s.unlockIndex, unlockIndex) })),
      raiseUnlock: (index) => set((s) => ({ unlockIndex: Math.max(s.unlockIndex, index) })),
      replace: (p) => set(p),
      reset: () => set({ ...EMPTY }),
    }),
    { name: 'oliva-progress', version: 1 },
  ),
)

export function useStreak() {
  const xp = useProgress((s) => s.xp)
  const active = new Set(Object.keys(xp).filter((k) => xp[k] > 0))
  return computeStreak(active)
}

export function useTodayXp() {
  const xp = useProgress((s) => s.xp)
  return xp[dayKey()] ?? 0
}
