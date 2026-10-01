import { db } from '../../store/db'
import { hasAI, useSettings } from '../../store/settings'
import { GeminiError, synthesizeSpeech } from '../gemini/client'
import { toast } from '../../components/Toast'

/**
 * Optional high-quality voice: Gemini TTS audio, cached in IndexedDB so each sentence is requested only once.
 * Any failure turns it off for the rest of the session and the caller falls back to the browser voice.
 */

const MAX_CACHE = 800
let disabledReason: string | null = null
let current: HTMLAudioElement | null = null
const pending = new Map<string, Promise<Blob>>()

export function hqEnabled(): boolean {
  const s = useSettings.getState()
  return s.hqVoice && hasAI(s) && !disabledReason
}

/** Re-enable after the user changes settings (e.g. fixes the key). */
export function resetHq() {
  disabledReason = null
}

function cacheKey(text: string) {
  return `${useSettings.getState().hqVoiceName}|${text.trim()}`
}

/** Wrap raw 16-bit PCM in a WAV header so <audio> can play it (and honour playbackRate). */
export function toPlayableBlob(bytes: Uint8Array, mimeType: string): Blob {
  const isWav = bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46
  if (isWav) return new Blob([bytes as BlobPart], { type: 'audio/wav' })
  if (/(mpeg|mp3|ogg|opus|webm|aac|mp4)/i.test(mimeType)) return new Blob([bytes as BlobPart], { type: mimeType.split(';')[0] })
  const rate = Number(mimeType.match(/rate=(\d+)/)?.[1] ?? 24000)
  const header = new ArrayBuffer(44)
  const v = new DataView(header)
  const str = (o: number, t: string) => [...t].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)))
  str(0, 'RIFF')
  v.setUint32(4, 36 + bytes.length, true)
  str(8, 'WAVE')
  str(12, 'fmt ')
  v.setUint32(16, 16, true)
  v.setUint16(20, 1, true)
  v.setUint16(22, 1, true)
  v.setUint32(24, rate, true)
  v.setUint32(28, rate * 2, true)
  v.setUint16(32, 2, true)
  v.setUint16(34, 16, true)
  str(36, 'data')
  v.setUint32(40, bytes.length, true)
  return new Blob([header, bytes as BlobPart], { type: 'audio/wav' })
}

async function prune() {
  const n = await db.tts.count()
  if (n <= MAX_CACHE) return
  const old = await db.tts.orderBy('createdAt').limit(n - MAX_CACHE + 50).primaryKeys()
  await db.tts.bulkDelete(old)
}

/** Cached audio for a sentence, fetching it from Gemini if needed. */
export function getHqAudio(text: string): Promise<Blob> {
  const id = cacheKey(text)
  const inFlight = pending.get(id)
  if (inFlight) return inFlight
  const p = (async () => {
    const hit = await db.tts.get(id).catch(() => undefined)
    if (hit) return hit.blob
    const audio = await synthesizeSpeech(text.trim(), useSettings.getState().hqVoiceName)
    const blob = toPlayableBlob(audio.bytes, audio.mimeType)
    await db.tts.put({ id, blob, createdAt: Date.now() }).catch(() => undefined)
    void prune().catch(() => undefined)
    return blob
  })()
  pending.set(id, p)
  p.finally(() => pending.delete(id)).catch(() => undefined)
  return p
}

/** Start fetching a sentence in the background so sequences play without gaps. */
export function prefetchHq(text: string) {
  if (hqEnabled() && text.trim()) getHqAudio(text).catch(() => undefined)
}

export function stopHq() {
  if (current) {
    current.pause()
    current = null
  }
}

/** Play a sentence with the Gemini voice. Throws if the audio cannot be obtained; resolves when playback ends or is stopped. */
export async function playHq(text: string, rate: number, stillWanted: () => boolean): Promise<void> {
  let blob: Blob
  try {
    blob = await getHqAudio(text)
  } catch (e) {
    disabledReason = e instanceof GeminiError ? e.message : 'unknown'
    toast(`高音质朗读暂时不可用，已换回系统声音。${e instanceof GeminiError ? e.message : ''}`)
    throw e
  }
  if (!stillWanted()) return
  stopHq()
  const url = URL.createObjectURL(blob)
  const audio = new Audio(url)
  audio.playbackRate = rate
  ;(audio as HTMLAudioElement & { preservesPitch?: boolean }).preservesPitch = true
  current = audio
  await new Promise<void>((resolve) => {
    const done = () => resolve()
    audio.onended = done
    audio.onerror = done
    audio.onpause = done
    audio.play().catch(done)
  })
  URL.revokeObjectURL(url)
  if (current === audio) current = null
}

export async function hqCacheSize(): Promise<number> {
  return db.tts.count().catch(() => 0)
}

export async function clearHqCache() {
  await db.tts.clear()
}
