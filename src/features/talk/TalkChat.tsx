import { ArrowUp, ChevronLeft, ExternalLink, Flag, Languages, Lightbulb, ListChecks, Mic, RotateCcw, Square } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { scenarioById } from '../../content/roleplay'
import type { Scenario } from '../../content/types'
import { Mascot } from '../../components/Mascot'
import { SpeakButton, SpeedControl } from '../../components/Speak'
import { generate, generateJSON, GeminiError, streamGenerate } from '../../lib/gemini/client'
import { askInGemini } from '../../lib/gemini/handoff'
import { HINT_SCHEMA, hintPrompt, ROLEPLAY_REPORT_SCHEMA, roleplayHandoffPrompt, roleplayReportPrompt, roleplaySystem, roleplayTranscript } from '../../lib/gemini/prompts'
import { listen, STT_ERRORS, sttSupported, type ListenHandle } from '../../lib/speech/stt'
import { speak, stopSpeaking } from '../../lib/speech/tts'
import { db, type ChatRow } from '../../store/db'
import { useProgress } from '../../store/progress'
import { useSettings } from '../../store/settings'
import { AccentBar, insertAt } from '../lesson/exercises/AccentBar'
import { useLearnerLevel } from '../path/useLearnerLevel'
import { useTutorContext } from '../tutor/store'

export interface RoleplayReport {
  score: number
  summary: string
  goals: { goal: string; done: boolean }[]
  corrections: { original: string; corrected: string; explanation: string }[]
  better: { original: string; better: string; explanation: string }[]
}

function newChat(s: Scenario): ChatRow {
  const now = Date.now()
  return {
    id: `rp-${s.id}-${now}`,
    kind: 'roleplay',
    title: `${s.icon} ${s.title}`,
    scenarioId: s.id,
    messages: [{ role: 'model', text: s.opening, ts: now }],
    createdAt: now,
    updatedAt: now,
  }
}

export function TalkChat() {
  const { id = '' } = useParams()
  const s = scenarioById.get(id)
  if (!s) return <Navigate to="/talk" replace />
  return <Chat key={id} s={s} />
}

