import { lrclibGet, lrclibSearch, pickBest } from '../../lib/songs/lrclib'
import { db, type SongLyricsRow } from '../../store/db'

export interface SongRef {
  id: string
  title: string
  artist: string
  lrclibId?: number
  durationSec?: number
}

/**
 * Synced lyrics for a song: the local copy if there is one, otherwise LRCLIB
 * (by the verified id, or by searching artist + title near the recording's length).
 */
export async function loadLyrics(song: SongRef, signal?: AbortSignal): Promise<SongLyricsRow | null> {
  const cached = await db.songLyrics.get(song.id)
  if (cached) return cached
  let rec = song.lrclibId ? await lrclibGet(song.lrclibId, signal).catch(() => null) : null
  if (!rec?.syncedLyrics) rec = pickBest(await lrclibSearch(song.artist, song.title, signal), song.durationSec)
  if (!rec?.syncedLyrics) return null
  const row: SongLyricsRow = { songId: song.id, source: 'lrclib', lrc: rec.syncedLyrics, lrclibId: rec.id, offset: 0, fetchedAt: Date.now() }
  await db.songLyrics.put(row)
  return row
}

export async function saveManualLyrics(songId: string, lrc: string): Promise<SongLyricsRow> {
  const row: SongLyricsRow = { songId, source: 'manual', lrc, offset: 0, fetchedAt: Date.now() }
  await db.songLyrics.put(row)
  return row
}

export const updateLyrics = (songId: string, patch: Partial<SongLyricsRow>) => db.songLyrics.update(songId, patch)

/** Forget the stored lyrics (and translation) so they are fetched again. */
export const forgetLyrics = (songId: string) => db.songLyrics.delete(songId)
