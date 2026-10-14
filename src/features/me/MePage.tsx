import { useLiveQuery } from 'dexie-react-hooks'
import { BookOpen, ChevronRight, ClipboardCheck, Clock, Flame, MessagesSquare, Music, Puzzle, Settings, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Mascot } from '../../components/Mascot'
import { PageHeader, Section } from '../../components/PageHeader'
import { SKILL_ZH, type Skill } from '../../content/types'
import { addDays, dayKey, fmtDuration } from '../../lib/date'
import { db } from '../../store/db'
import { useProgress, useStreak } from '../../store/progress'
import { useSettings } from '../../store/settings'

const SKILLS: Skill[] = ['vocab', 'grammar', 'listen', 'speak', 'read', 'write']

function SkillBars() {
  const skills = useProgress((s) => s.skills)
  return (
    <div className="card flex flex-col gap-3 p-4">
      {SKILLS.map((k) => {
        const s = skills[k]
        const v = s && s.t ? s.c / s.t : 0
        return (
          <div key={k} className="grid grid-cols-[3.5rem_1fr_5.5rem] items-center gap-3" title={s ? `${SKILL_ZH[k]}：答对 ${s.c} / ${s.t} 题` : `${SKILL_ZH[k]}：还没有数据`}>
            <span className="text-sm font-bold text-ink-2">{SKILL_ZH[k]}</span>
            <div className="h-2.5 rounded-full bg-surface-2">
              {s?.t ? <div className="h-full rounded-[4px] bg-primary transition-[width] duration-700" style={{ width: `${Math.max(3, v * 100)}%` }} /> : null}
            </div>
            <span className="text-right text-sm font-bold text-ink">{s?.t ? `${Math.round(v * 100)}%` : <span className="text-ink-3">—</span>}</span>
          </div>
        )
      })}
      <div className="text-xs text-ink-3">按每道题第一次作答的正确率统计</div>
    </div>
  )
}

const LEVELS = [0, 1, 10, 30, 60]

function Heatmap() {
  const xp = useProgress((s) => s.xp)
  const today = dayKey()
  const weeks = 16
  const [y, m, d] = today.split('-').map(Number)
  const dow = new Date(y, m - 1, d).getDay()
  const start = addDays(today, -(weeks * 7 - 1) - (6 - dow))
  const cells = Array.from({ length: weeks * 7 }, (_, i) => addDays(start, i))
  const shade = (n: number) => {
    if (!n) return 'var(--surface-2)'
    const lvl = LEVELS.filter((t) => n >= t).length - 1
    return `color-mix(in oklch, var(--primary) ${[0, 30, 55, 78, 100][lvl]}%, var(--surface-2))`
  }
  return (
    <div className="card p-4">
      <div className="scrollbar-none overflow-x-auto">
        <div className="grid w-max grid-flow-col grid-rows-7 gap-[3px]">
          {cells.map((k) => (
            <div
              key={k}
              className={`h-3.5 w-3.5 rounded-[3px] ${k > today ? 'opacity-0' : ''} ${k === today ? 'ring-2 ring-[var(--accent)]' : ''}`}
              style={{ background: shade(xp[k] ?? 0) }}
              title={`${k}：${xp[k] ?? 0} XP`}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-end gap-1 text-xs text-ink-3">
        少
        {[0, 1, 10, 30, 60].map((n) => (
          <span key={n} className="h-3 w-3 rounded-[3px]" style={{ background: shade(n) }} />
        ))}
        多
      </div>
    </div>
  )
}

export function MePage() {
  const name = useSettings((s) => s.name)
  const set = useSettings((s) => s.set)
  const totalXp = useProgress((s) => s.totalXp)
  const seconds = useProgress((s) => s.seconds)
  const xp = useProgress((s) => s.xp)
  const streak = useStreak()
  const totalSec = Object.values(seconds).reduce((a, b) => a + b, 0)
  const days = Object.values(xp).filter((v) => v > 0).length
  const words = useLiveQuery(() => db.cards.count(), [], 0)

  const links = [
    { to: '/grammar', label: '语法手册', icon: Puzzle },
    { to: '/exam', label: '考试与组卷', icon: ClipboardCheck },
    { to: '/talk', label: '情景对话', icon: MessagesSquare },
    { to: '/songs', label: '听歌学西语', icon: Music },
    { to: '/words/conj', label: '动词变位查询', icon: BookOpen },
    { to: '/settings', label: '设置', icon: Settings },
  ]

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="我的" />
      <div className="card mb-6 flex items-center gap-4 p-5">
        <Mascot mood="cheer" size={72} />
        <div className="min-w-0 flex-1">
          <input value={name} onChange={(e) => set({ name: e.target.value })} placeholder="给自己起个名字" className="w-full bg-transparent text-2xl font-black outline-none placeholder:text-ink-3" />
          <div className="text-sm text-ink-2">已学习 {days} 天 · 记忆卡 {words} 张</div>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-3 gap-3">
        <div className="card p-3 text-center">
          <Flame className="mx-auto fill-[var(--accent)] text-accent" />
          <div className="text-xl font-black">{streak}</div>
          <div className="text-xs font-bold text-ink-3">连续天数</div>
        </div>
        <div className="card p-3 text-center">
          <Zap className="mx-auto fill-[var(--gold)] text-gold" />
          <div className="text-xl font-black">{totalXp}</div>
          <div className="text-xs font-bold text-ink-3">总经验</div>
        </div>
        <div className="card p-3 text-center">
          <Clock className="mx-auto text-info" />
          <div className="text-xl font-black">{fmtDuration(totalSec)}</div>
          <div className="text-xs font-bold text-ink-3">学习时长</div>
        </div>
      </div>
      <Section title="听说读写能力">
        <SkillBars />
      </Section>
      <Section title="学习日历">
        <Heatmap />
      </Section>
      <Section title="更多">
        <div className="card divide-y divide-line overflow-hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="flex items-center gap-3 px-4 py-3.5 font-bold hover:bg-surface-2">
              <l.icon size={20} className="text-primary" />
              <span className="flex-1">{l.label}</span>
              <ChevronRight size={18} className="text-ink-3" />
            </Link>
          ))}
        </div>
      </Section>
    </div>
  )
}
