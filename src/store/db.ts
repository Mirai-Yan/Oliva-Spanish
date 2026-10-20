import Dexie, { type EntityTable } from 'dexie'
import type { Card } from 'ts-fsrs'
import type { Rect } from '../lib/paper/geometry'
import type { Material } from '../lib/paper/material'
import type { Paper } from '../lib/paper/types'

export interface CardRow extends Card {
  wordId: string
  added: number
  /** where the card came from */
  src: 'lesson' | 'book' | 'mistake' | 'reading'
}

export interface ReviewRow {
  id?: number
  wordId: string
  rating: number
  ts: number
}

export interface MistakeRow {
  key: string
  /** serialized exercise for redo */
  ex: unknown
  prompt: string
  /** the question itself (sentence / prompt), shown on the notebook card */
  question?: string
  user: string
  correct: string
  unitId?: string
  /** non-course source (photo paper) for grouping */
  source?: { paperId: number; title: string }
  grammar: string[]
  words: string[]
  count: number
  /** consecutive correct redo answers; removed at 2 */
  fixed: number
  createdAt: number
  updatedAt: number
}

export interface NotebookRow {
  wordId: string
  addedAt: number
  /** for words not in the built-in dictionary (AI lookups) */
  es?: string
  zh?: string
}

export interface ExamRow {
  id?: number
  kind: 'unit' | 'custom' | 'placement' | 'level' | 'paper'
  title: string
  score: number
  correct: number
  total: number
  seconds: number
  breakdown: Record<string, { label: string; c: number; t: number }>
  createdAt: number
  unitIds?: string[]
  level?: string
  /** papers: points earned out of the paper total */
  points?: { earned: number; total: number }
  paperId?: number
}

export interface PaperRow extends Paper {
  id?: number
  source: 'photo' | 'import' | 'paste'
  /** text material read from many photos (large papers): regenerating a section uses this, not the images */
  material?: Material
  createdAt: number
  updatedAt: number
}

/** cropped photo regions a paper was generated from (kept apart so paper lists stay light) */
export interface PaperImageRow {
  id?: number
  paperId: number
  blob: Blob
  label: string
  createdAt: number
}

/** a photo in the unfinished photo-paper wizard (auto-saved so 100 photos survive a reload) */
export interface DraftPhotoRow {
  id: string
  order: number
  blob: Blob
  /** small preview for the grid */
  thumb?: Blob
  w: number
  h: number
  regions: Rect[]
  /** material already read from this photo's regions (one per region, or one for the whole photo) */
  material?: Material[]
  /** JSON of the regions the material was read with; stale when the regions change */
  materialKey?: string
}

/** synced lyrics for a song: fetched from LRCLIB or synced by hand; never shipped with the app */
export interface SongLyricsRow {
  songId: string
  source: 'lrclib' | 'manual'
  lrc: string
  lrclibId?: number
  /** seconds added to every timestamp (calibration) */
  offset: number
  /** Chinese translation, one per lyric line */
  zh?: string[]
  summaryZh?: string
  fetchedAt: number
}

/** songs the learner added by YouTube link */
export interface UserSongRow {
  id: string
  title: string
  artist: string
  youtubeId: string
  addedAt: number
}

export interface ChatMessage {
  role: 'user' | 'model'
  text: string
  ts: number
  zh?: string
}

export interface ChatRow {
  id: string
  kind: 'tutor' | 'roleplay'
  title: string
  scenarioId?: string
  messages: ChatMessage[]
  report?: unknown
  createdAt: number
  updatedAt: number
}

export interface AiDictRow {
  key: string
  entry: unknown
  createdAt: number
}

export interface AiReadingRow {
  id: string
  level: string
  topic: string
  reading: unknown
  createdAt: number
}

/** cached Gemini TTS audio */
export interface TtsRow {
  /** voice | text */
  id: string
  blob: Blob
  createdAt: number
}

export const db = new Dexie('oliva') as Dexie & {
  cards: EntityTable<CardRow, 'wordId'>
  reviews: EntityTable<ReviewRow, 'id'>
  mistakes: EntityTable<MistakeRow, 'key'>
  notebook: EntityTable<NotebookRow, 'wordId'>
  exams: EntityTable<ExamRow, 'id'>
  chats: EntityTable<ChatRow, 'id'>
  aiDict: EntityTable<AiDictRow, 'key'>
  aiReadings: EntityTable<AiReadingRow, 'id'>
  tts: EntityTable<TtsRow, 'id'>
  papers: EntityTable<PaperRow, 'id'>
  paperImages: EntityTable<PaperImageRow, 'id'>
  songLyrics: EntityTable<SongLyricsRow, 'songId'>
  userSongs: EntityTable<UserSongRow, 'id'>
  draftPhotos: EntityTable<DraftPhotoRow, 'id'>
}

db.version(1).stores({
  cards: 'wordId, due, state, added',
  reviews: '++id, wordId, ts',
  mistakes: 'key, updatedAt, unitId',
  notebook: 'wordId, addedAt',
  exams: '++id, createdAt, kind',
  chats: 'id, kind, updatedAt',
  aiDict: 'key',
  aiReadings: 'id, createdAt',
})

db.version(2).stores({
  tts: 'id, createdAt',
})

db.version(3).stores({
  exams: '++id, createdAt, kind, paperId',
  papers: '++id, createdAt',
  paperImages: '++id, paperId',
  songLyrics: 'songId',
  userSongs: 'id, addedAt',
})

db.version(4).stores({
  draftPhotos: 'id, order',
})
