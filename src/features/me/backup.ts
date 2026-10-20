import { db } from '../../store/db'
import { dayKey } from '../../lib/date'

const TABLES = ['cards', 'reviews', 'mistakes', 'notebook', 'exams', 'chats', 'aiDict', 'aiReadings', 'papers', 'userSongs', 'songLyrics'] as const

/** fetched lyrics are re-downloadable; only hand-synced ones go into the backup */
const exportFilter: Partial<Record<(typeof TABLES)[number], (r: Record<string, unknown>) => boolean>> = {
  songLyrics: (r) => r.source === 'manual',
}

export async function exportBackup(includeKey: boolean) {
  const settings = JSON.parse(localStorage.getItem('oliva-settings') ?? '{}')
  if (!includeKey && settings?.state?.gemini) settings.state.gemini.apiKey = ''
  const data: Record<string, unknown> = {
    app: 'oliva',
    version: 1,
    exportedAt: new Date().toISOString(),
    settings,
    progress: JSON.parse(localStorage.getItem('oliva-progress') ?? '{}'),
  }
  for (const t of TABLES) {
    const rows = (await db.table(t).toArray()) as Record<string, unknown>[]
    const keep = exportFilter[t]
    data[t] = keep ? rows.filter(keep) : rows
  }
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = `oliva-backup-${dayKey()}.json`
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 1000)
}

export async function importBackup(text: string) {
  const data = JSON.parse(text)
  if (data?.app !== 'oliva') throw new Error('这不是 Oliva 的备份文件')
  if (data.settings) {
    // keep the current API key when the backup has none
    const cur = JSON.parse(localStorage.getItem('oliva-settings') ?? '{}')
    if (!data.settings?.state?.gemini?.apiKey && cur?.state?.gemini?.apiKey && data.settings.state?.gemini) data.settings.state.gemini.apiKey = cur.state.gemini.apiKey
    localStorage.setItem('oliva-settings', JSON.stringify(data.settings))
  }
  if (data.progress) localStorage.setItem('oliva-progress', JSON.stringify(data.progress))
  await db.transaction('rw', TABLES.map((t) => db.table(t)), async () => {
    for (const t of TABLES) {
      if (!Array.isArray(data[t])) continue
      await db.table(t).clear()
      const rows = (data[t] as Record<string, unknown>[]).map((r) => (t === 'cards' ? reviveCard(r) : r))
      await db.table(t).bulkPut(rows)
    }
  })
}

function reviveCard(r: Record<string, unknown>) {
  return { ...r, due: new Date(r.due as string), last_review: r.last_review ? new Date(r.last_review as string) : undefined }
}

export async function resetAll() {
  await Promise.all([...TABLES.filter((t) => t !== 'aiDict'), 'paperImages', 'draftPhotos'].map((t) => db.table(t).clear()))
}
