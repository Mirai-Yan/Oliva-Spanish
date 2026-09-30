import { useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { getContent } from '../../content'
import { lessonSession } from '../../lib/exercises/generate'
import type { Skill } from '../../content/types'
import { useProgress } from '../../store/progress'
import { addCards } from '../../store/review'
import { trackAnswer } from '../../store/mistakes'
import { SessionPlayer, type SessionResult } from './SessionPlayer'
import { ResultScreen } from './ResultScreen'

export function skillTally(r: SessionResult) {
  const skills: Partial<Record<Skill, { c: number; t: number }>> = {}
  for (const { ex, outcome } of r.items) {
    const s = (skills[ex.skill] ??= { c: 0, t: 0 })
    s.t++
    if (outcome.correct) s.c++
  }
  return skills
}

export function LessonPage() {
  const { id = '' } = useParams()
  const loc = useLocation()
  // a new lesson id must start a fresh session
  return <LessonInner key={id + loc.search} />
}

function LessonInner() {
  const { id = '' } = useParams()
  const [sp] = useSearchParams()
  const review = sp.get('review') === '1'
  const jump = sp.get('jump') === '1'
  const nav = useNavigate()
  const c = getContent()
  const lesson = c.lessonById.get(id)
  const unit = lesson ? c.unitById.get(lesson.unitId) : undefined
  const [session, setSession] = useState(() => (lesson ? lessonSession(c, id, review) : []))
  const [result, setResult] = useState<{ r: SessionResult; xp: number; passed: boolean } | null>(null)
  const [round, setRound] = useState(0)
  const completeLesson = useProgress((s) => s.completeLesson)
  const recordUnitTest = useProgress((s) => s.recordUnitTest)
  const raiseUnlock = useProgress((s) => s.raiseUnlock)

  if (!lesson || !unit) return <Navigate to="/" replace />
  const isTest = lesson.kind === 'test'

  const onFinish = (r: SessionResult) => {
    const acc = r.total ? r.correct / r.total : 1
    let xp: number
    let passed = true
    if (isTest) {
      passed = acc >= 0.8
      xp = passed ? 20 : 5
      if (passed) {
        const idx = c.unitIndex.get(unit.id) ?? 0
        if (jump) {
          // passing a jump test completes every earlier unit too
          const done = useProgress.getState().units
          c.units.slice(0, idx).forEach((u) => !done[u.id]?.passed && recordUnitTest(u.id, 0, true, true))
          recordUnitTest(unit.id, acc, true, true)
        } else recordUnitTest(unit.id, acc, true)
        raiseUnlock(idx + 1)
      } else recordUnitTest(unit.id, acc, false)
    } else {
      xp = review ? 5 : 10 + (acc === 1 ? 5 : 0)
    }
    completeLesson(lesson.id, { xp, accuracy: acc, seconds: r.seconds, skills: skillTally(r) })
    if (lesson.kind === 'vocab' && lesson.words) addCards(lesson.words, 'lesson')
    setResult({ r, xp, passed })
  }

  if (result) {
    const title = isTest ? (result.passed ? '单元通关！' : '差一点点！') : '课程完成！'
    const subtitle = isTest
      ? result.passed
        ? `得分 ${Math.round((result.r.correct / Math.max(1, result.r.total)) * 100)}%，${unit.title} 已通关 👑`
        : `得分 ${Math.round((result.r.correct / Math.max(1, result.r.total)) * 100)}%，需要 80% 才能通关。复习一下错题再来！`
      : `${unit.title} · ${lesson.title}`
    return (
      <ResultScreen
        result={result.r}
        xp={result.xp}
        title={title}
        subtitle={subtitle}
        passed={result.passed}
        actions={
          <>
            <button type="button" className="btn btn-primary flex-1" onClick={() => nav('/')}>
              继续
            </button>
            <button
              type="button"
              className="btn btn-ghost flex-1"
              onClick={() => {
                setSession(lessonSession(c, id, true))
                setRound((n) => n + 1)
                setResult(null)
              }}
            >
              再练一次
            </button>
          </>
        }
      />
    )
  }

  return (
    <SessionPlayer
      key={round}
      exercises={session}
      retryWrong={!isTest}
      contextLabel={`${unit.level} · ${unit.title}（${unit.titleEs}）· ${lesson.title}`}
      onAnswer={trackAnswer}
      onFinish={onFinish}
      onExit={() => nav(-1)}
    />
  )
}