function Chat({ s }: { s: Scenario }) {
  const nav = useNavigate()
  const [sp] = useSearchParams()
  const apiKey = useSettings((st) => st.gemini.apiKey)
  const autoplay = useSettings((st) => st.autoplay)
  const level = useLearnerLevel()
  const addXp = useProgress((p) => p.addXp)
  const [chat, setChat] = useState<ChatRow>(() => newChat(s))
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState<'idle' | 'reply' | 'hint' | 'report'>('idle')
  const [error, setError] = useState('')
  const [hints, setHints] = useState<{ es: string; zh: string }[]>([])
  const [showGoals, setShowGoals] = useState(true)
  const [listening, setListening] = useState(false)
  const handle = useRef<ListenHandle | null>(null)
  const scroller = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const started = useRef(Date.now())
  const report = chat.report as RoleplayReport | undefined

  useTutorContext(`情景对话：${s.title}（${s.setting}）`)

  // load a saved conversation
  useEffect(() => {
    const cid = sp.get('chat')
    if (cid) db.chats.get(cid).then((row) => row && setChat(row))
  }, [sp])

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' })
  }, [chat.messages, hints, report])

  // read the opening line aloud
  useEffect(() => {
    if (autoplay && chat.messages.length === 1) {
      const t = setTimeout(() => speak(s.opening), 400)
      return () => clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => () => {
    stopSpeaking()
    handle.current?.stop()
  }, [])

  const save = (row: ChatRow) => db.chats.put(row).catch(() => {})

  const send = useCallback(
    async (text: string) => {
      const q = text.trim()
      if (!q || busy !== 'idle' || report) return
      setError('')
      setHints([])
      const base: ChatRow = { ...chat, messages: [...chat.messages, { role: 'user', text: q, ts: Date.now() }], updatedAt: Date.now() }
      setChat({ ...base, messages: [...base.messages, { role: 'model', text: '', ts: Date.now() }] })
      setInput('')
      setBusy('reply')
      let acc = ''
      try {
        for await (const d of streamGenerate({
          system: roleplaySystem(s, level),
          messages: base.messages.map((m) => ({ role: m.role, text: m.text })),
          temperature: 0.8,
        })) {
          acc += d
          setChat((c) => ({ ...c, messages: [...c.messages.slice(0, -1), { role: 'model', text: acc, ts: Date.now() }] }))
        }
      } catch (e) {
        setError(e instanceof GeminiError || e instanceof Error ? e.message : String(e))
      } finally {
        const final: ChatRow = { ...base, messages: acc ? [...base.messages, { role: 'model', text: acc.trim(), ts: Date.now() }] : base.messages, updatedAt: Date.now() }
        setChat(final)
        save(final)
        setBusy('idle')
        if (acc && useSettings.getState().autoplay) speak(acc.trim())
      }
    },
    [busy, chat, level, report, s],
  )

  const translate = async (i: number) => {
    const m = chat.messages[i]
    if (m.zh) return
    try {
      const zh = await generate({ messages: [{ role: 'user', text: `把这句西班牙语翻译成自然的中文，只输出译文：\n${m.text}` }], temperature: 0.2 })
      const msgs = chat.messages.map((x, k) => (k === i ? { ...x, zh: zh.trim() } : x))
      const row = { ...chat, messages: msgs }
      setChat(row)
      save(row)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    }
  }

  const hint = async () => {
    setBusy('hint')
    setError('')
    try {
      const r = await generateJSON<{ suggestions: { es: string; zh: string }[] }>({
        messages: [{ role: 'user', text: hintPrompt(s, roleplayTranscript(chat.messages), level) }],
        schema: HINT_SCHEMA,
      })
      setHints(r.suggestions.slice(0, 3))
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setBusy('idle')
    }
  }

  const finish = async () => {
    if (!chat.messages.some((m) => m.role === 'user')) return
    stopSpeaking()
    setBusy('report')
    setError('')
    try {
      const r = await generateJSON<RoleplayReport>({
        messages: [{ role: 'user', text: roleplayReportPrompt(s, roleplayTranscript(chat.messages), level) }],
        schema: ROLEPLAY_REPORT_SCHEMA,
      })
      const row = { ...chat, report: r, updatedAt: Date.now() }
      setChat(row)
      save(row)
      addXp(10 + Math.round(r.score / 10), Math.round((Date.now() - started.current) / 1000))
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setBusy('idle')
    }
  }

  const toggleMic = async () => {
    if (listening) {
      handle.current?.stop()
      return
    }
    stopSpeaking()
    setListening(true)
    setError('')
    const h = listen({ onInterim: setInput })
    handle.current = h
    const r = await h.result
    setListening(false)
    handle.current = null
    if (r.alternatives[0]) setInput(r.alternatives[0])
    else setError(STT_ERRORS[r.error ?? 'no-speech'] ?? '没有识别到语音')
  }

  const userTurns = chat.messages.filter((m) => m.role === 'user').length

  return (
    <div className="flex h-dvh flex-col bg-surface">
      <header className="safe-top border-b-2 border-line">
        <div className="mx-auto flex max-w-3xl items-center gap-2 px-3 py-2.5">
          <button type="button" className="rounded-xl p-1.5 text-ink-3 hover:bg-surface-2" onClick={() => nav('/talk')} aria-label="返回">
            <ChevronLeft size={24} />
          </button>
          <span className="text-2xl">{s.icon}</span>
          <div className="min-w-0 flex-1">
            <div className="truncate font-black leading-tight">{s.title}</div>
            <div className="es truncate text-xs font-bold text-ink-3">
              {s.level} · {s.titleEs}
            </div>
          </div>
          <button type="button" className={`chip ${showGoals ? 'chip-on' : ''}`} onClick={() => setShowGoals((v) => !v)}>
            <ListChecks size={14} /> 任务
          </button>
          <SpeedControl compact />
        </div>
      </header>

      <div ref={scroller} className="flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-4">
          {showGoals && (
            <div className="card bg-primary-soft p-4">
              <div className="text-sm font-bold text-primary-ink">{s.setting}</div>
              <div className="mt-1 text-xs text-ink-2">你的角色：{s.userRole}</div>
              <ul className="mt-2 space-y-1 text-sm">
                {s.goals.map((g, i) => {
                  const done = report?.goals.find((x) => x.goal.includes(g) || g.includes(x.goal))?.done
                  return (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 text-[10px] font-black ${done ? 'border-ok bg-ok text-white' : 'border-[var(--primary)]'}`}>{done ? '✓' : ''}</span>
                      {g}
                    </li>
                  )
                })}
              </ul>
              <details className="mt-3 text-sm">
                <summary className="cursor-pointer font-bold text-primary-ink">常用表达</summary>
                <div className="mt-2 flex flex-col gap-1.5">
                  {s.phrases.map(([es, zh], i) => (
                    <button key={i} type="button" className="flex items-center gap-2 text-left" onClick={() => speak(es)}>
                      <span className="es font-bold">{es}</span>
                      <span className="text-ink-3">{zh}</span>
                    </button>
                  ))}
                </div>
              </details>
            </div>
          )}

          {!apiKey && (
            <div className="card bg-accent-soft p-4 text-sm">
              <div className="mb-1 font-extrabold">没有 API Key 也能练</div>
              <p className="text-ink-2">点下面的按钮，会把这个情景的角色设定复制到 Gemini 网页版，用你的会员和 AI 对练；说“结束”就能得到点评。也可以去设置里免费申请 API Key，直接在这里练（支持语音和自动朗读）。</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" className="btn btn-accent btn-sm" onClick={() => askInGemini(roleplayHandoffPrompt(s, level), { persona: false })}>
                  <ExternalLink size={16} /> 到 Gemini 网页版练习
                </button>
                <Link to="/settings#ai" className="btn btn-ghost btn-sm">
                  免费申请 API Key
                </Link>
              </div>
            </div>
          )}

          {chat.messages.map((m, i) =>
            m.role === 'model' ? (
              <div key={i} className="flex items-end gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-lg">{s.icon}</div>
                <div className="max-w-[82%] rounded-2xl rounded-bl-md bg-surface-2 px-4 py-2.5">
                  {m.text ? <div className="es text-[17px] font-semibold leading-snug">{m.text}</div> : <span className="text-ink-3">…</span>}
                  {m.zh && <div className="mt-1 text-sm text-ink-2">{m.zh}</div>}
                  {m.text && (
                    <div className="mt-1.5 flex gap-1.5">
                      <SpeakButton text={m.text} size="sm" className="!h-7 !w-7 !shadow-none" />
                      {apiKey && !m.zh && (
                        <button type="button" className="chip !py-0.5" onClick={() => translate(i)}>
                          <Languages size={12} /> 译
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div key={i} className="flex justify-end">
                <div className="es max-w-[82%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-[17px] font-semibold text-white">{m.text}</div>
              </div>
            ),
          )}

          {hints.length > 0 && (
            <div className="card p-3">
              <div className="mb-1.5 flex items-center gap-1.5 text-sm font-black text-accent-ink">
                <Lightbulb size={15} /> 可以这样说（点一下填入）
              </div>
              {hints.map((h, i) => (
                <button key={i} type="button" className="tile mb-1.5 w-full !py-2 text-left" onClick={() => setInput(h.es)}>
                  <div className="es">{h.es}</div>
                  <div className="text-xs font-semibold text-ink-3">{h.zh}</div>
                </button>
              ))}
            </div>
          )}

          {report && <ReportCard r={report} />}
          {error && <div className="rounded-2xl bg-bad-soft px-4 py-3 text-sm font-semibold text-bad-strong">{error}</div>}
          {busy === 'report' && (
            <div className="flex items-center justify-center gap-3 py-4 text-ink-2">
              <Mascot mood="think" size={48} /> 正在生成点评…
            </div>
          )}
        </div>
      </div>

      <footer className="safe-bottom border-t-2 border-line bg-surface">
        <div className="mx-auto max-w-3xl px-3 py-3">
          {report ? (
            <div className="flex gap-2">
              <button type="button" className="btn btn-ghost flex-1" onClick={() => nav('/talk')}>
                返回
              </button>
              <button
                type="button"
                className="btn btn-primary flex-1"
                onClick={() => {
                  setChat(newChat(s))
                  started.current = Date.now()
                  speak(s.opening)
                }}
              >
                <RotateCcw size={18} /> 再练一次
              </button>
            </div>
          ) : (
            <>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <button type="button" className="chip" disabled={!apiKey || busy !== 'idle'} onClick={hint}>
                  <Lightbulb size={14} /> {busy === 'hint' ? '想一想…' : '提示'}
                </button>
                <button type="button" className="chip" disabled={!apiKey || busy !== 'idle' || userTurns === 0} onClick={finish}>
                  <Flag size={14} /> 结束并点评
                </button>
                <span className="flex-1" />
                <AccentBar onInsert={(c) => insertAt(inputRef.current, input, c, setInput)} />
              </div>
              <form
                className="flex items-end gap-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  send(input)
                }}
              >
                {sttSupported && (
                  <button
                    type="button"
                    disabled={!apiKey || busy !== 'idle'}
                    onClick={toggleMic}
                    className={`btn h-12 w-12 !p-0 ${listening ? 'btn-bad anim-pulse-ring' : 'btn-ghost'}`}
                    aria-label={listening ? '停止' : '语音输入'}
                  >
                    {listening ? <Square size={18} /> : <Mic size={20} />}
                  </button>
                )}
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
                  lang="es"
                  disabled={!apiKey}
                  placeholder={apiKey ? 'Escribe en español…' : '需要 API Key（或用上面的按钮到 Gemini 网页版练）'}
                  className="input es max-h-32 min-h-[48px] resize-none"
                />
                <button type="submit" className="btn btn-primary h-12 w-12 !p-0" disabled={!input.trim() || !apiKey || busy !== 'idle'} aria-label="发送">
                  <ArrowUp size={20} strokeWidth={3} />
                </button>
              </form>
            </>
          )}
        </div>
      </footer>
    </div>
  )
}

function ReportCard({ r }: { r: RoleplayReport }) {
  return (
    <div className="card anim-pop flex flex-col gap-3 p-5">
      <div className="flex items-center gap-3">
        <Mascot mood={r.score >= 60 ? 'cheer' : 'happy'} size={56} />
        <div>
          <div className="text-3xl font-black text-primary">{r.score} 分</div>
          <div className="text-sm text-ink-2">{r.summary}</div>
        </div>
      </div>
      {r.corrections.length > 0 && (
        <div>
          <div className="mb-1.5 font-black">需要改正</div>
          {r.corrections.map((c, i) => (
            <div key={i} className="mb-2 rounded-2xl bg-surface-2 p-3 text-[15px]">
              <div className="es">
                <span className="text-bad line-through">{c.original}</span> → <span className="font-bold text-ok-strong">{c.corrected}</span>
              </div>
              <div className="text-sm text-ink-2">{c.explanation}</div>
            </div>
          ))}
        </div>
      )}
      {r.better.length > 0 && (
        <div>
          <div className="mb-1.5 font-black">更地道的说法</div>
          {r.better.map((b, i) => (
            <div key={i} className="mb-2 rounded-2xl bg-primary-soft p-3 text-[15px]">
              <div className="es">
                {b.original} → <span className="font-bold text-primary-ink">{b.better}</span>
              </div>
              <div className="text-sm text-ink-2">{b.explanation}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
