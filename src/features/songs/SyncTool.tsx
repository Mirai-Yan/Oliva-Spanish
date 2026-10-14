import { Check, Pause, Play, Undo2, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { fmtStamp, toLrc } from '../../lib/songs/lrc'
import type { SongClock } from './useSongClock'

/** Hand-sync pasted lyrics: play the song and tap at the start of every line. */
export function SyncTool({ texts, clock, onDone, onCancel }: { texts: string[]; clock: SongClock; onDone: (lrc: string) => void; onCancel: () => void }) {
  const [stamps, setStamps] = useState<number[]>([])
  const listRef = useRef<HTMLOListElement>(null)
  const i = stamps.length
  const done = i >= texts.length

  const mark = () => {
    if (done) return
    if (!clock.playing) clock.play()
    setStamps((s) => [...s, Math.max(0, clock.time() - 0.15)])
  }

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault()
        mark()
      }
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  })

  useEffect(() => {
    listRef.current?.querySelector(`[data-i="${i}"]`)?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }, [i])

  return (
    <div className="card flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2">
        <span className="flex-1 font-black">对齐歌词 · {Math.min(i, texts.length)}/{texts.length}</span>
        <button type="button" className="rounded-lg p-1.5 text-ink-3 hover:bg-surface-2" onClick={onCancel} aria-label="取消">
          <X size={18} />
        </button>
      </div>
      <p className="text-sm text-ink-2">播放歌曲，每听到一句开始唱，就点下面的大按钮（电脑上按空格）。点错了可以撤销。</p>
      <ol ref={listRef} className="flex max-h-[38dvh] flex-col gap-1 overflow-y-auto">
        {texts.map((t, k) => (
          <li key={k} data-i={k} className={`flex gap-2 rounded-xl px-2 py-1.5 ${k === i ? 'bg-primary-soft font-bold' : k < i ? 'text-ink-3' : ''}`}>
            <span className="w-14 shrink-0 font-mono text-xs leading-6 text-ink-3">{stamps[k] != null ? fmtStamp(stamps[k]) : ''}</span>
            <span className="es">{t}</span>
          </li>
        ))}
      </ol>
      <div className="grid grid-cols-[auto_1fr_auto] gap-2">
        <button type="button" className="btn btn-ghost" onClick={() => (clock.playing ? clock.pause() : clock.play())} aria-label={clock.playing ? '暂停' : '播放'}>
          {clock.playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        {done ? (
          <button type="button" className="btn btn-primary" onClick={() => onDone(toLrc(texts.map((text, k) => ({ t: stamps[k], text }))))}>
            <Check size={17} /> 保存时间轴
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={mark}>
            第 {i + 1} 句开始了
          </button>
        )}
        <button type="button" className="btn btn-ghost" disabled={!i} onClick={() => setStamps((s) => s.slice(0, -1))} aria-label="撤销">
          <Undo2 size={18} />
        </button>
      </div>
    </div>
  )
}
