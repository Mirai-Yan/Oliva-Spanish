import { Flame, Sparkles, Zap } from 'lucide-react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { Mascot } from '../components/Mascot'
import { Ring } from '../components/ProgressBar'
import { useStreak, useTodayXp } from '../store/progress'
import { useSettings } from '../store/settings'
import { useTutor } from '../features/tutor/store'
import { SidePanel } from './SidePanel'
import { NAV } from './nav'

function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-2">
      <Mascot size={34} />
      <span className="text-2xl font-black tracking-tight text-primary">oliva</span>
    </NavLink>
  )
}

export function StatPills() {
  const streak = useStreak()
  const xp = useTodayXp()
  const goal = useSettings((s) => s.dailyGoal)
  return (
    <div className="flex items-center gap-1.5">
      <span className={`chip !border-0 ${streak ? '!bg-accent-soft !text-accent-ink' : ''}`} title="连续学习天数">
        <Flame size={15} className={streak ? 'fill-[var(--accent)] text-accent' : ''} /> {streak}
      </span>
      <span className="chip !border-0" title="今日经验 / 每日目标">
        <Zap size={15} className="fill-[var(--gold)] text-gold" /> {xp}/{goal}
      </span>
    </div>
  )
}

export function Layout() {
  const openTutor = useTutor((s) => s.openTutor)
  const loc = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [loc.pathname])
  return (
    <div className="min-h-dvh lg:flex">
      {/* desktop sidebar */}
      <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col border-r-2 border-line bg-surface px-4 py-6 lg:flex">
        <div className="mb-8 px-2">
          <Logo />
        </div>
        <nav className="flex flex-col gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl border-2 px-3 py-2.5 font-extrabold tracking-wide transition ${
                  isActive ? 'border-[color-mix(in_oklch,var(--primary)_45%,transparent)] bg-primary-soft text-primary-ink' : 'border-transparent text-ink-2 hover:bg-surface-2'
                }`
              }
            >
              <n.icon size={22} strokeWidth={2.3} />
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto" />
      </aside>

      <div className="min-w-0 flex-1">
        {/* phone / tablet top bar */}
        <header className="safe-top sticky top-0 z-30 border-b-2 border-line bg-surface/90 backdrop-blur lg:hidden">
          <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
            <Logo />
            <StatPills />
          </div>
        </header>

        <div className="mx-auto flex max-w-[1100px] gap-8 px-4 pb-28 pt-5 md:px-6 lg:pb-12 lg:pt-8">
          <main className="min-w-0 flex-1">
            <Suspense
              fallback={
                <div className="flex min-h-[40vh] items-center justify-center">
                  <Mascot size={56} className="anim-bob" />
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </main>
          <div className="hidden w-80 shrink-0 xl:block">
            <SidePanel />
          </div>
        </div>
      </div>

      {/* AI button */}
      <button
        type="button"
        onClick={() => openTutor()}
        className="btn btn-accent fixed bottom-24 right-4 z-30 h-14 w-14 !rounded-full !p-0 lg:bottom-8 lg:right-8 lg:h-auto lg:w-auto lg:!rounded-2xl lg:!px-5"
        aria-label="问 AI"
      >
        <Sparkles size={22} />
        <span className="hidden lg:inline">问 AI</span>
      </button>

      {/* phone bottom tabs */}
      <nav className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t-2 border-line bg-surface lg:hidden">
        <div className="mx-auto flex max-w-xl justify-around px-2">
          {NAV.filter((n) => n.tab).map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) => `flex flex-1 flex-col items-center gap-0.5 py-2 text-[11px] font-extrabold ${isActive ? 'text-primary' : 'text-ink-3'}`}
            >
              {({ isActive }) => (
                <>
                  <span className={`flex h-8 w-12 items-center justify-center rounded-xl transition ${isActive ? 'bg-primary-soft' : ''}`}>
                    <n.icon size={22} strokeWidth={isActive ? 2.6 : 2.2} />
                  </span>
                  {n.label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}

export function DailyGoalCard() {
  const xp = useTodayXp()
  const goal = useSettings((s) => s.dailyGoal)
  const done = xp >= goal
  return (
    <div className="card flex min-w-0 items-center gap-2.5 p-3.5 sm:gap-4 sm:p-4">
      <Ring value={xp / goal} size={46} stroke={6}>
        <Zap size={18} className="fill-[var(--gold)] text-gold" />
      </Ring>
      <div className="min-w-0">
        <div className="whitespace-nowrap font-extrabold">每日目标</div>
        <div className="text-sm text-ink-2">{done ? '今天的目标完成啦！¡Muy bien! 🎉' : `今天 ${xp} / ${goal} XP`}</div>
      </div>
    </div>
  )
}
