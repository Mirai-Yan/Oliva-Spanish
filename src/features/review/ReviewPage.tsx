import { useLiveQuery } from 'dexie-react-hooks'
import { BookX, ChevronRight, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHeader, Section } from '../../components/PageHeader'
import { Mascot } from '../../components/Mascot'
import { db } from '../../store/db'
import { useDueCount, useMistakeCount } from '../../store/review'
import { getContent } from '../../content'
import { StreakCard } from '../../app/SidePanel'
import { useProgress } from '../../store/progress'

export function ReviewPage() {
  const due = useDueCount()
  const mistakes = useMistakeCount()
  const total = useLiveQuery(() => db.cards.count(), [], 0)
  const learned = useLiveQuery(() => db.cards.where('state').equals(2).count(), [], 0)
  const c = getContent()
  const lessons = useProgress((s) => s.lessons)
  const recentUnits = [
    ...new Set(
      Object.entries(lessons)
        .sort((a, b) => b[1].last - a[1].last)
        .map(([id]) => c.lessonById.get(id)?.unitId)
        .filter(Boolean) as string[],
    ),
  ].slice(0, 4)
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="复习" sub="间隔重复记单词 + 错题本，学过的东西不再忘" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Link to="/review/cards" className="card flex flex-col gap-3 p-5 transition hover:bg-surface-2">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
              <Layers size={24} />
            </span>
            <div>
              <div className="text-lg font-black">单词记忆卡</div>
              <div className="text-sm text-ink-2">FSRS 算法安排复习时间</div>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-4xl font-black text-primary">{due}</span>
              <span className="ml-1 font-bold text-ink-2">个待复习</span>
            </div>
            <div className="text-right text-sm text-ink-3">
              共 {total} 张 · 已掌握 {learned}
            </div>
          </div>
        </Link>
        <Link to="/review/mistakes" className="card flex flex-col gap-3 p-5 transition hover:bg-surface-2">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bad text-white">
              <BookX size={24} />
            </span>
            <div>
              <div className="text-lg font-black">错题本</div>
              <div className="text-sm text-ink-2">连续做对两次就会移出</div>
            </div>
          </div>
          <div>
            <span className="text-4xl font-black text-bad">{mistakes}</span>
            <span className="ml-1 font-bold text-ink-2">道错题</span>
          </div>
        </Link>
      </div>
      {due === 0 && mistakes === 0 && (
        <div className="card mt-6 flex items-center gap-4 p-5">
          <Mascot mood="sleep" size={64} />
          <div className="text-ink-2">今天没有需要复习的内容。去学新课吧，学过的单词会自动加入记忆卡。</div>
        </div>
      )}
      <div className="mt-6 xl:hidden">
        <StreakCard />
      </div>
      {recentUnits.length > 0 && <Section title="最近学过的单元">
        <div className="flex flex-col gap-2">
          {recentUnits.map((id) => {
            const u = c.unitById.get(id)!
            return (
              <Link key={id} to={`/unit/${id}`} className="tile flex items-center gap-3">
                <span className="text-2xl">{u.icon}</span>
                <span className="flex-1">{u.title}</span>
                <ChevronRight size={18} className="text-ink-3" />
              </Link>
            )
          })}
        </div>
      </Section>}
    </div>
  )
}
