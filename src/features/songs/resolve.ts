import { artistById, songById } from '../../content/songs/catalog'
import type { Song, SongLevel, SongStyle } from '../../content/songs/types'
import type { UserSongRow } from '../../store/db'

/** A playable song: from the built-in catalog or added by the learner. */
export interface PlaySong {
  id: string
  title: string
  artist: string
  artistId?: string
  feat?: string
  year?: number
  youtubeId: string
  lrclibId?: number
  durationSec?: number
  level?: SongLevel
  style?: SongStyle
  note?: string
  points?: string[]
  themes?: string[]
  custom: boolean
}

export function fromCatalog(s: Song): PlaySong {
  const a = artistById.get(s.artistId)
  return { ...s, artist: a?.name ?? s.artistId, custom: false }
}

export function fromUser(u: UserSongRow): PlaySong {
  return { id: u.id, title: u.title, artist: u.artist, youtubeId: u.youtubeId, custom: true }
}

export const catalogSong = (id: string) => {
  const s = songById.get(id)
  return s ? fromCatalog(s) : undefined
}

export const fullArtist = (s: Pick<PlaySong, 'artist' | 'feat'>) => (s.feat ? `${s.artist} & ${s.feat}` : s.artist)
