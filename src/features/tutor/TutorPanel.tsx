import { ArrowUp, History, KeyRound, Plus, Square, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { Markdown } from '../../components/Markdown'
import { Mascot } from '../../components/Mascot'
import { GeminiError, streamGenerate } from '../../lib/gemini/client'
import { tutorSystem } from '../../lib/gemini/prompts'
import { db, type ChatMessage, type ChatRow } from '../../store/db'
import { useSettings } from '../../store/settings'
import { useLearnerLevel } from '../path/useLearnerLevel'
import { useTutor } from './store'

const SUGGESTIONS = ['ser 和 estar 到底有什么区别？', '西班牙语名词的阴阳性怎么记？', '「usted」这个词是怎么来的？', '给我出 3 道这个知识点的练习题']

function newChat(): ChatRow {
  const now = Date.now()
  return { id: `tutor-${now}`, kind: 'tutor', title: '新对话', messages: [], createdAt: now, updatedAt: now }
}

export function TutorPanel() {
  const open = useTutor((s) => s.open)
  const close = useTutor((s) => s.close)
  const context = useTutor((s) => s.context)
  const apiKey = useSettings((s) => s.gemini.apiKey)
  const level = useLearnerLevel()
  const [chat, setChat] = useState<ChatRow>(newChat)
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [history, setHistory] = useState<ChatRow[] | null>(null)
  const abort = useRef<AbortController | null>(null)
  const scroller = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // restore the latest conversation once
  useEffect(() => {
    db.chats
      .where('kind')
      .equals('tutor')
      .reverse()
      .sortBy('updatedAt')
      .then((rows) => rows[0] && setChat(rows[0]))
      .catch(() => {})
  }, [])

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' })
  }, [chat.messages])

  const send = useCallback(
    async (text: string) => {
      const q = text.trim()
      if (!q || busy) return
      setError('')
      const userMsg: ChatMessage = { role: 'user', text: q, ts: Date.now() }
      const base: ChatRow = {
        ...chat,
        title: chat.messages.length ? chat.title : q.slice(0, 24),
        messages: [...chat.messages, userMsg],
        updatedAt: Date.now(),
      }
      setChat({ ...base, messages: [...base.messages, { role: 'model', text: '', ts: Date.now() }] })
      setInput('')
      setBusy(true)
      const ctrl = new AbortController()
      abort.current = ctrl
      let acc = ''
      try {
        const history = base.messages.slice(-16).map((m) => ({ role: m.role, text: m.text }))
        for await (const delta of streamGenerate({ system: tutorSystem(level, context), messages: history, signal: ctrl.signal })) {
          acc += delta
          setChat((c) => ({ ...c, messages: [...c.messages.slice(0, -1), { role: 'model', text: acc, ts: Date.now() }] }))
        }
      } catch (e) {
        if (!(e instanceof GeminiError && e.status === -1)) setError(e instanceof Error ? e.message : String(e))
      } finally {
        setBusy(false)
        abort.current = null
        const final: ChatRow = {
          ...base,
          messages: acc ? [...base.messages, { role: 'model', text: acc, ts: Date.now() }] : base.messages,
          updatedAt: Date.now(),
        }
        setChat(final)
        db.chats.put(final).catch(() => {})
      }
    },
    [busy, chat, context, level],
  )

  // a question queued by "问 AI" buttons
  useEffect(() => {
    if (!open) return
    const p = useTutor.getState().consumePending()
    if (p && apiKey) send(p)
    else if (p) setInput(p)
    setTimeout(() => inputRef.current?.focus(), 200)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  if (!open) return null

  const empty = chat.messages.length === 0

  return createPortal(
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-label="AI 答疑">
      <div className="anim-fade absolute inset-0 bg-black/30 lg:bg-black/10" onClick={close} />
      <aside className="anim-slide-up md:anim-fade relative mt-auto flex h-[88dvh] w-full flex-col overflow-hidden rounded-t-3xl bg-surface shadow-2xl md:mt-0 md:h-full md:max-w-[440px] md:rounded-none md:border-l md:border-line">
        <header className="flex items-center gap-2 border-b border-line px-4 py-3">
          <Mascot size={34} mood={busy ? 'think' : 'happy'} />
          <div className="min-w-0 flex-1">
            <div className="font-extrabold leading-tight">问问 Oliva</div>
            <div className="truncate text-xs text-ink-3">{context ? `当前：${context.split('\n')[0]}` : 'Gemini 驱动的西语老师'}</div>
          </div>
          <button type="button" className="rounded-xl p-2 text-ink-3 hover:bg-surface-2" title="历史对话" onClick={async () => setHistory(await db.chats.where('kind').equals('tutor').reverse().sortBy('updatedAt'))}>
            <History size={18} />
          </button>
          <button
            type="button"
            className="rounded-xl p-2 text-ink-3 hover:bg-surface-2"
            title="新对话"
            onClick={() => {
              abort.current?.abort()
              setChat(newChat())
              setError('')
            }}
          >
            <Plus size={18} />
          </button>
          <button type="button" className="rounded-xl p-2 text-ink-3 hover:bg-surface-2" onClick={close} aria-label="关闭">
            <X size={20} />
          </button>
        </header>

        {history && (
          <div className="absolute inset-x-0 bottom-0 top-[61px] z-10 overflow-y-auto bg-surface p-3">
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="font-extrabold">历史对话</span>
              <button type="button" className="btn btn-plain btn-sm" onClick={() => setHistory(null)}>
                返回
              </button>
            </div>
            {history.length === 0 && <div className="p-4 text-center text-sm text-ink-3">还没有历史对话</div>}
            {history.map((h) => (
              <button
                key={h.id}
                type="button"
                className="tile mb-2 w-full"
                onClick={() => {
                  setChat(h)
                  setHistory(null)
                }}
              >
                <div className="truncate">{h.title}</div>
                <div className="text-xs font-semibold text-ink-3">
                  {new Date(h.updatedAt).toLocaleString('zh-CN')} · {h.messages.length} 条
                </div>
              </button>
            ))}
          </div>
        )}

        <div ref={scroller} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {!apiKey && (
            <div className="card bg-accent-soft p-4 text-sm">
              <div className="mb-1 flex items-center gap-2 font-extrabold">
                <KeyRound size={16} /> 需要先设置 Gemini API Key
              </div>
              <p className="text-ink-2">AI 答疑使用 Google Gemini。在设置里填入你自己的 API Key（只保存在本机浏览器）即可使用。</p>
              <Link to="/settings#ai" onClick={close} className="btn btn-accent btn-sm mt-3">
                去设置
              </Link>
            </div>
          )}
          {empty && (
            <div className="pt-4 text-center">
              <Mascot size={72} className="anim-bob mx-auto" />
              <p className="mt-2 font-bold text-ink-2">¡Hola! 有什么不懂的，随时问我。</p>
              <div className="mt-4 flex flex-col gap-2">
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" className="tile text-sm" onClick={() => (apiKey ? send(s) : setInput(s))}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
          {chat.messages.map((m, i) =>
            m.role === 'user' ? (
              <div key={i} className="flex justify-end">
                <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-primary px-4 py-2.5 font-semibold text-white">{m.text}</div>
              </div>
            ) : (
              <div key={i} className="flex gap-2">
                <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-surface-2 px-4 py-2.5">
                  {m.text ? <Markdown>{m.text}</Markdown> : <TypingDots />}
                </div>
              </div>
            ),
          )}
          {error && <div className="rounded-2xl bg-bad-soft px-4 py-3 text-sm font-semibold text-bad-strong">{error}</div>}
        </div>

        <form
          className="safe-bottom border-t border-line p-3"
          onSubmit={(e) => {
            e.preventDefault()
            send(input)
          }}
        >
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
                  e.preventDefault()
                  send(input)
                }
              }}
              rows={1}
              placeholder={apiKey ? '用中文或西语提问…' : '先在设置里填写 API Key'}
              className="input max-h-40 min-h-[48px] resize-none"
            />
            {busy ? (
              <button type="button" className="btn btn-ghost h-12 w-12 !p-0" onClick={() => abort.current?.abort()} aria-label="停止">
                <Square size={18} />
              </button>
            ) : (
              <button type="submit" className="btn btn-primary h-12 w-12 !p-0" disabled={!input.trim() || !apiKey} aria-label="发送">
                <ArrowUp size={20} strokeWidth={3} />
              </button>
            )}
          </div>
        </form>
      </aside>
    </div>,
    document.body,
  )
}

function TypingDots() {
  return (
    <div className="flex gap-1 py-2">
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-2 w-2 animate-bounce rounded-full bg-ink-3" style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
    </div>
  )
}
