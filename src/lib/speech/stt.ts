/* Speech recognition (Web Speech API) with a MediaRecorder fallback. */

type Recognition = {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  continuous: boolean
  start: () => void
  stop: () => void
  abort: () => void
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string; confidence: number }> & { isFinal: boolean }> }) => void) | null
  onerror: ((e: { error: string }) => void) | null
  onend: (() => void) | null
}

const Ctor: (new () => Recognition) | undefined =
  typeof window !== 'undefined'
    ? ((window as unknown as { SpeechRecognition?: new () => Recognition }).SpeechRecognition ??
      (window as unknown as { webkitSpeechRecognition?: new () => Recognition }).webkitSpeechRecognition)
    : undefined

export const sttSupported = !!Ctor
export const recorderSupported = typeof window !== 'undefined' && typeof MediaRecorder !== 'undefined' && !!navigator.mediaDevices?.getUserMedia

export interface ListenHandle {
  stop: () => void
  result: Promise<{ alternatives: string[]; error?: string }>
}

export function listen(opts: { lang?: string; onInterim?: (t: string) => void; maxMs?: number } = {}): ListenHandle {
  if (!Ctor) return { stop() {}, result: Promise.resolve({ alternatives: [], error: 'unsupported' }) }
  const rec = new Ctor()
  rec.lang = opts.lang ?? 'es-ES'
  rec.interimResults = true
  rec.maxAlternatives = 3
  rec.continuous = false
  let finals: string[] = []
  let interim = ''
  let error: string | undefined
  const result = new Promise<{ alternatives: string[]; error?: string }>((resolve) => {
    rec.onresult = (e) => {
      interim = ''
      const alts: string[] = []
      for (let i = 0; i < e.results.length; i++) {
        const r = e.results[i]
        if (r.isFinal) {
          for (let j = 0; j < r.length; j++) alts.push(r[j].transcript.trim())
        } else interim += r[0].transcript
      }
      if (alts.length) finals = alts
      opts.onInterim?.(finals[0] ?? interim)
    }
    rec.onerror = (e) => {
      error = e.error
    }
    rec.onend = () => {
      clearTimeout(timer)
      const alts = finals.length ? finals : interim ? [interim.trim()] : []
      resolve({ alternatives: alts, error: alts.length ? undefined : error ?? 'no-speech' })
    }
  })
  const timer = setTimeout(() => rec.stop(), opts.maxMs ?? 10000)
  try {
    rec.start()
  } catch {
    /* already started */
  }
  return { stop: () => rec.stop(), result }
}

export interface RecordHandle {
  stop: () => Promise<Blob | null>
}

export async function record(maxMs = 15000): Promise<RecordHandle> {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
  const mime = ['audio/webm;codecs=opus', 'audio/mp4', 'audio/webm', 'audio/ogg'].find((m) => MediaRecorder.isTypeSupported?.(m))
  const mr = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined)
  const chunks: Blob[] = []
  mr.ondataavailable = (e) => e.data.size && chunks.push(e.data)
  const done = new Promise<Blob | null>((resolve) => {
    mr.onstop = () => {
      stream.getTracks().forEach((t) => t.stop())
      resolve(chunks.length ? new Blob(chunks, { type: mr.mimeType || 'audio/webm' }) : null)
    }
  })
  mr.start()
  const timer = setTimeout(() => mr.state !== 'inactive' && mr.stop(), maxMs)
  return {
    stop: () => {
      clearTimeout(timer)
      if (mr.state !== 'inactive') mr.stop()
      return done
    },
  }
}

export function blobToBase64(b: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => resolve(String(r.result).split(',')[1] ?? '')
    r.onerror = reject
    r.readAsDataURL(b)
  })
}

export const STT_ERRORS: Record<string, string> = {
  'not-allowed': '没有麦克风权限，请在浏览器设置里允许使用麦克风',
  'service-not-allowed': '当前浏览器不允许语音识别服务',
  'no-speech': '没有听到声音，再试一次？',
  network: '语音识别需要联网（Chrome 的识别服务在国内可能无法使用，可改用 Safari 或录音评测）',
  'audio-capture': '找不到麦克风',
  unsupported: '当前浏览器不支持语音识别',
  aborted: '已取消',
}
