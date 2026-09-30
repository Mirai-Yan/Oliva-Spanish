import { Languages, Pause, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Dialogue } from '../content/types'
import { speakSequence, stopSpeaking } from '../lib/speech/tts'
import { EsText } from './EsText'
import { SpeakButton, SpeedControl } from './Speak'

export function DialogueView({ dialogue }: { dialogue: Dialogue }) {
  const speakers = [...new Set(dialogue.lines.map((l) => l.who))]
  const [cur, setCur] = useState(-1)
  const [playing, setPlaying] = useState(false)
  const [showZh, setShowZh] = useState(true)
  useEffect(() => () => stopSpeaking(), [])
  return (
    <div>
      <h2 className="mb-3 text-xl font-black">{dialogue.title}</h2>
      <div className="mb-4 flex flex-wrap items-center gap-2">
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
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={async () => {
              setPlaying(true)
              await speakSequence(
                dialogue.lines.map((l) => l.es),
                { onItem: setCur },
              )
              setPlaying(false)
              setCur(-1)
            }}
          >
            <Play size={16} /> 播放对话
          </button>
        )}
        <SpeedControl compact />
        <button type="button" className={`chip ${showZh ? 'chip-on' : ''}`} onClick={() => setShowZh((v) => !v)}>
          <Languages size={14} /> 中文
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {dialogue.lines.map((l, i) => {
          const right = speakers.indexOf(l.who) % 2 === 1
          return (
            <div key={i} className={`flex items-end gap-2 ${right ? 'flex-row-reverse' : ''}`}>
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black ${right ? 'bg-accent text-[#2b2108]' : 'bg-primary text-white'}`}>
                {l.who.slice(0, 1)}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 transition ${right ? 'rounded-br-md' : 'rounded-bl-md'} ${
                  cur === i ? 'bg-accent-soft outline outline-2 outline-[var(--accent)]' : 'bg-surface-2'
                }`}
              >
                <div className="mb-0.5 text-xs font-black text-ink-3">{l.who}</div>
                <div className="flex items-start gap-2">
                  <div className="es text-lg font-bold">
                    <EsText text={l.es} />
                  </div>
                  <SpeakButton text={l.es} size="sm" className="!h-7 !w-7 !shadow-none" />
                </div>
                {showZh && <div className="text-sm text-ink-2">{l.zh}</div>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
