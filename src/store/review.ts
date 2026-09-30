import { useLiveQuery } from 'dexie-react-hooks'
import { createEmptyCard, fsrs, Rating, type Grade } from 'ts-fsrs'
import { db, type CardRow } from './db'

const scheduler = fsrs({ enable_fuzz: true, request_retention: 0.9 })

export { Rating }

/** Add words to the review deck (no-op for words already there). */
export async function addCards(wordIds: string[], src: CardRow['src'] = 'lesson') {
  const now = new Date()
  const existing = new Set((await db.cards.bulkGet(wordIds)).filter(Boolean).map((c) => c!.wordId))
  const rows = wordIds
    .filter((id) => !existing.has(id))
    .map((wordId) => ({ ...createEmptyCard(now), wordId, added: Date.now(), src }) as CardRow)
  if (rows.length) await db.cards.bulkPut(rows)
}

export async function rateCard(wordId: string, grade: Grade) {
  const card = await db.cards.get(wordId)
  if (!card) return
  const { card: next } = scheduler.next(card, new Date(), grade)
  await db.cards.put({ ...card, ...next })
  await db.reviews.add({ wordId, rating: grade, ts: Date.now() })
}

/** A wrong answer about a word makes it due again soon. */
export async function lapseWords(wordIds: string[]) {
  await addCards(wordIds, 'mistake')
  for (const id of wordIds) {
    const c = await db.cards.get(id)
    if (c && c.state !== 0) await rateCard(id, Rating.Again)
  }
}

export function previewIntervals(card: CardRow): Record<Grade, Date> {
  const r = scheduler.repeat(card, new Date())
  return {
    [Rating.Again]: r[Rating.Again].card.due,
    [Rating.Hard]: r[Rating.Hard].card.due,
    [Rating.Good]: r[Rating.Good].card.due,
    [Rating.Easy]: r[Rating.Easy].card.due,
  } as Record<Grade, Date>
}

export function useDueCount(): number {
  return useLiveQuery(() => db.cards.where('due').belowOrEqual(new Date()).count(), [], 0) ?? 0
}

export function useMistakeCount(): number {
  return useLiveQuery(() => db.mistakes.count(), [], 0) ?? 0
}
