import { CheckCircle2, Clock, Flag, Sparkles, X, XCircle } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ProgressBar } from '../../components/ProgressBar'
import { SpeedControl } from '../../components/Speak'
import { Sheet } from '../../components/Sheet'
import { Mascot } from '../../components/Mascot'
import { VoiceNotice } from '../../components/VoiceNotice'
import { generateJSON } from '../../lib/gemini/client'
import { JUDGE_SCHEMA, judgePrompt } from '../../lib/gemini/prompts'
import { isTeach, type Exercise, type Outcome } from '../../lib/exercises/types'
import { sfx } from '../../lib/sfx'
import { stopSpeaking } from '../../lib/speech/tts'
import { useSettings } from '../../store/settings'
import { useTutor, useTutorContext } from '../tutor/store'
import { Build } from './exercises/Build'
import { Choice } from './exercises/Choice'
import { Match } from './exercises/Match'
import { Speak } from './exercises/Speak'
import { Stress } from './exercises/Stress'
import { Teach } from './exercises/Teach'
import { TypeAnswer } from './exercises/TypeAnswer'
import { Write } from './exercises/Write'

export interface ItemResult {
  ex: Exercise
  outcome: Outcome
}

export interface SessionResult {
  /** first attempts of scored exercises */
  items: ItemResult[]
  correct: number
  total: number
  seconds: number
}

const PRAISE = ['太棒了！', '¡Muy bien!', '¡Perfecto!', '答对了！', '¡Genial!', '¡Excelente!']

function describe(ex: Exercise): string {
  switch (ex.kind) {
    case 'choice':
      return [ex.cloze, ex.prompt, ex.audioOnly ? `（听力：${ex.audio}）` : '', `选项：${ex.options.join(' / ')}`].filter(Boolean).join('\n')
    case 'type':
      return [ex.cloze, ex.prompt, ex.audio && !ex.prompt ? `（听写：${ex.audio}）` : '', ex.sub].filter(Boolean).join('\n')
    case 'build':
      return `把「${ex.prompt}」翻译成西语（词块：${ex.tokens.join(' ')}）`
    case 'speak':
      return `朗读：${ex.text}`
    case 'stress':
      return `找出 ${ex.word} 的重读音节`
    case 'match':
      return ex.pairs.map((p) => p.join(' = ')).join('；')
    default:
      return ex.title
  }
}

