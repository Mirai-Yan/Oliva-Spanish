import { Mic, MicOff, Sparkles, Square } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { wordMatchScore } from '../../../lib/answer/check'
import { generateJSON } from '../../../lib/gemini/client'
import { PRONUNCIATION_SCHEMA, pronunciationPrompt } from '../../../lib/gemini/prompts'
import { blobToBase64, listen, record, recorderSupported, STT_ERRORS, sttSupported, type ListenHandle, type RecordHandle } from '../../../lib/speech/stt'
import { stopSpeaking } from '../../../lib/speech/tts'
import { SpeakButton } from '../../../components/Speak'
import { useSettings } from '../../../store/settings'
import type { ExProps } from './types'

type Mode = 'stt' | 'rec'

export function Speak({ ex, locked, setAnswer, finish }: ExProps<'speak'>) {
  const [mode, setMode] = useState<Mode>(sttSupported ? 'stt' : 'rec')
  const [busy, setBusy] = useState<'idle' | 'listening' | 'recording' | 'ai'>('idle')
  const [heard, setHeard] = useState('')
  const [hits, setHits] = useState<boolean[] | null>(null)
  const [score, setScore] = useState<number | null>(null)
  const [msg, setMsg] = useState('')
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [blob, setBlob] = useState<Blob | null>(null)
  const hasAI = !!useSettings((s) => s.gemini.apiKey)
  const handle = useRef<ListenHandle | null>(null)
  const rec = useRef<RecordHandle | null>(null)
  const words = ex.text.split(/\s+/)

  useEffect(() => () => {
    handle.current?.stop()
    rec.current?.stop()
  }, [])

  const startStt = async () => {
    stopSpeaking()
    setMsg('')
    setHits(null)
    setHeard('')
    setBusy('listening')
    const h = listen({ onInterim: setHeard })
    handle.current = h
    const r = await h.result
    setBusy('idle')
    handle.current = null
    if (!r.alternatives.length) {
      setMsg(STT_ERRORS[r.error ?? 'no-speech'] ?? '识别失败，再试一次')
      if (r.error === 'network' || r.error === 'service-not-allowed' || r.error === 'not-allowed') {
        if (recorderSupported) setMode('rec')
      }
      return
    }
    let best = { score: -1, hits: [] as boolean[], text: '' }
    for (const alt of r.alternatives) {
      const m = wordMatchScore(alt, ex.text)
      if (m.score > best.score) best = { ...m, text: alt }
    }
    setHeard(best.text)
    setHits(best.hits)
    setScore(best.score)
    setAnswer(() => ({ correct: best.score >= 0.7, user: best.text, expected: ex.text }))
  }

  const toggleRec = async () => {
    if (busy === 'recording') {
      const b = await rec.current?.stop()
      rec.current = null
      setBusy('idle')
      if (b) {
        setBlob(b)
        setAudioUrl(URL.createObjectURL(b))
      }
      return
    }
    try {
      stopSpeaking()
      setMsg('')
      rec.current = await record()
      setBusy('recording')
    } catch {
      setMsg('无法使用麦克风，请检查浏览器权限')
    }
  }

  const aiScore = async () => {
    if (!blob) return
    setBusy('ai')
    setMsg('')
    try {
      const data = await blobToBase64(blob)
      const r = await generateJSON<{ transcript: string; score: number; feedback: string }>({
        messages: [{ role: 'user', text: pronunciationPrompt(ex.text), inline: { mimeType: blob.type.split(';')[0] || 'audio/webm', data } }],
        schema: PRONUNCIATION_SCHEMA,
      })
      setHeard(r.transcript)
      setScore(r.score / 100)
      setHits(wordMatchScore(r.transcript, ex.text).hits)
      setMsg(r.feedback)
      setAnswer(() => ({ correct: r.score >= 65, user: r.transcript, expected: ex.text }))
    } catch (e) {
      setMsg(e instanceof Error ? e.message : String(e))
    } finally {
      setBusy('idle')
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start gap-3">
        <SpeakButton text={ex.text} size="md" autoPlay />
        <SpeakButton text={ex.text} size="sm" slow />
        <div className="min-w-0">
          <div className="es text-2xl font-bold leading-snug">
            {words.map((w, i) => (
              <span key={i} className={hits ? (hits[i] ? 'text-ok' : 'text-bad underline decoration-wavy') : ''}>
                {w}{' '}
              </span>
            ))}
          </div>
          {ex.zh && <div className="mt-1 text-ink-2">{ex.zh}</div>}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 py-2">
        {mode === 'stt' ? (
          <button
            type="button"
            disabled={locked}
            onClick={() => (busy === 'listening' ? handle.current?.stop() : startStt())}
            className={`flex h-24 w-24 items-center justify-center rounded-full text-white transition ${
              busy === 'listening' ? 'anim-pulse-ring bg-bad shadow-[0_5px_0_var(--bad-strong)]' : 'bg-primary shadow-[0_5px_0_var(--primary-strong)] active:translate-y-1 active:shadow-none'
            }`}
            aria-label={busy === 'listening' ? '停止' : '开始说'}
          >
            {busy === 'listening' ? <Square size={36} fill="white" /> : <Mic size={40} />}
          </button>
        ) : (
          <button
            type="button"
            disabled={locked || busy === 'ai'}
            onClick={toggleRec}
            className={`flex h-24 w-24 items-center justify-center rounded-full text-white transition ${
              busy === 'recording' ? 'anim-pulse-ring bg-bad shadow-[0_5px_0_var(--bad-strong)]' : 'bg-primary shadow-[0_5px_0_var(--primary-strong)] active:translate-y-1'
            }`}
            aria-label={busy === 'recording' ? '停止录音' : '开始录音'}
          >
            {busy === 'recording' ? <Square size={36} fill="white" /> : <Mic size={40} />}
          </button>
        )}
        <div className="text-sm font-bold text-ink-3">
          {busy === 'listening' ? '正在听…说完会自动停止' : busy === 'recording' ? '录音中…再点一次结束' : mode === 'stt' ? '点麦克风，大声读出上面的句子' : '点麦克风录下你的朗读'}
        </div>
        {heard && (
          <div className="rounded-2xl bg-surface-2 px-4 py-2 text-center">
            <div className="text-xs font-bold text-ink-3">听到的是</div>
            <div className="es font-bold">{heard}</div>
            {score != null && <div className="text-sm font-black text-primary-ink">匹配度 {Math.round(score * 100)}%</div>}
          </div>
        )}
        {audioUrl && mode === 'rec' && (
          <div className="flex flex-col items-center gap-2">
            <audio src={audioUrl} controls className="h-10" />
            {hasAI ? (
              <button type="button" className="btn btn-accent btn-sm" disabled={busy === 'ai' || locked} onClick={aiScore}>
                <Sparkles size={16} /> {busy === 'ai' ? 'AI 评分中…' : 'AI 评分'}
              </button>
            ) : (
              <div className="flex gap-2">
                <button type="button" className="btn btn-ghost btn-sm" disabled={locked} onClick={() => finish({ correct: false, user: '（自评：还需练习）', expected: ex.text })}>
                  还需练习
                </button>
                <button type="button" className="btn btn-primary btn-sm" disabled={locked} onClick={() => finish({ correct: true, user: '（自评：读得不错）', expected: ex.text })}>
                  读得不错
                </button>
              </div>
            )}
          </div>
        )}
        {msg && <div className="max-w-md rounded-2xl bg-accent-soft px-4 py-2 text-center text-sm font-semibold">{msg}</div>}
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {sttSupported && recorderSupported && (
            <button type="button" className="font-bold text-primary-ink underline" onClick={() => setMode(mode === 'stt' ? 'rec' : 'stt')}>
              {mode === 'stt' ? '改用录音 + AI 评分' : '改用语音识别'}
            </button>
          )}
          {!locked && (
            <button type="button" className="flex items-center gap-1 font-bold text-ink-3 underline" onClick={() => finish({ correct: true, user: '', expected: ex.text, skipped: true })}>
              <MicOff size={14} /> 现在不方便说话
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
