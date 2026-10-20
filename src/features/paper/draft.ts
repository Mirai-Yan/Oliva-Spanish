import { useCallback, useEffect, useRef, useState } from 'react'
import type { Rect } from '../../lib/paper/geometry'
import type { Material } from '../../lib/paper/material'
import { db, type DraftPhotoRow } from '../../store/db'
import { loadPhoto, makeThumb, type Photo } from './image'

export interface DraftPhoto extends Photo {
  order: number
  thumbUrl: string
  material?: Material[]
  materialKey?: string
}

export const regionsKey = (regions: Rect[]) => JSON.stringify(regions)

function toPhoto(r: DraftPhotoRow & { thumb?: Blob }): DraftPhoto {
  const url = URL.createObjectURL(r.blob)
  return { id: r.id, order: r.order, blob: r.blob, url, thumbUrl: r.thumb ? URL.createObjectURL(r.thumb) : url, w: r.w, h: r.h, regions: r.regions, material: r.material, materialKey: r.materialKey }
}

const revoke = (p: DraftPhoto) => {
  URL.revokeObjectURL(p.url)
  if (p.thumbUrl !== p.url) URL.revokeObjectURL(p.thumbUrl)
}

/**
 * Photos of the unfinished paper, kept in IndexedDB as they are added and edited,
 * so dozens of photos and their boxes survive a reload or a trip to another app.
 */
export function useDraftPhotos() {
  const [photos, setPhotos] = useState<DraftPhoto[]>([])
  const [restored, setRestored] = useState(0)
  const [adding, setAdding] = useState({ done: 0, total: 0 })
  const live = useRef<DraftPhoto[]>([])
  live.current = photos

  useEffect(() => {
    let alive = true
    db.draftPhotos
      .orderBy('order')
      .toArray()
      .then((rows) => {
        if (!alive) return
        const ps = rows.map(toPhoto)
        setPhotos(ps)
        setRestored(ps.length)
      })
      .catch(() => undefined)
    return () => {
      alive = false
      live.current.forEach(revoke)
    }
  }, [])

  const add = useCallback(async (files: File[], onError: (msg: string) => void) => {
    setAdding((a) => ({ done: a.done, total: a.total + files.length }))
    let order = live.current.reduce((m, p) => Math.max(m, p.order), 0)
    for (const f of files) {
      try {
        const p = await loadPhoto(f)
        const thumb = await makeThumb(p.blob)
        order += 1
        const row = { id: p.id, order, blob: p.blob, thumb, w: p.w, h: p.h, regions: [] as Rect[] }
        await db.draftPhotos.put(row).catch(() => undefined)
        const dp: DraftPhoto = { ...p, order, thumbUrl: URL.createObjectURL(thumb) }
        setPhotos((ps) => [...ps, dp])
      } catch (e) {
        onError(e instanceof Error ? e.message : '无法读取图片')
      } finally {
        setAdding((a) => ({ ...a, done: a.done + 1 }))
      }
    }
    setAdding((a) => (a.done >= a.total ? { done: 0, total: 0 } : a))
  }, [])

  const remove = useCallback((id: string) => {
    const p = live.current.find((x) => x.id === id)
    if (p) revoke(p)
    setPhotos((ps) => ps.filter((x) => x.id !== id))
    db.draftPhotos.delete(id).catch(() => undefined)
  }, [])

  const setRegions = useCallback((id: string, regions: Rect[]) => {
    setPhotos((ps) => ps.map((x) => (x.id === id ? { ...x, regions } : x)))
    db.draftPhotos.update(id, { regions }).catch(() => undefined)
  }, [])

  const setMaterial = useCallback((id: string, material: Material[], key: string) => {
    setPhotos((ps) => ps.map((x) => (x.id === id ? { ...x, material, materialKey: key } : x)))
    db.draftPhotos.update(id, { material, materialKey: key }).catch(() => undefined)
  }, [])

  const clear = useCallback(async () => {
    live.current.forEach(revoke)
    setPhotos([])
    setRestored(0)
    await db.draftPhotos.clear().catch(() => undefined)
  }, [])

  return { photos, restored, adding, add, remove, setRegions, setMaterial, clear, dismissRestored: () => setRestored(0) }
}
