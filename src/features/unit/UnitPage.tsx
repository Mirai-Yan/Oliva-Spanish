import { ChevronRight, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { getContent } from '../../content'
import { POS_ZH } from '../../content/types'
import { PageHeader, Section } from '../../components/PageHeader'
import { SpeakButton } from '../../components/Speak'
import { DialogueView } from '../../components/DialogueView'
import { wordLabel, wordSpeech } from '../../lib/exercises/generate'
import { useTutorContext } from '../tutor/store'
import { KIND_ICON, KIND_ZH } from '../path/PathPage'
import { useCourseState } from '../path/useLearnerLevel'

export function UnitPage() {
  const { id = '' } = useParams()
  const c = getContent()
  const u = c.unitById.get(id)
  const { states } = useCourseState()
  useTutorContext(u ? `单元讲义：${u.level} ${u.title}（${u.titleEs}）；语法点：${u.grammar.map((g) => g.title).join('、')}` : null)
  if (!u) return <PageHeader title="找不到这个单元" back="/" />
  const lessons = c.lessonsByUnit.get(u.id) ?? []
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader back title={`${u.icon} ${u.title}`} sub={<span className="es">{u.titleEs} · {u.level === 'A0' ? '发音' : u.level} 第 {u.order} 单元</span>} />

      <div className="card mb-8 p-4">
        <div className="mb-2 flex items-center gap-2 font-black">
          <Target size={18} className="text-primary" /> 学完这个单元，你能：
        </div>
        <ul className="list-disc space-y-1 pl-6 text-ink-2">
          {u.goals.map((g, i) => (
            <li key={i}>{g}</li>
          ))}
        </ul>
      </div>

      <Section title="课程">
        <div className="grid gap-2 sm:grid-cols-2">
          {lessons.map((l) => {
            const Icon = KIND_ICON[l.kind]
            const st = states.get(l.id)
            return (
              <Link key={l.id} to={st === 'locked' ? '#' : `/lesson/${l.id}${st === 'done' && l.kind !== 'test' ? '?review=1' : ''}`} className={`tile flex items-center gap-3 ${st === 'locked' ? 'opacity-50' : ''}`}>
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${st === 'done' ? 'bg-accent text-[#2b2108]' : 'bg-primary-soft text-primary-ink'}`}>
                  <Icon size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-ink-3">{KIND_ZH[l.kind]}</span>
                  <span className="block truncate">{l.title}</span>
                </span>
                <ChevronRight size={18} className="text-ink-3" />
              </Link>
            )
          })}
        </div>
      </Section>

      <Section title={u.pron ? '发音要点' : '语法'}>
        <div className="flex flex-col gap-2">
          {u.grammar.map((g) => (
            <Link key={g.id} to={`/grammar/${g.id}`} className="tile flex items-center gap-3">
              <span className="min-w-0 flex-1">
                <span className="block">{g.title}</span>
                <span className="block truncate text-sm font-semibold text-ink-3">{g.summary}</span>
              </span>
              <ChevronRight size={18} className="text-ink-3" />
            </Link>
          ))}
        </div>
      </Section>

      {u.words.length > 0 && (
        <Section title={`单词（${u.words.length}）`}>
          <div className="card divide-y divide-line overflow-hidden">
            {u.words.map((w) => (
              <Link key={w.id} to={`/words/w/${encodeURIComponent(w.id)}`} className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-2">
                <SpeakButton text={wordSpeech(w)} size="sm" className="!shadow-none" />
                <span className="es min-w-0 flex-1 truncate font-bold">{wordLabel(w)}</span>
                <span className="hidden text-xs font-bold text-ink-3 sm:inline">{POS_ZH[w.pos]}</span>
                <span className="max-w-[40%] truncate text-right text-ink-2">{w.zh}</span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {u.dialogues?.map((d) => (
        <Section key={d.id} title="对话">
          <div className="card p-4">
            <DialogueView dialogue={d} />
          </div>
        </Section>
      ))}

      {u.readings.length > 0 && (
        <Section title="短文">
          <div className="flex flex-col gap-2">
            {u.readings.map((r) => (
              <Link key={r.id} to={`/read/${r.id}`} className="tile flex items-center gap-3">
                <span className="min-w-0 flex-1">
                  <span className="es block">{r.title}</span>
                  <span className="block text-sm font-semibold text-ink-3">{r.titleZh}</span>
                </span>
                <ChevronRight size={18} className="text-ink-3" />
              </Link>
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}
