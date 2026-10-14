/**
 * Song catalog: metadata only. Lyrics are never stored in the app — they are fetched
 * from LRCLIB at play time (or pasted by the learner) for personal study.
 */

export type SongStyle = 'es-pop' | 'latam-pop' | 'cantautor' | 'rock'
export type SongLevel = 'A2' | 'B1' | 'B2' | 'C1'

export const STYLES: { id: SongStyle; label: string; icon: string }[] = [
  { id: 'es-pop', label: '西班牙流行', icon: '🇪🇸' },
  { id: 'latam-pop', label: '拉美流行', icon: '🌎' },
  { id: 'cantautor', label: '唱作人 / 民谣', icon: '🎸' },
  { id: 'rock', label: '摇滚 / 经典', icon: '🤘' },
]

export interface Artist {
  id: string
  name: string
  /** ISO country code(s) */
  country: string
  /** e.g. "1982–1997" for bands, birth year for solo artists */
  years?: string
  genresZh: string
  /** short original introduction in Chinese */
  bioZh: string
  wiki: { es: string; zh?: string }
  itunesId?: number
}

export interface Song {
  id: string
  title: string
  artistId: string
  feat?: string
  year?: number
  style: SongStyle
  level: SongLevel
  themes: string[]
  /** grammar / vocabulary worth noticing */
  points: string[]
  /** original learning note in Chinese (no lyric quotations) */
  note: string
  /** official, embeddable upload (label "Topic" audio preferred: same timing as the lyrics) */
  youtubeId: string
  /** LRCLIB record whose length matches that upload */
  lrclibId?: number
  /** length of the YouTube upload in seconds */
  durationSec: number
}

export const COUNTRY: Record<string, { flag: string; zh: string }> = {
  ES: { flag: '🇪🇸', zh: '西班牙' },
  MX: { flag: '🇲🇽', zh: '墨西哥' },
  CO: { flag: '🇨🇴', zh: '哥伦比亚' },
  AR: { flag: '🇦🇷', zh: '阿根廷' },
  UY: { flag: '🇺🇾', zh: '乌拉圭' },
  CU: { flag: '🇨🇺', zh: '古巴' },
  CL: { flag: '🇨🇱', zh: '智利' },
  FR: { flag: '🇫🇷', zh: '法国' },
}
