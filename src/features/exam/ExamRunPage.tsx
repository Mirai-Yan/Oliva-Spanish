import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { getContent } from '../../content'
import { pointLabel } from '../../lib/exercises/generate'
import { db } from '../../store/db'
import { markMistakeRight, markMistakeWrong, trackAnswer } from '../../store/mistakes'
import { useProgress } from '../../store/progress'
import { useRun } from '../../store/run'
import { SessionPlayer, type SessionResult } from '../lesson/SessionPlayer'
import { ResultScreen } from '../lesson/ResultScreen'
import { skillTally } from '../lesson/LessonPage'
import { BreakdownList } from './Breakdown'

export function ExamRunPage() {
  const run = useRun((s) => s.run)
  const nav = useNavigate()
  const addXp = useProgress((s) => s.addXp)
  const addSkills = useProgress((s) => s.addSkills)
  const [done, setDone] = useState<{ r: SessionResult; xp: number; breakdown: Record<string, { label: string; c: number; t: number }> } | null>(null)
  if (!run) return <Navigate to="/" replace />

  const onFinish = async (r: SessionResult) => {
    const c = getContent()
    const acc = r.total ? r.correct / r.total : 1
    const breakdown: Record<string, { label: string; c: number; t: number }> = {}
    for (const { ex, outcome } of r.items) {
      const p = pointLabel(c, ex)
      const b = (breakdown[p.id] ??= { label: p.label, c: 0, t: 0 })
      b.t++
      if (outcome.correct) b.c++
    }
    let xp = 0
    if (run.kind === 'mistakes') {
      for (const { ex, outcome } of r.items) {
        if (outcome.correct) await markMistakeRight(ex.key)
        else await markMistakeWrong(ex.key, outcome.user)
      }
      xp = 5 + r.correct
    } else if (run.kind === 'exam' || run.kind === 'level') {
      xp = (run.kind === 'level' ? 20 : 10) + Math.round(acc * 20)
      await db.exams.add({
        kind: run.kind === 'level' ? 'level' : 'custom',
        title: run.title,
        score: acc,
        correct: r.correct,
        total: r.total,
        seconds: r.seconds,
        breakdown,
        createdAt: Date.now(),
        unitIds: run.unitIds,
        level: run.level,
      })
    } else {
      xp = 5 + Math.round(acc * 10)
    }
    addXp(xp, r.seconds)
    addSkills(skillTally(r))
    setDone({ r, xp, breakdown })
  }

  if (done) {
    const acc = done.r.total ? done.r.correct / done.r.total : 1
    return (
        <ResultScreen
          result={done.r}
          xp={done.xp}
          title={run.kind === 'mistakes' ? '错题复习完成！' : run.kind === 'level' ? (acc >= 0.7 ? `${run.level} 结业考通过！` : `得分 ${Math.round(acc * 100)}，还差一点`) : run.kind === 'exam' ? `考试得分 ${Math.round(acc * 100)}` : '完成！'}
          subtitle={run.kind === 'mistakes' ? '做对的题连续对两次就会移出错题本' : run.title}
          passed={acc >= (run.kind === 'level' ? 0.7 : 0.6)}
          actions={
            <button type="button" className="btn btn-primary flex-1" onClick={() => nav(run.kind === 'mistakes' ? '/review' : run.kind === 'exam' || run.kind === 'level' ? '/exam' : '/')}>
              完成
            </button>
          }
          extra={run.kind === 'exam' || run.kind === 'level' ? <BreakdownList breakdown={done.breakdown} /> : undefined}
        />
    )
  }

  return (
    <SessionPlayer
      exercises={run.exercises}
      retryWrong={run.retryWrong ?? false}
      timeLimit={run.timeLimit}
      contextLabel={run.title}
      onAnswer={run.kind === 'mistakes' ? undefined : trackAnswer}
      onFinish={onFinish}
      onExit={() => nav(-1)}
    />
  )
}
