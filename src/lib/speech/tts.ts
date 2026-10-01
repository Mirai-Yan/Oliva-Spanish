import { useSettings } from '../../store/settings'
import { hqEnabled, playHq, prefetchHq, stopHq } from './hqVoice'

export const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

let voices: SpeechSynthesisVoice[] = []
const listeners = new Set<() => void>()

function loadVoices() {
  if (!ttsSupported) return
  voices = window.speechSynthesis.getVoices()
  listeners.forEach((l) => l())
}

if (ttsSupported) {
  loadVoices()
  window.speechSynthesis.addEventListener?.('voiceschanged', loadVoices)
}

export function onVoicesChanged(fn: () => void) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function spanishVoices(): SpeechSynthesisVoice[] {
  return voices
    .filter((v) => v.lang.toLowerCase().startsWith('es'))
    .sort((a, b) => scoreVoice(b) - scoreVoice(a))
}

const GOOD = /(Mónica|Monica|Jorge|Marisol|Paulina|Google español|Helena|Laura|Elvira|Álvaro|Alvaro|Dalia|Jimena|Lucia|Lucía|Premium|Enhanced|Natural|Neural)/i

function scoreVoice(v: SpeechSynthesisVoice): number {
  let s = 0
  const lang = v.lang.toLowerCase().replace('_', '-')
  if (lang === 'es-es') s += 10
  else if (lang.startsWith('es')) s += 4
  if (GOOD.test(v.name)) s += 5
  if (/(Natural|Neural|Premium|Enhanced)/i.test(v.name)) s += 3
  if (/(Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley)/.test(v.name)) s -= 4
  return s
}

const norm = (l: string) => l.toLowerCase().replace('_', '-')

/** Is there an installed voice for this language (prefix match: 'es' or 'es-ES')? */
export function hasVoice(lang = 'es'): boolean {
  const l = lang.toLowerCase()
  return voices.some((v) => norm(v.lang).startsWith(l))
}

export function voicesLoaded(): boolean {
  return voices.length > 0
}

/** The user's chosen voice, unless an exact accent is required (casa / caza needs es-ES). */
function pickVoice(lang?: string): SpeechSynthesisVoice | undefined {
  const uri = useSettings.getState().voiceURI
  const list = spanishVoices()
  const chosen = uri ? list.find((v) => v.voiceURI === uri) : undefined
  if (lang) {
    const want = lang.toLowerCase()
    if (chosen && norm(chosen.lang) === want) return chosen
    return list.find((v) => norm(v.lang) === want) ?? chosen ?? list[0]
  }
  return chosen || list[0]
}

let seq = 0
/** bumps whenever playback is taken over, so running sequences stop */
let playToken = 0

export interface SpeakOptions {
  /** multiplier on the user's base rate */
  speed?: number
  /** absolute rate, overrides speed */
  rate?: number
  /** require this accent, e.g. 'es-ES' */
  lang?: string
  onBoundary?: (charIndex: number) => void
}

/** Speak Spanish text. Resolves when finished or cancelled. */
export async function speak(text: string, opts: SpeakOptions = {}, fromSequence = false): Promise<void> {
  if (!fromSequence) playToken++
  if (!text.trim()) return
  const rate = clamp(opts.rate ?? useSettings.getState().rate * (opts.speed ?? 1), 0.3, 2)
  if (hqEnabled()) {
    if (ttsSupported) window.speechSynthesis.cancel()
    stopHq()
    const my = ++seq
    try {
      await playHq(text, rate, () => my === seq)
      return
    } catch {
      if (my !== seq) return
      // fall back to the browser voice below
    }
  }
  if (!ttsSupported) return
  const synth = window.speechSynthesis
  synth.cancel()
  stopHq()
  const my = ++seq
  return new Promise((resolve) => {
    const u = new SpeechSynthesisUtterance(text)
    const v = pickVoice(opts.lang)
    if (v) u.voice = v
    u.lang = v?.lang ?? opts.lang ?? 'es-ES'
    u.rate = rate
    u.onend = () => resolve()
    u.onerror = () => resolve()
    if (opts.onBoundary) u.onboundary = (e) => opts.onBoundary!(e.charIndex)
    // Chrome occasionally drops an utterance queued in the same tick as cancel()
    setTimeout(() => {
      if (my === seq) synth.speak(u)
      else resolve()
    }, 30)
  })
}

export function stopSpeaking() {
  seq++
  playToken++
  stopHq()
  if (ttsSupported) window.speechSynthesis.cancel()
}

/** Speak a list of sentences one by one, reporting the current index. Returns false if interrupted. */
export async function speakSequence(items: string[], opts: SpeakOptions & { onItem?: (i: number) => void; startAt?: number } = {}) {
  const token = ++playToken
  for (let i = opts.startAt ?? 0; i < items.length; i++) {
    if (token !== playToken) return false
    opts.onItem?.(i)
    if (i + 1 < items.length) prefetchHq(items[i + 1])
    await speak(items[i], opts, true)
    if (token !== playToken) return false
    await new Promise((r) => setTimeout(r, 180))
  }
  opts.onItem?.(-1)
  return true
}

function clamp(x: number, a: number, b: number) {
  return Math.max(a, Math.min(b, x))
}
