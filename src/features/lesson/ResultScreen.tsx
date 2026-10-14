import confetti from 'canvas-confetti'
import { ChevronDown, Clock, Sparkles, Target, Zap } from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'
import { Mascot } from '../../components/Mascot'
import { fmtDuration } from '../../lib/date'
import { sfx } from '../../lib/sfx'
import { questionText } from '../../lib/exercises/text'
import { useTutor } from '../tutor/store'
import type { SessionResult } from './SessionPlayer'

export function StatTile({ icon, label, value, color }: { icon: ReactNode; label: string; value: string; color: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border-2" style={{ borderColor: color }}>
      <div className="px-2 py-1 text-center text-xs font-black text-white" style={{ background: color }}>
        {label}
      </div>
      <div className="flex items-center justify-center gap-1.5 bg-surface px-2 py-3 text-xl font-black" style={{ color }}>
        {icon}
        {value}
      </div>
    </div>
  )
}

export function ResultScreen({
  result,
  xp,
  title,
  subtitle,
  passed = true,
  actions,
  extra,
  score,
}: {
  result: SessionResult
  xp: number
  title: string
  subtitle?: string
  passed?: boolean
  actions: ReactNode
  extra?: ReactNode
  /** replaces the accuracy tile, e.g. { label: '得分', value: '85/100' } */
  score?: { label: string; value: string }
}) {
  const acc = result.total ? result.correct / result.total : 1
  const wrong = result.items.filter((i) => !i.outcome.correct)
  const [showWrong, setShowWrong] = useState(false)
  const openTutor = useTutor((s) => s.openTutor)

  useEffect(() => {
    if (!passed) return
    sfx.finish()
    const colors = [getComputedStyle(document.documentElement).getPropertyValue('--primary').trim(), getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()]
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.35 }, colors })
  }, [passed])

  return (
    <div className="flex min-h-dvh flex-col bg-surface">
      <main className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center px-5 pb-40 pt-12 text-center">
        <Mascot mood={passed ? 'cheer' : 'sad'} size={120} className="anim-bob" />
        <h1 className="mt-4 text-3xl font-black text-primary">{title}</h1>
        {subtitle && <p className="mt-2 text-ink-2">{subtitle}</p>}
        <div className="mt-8 grid w-full grid-cols-3 gap-3">
          <StatTile icon={<Zap size={20} />} label="经验" value={`+${xp}`} color="var(--gold)" />
          <StatTile icon={<Target size={20} />} label={score?.label ?? '正确率'} value={score?.value ?? `${Math.round(acc * 100)}%`} color="var(--primary)" />
          <StatTile icon={<Clock size={20} />} label="用时" value={fmtDuration(result.seconds).replace(' ', '')} color="var(--info)" />
        </div>
        {extra && <div className="mt-8 w-full text-left">{extra}</div>}
        {wrong.length > 0 && (
          <div className="mt-8 w-full text-left">
            <button type="button" className="flex w-full items-center justify-between rounded-2xl bg-surface-2 px-4 py-3 font-extrabold" onClick={() => setShowWrong((v) => !v)}>
              <span>本次错题 {wrong.length} 道（已加入错题本）</span>
              <ChevronDown className={`transition ${showWrong ? 'rotate-180' : ''}`} />
            </button>
            {showWrong && (
              <div className="mt-2 flex flex-col gap-2">
                {wrong.map(({ ex, outcome }, i) => (
                  <div key={i} className="rounded-2xl border-2 border-line p-3">
                    <div className="text-xs font-black text-ink-3">{ex.title}</div>
                    {questionText(ex) && <div className="es my-0.5 font-semibold">{questionText(ex)}</div>}
                    <div className="text-sm">
                      你的答案：<span className="es text-bad">{outcome.user || '（空）'}</span>
                    </div>
                    {outcome.expected && (
                      <div className="text-sm">
                        正确答案：<span className="es font-bold text-ok-strong">{outcome.expected}</span>
                      </div>
                    )}
                    <button
                      type="button"
                      className="chip mt-2"
                      onClick={() => openTutor(`请解释这道题我为什么错了：\n题型：${ex.title}${questionText(ex) ? `\n题目：${questionText(ex)}` : ''}\n我的答案：${outcome.user}\n正确答案：${outcome.expected}`)}
                    >
                      <Sparkles size={13} /> 问 AI
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
      <footer className="safe-bottom fixed inset-x-0 bottom-0 border-t-2 border-line bg-surface">
        <div className="mx-auto flex max-w-lg flex-col gap-2 px-4 py-4 sm:flex-row-reverse">{actions}</div>
      </footer>
    </div>
  )
}
