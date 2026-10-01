import Dexie, { type EntityTable } from 'dexie'
import type { Card } from 'ts-fsrs'

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
  user: string
  correct: string
  unitId?: string
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
  kind: 'unit' | 'custom' | 'placement' | 'level'
  title: string
  score: number
  correct: number
  total: number
  seconds: number
  breakdown: Record<string, { label: string; c: number; t: number }>
  createdAt: number
  unitIds?: string[]
  level?: string
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

export const db = new Dexie('oliva') as Dexie & {
  cards: EntityTable<CardRow, 'wordId'>
  reviews: EntityTable<ReviewRow, 'id'>
  mistakes: EntityTable<MistakeRow, 'key'>
  notebook: EntityTable<NotebookRow, 'wordId'>
  exams: EntityTable<ExamRow, 'id'>
  chats: EntityTable<ChatRow, 'id'>
  aiDict: EntityTable<AiDictRow, 'key'>
  aiReadings: EntityTable<AiReadingRow, 'id'>
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
