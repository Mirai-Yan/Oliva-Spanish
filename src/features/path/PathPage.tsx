import { AudioLines, BookA, BookOpen, Check, ClipboardCheck, Crown, FastForward, Headphones, Lock, Newspaper, Puzzle, Star, Trophy } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getContent } from '../../content'
import { LEVEL_INFO, type Lesson, type LessonKind, type Unit } from '../../content/types'
import { Mascot } from '../../components/Mascot'
import { useProgress } from '../../store/progress'
import { useSettings } from '../../store/settings'
import { useDueCount } from '../../store/review'
import { DailyGoalCard } from '../../app/Layout'
import { useCourseState, type LessonState } from './useLearnerLevel'

export const KIND_ICON: Record<LessonKind, typeof BookA> = {
  vocab: BookA,
  grammar: Puzzle,
  listen: Headphones,
  read: Newspaper,
  pron: AudioLines,
  test: Trophy,
}

export const KIND_ZH: Record<LessonKind, string> = {
  vocab: '词汇',
  grammar: '语法',
  listen: '听说',
  read: '阅读',
  pron: '发音',
  test: '单元测试',
}

const OFFSETS = [0, 52, 78, 52, 0, -52, -78, -52]

export function PathPage() {
  const c = getContent()
  const { states, current, currentUnitIndex } = useCourseState()
  const due = useDueCount()
  const currentRef = useRef<HTMLDivElement>(null)
  const [openLesson, setOpenLesson] = useState<string | null>(null)

  useEffect(() => {
    const el = currentRef.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2
    if (top > 200) window.scrollTo({ top })
  }, [])

  const byLevel = c.levels.map((lvl) => ({ lvl, units: c.units.filter((u) => u.level === lvl) }))
  const onboarded = useSettings((s) => s.onboarded)
  const setSettings = useSettings((s) => s.set)
  const anyDone = useProgress((s) => Object.keys(s.lessons).length > 0 || !!s.placement)
  const curUnit = current ? c.unitById.get(current.unitId) : null

  return (
    <div className="mx-auto max-w-xl">
      {!onboarded && !anyDone && (
        <div className="card anim-pop mb-6 p-5">
          <div className="flex items-center gap-3">
            <Mascot size={56} mood="cheer" />
            <div>
              <div className="text-lg font-black">¡Bienvenido! 欢迎来到 Oliva</div>
              <div className="text-sm text-ink-2">你是第一次学西班牙语，还是已经有一些基础？</div>
            </div>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <button type="button" className="btn btn-primary" onClick={() => setSettings({ onboarded: true })}>
              零基础，从发音开始
            </button>
            <Link to="/placement" className="btn btn-ghost">
              有基础，做分级测试
            </Link>
          </div>
        </div>
      )}
      {/* quick status for phones / tablets (desktop has the side panel) */}
      <div className="mb-6 grid grid-cols-1 gap-3 xl:hidden">
        {current && curUnit && (
          <Link to={`/lesson/${current.id}`} className="card flex items-center gap-3 bg-primary p-4 text-white !border-[var(--primary-strong)] shadow-[0_4px_0_var(--primary-strong)]">
            <Mascot size={46} mood="cheer" />
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold opacity-85">继续学习</div>
              <div className="truncate text-lg font-black">
                {curUnit.title} · {current.title}
              </div>
            </div>
            <span className="rounded-xl bg-white/20 px-3 py-1.5 text-sm font-black">开始</span>
          </Link>
        )}
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3">
          <DailyGoalCard />
          <Link to="/review" className="card flex items-center gap-3 p-4">
            <div className="text-3xl font-black text-primary">{due}</div>
            <div className="text-sm font-bold leading-tight text-ink-2">
              个单词
              <br />
              待复习
            </div>
          </Link>
        </div>
      </div>

      {byLevel.map(({ lvl, units }) => (
        <section key={lvl} className="mb-10">
          <div className="mb-5 flex items-end gap-3 px-1">
            <span className="rounded-xl bg-accent px-2.5 py-1 text-sm font-black text-[#2b2108]">{lvl === 'A0' ? '起步' : lvl}</span>
            <div>
              <div className="text-xl font-black">{LEVEL_INFO[lvl].name}</div>
              <div className="text-sm text-ink-2">{LEVEL_INFO[lvl].desc}</div>
            </div>
          </div>
          {units.map((u) => {
            const idx = c.unitIndex.get(u.id) ?? 0
            return (
              <UnitBlock
                key={u.id}
                unit={u}
                lessons={c.lessonsByUnit.get(u.id) ?? []}
                states={states}
                status={idx < currentUnitIndex ? 'past' : idx === currentUnitIndex ? 'current' : 'future'}
                openLesson={openLesson}
                setOpenLesson={setOpenLesson}
                currentRef={currentRef}
                currentId={current?.id}
              />
            )
          })}
        </section>
      ))}

      <div className="card mb-8 flex flex-col items-center gap-2 p-6 text-center">
        <Mascot mood="think" size={64} />
        <div className="font-extrabold">更多级别正在路上</div>
        <div className="text-sm text-ink-2">课程会按 A1 → A2 → B1 → B2 → C1 逐步开放。</div>
      </div>
    </div>
  )
}

