import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getContent } from '../../content'
import type { Level } from '../../content/types'
import { PageHeader } from '../../components/PageHeader'
import { useProgress } from '../../store/progress'

export function ReadList() {
  const c = getContent()
  const [lvl, setLvl] = useState<Level | 'all'>('all')
  const lessons = useProgress((s) => s.lessons)
  const levels = c.levels.filter((l) => c.readings.some((r) => r.level === l))
  const list = c.readings.filter((r) => lvl === 'all' || r.level === lvl)
  const readDone = (id: string) => c.lessons.some((l) => l.reading === id && lessons[l.id])
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="阅读" sub="分级短文：点词查义、整篇朗读、中西对照" />
      <div className="scrollbar-none mb-5 flex gap-1.5 overflow-x-auto">
        <button type="button" className={`chip shrink-0 ${lvl === 'all' ? 'chip-on' : ''}`} onClick={() => setLvl('all')}>
          全部 {c.readings.length}
        </button>
        {levels.map((l) => (
          <button key={l} type="button" className={`chip shrink-0 ${lvl === l ? 'chip-on' : ''}`} onClick={() => setLvl(l)}>
            {l}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {list.map((r) => {
          const u = r.unit ? c.unitById.get(r.unit) : undefined
          const words = r.paras.flat().reduce((n, [es]) => n + es.split(/\s+/).length, 0)
          return (
            <Link key={r.id} to={`/read/${r.id}`} className="tile flex flex-col gap-2 !p-4">
              <div className="flex items-center gap-2 text-xs font-black text-ink-3">
                <span className="rounded-md bg-accent px-1.5 py-0.5 text-[#2b2108]">{r.level}</span>
                <span>{r.topic}</span>
                <span>· {words} 词</span>
                {readDone(r.id) && <span className="text-ok">· 已读</span>}
              </div>
              <div className="flex items-center gap-2">
                <div className="min-w-0 flex-1">
                  <div className="es truncate text-lg">{r.title}</div>
                  <div className="truncate text-sm font-semibold text-ink-3">{r.titleZh}</div>
                </div>
                {u && <span className="text-2xl">{u.icon}</span>}
                <ChevronRight size={18} className="text-ink-3" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
