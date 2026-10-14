/** Minimal typed wrapper around the YouTube IFrame Player API (loaded once, on demand). */

export interface YTPlayer {
  playVideo(): void
  pauseVideo(): void
  seekTo(seconds: number, allowSeekAhead: boolean): void
  getCurrentTime(): number
  getDuration(): number
  getPlayerState(): number
  setPlaybackRate(rate: number): void
  getAvailablePlaybackRates(): number[]
  destroy(): void
}

interface YTNamespace {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string
      host?: string
      width?: string | number
      height?: string | number
      playerVars?: Record<string, string | number>
      events?: {
        onReady?: (e: { target: YTPlayer }) => void
        onStateChange?: (e: { data: number; target: YTPlayer }) => void
        onError?: (e: { data: number }) => void
      }
    },
  ) => YTPlayer
}

declare global {
  interface Window {
    YT?: YTNamespace & { loaded?: number }
    onYouTubeIframeAPIReady?: () => void
  }
}

export const YT_STATE = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 } as const

let api: Promise<YTNamespace> | null = null

/** Load the IFrame API script once; rejects on network failure or timeout (e.g. YouTube blocked). */
export function loadYouTubeApi(timeoutMs = 12000): Promise<YTNamespace> {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  api ??= new Promise<YTNamespace>((resolve, reject) => {
    const timer = setTimeout(() => {
      api = null
      reject(new Error('YouTube 加载超时'))
    }, timeoutMs)
    const prev = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      prev?.()
      clearTimeout(timer)
      resolve(window.YT!)
    }
    const s = document.createElement('script')
    s.src = 'https://www.youtube.com/iframe_api'
    s.async = true
    s.onerror = () => {
      clearTimeout(timer)
      api = null
      s.remove()
      reject(new Error('无法连接 YouTube'))
    }
    document.head.appendChild(s)
  })
  return api
}

/** Why a video can't play, in Chinese. */
export function ytErrorText(code: number): string {
  if (code === 101 || code === 150) return '版权方不允许在其他网站播放这个视频'
  if (code === 100) return '视频已被删除或设为私密'
  if (code === 2) return '视频地址无效'
  if (code === 5) return '浏览器无法播放这个视频'
  return `视频无法播放（错误 ${code}）`
}
