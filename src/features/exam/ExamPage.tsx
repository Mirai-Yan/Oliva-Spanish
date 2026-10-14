import { useLiveQuery } from 'dexie-react-hooks'
import { Check, ChevronDown, ClipboardCheck, History, Play } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getContent } from '../../content'
import { LEVEL_INFO } from '../../content/types'
import { Empty, PageHeader, Section } from '../../components/PageHeader'
import { buildExam, buildLevelExam, type ExamSkill } from '../../lib/exercises/generate'
import { Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { db } from '../../store/db'
import { useRun } from '../../store/run'
import { BreakdownList } from './Breakdown'
import { MyPapers } from '../paper/MyPapers'

const SKILLS: { id: ExamSkill; label: string }[] = [
  { id: 'vocab', label: '词汇' },
  { id: 'grammar', label: '语法' },
  { id: 'listen', label: '听力' },
  { id: 'read', label: '阅读' },
  { id: 'speak', label: '口语' },
]

export function ExamPage() {
  const c = getContent()
  const nav = useNavigate()
  const start = useRun((s) => s.start)
  const [units, setUnits] = useState<Set<string>>(new Set())
  const [grammar, setGrammar] = useState<Set<string>>(new Set())
  const [expanded, setExpanded] = useState<string | null>(null)
  const [skills, setSkills] = useState<Set<ExamSkill>>(new Set(['vocab', 'grammar', 'listen', 'read']))
  const [count, setCount] = useState(20)
  const [minutes, setMinutes] = useState(0)
  const [openHist, setOpenHist] = useState<number | null>(null)
  const history = useLiveQuery(() => db.exams.orderBy('createdAt').reverse().limit(20).toArray(), [], [])

  const toggle = <T,>(set: Set<T>, v: T, fn: (s: Set<T>) => void) => {
    const n = new Set(set)
    if (n.has(v)) n.delete(v)
    else n.add(v)
    fn(n)
  }

  const available = useMemo(() => {
    if (!units.size || !skills.size) return 0
    return buildExam(c, { unitIds: [...units], grammarIds: [...grammar], skills: [...skills], count: 999 }).length
  }, [units, grammar, skills, c])

  const startExam = () => {
    const unitIds = [...units]
    const ex = buildExam(c, { unitIds, grammarIds: [...grammar], skills: [...skills], count })
    const names = unitIds.map((id) => c.unitById.get(id)!.title)
    start({
      kind: 'exam',
      title: `自选考试 · ${names.slice(0, 3).join('、')}${names.length > 3 ? ` 等 ${names.length} 个单元` : ''}`,
      exercises: ex,
      timeLimit: minutes ? minutes * 60 : undefined,
      unitIds,
    })
    nav('/exam/run')
  }

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="考试" sub="拍照出卷、级别结业考，或自由组合单元和知识点生成模拟卷" />

      <MyPapers />

      <Section title={<span className="flex items-center gap-2"><Award size={18} /> 级别结业考</span>}>
        <div className="grid gap-3 sm:grid-cols-2">
          {c.levels
            .filter((l) => l !== 'A0')
            .map((lvl) => {
              const best = (history ?? []).filter((h) => h.kind === 'level' && h.level === lvl).reduce((m, h) => Math.max(m, h.score), -1)
              return (
                <button
                  key={lvl}
                  type="button"
                  className="tile flex items-center gap-3 !p-4"
                  onClick={() => {
                    start({ kind: 'level', level: lvl, title: `${lvl} 结业考`, exercises: buildLevelExam(c, lvl), timeLimit: 40 * 60 })
                    nav('/exam/run')
                  }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-lg font-black text-[#2b2108]">{lvl}</span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block">
                      {lvl} 结业考 · {LEVEL_INFO[lvl].name}
                    </span>
                    <span className="block text-sm font-semibold text-ink-3">
                      语法词汇 · 听力 · 阅读{best >= 0 ? ` · 最好成绩 ${Math.round(best * 100)}` : ' · 限时 40 分钟'}
                    </span>
                  </span>
                </button>
              )
            })}
        </div>
        <Link to="/placement" className="btn btn-plain btn-sm mt-3">
          不确定自己的水平？做入门分级测试
        </Link>
      </Section>

      <Section title="1. 选择单元和知识点">
        {c.levels.map((lvl) => (
          <div key={lvl} className="mb-4">
            <div className="mb-2 text-sm font-black text-ink-3">
              {lvl === 'A0' ? '发音' : lvl} · {LEVEL_INFO[lvl].name}
            </div>
            <div className="flex flex-col gap-2">
              {c.units
                .filter((u) => u.level === lvl)
                .map((u) => {
                  const on = units.has(u.id)
                  return (
                    <div key={u.id} className={`rounded-2xl border-2 ${on ? 'border-[color-mix(in_oklch,var(--primary)_55%,transparent)] bg-primary-soft' : 'border-line bg-surface'}`}>
                      <div className="flex items-center gap-3 p-3">
                        <button
                          type="button"
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 ${on ? 'border-primary bg-primary text-white' : 'border-line'}`}
                          onClick={() => {
                            toggle(units, u.id, setUnits)
                            if (on) setGrammar((g) => new Set([...g].filter((x) => !u.grammar.some((gp) => gp.id === x))))
                          }}
                          aria-label={`选择 ${u.title}`}
                        >
                          {on && <Check size={16} strokeWidth={3} />}
                        </button>
                        <span className="text-xl">{u.icon}</span>
                        <span className="min-w-0 flex-1 truncate font-bold">{u.title}</span>
                        <button type="button" className="rounded-lg p-1 text-ink-3" onClick={() => setExpanded(expanded === u.id ? null : u.id)} aria-label="展开知识点">
                          <ChevronDown size={18} className={`transition ${expanded === u.id ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {expanded === u.id && (
                        <div className="flex flex-wrap gap-1.5 px-3 pb-3">
                          <span className="w-full text-xs font-bold text-ink-3">只考某些知识点（不选则考整个单元）：</span>
                          {u.grammar.map((g) => (
                            <button
                              key={g.id}
                              type="button"
                              className={`chip ${grammar.has(g.id) ? 'chip-on' : ''}`}
                              onClick={() => {
                                toggle(grammar, g.id, setGrammar)
                                if (!units.has(u.id)) setUnits(new Set(units).add(u.id))
                              }}
                            >
                              {g.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
          </div>
        ))}
      </Section>

      <Section title="2. 题型、题量和时间">
        <div className="card flex flex-col gap-4 p-4">
          <div className="flex flex-wrap gap-1.5">
            {SKILLS.map((s) => (
              <button key={s.id} type="button" className={`chip ${skills.has(s.id) ? 'chip-on' : ''}`} onClick={() => toggle(skills, s.id, setSkills)}>
                {s.label}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3 text-sm font-bold">
            <span className="w-16">题量</span>
            <input type="range" min={5} max={60} step={5} value={count} onChange={(e) => setCount(Number(e.target.value))} className="flex-1 accent-[var(--primary)]" />
            <span className="w-12 text-right">{count} 题</span>
          </label>
          <label className="flex items-center gap-3 text-sm font-bold">
            <span className="w-16">限时</span>
            <input type="range" min={0} max={60} step={5} value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} className="flex-1 accent-[var(--primary)]" />
            <span className="w-12 text-right">{minutes ? `${minutes} 分` : '不限'}</span>
          </label>
          <div className="text-sm text-ink-3">{units.size ? `题库里有 ${available} 道符合条件的题` : '先在上面勾选至少一个单元'}</div>
          <button type="button" className="btn btn-primary" disabled={!units.size || !skills.size || !available} onClick={startExam}>
            <Play size={18} /> 开始考试（{Math.min(count, available)} 题）
          </button>
        </div>
      </Section>

      <Section title={<span className="flex items-center gap-2"><History size={18} /> 考试记录</span>}>
        {!history?.length ? (
          <Empty>
            <ClipboardCheck className="mx-auto mb-2" />
            还没有考试记录
          </Empty>
        ) : (
          <div className="flex flex-col gap-2">
            {history.map((h) => (
              <div key={h.id} className="card">
                <button type="button" className="flex w-full items-center gap-3 p-3 text-left" onClick={() => setOpenHist(openHist === h.id ? null : h.id!)}>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black ${h.score >= 0.8 ? 'bg-ok-soft text-ok-strong' : h.score >= 0.6 ? 'bg-accent-soft text-accent-ink' : 'bg-bad-soft text-bad-strong'}`}>
                    {h.points ? h.points.earned : Math.round(h.score * 100)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-bold">{h.title}</span>
                    <span className="block text-xs text-ink-3">
                      {new Date(h.createdAt).toLocaleString('zh-CN')} · {h.points ? `${h.points.earned}/${h.points.total} 分` : `${h.correct}/${h.total}`}
                    </span>
                  </span>
                  <ChevronDown size={18} className={`text-ink-3 transition ${openHist === h.id ? 'rotate-180' : ''}`} />
                </button>
                {openHist === h.id && (
                  <div className="px-3 pb-3">
                    <BreakdownList breakdown={h.breakdown} title={h.points ? '各部分得分' : undefined} keepOrder={!!h.points} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  )
}