function UnitBlock({
  unit,
  lessons,
  states,
  status,
  openLesson,
  setOpenLesson,
  currentRef,
  currentId,
}: {
  unit: Unit
  lessons: Lesson[]
  states: Map<string, LessonState>
  status: 'past' | 'current' | 'future'
  openLesson: string | null
  setOpenLesson: (id: string | null) => void
  currentRef: React.RefObject<HTMLDivElement | null>
  currentId?: string
}) {
  const nav = useNavigate()
  const unitRec = useProgress((s) => s.units[unit.id])
  const done = lessons.filter((l) => states.get(l.id) === 'done').length
  const banner =
    status === 'current'
      ? 'bg-primary text-white border-[var(--primary-strong)] shadow-[0_4px_0_var(--primary-strong)]'
      : status === 'past'
        ? 'bg-primary-soft text-primary-ink border-[color-mix(in_oklch,var(--primary)_30%,transparent)]'
        : 'bg-surface-2 text-ink-2 border-line'
  const mascotAt = Math.min(2, lessons.length - 1)

  return (
    <div className="mb-8">
      <div className={`mb-6 flex items-center gap-3 rounded-[var(--radius)] border-2 p-4 ${banner}`}>
        <div className="text-3xl">{unit.icon}</div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-extrabold uppercase tracking-wider opacity-80">
            {unit.level === 'A0' ? '发音' : unit.level} · 第 {unit.order} 单元
          </div>
          <div className="truncate text-lg font-black leading-tight">{unit.title}</div>
          <div className="es truncate text-sm font-semibold opacity-80">{unit.titleEs}</div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1.5">
          <Link
            to={`/unit/${unit.id}`}
            className={`flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-black ${status === 'current' ? 'bg-white/20' : 'bg-surface'}`}
          >
            <BookOpen size={14} /> 讲义
          </Link>
          {status === 'future' ? (
            <button
              type="button"
              className="flex items-center gap-1 rounded-xl bg-surface px-2.5 py-1.5 text-xs font-black text-ink-2"
              onClick={() => nav(`/lesson/${unit.id}-t?jump=1`)}
              title="通过这个单元的测试，直接跳到这里"
            >
              <FastForward size={14} /> 跳级
            </button>
          ) : (
            <span className="text-xs font-black opacity-80">
              {unitRec?.passed ? (
                <span className="flex items-center gap-1">
                  <Crown size={14} /> 已通关
                </span>
              ) : (
                `${done}/${lessons.length}`
              )}
            </span>
          )}
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-5">
        {lessons.map((l, i) => {
          const st = states.get(l.id) ?? 'locked'
          const isCurrent = l.id === currentId
          return (
            <div key={l.id} className="relative" style={{ transform: `translateX(${OFFSETS[i % OFFSETS.length]}px)` }} ref={isCurrent ? currentRef : undefined}>
              <LessonNode lesson={l} state={st} open={openLesson === l.id} onToggle={() => setOpenLesson(openLesson === l.id ? null : l.id)} />
              {i === mascotAt && status !== 'future' && (
                <div className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${OFFSETS[i % OFFSETS.length] >= 0 ? '-left-28' : '-right-28'} hidden sm:block`}>
                  <Mascot size={70} mood={status === 'past' ? 'cheer' : 'happy'} className="anim-bob" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function LessonNode({ lesson, state, open, onToggle }: { lesson: Lesson; state: LessonState; open: boolean; onToggle: () => void }) {
  const nav = useNavigate()
  const Icon = state === 'locked' ? Lock : state === 'done' && lesson.kind !== 'test' ? Check : KIND_ICON[lesson.kind]
  const rec = useProgress((s) => s.lessons[lesson.id])
  const isTest = lesson.kind === 'test'
  const style =
    state === 'locked'
      ? 'bg-surface-2 text-ink-3 shadow-[0_6px_0_var(--line)]'
      : state === 'done'
        ? 'bg-accent text-[#2b2108] shadow-[0_6px_0_var(--accent-strong)]'
        : 'bg-primary text-white shadow-[0_6px_0_var(--primary-strong)]'
  return (
    <div className="relative flex flex-col items-center">
      {state === 'current' && !open && (
        <div className="anim-bob absolute -top-10 z-10 whitespace-nowrap rounded-xl border-2 border-line bg-surface px-3 py-1 text-sm font-black text-primary-ink shadow">
          开始
          <div className="absolute -bottom-[7px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-line bg-surface" />
        </div>
      )}
      <button
        type="button"
        onClick={onToggle}
        className={`relative flex items-center justify-center rounded-full transition active:translate-y-1 active:shadow-none ${style} ${
          isTest ? 'h-[84px] w-[84px]' : 'h-[72px] w-[72px]'
        } ${state === 'current' ? 'anim-pulse-ring' : ''}`}
        aria-label={`${lesson.title}（${KIND_ZH[lesson.kind]}）`}
      >
        <Icon size={isTest ? 36 : 30} strokeWidth={2.6} />
        {state === 'done' && rec?.best === 1 && <Star size={16} className="absolute -right-0.5 -top-0.5 fill-[var(--gold)] text-gold" />}
      </button>
      {open && (
        <div className="card anim-pop absolute top-[92px] z-20 w-64 p-4 text-center shadow-xl">
          <div className="text-xs font-black uppercase tracking-wider text-ink-3">{KIND_ZH[lesson.kind]}</div>
          <div className="mt-0.5 text-lg font-black">{lesson.title}</div>
          {state === 'locked' ? (
            <>
              <div className="mt-1 text-sm text-ink-2">完成前面的课程后解锁</div>
              {isTest && (
                <button type="button" className="btn btn-ghost btn-sm mt-3 w-full" onClick={() => nav(`/lesson/${lesson.id}?jump=1`)}>
                  <ClipboardCheck size={16} /> 直接参加测试跳级
                </button>
              )}
            </>
          ) : (
            <>
              <div className="mt-1 text-sm text-ink-2">
                {state === 'done' ? `已完成 ${rec?.count ?? 1} 次 · 最佳 ${Math.round((rec?.best ?? 1) * 100)}%` : isTest ? '得分 ≥ 80% 即可通关' : `完成可得 ${isTest ? 20 : 10} XP`}
              </div>
              <button type="button" className="btn btn-primary mt-3 w-full" onClick={() => nav(`/lesson/${lesson.id}${state === 'done' && !isTest ? '?review=1' : ''}`)}>
                {state === 'done' ? (isTest ? '再测一次' : '复习 +5 XP') : '开始'}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
