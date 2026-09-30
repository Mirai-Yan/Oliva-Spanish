import { Gauge, Snail, Volume2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { speak, stopSpeaking, ttsSupported } from '../lib/speech/tts'
import { useSettings } from '../store/settings'

/** Speaker button. `slow` plays at 60% of the current rate. */
export function SpeakButton({
  text,
  size = 'md',
  slow = false,
  className = '',
  label,
  autoPlay = false,
}: {
  text: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  slow?: boolean
  className?: string
  label?: string
  autoPlay?: boolean
}) {
  const [playing, setPlaying] = useState(false)
  const autoplayed = useRef(false)
  const play = async () => {
    setPlaying(true)
    await speak(text, { speed: slow ? 0.6 : 1 })
    setPlaying(false)
  }
  useEffect(() => {
    if (autoPlay && !autoplayed.current && useSettings.getState().autoplay) {
      autoplayed.current = true
      const t = setTimeout(play, 250)
      return () => clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, text])
  useEffect(() => () => stopSpeaking(), [])
  const dims = { sm: 'h-8 w-8 rounded-xl', md: 'h-11 w-11 rounded-2xl', lg: 'h-16 w-16 rounded-2xl', xl: 'h-24 w-24 rounded-3xl' }[size]
  const icon = { sm: 16, md: 20, lg: 28, xl: 40 }[size]
  const Icon = slow ? Snail : Volume2
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        play()
      }}
      disabled={!ttsSupported}
      title={ttsSupported ? (slow ? '慢速播放' : '播放') : '当前浏览器不支持语音朗读'}
      aria-label={label ?? (slow ? '慢速播放' : '播放发音')}
      className={`${dims} inline-flex shrink-0 items-center justify-center transition active:translate-y-0.5 ${
        slow ? 'bg-surface-2 text-ink-2 shadow-[0_3px_0_var(--line)]' : 'bg-primary text-white shadow-[0_3px_0_var(--primary-strong)]'
      } ${playing ? 'scale-95 opacity-80' : ''} ${className}`}
    >
      <Icon size={icon} strokeWidth={2.5} className={playing ? 'animate-pulse' : ''} />
    </button>
  )
}

const PRESETS = [0.5, 0.75, 1, 1.25, 1.5]

/** Global listening speed control (persists as the TTS base rate). */
export function SpeedControl({ compact = false }: { compact?: boolean }) {
  const rate = useSettings((s) => s.rate)
  const set = useSettings((s) => s.set)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [open])
  return (
    <div className="relative" ref={ref}>
      <button type="button" className="chip" onClick={() => setOpen((o) => !o)} aria-label="调节语速">
        <Gauge size={14} />
        {compact ? `${fmt(rate)}×` : `语速 ${fmt(rate)}×`}
      </button>
      {open && (
        <div className="card anim-pop absolute right-0 z-40 mt-2 w-64 p-3 shadow-lg">
          <div className="mb-2 flex items-center justify-between text-sm font-bold text-ink-2">
            <span>听力语速</span>
            <span className="text-primary-ink">{fmt(rate)}×</span>
          </div>
          <input
            type="range"
            min={0.4}
            max={2}
            step={0.05}
            value={rate}
            onChange={(e) => set({ rate: Number(e.target.value) })}
            className="w-full accent-[var(--primary)]"
          />
          <div className="mt-2 flex flex-wrap gap-1.5">
            {PRESETS.map((p) => (
              <button key={p} type="button" className={`chip ${Math.abs(rate - p) < 0.01 ? 'chip-on' : ''}`} onClick={() => set({ rate: p })}>
                {p}×
              </button>
            ))}
          </div>
          <button type="button" className="btn btn-plain btn-sm mt-2 w-full" onClick={() => speak('Hola, ¿qué tal? Esta es la velocidad actual.')}>
            <Volume2 size={14} /> 试听
          </button>
        </div>
      )}
    </div>
  )
}

function fmt(r: number) {
  return Number(r.toFixed(2)).toString()
}
