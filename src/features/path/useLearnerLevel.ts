import { useMemo } from 'react'
import { getContent } from '../../content'
import { LEVEL_INFO, type Lesson } from '../../content/types'
import { useProgress } from '../../store/progress'
import { useSettings } from '../../store/settings'

export type LessonState = 'done' | 'current' | 'open' | 'locked'

/** Where the learner is in the course. */
export function useCourseState() {
  const lessonsDone = useProgress((s) => s.lessons)
  const units = useProgress((s) => s.units)
  const unlockIndex = useProgress((s) => s.unlockIndex)
  const freeMode = useSettings((s) => s.freeMode)
  return useMemo(() => {
    const c = getContent()
    const states = new Map<string, LessonState>()
    let current: Lesson | null = null
    for (const l of c.lessons) {
      const uIdx = c.unitIndex.get(l.unitId) ?? 0
      const done = !!lessonsDone[l.id] || !!units[l.unitId]?.passed
      if (done) {
        states.set(l.id, 'done')
        continue
      }
      if (!current) {
        current = l
        states.set(l.id, 'current')
      } else if (freeMode || uIdx <= unlockIndex) states.set(l.id, 'open')
      else states.set(l.id, 'locked')
    }
    const currentUnitIndex = current ? (c.unitIndex.get(current.unitId) ?? 0) : c.units.length - 1
    return { states, current, currentUnitIndex }
  }, [lessonsDone, units, unlockIndex, freeMode])
}

/** Human description of the learner level for AI prompts. */
export function useLearnerLevel(): string {
  const { current } = useCourseState()
  const placement = useProgress((s) => s.placement)
  const c = getContent()
  const unit = current ? c.unitById.get(current.unitId) : c.units[c.units.length - 1]
  if (!unit) return 'A1 零基础'
  const lvl = unit.level === 'A0' ? 'A1（零基础，刚开始学发音）' : `${unit.level}（${LEVEL_INFO[unit.level].name}）`
  return `${lvl}，正在学习「${unit.title}」${placement ? `，入学测试结果 ${placement.level}` : ''}`
}
