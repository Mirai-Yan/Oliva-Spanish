import type { Exercise, Outcome } from '../lib/exercises/types'
import { questionText } from '../lib/exercises/text'
import { db } from './db'
import { lapseWords } from './review'

export async function saveMistake(ex: Exercise, o: Outcome) {
  if (o.skipped || ex.kind.startsWith('teach')) return
  const now = Date.now()
  const prev = await db.mistakes.get(ex.key)
  await db.mistakes.put({
    key: ex.key,
    ex,
    prompt: ex.title,
    question: questionText(ex) || undefined,
    user: o.user,
    correct: o.expected,
    unitId: ex.ref.unit,
    source: ex.ref.source,
    grammar: ex.ref.grammar ?? [],
    words: ex.ref.words ?? [],
    count: (prev?.count ?? 0) + 1,
    fixed: 0,
    createdAt: prev?.createdAt ?? now,
    updatedAt: now,
  })
  if (ex.ref.words?.length && ex.kind !== 'match') await lapseWords(ex.ref.words)
}

/** A correct redo; the item leaves the notebook after two correct redos in a row. */
export async function markMistakeRight(key: string) {
  const m = await db.mistakes.get(key)
  if (!m) return
  if (m.fixed + 1 >= 2) await db.mistakes.delete(key)
  else await db.mistakes.update(key, { fixed: m.fixed + 1, updatedAt: Date.now() })
}

export async function markMistakeWrong(key: string, user: string) {
  const m = await db.mistakes.get(key)
  if (!m) return
  await db.mistakes.update(key, { fixed: 0, count: m.count + 1, user, updatedAt: Date.now() })
}

/** Record learner answers during normal practice. */
export function trackAnswer(ex: Exercise, o: Outcome, first: boolean) {
  if (!first || o.skipped) return
  if (!o.correct) saveMistake(ex, o).catch(() => {})
}
