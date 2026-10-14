import { BookPlus, ExternalLink, Loader2, Sparkles, Wand2 } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { getContent, type LookupResult } from '../content'
import { POS_ZH } from '../content/types'
import { wordLabel, wordSpeech } from '../lib/exercises/generate'
import { speak } from '../lib/speech/tts'
import { db } from '../store/db'
import { useSettings } from '../store/settings'
import { useTutor } from '../features/tutor/store'
import { aiLookup, type AiEntry } from '../features/words/aiDict'
import { SpeakButton } from './Speak'

interface Pop {
  form: string
  rect: DOMRect
  hit: LookupResult | null
  gloss?: string
}

/**
 * Spanish text where every word can be tapped for a quick gloss.
 * `highlight` marks a character range (e.g. while reading aloud).
 */
export function EsText({
  text,
  gloss,
  className = '',
  onWordTap,
}: {
  text: string
  gloss?: Record<string, string>
  className?: string
  /** called before the gloss opens (e.g. to pause a song) */
  onWordTap?: () => void
}) {
  const [pop, setPop] = useState<Pop | null>(null)
  const parts = text.split(/([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:['’][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)?)/)
  return (
    <span className={className}>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <span
            key={i}
            role="button"
            tabIndex={0}
            className="cursor-pointer rounded-md decoration-[var(--primary)] decoration-2 underline-offset-4 hover:bg-primary-soft hover:underline"
            onClick={(e) => {
              e.stopPropagation()
              onWordTap?.()
              const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
              const g = gloss?.[p] ?? gloss?.[p.toLowerCase()]
              setPop({ form: p, rect, hit: getContent().lookup(p), gloss: g })
            }}
          >
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
      {pop && <GlossPopover pop={pop} onClose={() => setPop(null)} />}
    </span>
  )
}

function GlossPopover({ pop, onClose }: { pop: Pop; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const nav = useNavigate()
  // inside a lesson, leaving for the dictionary would lose the session
  const inSession = /^\/(lesson|exam\/run|review\/session|songs\/)/.test(useLocation().pathname)
  const [pos, setPos] = useState<{ left: number; top: number }>({ left: -9999, top: -9999 })
  const [saved, setSaved] = useState(false)
  const [ai, setAi] = useState<{ busy: boolean; entry?: AiEntry | null; err?: string }>({ busy: false })
  const hasAI = !!useSettings((s) => s.gemini.apiKey)
  const openTutor = useTutor((s) => s.openTutor)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const w = el.offsetWidth
    const h = el.offsetHeight
    let left = pop.rect.left + pop.rect.width / 2 - w / 2
    left = Math.max(12, Math.min(window.innerWidth - w - 12, left))
    let top = pop.rect.bottom + 8
    if (top + h > window.innerHeight - 12) top = pop.rect.top - h - 8
    setPos({ left, top })
  }, [pop])

  useEffect(() => {
    const h = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    const t = setTimeout(() => {
      document.addEventListener('mousedown', h)
      document.addEventListener('touchstart', h)
    })
    window.addEventListener('scroll', onClose, true)
    return () => {
      clearTimeout(t)
      document.removeEventListener('mousedown', h)
      document.removeEventListener('touchstart', h)
      window.removeEventListener('scroll', onClose, true)
    }
  }, [onClose])

  useEffect(() => {
    speak(pop.form)
  }, [pop.form])

  const w = pop.hit?.word
  return createPortal(
    <div ref={ref} className="card anim-pop fixed z-[60] w-72 max-w-[calc(100vw-24px)] p-4 shadow-xl" style={{ left: pos.left, top: pos.top }}>
      <div className="flex items-start gap-3">
        <SpeakButton text={w ? wordSpeech(w) : pop.form} size="sm" />
        <div className="min-w-0 flex-1">
          <div className="es text-lg font-extrabold leading-tight">{w ? wordLabel(w) : pop.form}</div>
          {w && <div className="text-xs font-bold text-ink-3">{POS_ZH[w.pos]}</div>}
        </div>
      </div>
      {pop.hit?.how && <div className="mt-2 rounded-lg bg-surface-2 px-2 py-1 text-xs font-bold text-ink-2">{pop.hit.how}</div>}
      <div className="mt-2 text-[15px] font-semibold">{w?.zh ?? pop.gloss ?? ai.entry?.word.zh ?? <span className="text-ink-3">{ai.entry === null ? 'AI 也没查到这个词' : '词典里暂时没有这个词'}</span>}</div>
      {ai.entry && (
        <div className="mt-1 text-xs text-ink-2">
          <span className="es font-bold">{ai.entry.word.es}</span>
          {ai.entry.form && ` · ${ai.entry.form}`} · AI 释义
        </div>
      )}
      {ai.err && <div className="mt-1 text-xs font-bold text-bad">{ai.err}</div>}
      {w?.ety && <div className="mt-1.5 line-clamp-2 text-xs text-ink-2">🌱 {w.ety}</div>}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {w && (
          <>
            {!inSession && (
              <button type="button" className="chip" onClick={() => nav(`/words/w/${encodeURIComponent(w.id)}`)}>
                <ExternalLink size={13} /> 词条
              </button>
            )}
            <button
              type="button"
              className={`chip ${saved ? 'chip-on' : ''}`}
              onClick={async () => {
                await db.notebook.put({ wordId: w.id, addedAt: Date.now() })
                setSaved(true)
              }}
            >
              <BookPlus size={13} /> {saved ? '已加入生词本' : '生词本'}
            </button>
          </>
        )}
        {!w && !pop.gloss && hasAI && ai.entry === undefined && (
          <button
            type="button"
            className="chip"
            disabled={ai.busy}
            onClick={async () => {
              setAi({ busy: true })
              try {
                setAi({ busy: false, entry: await aiLookup(pop.form) })
              } catch (e) {
                setAi({ busy: false, err: e instanceof Error ? e.message : String(e) })
              }
            }}
          >
            {ai.busy ? <Loader2 size={13} className="animate-spin" /> : <Wand2 size={13} />} AI 查词
          </button>
        )}
        {!w && ai.entry && (
          <button
            type="button"
            className={`chip ${saved ? 'chip-on' : ''}`}
            onClick={async () => {
              const e = ai.entry!.word
              await db.notebook.put({ wordId: e.id, addedAt: Date.now(), es: e.es, zh: e.zh })
              setSaved(true)
            }}
          >
            <BookPlus size={13} /> {saved ? '已加入生词本' : '生词本'}
          </button>
        )}
        <button
          type="button"
          className="chip"
          onClick={() => {
            openTutor(`「${pop.form}」在这里是什么意思、什么用法？${w ? '' : '请给出原形、词性、释义和词源。'}`)
            onClose()
          }}
        >
          <Sparkles size={13} /> 问 AI
        </button>
      </div>
    </div>,
    document.body,
  )
}

/** Render text that mixes Chinese and inline *Spanish* marked with asterisks. */
export function Mixed({ children }: { children: string }): ReactNode {
  const parts = children.split(/\*([^*]+)\*/)
  return parts.map((p, i) => (i % 2 ? <em key={i} className="es font-bold not-italic text-primary-ink">{p}</em> : <span key={i}>{p}</span>))
}
