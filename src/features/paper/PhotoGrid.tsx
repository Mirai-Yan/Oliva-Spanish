import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'
import { Sheet } from '../../components/Sheet'
import type { Rect } from '../../lib/paper/geometry'
import type { DraftPhoto } from './draft'
import { RegionPicker } from './RegionPicker'

/** Thumbnails of all photos with a badge for their boxes; tap one to draw boxes on it. */
export function PhotoGrid({ photos, onOpen }: { photos: DraftPhoto[]; onOpen: (i: number) => void }) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
      {photos.map((p, i) => (
        <button key={p.id} type="button" className="group relative aspect-[3/4] overflow-hidden rounded-xl border-2 border-line bg-surface-2" onClick={() => onOpen(i)} aria-label={`第 ${i + 1} 张照片，${p.regions.length ? `已框选 ${p.regions.length} 处` : '使用整张'}`}>
          <img src={p.thumbUrl} alt="" className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" decoding="async" />
          <span className="absolute left-1 top-1 rounded-md bg-black/55 px-1.5 text-xs font-black text-white">{i + 1}</span>
          <span className={`absolute bottom-1 right-1 rounded-md px-1.5 py-0.5 text-xs font-black ${p.regions.length ? 'bg-primary text-white' : 'bg-surface/90 text-ink-2'}`}>
            {p.regions.length ? `${p.regions.length} 框` : '整张'}
          </span>
        </button>
      ))}
    </div>
  )
}

/** Draw boxes on one photo at a time, stepping through the set without closing. */
export function RegionSheet({
  photos,
  index,
  onIndex,
  onClose,
  onRegions,
  onRemove,
}: {
  photos: DraftPhoto[]
  index: number | null
  onIndex: (i: number) => void
  onClose: () => void
  onRegions: (id: string, r: Rect[]) => void
  onRemove: (id: string) => void
}) {
  const p = index != null ? photos[index] : undefined
  useEffect(() => {
    if (index != null && !p) onClose()
  }, [index, p, onClose])
  return (
    <Sheet open={!!p} onClose={onClose} wide title={p ? `第 ${index! + 1} / ${photos.length} 张` : ''}>
      {p && (
        <>
          <RegionPicker
            photo={p}
            index={index!}
            onChange={(r) => onRegions(p.id, r)}
            onRemove={() => {
              onRemove(p.id)
              if (photos.length <= 1) onClose()
              else if (index! >= photos.length - 1) onIndex(index! - 1)
            }}
          />
          <p className="mt-2 text-sm text-ink-2">拖动画框选出要考的部分；不画框就用整张。</p>
          <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            <button type="button" className="btn btn-ghost btn-sm" disabled={index === 0} onClick={() => onIndex(index! - 1)}>
              <ChevronLeft size={16} /> 上一张
            </button>
            <button type="button" className="btn btn-primary btn-sm" onClick={onClose}>
              完成
            </button>
            <button type="button" className="btn btn-ghost btn-sm" disabled={index === photos.length - 1} onClick={() => onIndex(index! + 1)}>
              下一张 <ChevronRight size={16} />
            </button>
          </div>
        </>
      )}
    </Sheet>
  )
}
