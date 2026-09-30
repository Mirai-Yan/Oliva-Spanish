import { useLiveQuery } from 'dexie-react-hooks'
import { BookHeart, Layers, Sparkles, Table2 } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getContent } from '../../content'
import { PageHeader } from '../../components/PageHeader'
import { WordCard } from '../../components/WordCard'
import { ConjTable } from '../../components/ConjTable'
import { isVerbInfinitive, isIrregular, TENSES, type Tense } from '../../lib/conjugate'
import { db } from '../../store/db'
import { addCards } from '../../store/review'
import { useTutor, useTutorContext } from '../tutor/store'

const QUICK: Tense[] = ['pres', 'pret', 'impf', 'fut', 'pperf', 'subj', 'imp']

export function WordPage() {
  const { id = '' } = useParams()
  const c = getContent()
  const w = c.wordById.get(decodeURIComponent(id))
  const openTutor = useTutor((s) => s.openTutor)
  const [tense, setTense] = useState<Tense>('pres')
  const inBook = useLiveQuery(() => (w ? db.notebook.get(w.id) : undefined), [w?.id])
  const inCards = useLiveQuery(() => (w ? db.cards.get(w.id) : undefined), [w?.id])
  useTutorContext(w ? `单词：${w.es}（${w.zh}）` : null)
  if (!w) return <PageHeader back title="找不到这个词" />
  const verb = w.pos === 'v' && isVerbInfinitive(w.es)
  const unit = w.unit ? c.unitById.get(w.unit) : undefined
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader back title="" sub={unit && <Link to={`/unit/${unit.id}`} className="font-bold text-primary-ink">{unit.icon} {unit.level} · {unit.title}</Link>} />
      <div className="card -mt-4 p-5 md:p-7">
        <WordCard word={w} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" className={`btn btn-sm ${inBook ? 'btn-ghost' : 'btn-ghost'}`} onClick={() => (inBook ? db.notebook.delete(w.id) : db.notebook.put({ wordId: w.id, addedAt: Date.now() }))}>
          <BookHeart size={16} className={inBook ? 'fill-[var(--bad)] text-bad' : ''} /> {inBook ? '已在生词本' : '加入生词本'}
        </button>
        <button type="button" className="btn btn-ghost btn-sm" disabled={!!inCards} onClick={() => addCards([w.id], 'book')}>
          <Layers size={16} /> {inCards ? '已在记忆卡中' : '加入记忆卡'}
        </button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => openTutor(`请详细讲讲「${w.es}」的用法、常见搭配和词源，并给我 3 个例句。`)}>
          <Sparkles size={16} /> 问 AI
        </button>
      </div>
      {verb && (
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-black">
              动词变位 {isIrregular(w.es) && <span className="chip ml-1 !bg-bad-soft !text-bad-strong">不规则</span>}
            </h2>
            <Link to={`/words/conj/${encodeURIComponent(w.es)}`} className="btn btn-plain btn-sm">
              <Table2 size={16} /> 全部时态
            </Link>
          </div>
          <div className="scrollbar-none mb-3 flex gap-1.5 overflow-x-auto">
            {QUICK.map((t) => (
              <button key={t} type="button" className={`chip shrink-0 ${tense === t ? 'chip-on' : ''}`} onClick={() => setTense(t)}>
                {TENSES.find((x) => x.id === t)!.zh}
              </button>
            ))}
          </div>
          <div className="max-w-md">
            <ConjTable verb={w.es} tense={tense} />
          </div>
        </div>
      )}
    </div>
  )
}
