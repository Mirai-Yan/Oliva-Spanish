import { Flame, RotateCcw, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { addDays, dayKey } from '../lib/date'
import { useProgress, useStreak } from '../store/progress'
import { useDueCount, useMistakeCount } from '../store/review'
import { useTutor } from '../features/tutor/store'
import { DailyGoalCard } from './Layout'

const WEEK = ['日', '一', '二', '三', '四', '五', '六']

export function StreakCard() {
  const streak = useStreak()
  const xp = useProgress((s) => s.xp)
  const today = dayKey()
  const days = Array.from({ length: 7 }, (_, i) => addDays(today, i - 6))
  return (
    <div className="card p-4">
      <div className="flex items-center gap-3">
        <Flame size={32} className={streak ? 'fill-[var(--accent)] text-accent' : 'text-ink-3'} />
        <div>
          <div className="text-xl font-black">{streak} 天连续学习</div>
          <div className="text-sm text-ink-2">{streak ? '保持住！每天一点点。' : '今天完成一课，开始连胜吧'}</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1 text-center">
        {days.map((d) => {
          const on = (xp[d] ?? 0) > 0
          const [y, m, dd] = d.split('-').map(Number)
          return (
            <div key={d} className="flex flex-col items-center gap-1">
              <span className="text-[11px] font-bold text-ink-3">{WEEK[new Date(y, m - 1, dd).getDay()]}</span>
              <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-black ${on ? 'bg-accent text-[#2b2108]' : 'bg-surface-2 text-ink-3'} ${d === today ? 'ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--surface)]' : ''}`}>
                {dd}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function ReviewCard() {
  const due = useDueCount()
  const mistakes = useMistakeCount()
  return (
    <div className="card p-4">
      <div className="mb-2 flex items-center gap-2 font-extrabold">
        <RotateCcw size={18} className="text-primary" /> 今日复习
      </div>
      <div className="grid grid-cols-2 gap-2 text-center">
        <Link to="/review/cards" className="rounded-2xl bg-primary-soft p-3">
          <div className="text-2xl font-black text-primary-ink">{due}</div>
          <div className="text-xs font-bold text-ink-2">待复习单词</div>
        </Link>
        <Link to="/review/mistakes" className="rounded-2xl bg-bad-soft p-3">
          <div className="text-2xl font-black text-bad-strong">{mistakes}</div>
          <div className="text-xs font-bold text-ink-2">错题</div>
        </Link>
      </div>
    </div>
  )
}

export function SidePanel() {
  const openTutor = useTutor((s) => s.openTutor)
  return (
    <div className="sticky top-8 flex flex-col gap-4">
      <DailyGoalCard />
      <StreakCard />
      <ReviewCard />
      <button type="button" className="card flex items-center gap-3 p-4 text-left transition hover:bg-surface-2" onClick={() => openTutor()}>
        <Sparkles className="text-accent" />
        <div>
          <div className="font-extrabold">有问题？问 Oliva</div>
          <div className="text-sm text-ink-2">语法、单词、词源，随时解答</div>
        </div>
      </button>
    </div>
  )
}
