import confetti from 'canvas-confetti'
import { ClipboardCheck, Sprout } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getContent } from '../../content'
import { LEVEL_INFO, type Level } from '../../content/types'
import { Mascot } from '../../components/Mascot'
import { placementStage } from '../../lib/exercises/generate'
import type { Exercise } from '../../lib/exercises/types'
import { useProgress } from '../../store/progress'
import { useSettings } from '../../store/settings'
import { SessionPlayer, type SessionResult } from '../lesson/SessionPlayer'

const PASS = 0.7

type Phase = { kind: 'intro' } | { kind: 'stage'; i: number; ex: Exercise[] } | { kind: 'between'; i: number; acc: number } | { kind: 'result' }

export function PlacementPage() {
  const c = getContent()
  const nav = useNavigate()
  const levels = useMemo(() => c.levels.filter((l) => l !== 'A0' && c.units.some((u) => u.level === l)) as Level[], [c])
  const [phase, setPhase] = useState<Phase>({ kind: 'intro' })
  const [scores, setScores] = useState<Partial<Record<Level, number>>>({})
  const setPlacement = useProgress((s) => s.setPlacement)
  const recordUnitTest = useProgress((s) => s.recordUnitTest)
  const setSettings = useSettings((s) => s.set)

  const startStage = (i: number) => setPhase({ kind: 'stage', i, ex: placementStage(c, levels[i]) })

  const onFinish = (i: number) => (r: SessionResult) => {
    const acc = r.total ? r.correct / r.total : 0
    setScores((s) => ({ ...s, [levels[i]]: acc }))
    if (acc >= PASS && i + 1 < levels.length) setPhase({ kind: 'between', i, acc })
    else finish({ ...scores, [levels[i]]: acc })
  }

  const finish = (sc: Partial<Record<Level, number>>) => {
    const passed = levels.filter((l) => (sc[l] ?? 0) >= PASS)
    const last = passed[passed.length - 1]
    if (last) {
      // everything up to the passed level counts as done
      const lastIdx = Math.max(...c.units.map((u, k) => (u.level === last ? k : -1)))
      const done = useProgress.getState().units
      c.units.slice(0, lastIdx + 1).forEach((u) => !done[u.id]?.passed && recordUnitTest(u.id, 0, true, true))
      const next = c.units[lastIdx + 1]
      setPlacement(last, next?.id ?? null, lastIdx + 1)
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.35 } })
    } else {
      setPlacement('A1', c.units.find((u) => u.level === 'A1')?.id ?? null, -1)
    }
    setSettings({ onboarded: true })
    setPhase({ kind: 'result' })
  }

  if (phase.kind === 'stage') {
    return (
      <SessionPlayer
        key={phase.i}
        exercises={phase.ex}
        retryWrong={false}
        contextLabel={`入门分级测试 · ${levels[phase.i]}`}
        onFinish={onFinish(phase.i)}
        onExit={() => nav('/')}
      />
    )
  }

  const passed = levels.filter((l) => (scores[l] ?? 0) >= PASS)
  const placed = passed[passed.length - 1]

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-surface px-5 py-10 text-center">
      <div className="w-full max-w-md">
        {phase.kind === 'intro' && (
          <>
            <Mascot size={110} className="anim-bob mx-auto" />
            <h1 className="mt-4 text-3xl font-black text-primary">入门分级测试</h1>
            <p className="mt-3 text-ink-2">
              从 A1 开始，每一级 10 道题（词汇、语法、阅读）。答对 70% 就进入下一级，否则测试结束。我们会根据结果帮你跳过已经会的内容。
            </p>
            <p className="mt-2 text-sm text-ink-3">大约需要 5–15 分钟，不会就选最接近的，不要猜太多哦。</p>
            <div className="mt-8 flex flex-col gap-3">
              <button type="button" className="btn btn-primary" onClick={() => startStage(0)}>
                <ClipboardCheck size={18} /> 开始测试
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => nav(-1)}>
                以后再说
              </button>
            </div>
          </>
        )}
        {phase.kind === 'between' && (
          <>
            <Mascot mood="cheer" size={110} className="anim-bob mx-auto" />
            <h1 className="mt-4 text-2xl font-black text-primary">
              {levels[phase.i]} 通过！正确率 {Math.round(phase.acc * 100)}%
            </h1>
            <p className="mt-2 text-ink-2">继续挑战 {levels[phase.i + 1]}（{LEVEL_INFO[levels[phase.i + 1]].name}）吗？</p>
            <div className="mt-8 flex flex-col gap-3">
              <button type="button" className="btn btn-primary" onClick={() => startStage(phase.i + 1)}>
                继续测 {levels[phase.i + 1]}
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => finish(scores)}>
                到这里就好
              </button>
            </div>
          </>
        )}
        {phase.kind === 'result' && (
          <>
            <Mascot mood={placed ? 'cheer' : 'happy'} size={110} className="anim-bob mx-auto" />
            <h1 className="mt-4 text-3xl font-black text-primary">{placed ? `你的水平：${placed}` : '从头开始吧！'}</h1>
            <div className="mt-4 flex flex-col gap-2 text-left">
              {levels
                .filter((l) => scores[l] != null)
                .map((l) => (
                  <div key={l} className="card flex items-center justify-between p-3">
                    <span className="font-bold">
                      {l} · {LEVEL_INFO[l].name}
                    </span>
                    <span className={`font-black ${(scores[l] ?? 0) >= PASS ? 'text-ok' : 'text-bad'}`}>{Math.round((scores[l] ?? 0) * 100)}%</span>
                  </div>
                ))}
            </div>
            <p className="mt-4 text-ink-2">
              {placed ? `${placed} 及之前的单元已标记为完成，你可以从下一级开始学习；也随时可以回去复习。` : '建议先学发音入门，再从 A1 第 1 单元开始。'}
            </p>
            <button type="button" className="btn btn-primary mt-8 w-full" onClick={() => nav('/')}>
              <Sprout size={18} /> 开始学习
            </button>
          </>
        )}
      </div>
    </div>
  )
}
