import { useCallback, useEffect, useMemo, useRef, useState, type RefObject } from 'react'
import { loadYouTubeApi, ytErrorText, YT_STATE, type YTPlayer } from '../../lib/songs/youtube'

export interface SongClock {
  /** 'youtube' when the video plays; 'timer' = lyrics-only fallback with an internal clock */
  mode: 'loading' | 'youtube' | 'timer'
  ready: boolean
  playing: boolean
  rate: number
  rates: number[]
  error: string
  time: () => number
  duration: () => number
  play: () => void
  pause: () => void
  seek: (t: number) => void
  setRate: (r: number) => void
}

const DEFAULT_RATES = [0.5, 0.75, 1]

/** Drive a YouTube player (or a plain timer when YouTube is unavailable) behind one interface. */
export function useSongClock(host: RefObject<HTMLDivElement | null>, videoId: string): SongClock {
  const player = useRef<YTPlayer | null>(null)
  const timer = useRef({ base: 0, started: 0, running: false })
  const [mode, setMode] = useState<SongClock['mode']>('loading')
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [rate, setRateState] = useState(1)
  const [rates, setRates] = useState(DEFAULT_RATES)
  const [error, setError] = useState('')
  const rateRef = useRef(1)

  useEffect(() => {
    let cancelled = false
    const el = host.current
    if (!el) return
    setMode('loading')
    setReady(false)
    setError('')
    const fallback = (msg: string) => {
      if (cancelled) return
      setError(msg)
      setMode('timer')
      setReady(true)
      setPlaying(false)
      timer.current = { base: 0, started: 0, running: false }
    }
    loadYouTubeApi()
      .then((YT) => {
        if (cancelled) return
        // the API replaces the element it is given, so give it a child React does not own
        const mount = document.createElement('div')
        el.appendChild(mount)
        player.current = new YT.Player(mount, {
          videoId,
          host: 'https://www.youtube-nocookie.com',
          width: '100%',
          height: '100%',
          playerVars: { playsinline: 1, rel: 0, modestbranding: 1, cc_load_policy: 0, iv_load_policy: 3, origin: location.origin },
          events: {
            onReady: (e) => {
              if (cancelled) return
              setMode('youtube')
              setReady(true)
              const rs = e.target.getAvailablePlaybackRates?.() ?? []
              const ok = DEFAULT_RATES.filter((r) => rs.includes(r))
              if (ok.length) setRates(ok)
            },
            onStateChange: (e) => !cancelled && setPlaying(e.data === YT_STATE.PLAYING || e.data === YT_STATE.BUFFERING),
            onError: (e) => fallback(`${ytErrorText(e.data)}，已切换到「只看歌词」模式`),
          },
        })
      })
      .catch((e: Error) => fallback(`${e.message}，已切换到「只看歌词」模式`))
    return () => {
      cancelled = true
      try {
        player.current?.destroy()
      } catch {
        /* already gone */
      }
      player.current = null
      el.innerHTML = ''
    }
  }, [host, videoId])

  const timerNow = () => {
    const t = timer.current
    return t.running ? t.base + ((performance.now() - t.started) / 1000) * rateRef.current : t.base
  }

  const time = useCallback(() => (mode === 'youtube' && player.current ? player.current.getCurrentTime() || 0 : timerNow()), [mode])
  const duration = useCallback(() => (mode === 'youtube' && player.current ? player.current.getDuration() || 0 : 0), [mode])

  const play = useCallback(() => {
    if (mode === 'youtube') player.current?.playVideo()
    else if (mode === 'timer' && !timer.current.running) {
      timer.current = { base: timer.current.base, started: performance.now(), running: true }
      setPlaying(true)
    }
  }, [mode])

  const pause = useCallback(() => {
    if (mode === 'youtube') player.current?.pauseVideo()
    else if (mode === 'timer' && timer.current.running) {
      timer.current = { base: timerNow(), started: 0, running: false }
      setPlaying(false)
    }
  }, [mode])

  const seek = useCallback(
    (t: number) => {
      const s = Math.max(0, t)
      if (mode === 'youtube') player.current?.seekTo(s, true)
      else timer.current = { base: s, started: performance.now(), running: timer.current.running }
    },
    [mode],
  )

  const setRate = useCallback(
    (r: number) => {
      if (mode === 'timer') timer.current = { base: timerNow(), started: performance.now(), running: timer.current.running }
      rateRef.current = r
      setRateState(r)
      player.current?.setPlaybackRate(r)
    },
    [mode],
  )

  return useMemo(() => ({ mode, ready, playing, rate, rates, error, time, duration, play, pause, seek, setRate }), [mode, ready, playing, rate, rates, error, time, duration, play, pause, seek, setRate])
}
