/** Client for the public LRCLIB lyrics database (https://lrclib.net), which allows browser requests. */

export interface LrclibRecord {
  id: number
  trackName: string
  artistName: string
  albumName?: string
  duration: number
  instrumental?: boolean
  plainLyrics?: string | null
  syncedLyrics?: string | null
}

const BASE = 'https://lrclib.net/api'

async function getJSON<T>(url: string, signal?: AbortSignal): Promise<T> {
  let res: Response
  try {
    res = await fetch(url, { signal })
  } catch {
    throw new Error('无法连接歌词库，请检查网络')
  }
  if (res.status === 404) throw new Error('歌词库里没有这首歌')
  if (!res.ok) throw new Error(`歌词库暂时不可用（${res.status}）`)
  return res.json() as Promise<T>
}

export const lrclibGet = (id: number, signal?: AbortSignal) => getJSON<LrclibRecord>(`${BASE}/get/${id}`, signal)

export async function lrclibSearch(artist: string, title: string, signal?: AbortSignal): Promise<LrclibRecord[]> {
  const q = new URLSearchParams({ artist_name: artist, track_name: title })
  const r = await getJSON<LrclibRecord[]>(`${BASE}/search?${q}`, signal)
  return Array.isArray(r) ? r : []
}

/** The synced version whose length is closest to the recording (within `maxDiff` seconds when known). */
export function pickBest(records: LrclibRecord[], duration?: number, maxDiff = 8): LrclibRecord | null {
  const synced = records.filter((r) => r.syncedLyrics && !r.instrumental)
  if (!synced.length) return null
  if (!duration) return synced[0]
  const best = [...synced].sort((a, b) => Math.abs(a.duration - duration) - Math.abs(b.duration - duration))[0]
  return Math.abs(best.duration - duration) <= maxDiff ? best : null
}
