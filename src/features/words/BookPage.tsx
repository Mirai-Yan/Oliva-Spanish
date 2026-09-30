import { useLiveQuery } from 'dexie-react-hooks'
import { Layers, Trash2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getContent } from '../../content'
import { LEVEL_INFO, type Level, type Word } from '../../content/types'
import { TAGS } from '../../content/tags'
import { Empty, PageHeader } from '../../components/PageHeader'
import { SpeakButton } from '../../components/Speak'
import { wordLabel, wordSpeech } from '../../lib/exercises/generate'
import { db } from '../../store/db'
import { addCards } from '../../store/review'
import { useSettings } from '../../store/settings'

type Filter = 'all' | 'new' | 'learning'

export function BookPage() {
  const { id = '' } = useParams()
  const c = getContent()
  const nav = useNavigate()
  const perDay = useSettings((s) => s.newWordsPerDay)
  const [filter, setFilter] = useState<Filter>('all')
  const notebook = useLiveQuery(() => db.notebook.orderBy('addedAt').reverse().toArray(), [], [])
  const cardIds = useLiveQuery(async () => new Set((await db.cards.toCollection().primaryKeys()) as string[]), [], new Set<string>())

  const { title, sub, words } = useMemo(() => {
    if (id === 'notebook') {
      const ws: Word[] = (notebook ?? []).map((n) => c.wordById.get(n.wordId) ?? ({ id: n.wordId, es: n.es ?? n.wordId, zh: n.zh ?? '', pos: 'phr', level: 'B1' } as Word))
      return { title: '我的生词本', sub: '阅读和查词时收藏的单词', words: ws }
    }
    if (id.startsWith('tag:')) {
      const t = id.slice(4)
      return { title: `${TAGS[t]?.icon ?? ''} ${TAGS[t]?.zh ?? t}`, sub: '主题词书', words: c.words.filter((w) => w.tags?.includes(t)) }
    }
    const lvl = id as Level
    return { title: lvl === 'A0' ? '发音词表' : `${lvl} 核心词汇`, sub: LEVEL_INFO[lvl]?.desc, words: c.words.filter((w) => w.level === lvl) }
  }, [id, c, notebook])

  const shown = words.filter((w) => (filter === 'all' ? true : filter === 'new' ? !cardIds?.has(w.id) : cardIds?.has(w.id)))
  const unlearned = words.filter((w) => !cardIds?.has(w.id) && c.wordById.has(w.id))

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader back="/words" title={title} sub={sub} />
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {(['all', 'new', 'learning'] as Filter[]).map((f) => (
          <button key={f} type="button" className={`chip ${filter === f ? 'chip-on' : ''}`} onClick={() => setFilter(f)}>
            {{ all: `全部 ${words.length}`, new: `未学 ${unlearned.length}`, learning: `已加入记忆 ${words.length - unlearned.length}` }[f]}
          </button>
        ))}
        <span className="flex-1" />
        <button
          type="button"
          className="btn btn-primary btn-sm"
          disabled={!unlearned.length}
          onClick={async () => {
            await addCards(
              unlearned.slice(0, perDay).map((w) => w.id),
              'book',
            )
            nav('/review/cards')
          }}
        >
          <Layers size={16} /> 背 {Math.min(perDay, unlearned.length)} 个新词
        </button>
      </div>
      {shown.length === 0 ? (
        <Empty>{id === 'notebook' ? '生词本还是空的。阅读时点单词，就可以把它加进来。' : '这里没有单词'}</Empty>
      ) : (
        <div className="card divide-y divide-line overflow-hidden">
          {shown.map((w) => (
            <div key={w.id} className="flex items-center gap-3 px-4 py-2.5">
              <SpeakButton text={wordSpeech(w)} size="sm" className="!shadow-none" />
              <Link to={c.wordById.has(w.id) ? `/words/w/${encodeURIComponent(w.id)}` : '#'} className="min-w-0 flex-1">
                <span className="es block truncate font-bold">{wordLabel(w)}</span>
                <span className="block truncate text-sm text-ink-2">{w.zh}</span>
              </Link>
              {cardIds?.has(w.id) && <span className="chip !text-[11px]">记忆中</span>}
              {id === 'notebook' && (
                <button type="button" className="rounded-lg p-1.5 text-ink-3 hover:bg-surface-2" onClick={() => db.notebook.delete(w.id)} aria-label="移出生词本">
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
