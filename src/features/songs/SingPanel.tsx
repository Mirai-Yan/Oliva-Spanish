import { ChevronLeft, ChevronRight, Circle, Headphones, Mic, Square, Volume2, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { lineEnd, type LyricLine } from '../../lib/songs/lrc'
import { singScore, singTokens } from '../../lib/songs/sing'
import { listen, record, recorderSupported, STT_ERRORS, sttSupported, type RecordHandle } from '../../lib/speech/stt'

/**
 * Line-by-line sing-along: hear the original line (the player stops at its end),
 * then sing it — speech recognition colours the words that came through.
 */
export function SingPanel({
  lines,
  zh,
  idx,
  setIdx,
  rate,
  playLine,
  onExit,
}: {
  lines: LyricLine[]
  zh?: string[]
  idx: number
  setIdx: (i: number) => void
  rate: number
  playLine: (i: number) => void
  onExit: () => void
}) {
  const [busy, setBusy] = useState<'listen' | 'record' | null>(null)
  const [interim, setInterim] = useState('')
  const [result, setResult] = useState<{ hits: boolean[]; score: number } | null>(null)
  const [msg, setMsg] = useState('')
  const [best, setBest] = useState<Record<number, number>>({})
  const [take, setTake] = useState<string | null>(null)
  const stopRef = useRef<(() => void) | null>(null)
  const recRef = useRef<RecordHandle | null>(null)

  const sung = lines.map((l, i) => ({ l, i })).filter((x) => x.l.text)
  const line = lines[idx]
  const tokens = line?.text ? singTokens(line.text) : []

  useEffect(() => {
    setResult(null)
    setInterim('')
    setMsg('')
    if (take) URL.revokeObjectURL(take)
    setTake(null)
  }, [idx]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(
    () => () => {
      stopRef.current?.()
      recRef.current?.stop()
    },
    [],
  )

  const move = (d: number) => {
    const pos = sung.findIndex((x) => x.i === idx)
    const nxt = sung[Math.min(sung.length - 1, Math.max(0, (pos < 0 ? 0 : pos) + d))]
    if (nxt) setIdx(nxt.i)
  }

  const sing = async () => {
    if (!line?.text) return
    setMsg('')
    setResult(null)
    setBusy('listen')
    const secs = (lineEnd(lines, idx) - line.t) / rate
    const h = listen({ onInterim: setInterim, maxMs: Math.min(20000, secs * 1000 + 3500) })
    stopRef.current = h.stop
    const r = await h.result
    stopRef.current = null
    setBusy(null)
    if (!r.alternatives.length) {
      setMsg(STT_ERRORS[r.error ?? ''] ?? '没有听清，再试一次')
      return
    }
    const scored = r.alternatives.map((a) => singScore(a, line.text)).sort((a, b) => b.score - a.score)[0]
    setInterim(r.alternatives[0])
    setResult(scored)
    setBest((b) => ({ ...b, [idx]: Math.max(b[idx] ?? 0, scored.score) }))
  }

  const toggleRecord = async () => {
    if (recRef.current) {
      const blob = await recRef.current.stop()
      recRef.current = null
      setBusy(null)
      if (blob) {
        if (take) URL.revokeObjectURL(take)
        setTake(URL.createObjectURL(blob))
      }
      return
    }
    try {
      recRef.current = await record(30000)
      setBusy('record')
    } catch {
      setMsg('无法打开麦克风，请在浏览器设置里允许使用麦克风')
    }
  }

  const tried = Object.values(best)
  const avg = tried.length ? Math.round((tried.reduce((a, b) => a + b, 0) / tried.length) * 100) : null

  return (
    <div className="card flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2">
        <Mic size={18} className="text-primary" />
        <span className="flex-1 font-black">跟唱模式</span>
        {avg != null && <span className="text-sm font-bold text-ink-2">已唱 {tried.length} 句 · 平均 {avg} 分</span>}
        <button type="button" className="rounded-lg p-1.5 text-ink-3 hover:bg-surface-2" onClick={onExit} aria-label="退出跟唱">
          <X size={18} />
        </button>
      </div>
      <div className="rounded-2xl bg-surface-2 p-4 text-center">
        <div className="mb-1 text-xs font-bold text-ink-3">第 {idx + 1} 句</div>
        <div className="es flex flex-wrap justify-center gap-x-1.5 text-xl font-extrabold leading-snug">
          {tokens.map((t, i) => (
            <span key={i} className={result ? (result.hits[i] ? 'text-ok-strong' : 'text-bad-strong underline decoration-wavy decoration-1 underline-offset-4') : ''}>
              {t}
            </span>
          ))}
        </div>
        {zh?.[idx] && <div className="mt-1 text-sm text-ink-2">{zh[idx]}</div>}
        {(busy === 'listen' || result) && interim && <div className="es mt-2 text-sm text-ink-3">听到：{interim}</div>}
        {result && <div className={`mt-1 text-lg font-black ${result.score >= 0.8 ? 'text-ok-strong' : result.score >= 0.5 ? 'text-accent-ink' : 'text-bad-strong'}`}>{Math.round(result.score * 100)} 分</div>}
        {msg && <div className="mt-2 text-sm font-bold text-bad">{msg}</div>}
      </div>
      <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-2">
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => move(-1)} aria-label="上一句">
          <ChevronLeft size={18} />
        </button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => playLine(idx)} disabled={!!busy}>
          <Headphones size={16} /> 听原唱
        </button>
        {sttSupported ? (
          <button type="button" className={`btn btn-sm ${busy === 'listen' ? 'btn-bad' : 'btn-primary'}`} onClick={() => (busy === 'listen' ? stopRef.current?.() : sing())} disabled={busy === 'record'}>
            {busy === 'listen' ? <Square size={15} /> : <Mic size={16} />} {busy === 'listen' ? '唱完了' : '我来唱'}
          </button>
        ) : (
          <span className="flex items-center justify-center text-center text-xs text-ink-3">这个浏览器不支持语音识别，可以用下面的录音对比</span>
        )}
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => move(1)} aria-label="下一句">
          <ChevronRight size={18} />
        </button>
      </div>
      {recorderSupported && (
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className={`chip ${busy === 'record' ? 'chip-on' : ''}`} onClick={toggleRecord} disabled={busy === 'listen'}>
            {busy === 'record' ? <Square size={13} /> : <Circle size={13} className="fill-[var(--bad)] text-bad" />} {busy === 'record' ? '停止录音' : '录下我唱的'}
          </button>
          {take && (
            <>
              <button type="button" className="chip" onClick={() => new Audio(take).play()}>
                <Volume2 size={13} /> 听我的
              </button>
              <button type="button" className="chip" onClick={() => playLine(idx)}>
                <Headphones size={13} /> 再听原唱
              </button>
            </>
          )}
        </div>
      )}
      <p className="text-xs text-ink-3">建议戴耳机：先听原唱，音乐停下后点「我来唱」。识别看的是有没有唱出每个词，不评判音准。</p>
    </div>
  )
}
