import { Languages, Pause, Play } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { Reading } from '../content/types'
import { speak, speakSequence, stopSpeaking } from '../lib/speech/tts'
import { EsText } from './EsText'
import { SpeedControl } from './Speak'
import { VoiceNotice } from './VoiceNotice'

export function ReadingView({ reading }: { reading: Reading }) {
  const flat = useMemo(() => reading.paras.flat(), [reading])
  const [cur, setCur] = useState(-1)
  const [playing, setPlaying] = useState(false)
  const [showZh, setShowZh] = useState(false)
  const [openZh, setOpenZh] = useState<Set<number>>(new Set())

  useEffect(() => () => stopSpeaking(), [])

  const playFrom = async (start: number) => {
    setPlaying(true)
    await speakSequence(
      flat.map((s) => s[0]),
      { startAt: start, onItem: setCur },
    )
    setPlaying(false)
    setCur(-1)
  }

  let n = -1
  return (
    <div>
      <div className="mb-1 text-xs font-black uppercase tracking-wider text-ink-3">
        {reading.level} · {reading.topic}
      </div>
      <h2 className="es text-2xl font-black leading-tight">{reading.title}</h2>
      <div className="mb-4 text-ink-2">{reading.titleZh}</div>
      <VoiceNotice className="mb-3" />
      <div className="sticky top-14 z-10 -mx-1 mb-4 flex flex-wrap items-center gap-2 bg-bg/90 px-1 py-2 backdrop-blur lg:top-0">
        {playing ? (
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => {
              stopSpeaking()
              setPlaying(false)
              setCur(-1)
            }}
          >
            <Pause size={16} /> 停止
          </button>
        ) : (
          <button type="button" className="btn btn-primary btn-sm" onClick={() => playFrom(0)}>
            <Play size={16} /> 朗读全文
          </button>
        )}
        <SpeedControl compact />
        <button type="button" className={`chip ${showZh ? 'chip-on' : ''}`} onClick={() => setShowZh((v) => !v)}>
          <Languages size={14} /> {showZh ? '隐藏翻译' : '显示翻译'}
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {reading.paras.map((p, pi) => (
          <p key={pi} className="es text-[1.2rem] leading-[2.1]">
            {p.map(([es, zh]) => {
              n++
              const idx = n
              const on = cur === idx
              const zhOpen = showZh || openZh.has(idx)
              return (
                <span key={idx} className="relative">
                  <span className={`rounded-lg transition-colors ${on ? 'bg-accent-soft outline outline-2 outline-[var(--accent)]' : ''}`}>
                    <EsText text={es} gloss={reading.gloss} />
                  </span>
                  <button
                    type="button"
                    title="朗读这句 / 显示翻译"
                    className="mx-1 inline-flex h-5 w-5 translate-y-[-2px] items-center justify-center rounded-md bg-surface-2 align-middle text-[10px] font-black text-ink-3 hover:bg-primary-soft hover:text-primary-ink"
                    onClick={() => {
                      speak(es)
                      setOpenZh((s) => new Set(s).add(idx))
                    }}
                  >
                    {idx + 1}
                  </button>
                  {zhOpen && <span className="block font-sans text-[0.95rem] leading-relaxed text-ink-2">{zh}</span>}{' '}
                </span>
              )
            })}
          </p>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink-3">小提示：点任意单词可以查词；点句子后面的数字可以单独朗读并显示翻译。</p>
    </div>
  )
}
