import { Eraser, Trash2, X } from 'lucide-react'
import { useRef, useState, type PointerEvent } from 'react'
import { rectFromPoints, tinyRect, type Rect } from '../../lib/paper/geometry'
import type { Photo } from './image'

/** Draw rectangles on a photo to choose what the paper should cover. */
export function RegionPicker({ photo, index, onChange, onRemove }: { photo: Photo; index: number; onChange: (regions: Rect[]) => void; onRemove: () => void }) {
  const box = useRef<HTMLDivElement>(null)
  const start = useRef<{ x: number; y: number } | null>(null)
  const [draft, setDraft] = useState<Rect | null>(null)

  const point = (e: PointerEvent) => {
    const r = box.current!.getBoundingClientRect()
    return { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }
  }

  const down = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      /* capture is a nicety; drawing works without it */
    }
    start.current = point(e)
    setDraft(null)
  }
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (!start.current) return
    setDraft(rectFromPoints(start.current, point(e)))
  }
  const up = (e: PointerEvent<HTMLDivElement>) => {
    if (!start.current) return
    const r = rectFromPoints(start.current, point(e))
    start.current = null
    setDraft(null)
    if (!tinyRect(r)) onChange([...photo.regions, r])
  }

  const pct = (r: Rect) => ({ left: `${r.x * 100}%`, top: `${r.y * 100}%`, width: `${r.w * 100}%`, height: `${r.h * 100}%` })

  return (
    <div className="card p-3">
      <div className="mb-2 flex items-center gap-2">
        <span className="font-black">第 {index + 1} 张</span>
        <span className="text-sm text-ink-3">{photo.regions.length ? `已框选 ${photo.regions.length} 处` : '未框选 · 将使用整张'}</span>
        <span className="flex-1" />
        {photo.regions.length > 0 && (
          <button type="button" className="chip" onClick={() => onChange([])}>
            <Eraser size={14} /> 清除框
          </button>
        )}
        <button type="button" className="chip" onClick={onRemove}>
          <Trash2 size={14} /> 删除
        </button>
      </div>
      <div className="flex justify-center rounded-xl bg-surface-2 p-1">
        <div ref={box} className="relative inline-block select-none">
          <img src={photo.url} alt={`照片 ${index + 1}`} className="block max-h-[62dvh] max-w-full rounded-lg" draggable={false} />
          <div className="absolute inset-0 cursor-crosshair touch-none" onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={() => ((start.current = null), setDraft(null))}>
            {photo.regions.map((r, i) => (
              <div key={i} className="absolute rounded-md border-[3px] border-primary bg-primary/15" style={pct(r)}>
                <span className="absolute -left-[3px] -top-[3px] rounded-br-md rounded-tl-md bg-primary px-1.5 text-xs font-black text-white">{i + 1}</span>
                <button
                  type="button"
                  className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-surface text-ink shadow"
                  aria-label={`删除框 ${i + 1}`}
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => onChange(photo.regions.filter((_, j) => j !== i))}
                >
                  <X size={15} />
                </button>
              </div>
            ))}
            {draft && <div className="absolute rounded-md border-[3px] border-dashed border-accent bg-accent/15" style={pct(draft)} />}
          </div>
        </div>
      </div>
    </div>
  )
}
