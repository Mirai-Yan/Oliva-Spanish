import { useLiveQuery } from 'dexie-react-hooks'
import { BookHeart, ChevronRight, Layers, Search, Sparkles, Table2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getContent } from '../../content'
import { LEVEL_INFO } from '../../content/types'
import { TAGS } from '../../content/tags'
import { PageHeader, Section } from '../../components/PageHeader'
import { SpeakButton } from '../../components/Speak'
import { WordCard } from '../../components/WordCard'
import { wordLabel, wordSpeech } from '../../lib/exercises/generate'
import { db } from '../../store/db'
import { useSettings } from '../../store/settings'
import { useDueCount } from '../../store/review'
import { aiLookup, type AiEntry } from './aiDict'

export function WordsPage() {
  const c = getContent()
  const [q, setQ] = useState('')
  const [ai, setAi] = useState<{ busy: boolean; entry?: AiEntry | null; err?: string }>({ busy: false })
  const hasAI = !!useSettings((s) => s.gemini.apiKey)
  const results = useMemo(() => (q.trim() ? c.search(q, 40) : []), [q, c])
  const hit = q.trim() ? c.lookup(q) : null
  const notebook = useLiveQuery(() => db.notebook.count(), [], 0)
  const cards = useLiveQuery(() => db.cards.count(), [], 0)
  const due = useDueCount()

  const tagCounts = useMemo(() => {
    const m = new Map<string, number>()
    c.words.forEach((w) => w.tags?.forEach((t) => m.set(t, (m.get(t) ?? 0) + 1)))
    return [...m.entries()].filter(([t]) => TAGS[t]).sort((a, b) => b[1] - a[1])
  }, [c])

  const runAI = async () => {
    setAi({ busy: true })
    try {
      setAi({ busy: false, entry: await aiLookup(q.trim()) })
    } catch (e) {
      setAi({ busy: false, err: e instanceof Error ? e.message : String(e) })
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="词书" sub="查词、分级词书和背单词" />
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-3" />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value)
            setAi({ busy: false })
          }}
          placeholder="输入西语或中文，变位形式也能查（如 tuvimos）"
          className="input !pl-11 text-lg"
          lang="es"
          autoCapitalize="off"
          autoCorrect="off"
        />
      </div>

      {q.trim() ? (
        <div className="mb-8">
          {hit?.how && (
            <div className="mb-3 rounded-2xl bg-primary-soft px-4 py-2 text-sm font-bold text-primary-ink">
              「{q.trim()}」是 {hit.how}
            </div>
          )}
          {results.length > 0 ? (
            <div className="card divide-y divide-line overflow-hidden">
              {results.map((w) => (
                <Link key={w.id} to={`/words/w/${encodeURIComponent(w.id)}`} className="flex items-center gap-3 px-4 py-3 hover:bg-surface-2">
                  <SpeakButton text={wordSpeech(w)} size="sm" className="!shadow-none" />
                  <span className="es min-w-0 flex-1 truncate font-bold">{wordLabel(w)}</span>
                  <span className="max-w-[45%] truncate text-right text-ink-2">{w.zh}</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="card p-5 text-center text-ink-2">内置词典里没有找到「{q.trim()}」。</div>
          )}
          <div className="mt-3">
            {ai.entry ? (
              <div className="card p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-black text-accent-ink">
                  <Sparkles size={16} /> AI 词条{ai.entry.form ? ` · ${ai.entry.form}` : ''}
                </div>
                <WordCard word={ai.entry.word} big={false} />
                <button type="button" className="btn btn-ghost btn-sm mt-4" onClick={() => db.notebook.put({ wordId: ai.entry!.word.id, addedAt: Date.now(), es: ai.entry!.word.es, zh: ai.entry!.word.zh })}>
                  加入生词本
                </button>
              </div>
            ) : ai.entry === null ? (
              <div className="card p-4 text-center text-ink-2">AI 认为这不是一个西班牙语单词，检查一下拼写？</div>
            ) : (
              <button type="button" className="btn btn-accent w-full" disabled={!hasAI || ai.busy} onClick={runAI}>
                <Sparkles size={18} /> {ai.busy ? 'AI 查询中…' : hasAI ? `用 AI 查「${q.trim()}」（含词源）` : 'AI 查词需要先在设置里填写 API Key'}
              </button>
            )}
            {ai.err && <div className="mt-2 rounded-2xl bg-bad-soft p-3 text-sm font-semibold text-bad-strong">{ai.err}</div>}
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            <Link to="/review/cards" className="card col-span-2 flex items-center gap-4 bg-primary p-4 text-white !border-[var(--primary-strong)] shadow-[0_4px_0_var(--primary-strong)] md:col-span-1">
              <Layers size={30} />
              <div>
                <div className="text-lg font-black">背单词</div>
                <div className="text-sm opacity-90">
                  {due} 个待复习 · 共 {cards} 张卡
                </div>
              </div>
            </Link>
            <Link to="/words/book/notebook" className="card flex items-center gap-3 p-4">
              <BookHeart size={26} className="text-bad" />
              <div>
                <div className="font-black">生词本</div>
                <div className="text-sm text-ink-2">{notebook} 个词</div>
              </div>
            </Link>
            <Link to="/words/conj" className="card flex items-center gap-3 p-4">
              <Table2 size={26} className="text-info" />
              <div>
                <div className="font-black">变位查询</div>
                <div className="text-sm text-ink-2">任意动词 · 全时态</div>
              </div>
            </Link>
          </div>

          <Section title="分级词书">
            <div className="grid gap-3 sm:grid-cols-2">
              {c.levels.map((lvl) => {
                const n = c.words.filter((w) => w.level === lvl).length
                if (!n) return null
                return (
                  <Link key={lvl} to={`/words/book/${lvl}`} className="tile flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-lg font-black text-[#2b2108]">{lvl === 'A0' ? '起' : lvl}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block">
                        {lvl === 'A0' ? '发音词表' : `${lvl} 核心词汇`} · {LEVEL_INFO[lvl].name}
                      </span>
                      <span className="block text-sm font-semibold text-ink-3">{n} 个词</span>
                    </span>
                    <ChevronRight size={18} className="text-ink-3" />
                  </Link>
                )
              })}
            </div>
          </Section>

          <Section title="主题词书">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {tagCounts.map(([t, n]) => (
                <Link key={t} to={`/words/book/tag:${t}`} className="tile flex items-center gap-2 !py-3">
                  <span className="text-2xl">{TAGS[t].icon}</span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm">{TAGS[t].zh}</span>
                    <span className="block text-xs font-semibold text-ink-3">{n} 词</span>
                  </span>
                </Link>
              ))}
            </div>
          </Section>
        </>
      )}
    </div>
  )
}
