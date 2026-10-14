import { GraduationCap, Play } from 'lucide-react'
import { memo, useEffect, useRef, useState } from 'react'
import { EsText } from '../../components/EsText'
import type { LyricLine } from '../../lib/songs/lrc'

export type ShowMode = 'both' | 'es' | 'zh' | 'hidden'

const Row = memo(function Row({
  i,
  line,
  zh,
  active,
  mode,
  revealed,
  onSeek,
  onStudy,
  onReveal,
  onWordTap,
}: {
  i: number
  line: LyricLine
  zh?: string
  active: boolean
  mode: ShowMode
  revealed: boolean
  onSeek: (i: number) => void
  onStudy: (i: number) => void
  onReveal: (i: number) => void
  onWordTap: () => void
}) {
  if (!line.text) {
    return (
      <li data-line={i} className={`px-3 py-1.5 text-center text-ink-3 ${active ? 'text-primary' : ''}`}>
        ♪
      </li>
    )
  }
  const hideEs = mode === 'zh' || (mode === 'hidden' && !revealed)
  return (
    <li
      data-line={i}
      className={`group flex items-start gap-2 rounded-2xl px-2.5 py-2 transition-colors ${active ? 'bg-primary-soft shadow-[inset_3px_0_0_var(--primary)]' : 'hover:bg-surface-2'}`}
    >
      <button type="button" className={`mt-0.5 shrink-0 rounded-lg p-1.5 ${active ? 'text-primary' : 'text-ink-3'} hover:bg-surface`} onClick={() => onSeek(i)} aria-label={`从第 ${i + 1} 句播放`}>
        <Play size={15} />
      </button>
      <div className="min-w-0 flex-1">
        {hideEs ? (
          mode === 'hidden' ? (
            <button type="button" className="es select-none text-left text-[17px] font-semibold leading-snug text-transparent [text-shadow:0_0_9px_var(--ink-3)]" onClick={() => onReveal(i)} title="点一下看原文">
              {line.text}
            </button>
          ) : null
        ) : (
          <EsText text={line.text} onWordTap={onWordTap} className={`es text-[17px] leading-snug ${active ? 'font-extrabold text-ink' : 'font-semibold text-ink-2'}`} />
        )}
        {(mode === 'both' || mode === 'zh') && zh && <div className={`mt-0.5 text-sm ${active ? 'text-ink-2' : 'text-ink-3'}`}>{zh}</div>}
      </div>
      <button type="button" className="mt-0.5 shrink-0 rounded-lg p-1.5 text-ink-3 hover:bg-surface hover:text-primary" onClick={() => onStudy(i)} aria-label={`学习第 ${i + 1} 句`} title="学这句">
        <GraduationCap size={17} />
      </button>
    </li>
  )
})

/** Synced lyric lines; the current one is highlighted and kept in view while `follow` is on. */
export function LyricsList({
  lines,
  zh,
  cur,
  mode,
  follow,
  onSeek,
  onStudy,
  onWordTap,
  className = '',
}: {
  lines: LyricLine[]
  zh?: string[]
  cur: number
  mode: ShowMode
  follow: boolean
  onSeek: (i: number) => void
  onStudy: (i: number) => void
  onWordTap: () => void
  className?: string
}) {
  const box = useRef<HTMLOListElement>(null)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const reveal = useRef((i: number) => setRevealed((s) => new Set(s).add(i))).current

  useEffect(() => setRevealed(new Set()), [mode])

  useEffect(() => {
    if (!follow || cur < 0 || !box.current) return
    const el = box.current.querySelector<HTMLElement>(`[data-line="${cur}"]`)
    if (!el) return
    const top = el.offsetTop - box.current.clientHeight * 0.35
    box.current.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  }, [cur, follow])

  return (
    <ol ref={box} className={`relative flex flex-col gap-0.5 overflow-y-auto overscroll-contain ${className}`}>
      {lines.map((l, i) => (
        <Row key={i} i={i} line={l} zh={zh?.[i]} active={i === cur} mode={mode} revealed={revealed.has(i)} onSeek={onSeek} onStudy={onStudy} onReveal={reveal} onWordTap={onWordTap} />
      ))}
    </ol>
  )
}
