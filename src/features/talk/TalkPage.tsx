import { useLiveQuery } from 'dexie-react-hooks'
import { ChevronRight, History } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LEVEL_INFO, type Level } from '../../content/types'
import { SCENARIOS } from '../../content/roleplay'
import { PageHeader, Section } from '../../components/PageHeader'
import { db } from '../../store/db'

export function TalkPage() {
  const levels = [...new Set(SCENARIOS.map((s) => s.level))] as Level[]
  const [lvl, setLvl] = useState<Level | 'all'>('all')
  const history = useLiveQuery(() => db.chats.where('kind').equals('roleplay').reverse().sortBy('updatedAt'), [], [])
  const list = SCENARIOS.filter((s) => lvl === 'all' || s.level === lvl)
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="情景对话" sub="和 AI 扮演的角色用西语对话，完成任务，结束后得到纠错报告" />
      <div className="scrollbar-none mb-5 flex gap-1.5 overflow-x-auto">
        <button type="button" className={`chip shrink-0 ${lvl === 'all' ? 'chip-on' : ''}`} onClick={() => setLvl('all')}>
          全部 {SCENARIOS.length}
        </button>
        {levels.map((l) => (
          <button key={l} type="button" className={`chip shrink-0 ${lvl === l ? 'chip-on' : ''}`} onClick={() => setLvl(l)}>
            {l} · {LEVEL_INFO[l].name}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {list.map((s) => (
          <Link key={s.id} to={`/talk/${s.id}`} className="tile flex items-start gap-3 !p-4">
            <span className="text-3xl">{s.icon}</span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2 text-xs font-black text-ink-3">
                <span className="rounded-md bg-accent px-1.5 py-0.5 text-[#2b2108]">{s.level}</span>
                <span className="es truncate">{s.titleEs}</span>
              </span>
              <span className="mt-0.5 block text-lg">{s.title}</span>
              <span className="block text-sm font-semibold text-ink-3">{s.setting}</span>
            </span>
            <ChevronRight size={18} className="mt-1 text-ink-3" />
          </Link>
        ))}
      </div>
      {history && history.length > 0 && (
        <Section title={<span className="flex items-center gap-2"><History size={18} /> 练习记录</span>}>
          <div className="mt-2 flex flex-col gap-2">
            {history.slice(0, 15).map((h) => {
              const score = (h.report as { score?: number } | undefined)?.score
              return (
                <Link key={h.id} to={`/talk/${h.scenarioId}?chat=${encodeURIComponent(h.id)}`} className="card flex items-center gap-3 p-3">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black ${score == null ? 'bg-surface-2 text-ink-3' : score >= 80 ? 'bg-ok-soft text-ok-strong' : score >= 60 ? 'bg-accent-soft text-accent-ink' : 'bg-bad-soft text-bad-strong'}`}>
                    {score ?? '—'}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-bold">{h.title}</span>
                    <span className="block text-xs text-ink-3">
                      {new Date(h.updatedAt).toLocaleString('zh-CN')} · {h.messages.length} 条
                    </span>
                  </span>
                  <ChevronRight size={16} className="text-ink-3" />
                </Link>
              )
            })}
          </div>
        </Section>
      )}
    </div>
  )
}
