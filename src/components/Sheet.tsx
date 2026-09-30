import { X } from 'lucide-react'
import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

/** Bottom sheet on phones, centered dialog on larger screens. */
export function Sheet({
  open,
  onClose,
  title,
  children,
  wide = false,
}: {
  open: boolean
  onClose: () => void
  title?: ReactNode
  children: ReactNode
  wide?: boolean
}) {
  useEffect(() => {
    if (!open) return
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', h)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', h)
      document.body.style.overflow = prev
    }
  }, [open, onClose])
  if (!open) return null
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center" role="dialog" aria-modal="true">
      <div className="anim-fade absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className={`anim-slide-up md:anim-pop relative max-h-[88dvh] w-full overflow-y-auto rounded-t-3xl bg-surface p-5 pb-8 shadow-2xl md:rounded-3xl md:pb-6 ${
          wide ? 'md:max-w-2xl' : 'md:max-w-md'
        } safe-bottom`}
      >
        <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-line md:hidden" />
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="text-lg font-extrabold">{title}</div>
          <button type="button" onClick={onClose} className="rounded-xl p-1.5 text-ink-3 hover:bg-surface-2" aria-label="关闭">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  )
}
