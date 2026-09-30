import { useLiveQuery } from 'dexie-react-hooks'
import { Play, Sparkles, Trash2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getContent } from '../../content'
import { Empty, PageHeader } from '../../components/PageHeader'
import type { Exercise } from '../../lib/exercises/types'
import { shuffle } from '../../lib/text/normalize'
import { db, type MistakeRow } from '../../store/db'
import { useRun } from '../../store/run'
import { useTutor } from '../tutor/store'

type Group = 'unit' | 'grammar' | 'recent'

export function MistakesPage() {
  const c = getContent()
  const nav = useNavigate()
  const start = useRun((s) => s.start)
  const openTutor = useTutor((s) => s.openTutor)
  const rows = useLiveQuery(() => db.mistakes.orderBy('updatedAt').reverse().toArray(), [], [] as MistakeRow[])
  const [group, setGroup] = useState<Group>('unit')

  const groups = useMemo(() => {
    const m = new Map<string, { label: string; rows: MistakeRow[] }>()
    for (const r of rows ?? []) {
      let key = 'recent'
      let label = '最近的错题'
      if (group === 'unit') {
        key = r.unitId ?? 'other'
        const u = r.unitId ? c.unitById.get(r.unitId) : undefined
        label = u ? `${u.icon} ${u.level} · ${u.title}` : '其他'
      } else if (group === 'grammar') {
        key = r.grammar[0] ?? (r.words.length ? 'vocab' : 'other')
        label = r.grammar[0] ? (c.grammarById.get(r.grammar[0])?.title ?? r.grammar[0]) : r.words.length ? '词汇' : '其他'
      }
      const g = m.get(key) ?? { label, rows: [] }
      g.rows.push(r)
      m.set(key, g)
    }
    return [...m.values()]
  }, [rows, group, c])

  const redo = (list: MistakeRow[], title: string) => {
    start({ kind: 'mistakes', title, exercises: shuffle(list.map((r) => r.ex as Exercise)).slice(0, 20), retryWrong: false })
    nav('/review/session')
  }

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        back="/review"
        title="错题本"
        sub="做错的题会自动收集到这里，重做时连续答对两次就会移出"
        right={
          rows && rows.length > 0 ? (
            <button type="button" className="btn btn-primary btn-sm" onClick={() => redo(rows, '错题重做')}>
              <Play size={16} /> 重做
            </button>
          ) : undefined
        }
      />
      <div className="mb-5 flex gap-1.5">
        {(['unit', 'grammar', 'recent'] as Group[]).map((g) => (
          <button key={g} type="button" className={`chip ${group === g ? 'chip-on' : ''}`} onClick={() => setGroup(g)}>
            {{ unit: '按单元', grammar: '按知识点', recent: '按时间' }[g]}
          </button>
        ))}
      </div>
      {!rows?.length && <Empty>还没有错题。继续加油！</Empty>}
      {groups.map((g) => (
        <section key={g.label} className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-black">
              {g.label} <span className="text-ink-3">· {g.rows.length}</span>
            </h2>
            <button type="button" className="btn btn-plain btn-sm" onClick={() => redo(g.rows, `错题重做 · ${g.label}`)}>
              <Play size={14} /> 练这组
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {g.rows.map((r) => (
              <div key={r.key} className="card p-3">
                <div className="flex items-start gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-black text-ink-3">
                      {r.prompt} · 错 {r.count} 次{r.fixed ? ` · 已连续做对 ${r.fixed} 次` : ''}
                    </div>
                    <div className="text-sm">
                      你的答案：<span className="es text-bad">{r.user || '（空）'}</span>
                    </div>
                    {r.correct && (
                      <div className="text-sm">
                        正确答案：<span className="es font-bold text-ok-strong">{r.correct}</span>
                      </div>
                    )}
                  </div>
                  <button type="button" className="rounded-lg p-1.5 text-ink-3 hover:bg-surface-2" title="问 AI" onClick={() => openTutor(`这道题我错了，请讲解：\n题型：${r.prompt}\n我的答案：${r.user}\n正确答案：${r.correct}`)}>
                    <Sparkles size={16} />
                  </button>
                  <button type="button" className="rounded-lg p-1.5 text-ink-3 hover:bg-surface-2" title="删除" onClick={() => db.mistakes.delete(r.key)}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
