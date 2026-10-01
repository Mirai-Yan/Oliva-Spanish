import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Mode } from '../theme/themes'

export interface GeminiSettings {
  apiKey: string
  baseUrl: string
  model: string
}

export interface Settings {
  name: string
  theme: string
  custom: { primary: string; accent: string }
  mode: Mode
  fontScale: number
  voiceURI: string | null
  rate: number
  autoplay: boolean
  sfx: boolean
  gemini: GeminiSettings
  dailyGoal: number
  newWordsPerDay: number
  strictAccents: boolean
  /** unlock every lesson regardless of order */
  freeMode: boolean
  /** show Chinese translation under Spanish examples by default */
  showZh: boolean
  /** has seen the first-visit choice (start from zero / placement test) */
  onboarded: boolean
}

export const DEFAULT_GEMINI: GeminiSettings = {
  apiKey: '',
  baseUrl: 'https://generativelanguage.googleapis.com',
  /** empty = pick the newest free-tier Flash automatically */
  model: '',
}

const DEFAULTS: Settings = {
  name: '',
  theme: 'olive',
  custom: { primary: '#58a14a', accent: '#f4b63f' },
  mode: 'system',
  fontScale: 1,
  voiceURI: null,
  rate: 0.9,
  autoplay: true,
  sfx: true,
  gemini: DEFAULT_GEMINI,
  dailyGoal: 30,
  newWordsPerDay: 10,
  strictAccents: false,
  freeMode: false,
  showZh: true,
  onboarded: false,
}

interface SettingsStore extends Settings {
  set: (patch: Partial<Settings>) => void
  setGemini: (patch: Partial<GeminiSettings>) => void
  reset: () => void
}

export const useSettings = create<SettingsStore>()(
  persist(
    (set) => ({
      ...DEFAULTS,
      set: (patch) => set(patch),
      setGemini: (patch) => set((s) => ({ gemini: { ...s.gemini, ...patch } })),
      reset: () => set((s) => ({ ...DEFAULTS, gemini: s.gemini })),
    }),
    {
      name: 'oliva-settings',
      version: 2,
      // v1 hard-coded gemini-2.5-flash; switch untouched installs to auto-detection
      migrate: (persisted, version) => {
        const p = (persisted ?? {}) as Partial<Settings>
        if (version < 2 && p.gemini?.model === 'gemini-2.5-flash') p.gemini = { ...p.gemini, model: '' }
        return p as SettingsStore
      },
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<Settings>
        return { ...current, ...p, gemini: { ...DEFAULT_GEMINI, ...(p.gemini ?? {}) }, custom: { ...DEFAULTS.custom, ...(p.custom ?? {}) } }
      },
    },
  ),
)

export const hasAI = (s: Settings = useSettings.getState()) => !!s.gemini.apiKey.trim()