export function SessionPlayer({
  exercises,
  retryWrong = true,
  timeLimit,
  contextLabel,
  onAnswer,
  onFinish,
  onExit,
}: {
  exercises: Exercise[]
  retryWrong?: boolean
  /** seconds */
  timeLimit?: number
  contextLabel?: string
  onAnswer?: (ex: Exercise, outcome: Outcome, firstAttempt: boolean) => void
  onFinish: (r: SessionResult) => void
  onExit: () => void
}) {
  const [queue, setQueue] = useState<Exercise[]>(exercises)
  const [pos, setPos] = useState(0)
  const [phase, setPhase] = useState<'answer' | 'feedback'>('answer')
  const [outcome, setOutcome] = useState<Outcome | null>(null)
  const [canCheck, setCanCheck] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const [judge, setJudge] = useState<{ busy: boolean; text?: string }>({ busy: false })
  const [elapsed, setElapsed] = useState(0)
  const answerFn = useRef<(() => Outcome) | null>(null)
  const results = useRef<Map<string, ItemResult>>(new Map())
  const retried = useRef<Set<string>>(new Set())
  const started = useRef(Date.now())
  const finished = useRef(false)
  const openTutor = useTutor((s) => s.openTutor)
  const hasAI = !!useSettings((s) => s.gemini.apiKey)

  const ex = queue[pos]
  const teach = ex ? isTeach(ex) : false
  const praise = useMemo(() => PRAISE[Math.floor(Math.random() * PRAISE.length)], [pos])

  useTutorContext(ex ? `${contextLabel ?? '练习'}\n当前题目（${ex.title}）：${describe(ex)}${outcome ? `\n学生的答案：${outcome.user}\n正确答案：${outcome.expected}` : ''}` : contextLabel)

  const setAnswer = useCallback((fn: (() => Outcome) | null) => {
    answerFn.current = fn
    setCanCheck(!!fn)
  }, [])

  const finish = useCallback(() => {
    if (finished.current) return
    finished.current = true
    stopSpeaking()
    const items = [...results.current.values()].filter((r) => !r.outcome.skipped)
    // exams: unanswered questions count as wrong
    const unanswered = exercises.filter((e) => !isTeach(e) && !results.current.has(e.key)).map((e) => ({ ex: e, outcome: { correct: false, user: '（未作答）', expected: '' } }))
    const all = [...items, ...unanswered]
    onFinish({
      items: all,
      correct: all.filter((i) => i.outcome.correct).length,
      total: all.length,
      seconds: Math.round((Date.now() - started.current) / 1000),
    })
  }, [exercises, onFinish])

  // timer
  useEffect(() => {
    const t = setInterval(() => setElapsed(Math.round((Date.now() - started.current) / 1000)), 1000)
    return () => clearInterval(t)
  }, [])
  useEffect(() => {
    if (timeLimit && elapsed >= timeLimit) finish()
  }, [elapsed, timeLimit, finish])

  const record = useCallback(
    (o: Outcome) => {
      if (!ex) return
      const first = !results.current.has(ex.key)
      if (first) results.current.set(ex.key, { ex, outcome: o })
      onAnswer?.(ex, o, first)
      if (!o.correct && !o.skipped && retryWrong && !retried.current.has(ex.key)) {
        retried.current.add(ex.key)
        setQueue((q) => [...q, ex])
      }
    },
    [ex, onAnswer, retryWrong],
  )

  const check = useCallback(() => {
    if (!ex || phase !== 'answer') return
    if (teach) {
      next()
      return
    }
    const fn = answerFn.current
    if (!fn) return
    const o = fn()
    setOutcome(o)
    setPhase('feedback')
    if (o.correct) sfx.correct()
    else sfx.wrong()
    record(o)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ex, phase, teach, record])

  const direct = useCallback(
    (o: Outcome) => {
      if (phase !== 'answer') return
      setOutcome(o)
      if (o.skipped) {
        record(o)
        next()
        return
      }
      setPhase('feedback')
      if (o.correct) sfx.correct()
      else sfx.wrong()
      record(o)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [phase, record],
  )

  function next() {
    stopSpeaking()
    answerFn.current = null
    setCanCheck(false)
    setOutcome(null)
    setJudge({ busy: false })
    setPhase('answer')
    if (pos + 1 >= queue.length) finish()
    else setPos((p) => p + 1)
  }

  // Enter = check / continue
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || e.isComposing || e.defaultPrevented) return
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'TEXTAREA' && phase === 'answer' && ex?.kind === 'write') return
      if (tag === 'TEXTAREA' && phase === 'answer') return // handled by the input itself
      e.preventDefault()
      if (phase === 'feedback') next()
      else check()
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  })

  const askAI = () => {
    if (!ex || !outcome) return
    openTutor(`我在做这道题时答错了，请解释为什么：\n题型：${ex.title}\n题目：${describe(ex)}\n我的答案：${outcome.user || '（空）'}\n正确答案：${outcome.expected}`)
  }

  const appeal = async () => {
    if (!ex || !outcome || ex.kind !== 'type') return
    setJudge({ busy: true })
    try {
      const r = await generateJSON<{ acceptable: boolean; explanation: string }>({
        messages: [{ role: 'user', text: judgePrompt(describe(ex), outcome.user, ex.answers) }],
        schema: JUDGE_SCHEMA,
      })
      setJudge({ busy: false, text: r.explanation })
      if (r.acceptable) {
        const fixed = { ...outcome, correct: true }
        setOutcome(fixed)
        results.current.set(ex.key, { ex, outcome: fixed })
        // drop the queued retry
        setQueue((q) => (retried.current.has(ex.key) && q[q.length - 1]?.key === ex.key ? q.slice(0, -1) : q))
        onAnswer?.(ex, fixed, false)
        sfx.correct()
      }
    } catch (e) {
      setJudge({ busy: false, text: e instanceof Error ? e.message : String(e) })
    }
  }

  if (!ex) return null
  const scoredTotal = queue.filter((e) => !isTeach(e)).length
  const scoredDone = queue.slice(0, pos).filter((e) => !isTeach(e)).length + (phase === 'feedback' ? 1 : 0)
  const progress = queue.length ? (teach ? pos / queue.length : scoredDone / Math.max(1, scoredTotal)) : 0
  const remaining = timeLimit ? Math.max(0, timeLimit - elapsed) : null

  const common = { locked: phase === 'feedback', outcome: outcome ?? undefined, setAnswer, finish: direct, submit: check }

  return (
    <div className="flex min-h-dvh flex-col bg-surface">
      <header className="safe-top sticky top-0 z-20 bg-surface">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3 md:py-5">
          <button type="button" className="rounded-xl p-1.5 text-ink-3 hover:bg-surface-2" onClick={() => setConfirmExit(true)} aria-label="退出">
            <X size={26} strokeWidth={2.5} />
          </button>
          <ProgressBar value={progress} className="flex-1" />
          {remaining != null && (
            <span className={`chip ${remaining < 60 ? '!bg-bad-soft !text-bad-strong' : ''}`}>
              <Clock size={14} /> {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, '0')}
            </span>
          )}
          <SpeedControl compact />
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-48 pt-2 md:px-6">
        <VoiceNotice className="mb-4" />
        <h1 className="mb-5 text-xl font-black md:text-2xl">{ex.title}</h1>
        <div key={pos + ':' + ex.key} className="anim-fade">
          {teach ? (
            <Teach ex={ex} />
          ) : ex.kind === 'choice' ? (
            <Choice ex={ex} {...common} />
          ) : ex.kind === 'match' ? (
            <Match ex={ex} {...common} />
          ) : ex.kind === 'type' ? (
            <TypeAnswer ex={ex} {...common} />
          ) : ex.kind === 'build' ? (
            <Build ex={ex} {...common} />
          ) : ex.kind === 'speak' ? (
            <Speak ex={ex} {...common} />
          ) : ex.kind === 'stress' ? (
            <Stress ex={ex} {...common} />
          ) : ex.kind === 'write' ? (
            <Write ex={ex} {...common} />
          ) : null}
        </div>
      </main>

      {/* footer: check button or feedback */}
      <footer className="safe-bottom fixed inset-x-0 bottom-0 z-20">
        {phase === 'answer' ? (
          ex.kind === 'match' || ex.kind === 'write' ? null : (
            <div className="border-t-2 border-line bg-surface">
              <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-4 md:py-6">
                {!teach && (ex.skill === 'listen' || ex.kind === 'speak') ? (
                  <button type="button" className="btn btn-ghost hidden sm:inline-flex" onClick={() => direct({ correct: true, user: '', expected: '', skipped: true })}>
                    跳过
                  </button>
                ) : (
                  <span />
                )}
                <button type="button" className={`btn ${teach ? 'btn-primary' : 'btn-primary'} min-w-[160px] flex-1 sm:flex-none`} disabled={!teach && !canCheck} onClick={check}>
                  {teach ? (ex.kind === 'teach-grammar' ? '开始练习' : '继续') : '检查'}
                </button>
              </div>
            </div>
          )
        ) : (
          <div className={`anim-slide-up border-t-2 ${outcome?.correct ? 'border-[color-mix(in_oklch,var(--ok)_40%,transparent)] bg-ok-soft' : 'border-[color-mix(in_oklch,var(--bad)_40%,transparent)] bg-bad-soft'}`}>
            <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-4 md:flex-row md:items-end md:py-6">
              <div className="min-w-0 flex-1">
                <div className={`flex items-center gap-2 text-xl font-black ${outcome?.correct ? 'text-ok-strong' : 'text-bad-strong'}`}>
                  {outcome?.correct ? <CheckCircle2 size={26} /> : <XCircle size={26} />}
                  {outcome?.correct ? praise : '不太对哦'}
                </div>
                {outcome?.correct && outcome.warn === 'accent' && (
                  <div className="mt-1 text-sm font-bold text-ok-strong">
                    注意重音符号：<span className="es">{outcome.expected}</span>
                  </div>
                )}
                {outcome?.correct && outcome.warn === 'typo' && (
                  <div className="mt-1 text-sm font-bold text-ok-strong">
                    有个小拼写错误：<span className="es">{outcome.expected}</span>
                  </div>
                )}
                {!outcome?.correct && outcome?.expected && (
                  <div className="mt-1 text-bad-strong">
                    <span className="text-sm font-bold">正确答案：</span>
                    <span className="es text-lg font-bold">{outcome.expected}</span>
                  </div>
                )}
                {'explain' in ex && ex.explain && <div className="mt-1 text-sm text-ink-2">{ex.explain}</div>}
                {judge.text && <div className="mt-2 rounded-xl bg-surface/70 px-3 py-2 text-sm">🤖 {judge.text}</div>}
                {!outcome?.correct && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    <button type="button" className="chip !bg-surface" onClick={askAI}>
                      <Sparkles size={14} /> 问 AI 为什么
                    </button>
                    {ex.kind === 'type' && hasAI && outcome?.user && !judge.text && (
                      <button type="button" className="chip !bg-surface" disabled={judge.busy} onClick={appeal}>
                        <Flag size={14} /> {judge.busy ? 'AI 判断中…' : '我的答案应该也对？'}
                      </button>
                    )}
                  </div>
                )}
              </div>
              <button type="button" className={`btn ${outcome?.correct ? 'btn-ok' : 'btn-bad'} min-w-[160px]`} onClick={next} autoFocus>
                继续
              </button>
            </div>
          </div>
        )}
      </footer>

      <Sheet open={confirmExit} onClose={() => setConfirmExit(false)} title="确定要退出吗？">
        <div className="flex flex-col items-center gap-4 text-center">
          <Mascot mood="sad" size={80} />
          <p className="text-ink-2">现在退出，这一课的进度不会保存。</p>
          <button type="button" className="btn btn-primary w-full" onClick={() => setConfirmExit(false)}>
            继续学习
          </button>
          <button
            type="button"
            className="btn btn-plain w-full !text-bad"
            onClick={() => {
              stopSpeaking()
              onExit()
            }}
          >
            退出
          </button>
        </div>
      </Sheet>
    </div>
  )
}
