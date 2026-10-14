import { BookPlus, Check, Loader2, Mic, Play, Repeat, Sparkles, Wand2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { EsText } from '../../components/EsText'
import { Sheet } from '../../components/Sheet'
import { getContent } from '../../content'
import { POS_ZH } from '../../content/types'
import { wordLabel } from '../../lib/exercises/generate'
import { singTokens } from '../../lib/songs/sing'
import { searchKey } from '../../lib/text/normalize'
import { db } from '../../store/db'
import { useSettings } from '../../store/settings'
import { useTutor } from '../tutor/store'
import { aiLookup, type AiEntry } from '../words/aiDict'

const bare = (w: string) => w.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, '')

function WordRow({ form }: { form: string }) {
  const hasAI = !!useSettings((s) => s.gemini.apiKey)
  const hit = useMemo(() => getContent().lookup(form), [form])
  const [ai, setAi] = useState<{ busy?: boolean; entry?: AiEntry | null; err?: string }>({})
  const [saved, setSaved] = useState(false)
  const w = hit?.word ?? ai.entry?.word
  const save = async () => {
    if (!w) return
    await db.notebook.put({ wordId: w.id, addedAt: Date.now(), ...(w.id.startsWith('ai:') ? { es: w.es, zh: w.zh } : {}) })
    setSaved(true)
  }
  return (
    <li className="flex items-start gap-2 border-b border-line py-2 last:border-0">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="es font-bold">{form}</span>
          {w && <span className="es text-sm text-ink-3">→ {wordLabel(w)}</span>}
          {w && <span className="text-xs text-ink-3">{POS_ZH[w.pos]}</span>}
        </div>
        {hit?.how && <div className="text-xs text-ink-3">{hit.how}</div>}
        <div className="text-sm">{w?.zh ?? (ai.entry === null ? <span className="text-ink-3">AI 也没查到</span> : <span className="text-ink-3">词典里没有</span>)}</div>
        {ai.err && <div className="text-xs text-bad">{ai.err}</div>}
      </div>
      {w ? (
        <button type="button" className={`chip shrink-0 ${saved ? 'chip-on' : ''}`} onClick={save}>
          {saved ? <Check size={13} /> : <BookPlus size={13} />} {saved ? '已加' : '生词本'}
        </button>
      ) : (
        hasAI &&
        ai.entry === undefined && (
          <button
            type="button"
            className="chip shrink-0"
            disabled={ai.busy}
            onClick={async () => {
              setAi({ busy: true })
              try {
                setAi({ entry: await aiLookup(form) })
              } catch (e) {
                setAi({ err: e instanceof Error ? e.message : String(e) })
              }
            }}
          >
            {ai.busy ? <Loader2 size={13} className="animate-spin" /> : <Wand2 size={13} />} AI 查词
          </button>
        )
      )}
    </li>
  )
}

/** Stop on one line: meaning, word by word glosses, AI explanation, practice. */
export function StudySheet({
  open,
  onClose,
  line,
  zh,
  prev,
  next,
  title,
  artist,
  looping,
  onPlay,
  onLoop,
  onSing,
}: {
  open: boolean
  onClose: () => void
  line: string
  zh?: string
  prev?: string
  next?: string
  title: string
  artist: string
  looping: boolean
  onPlay: () => void
  onLoop: () => void
  onSing: () => void
}) {
  const openTutor = useTutor((s) => s.openTutor)
  const words = useMemo(() => {
    const seen = new Set<string>()
    return singTokens(line)
      .map(bare)
      .filter((w) => {
        const k = searchKey(w)
        if (!w || seen.has(k)) return false
        seen.add(k)
        return true
      })
  }, [line])

  const explain = () => {
    openTutor(
      `我在学西班牙语歌《${title}》（${artist}）。请讲解这一句歌词：\n「${line}」${prev ? `\n上一句：${prev}` : ''}${next ? `\n下一句：${next}` : ''}\n请说明：整句意思、关键词和短语、用到的语法（时态、语气、代词等）、口语或地方用法和文化背景。讲得简洁一些。`,
    )
    onClose()
  }

  return (
    <Sheet open={open} onClose={onClose} title="学这句" wide>
      <div className="rounded-2xl bg-primary-soft p-4">
        <EsText text={line} className="es text-xl font-extrabold leading-snug" />
        {zh && <div className="mt-1.5 text-ink-2">{zh}</div>}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <button type="button" className="btn btn-ghost btn-sm" onClick={onPlay}>
          <Play size={15} /> 听这句
        </button>
        <button type="button" className={`btn btn-sm ${looping ? 'btn-primary' : 'btn-ghost'}`} onClick={onLoop}>
          <Repeat size={15} /> {looping ? '取消循环' : '循环这句'}
        </button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={onSing}>
          <Mic size={15} /> 跟唱这句
        </button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={explain}>
          <Sparkles size={15} /> AI 讲解
        </button>
      </div>
      <div className="mt-4 text-sm font-black text-ink-3">逐词</div>
      <ul className="mt-1">
        {words.map((w) => (
          <WordRow key={w} form={w} />
        ))}
      </ul>
    </Sheet>
  )
}
