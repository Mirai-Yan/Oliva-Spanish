import { CheckCircle2, Info, TriangleAlert } from 'lucide-react'
import { create } from 'zustand'

type Kind = 'ok' | 'warn' | 'info'
interface T {
  id: number
  text: string
  kind: Kind
}

const useToasts = create<{ items: T[] }>(() => ({ items: [] }))

let seq = 0
export function toast(text: string, kind: Kind = 'info', ms = 5000) {
  const id = ++seq
  useToasts.setState((s) => ({ items: [...s.items, { id, text, kind }] }))
  setTimeout(() => useToasts.setState((s) => ({ items: s.items.filter((t) => t.id !== id) })), ms)
}

export function Toaster() {
  const items = useToasts((s) => s.items)
  if (!items.length) return null
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[70] flex flex-col items-center gap-2 px-4">
      {items.map((t) => {
        const Icon = t.kind === 'ok' ? CheckCircle2 : t.kind === 'warn' ? TriangleAlert : Info
        return (
          <div key={t.id} role="status" className="card anim-pop pointer-events-auto flex max-w-md items-start gap-2 px-4 py-3 text-sm font-semibold shadow-xl">
            <Icon size={18} className={`mt-0.5 shrink-0 ${t.kind === 'ok' ? 'text-ok' : t.kind === 'warn' ? 'text-accent-ink' : 'text-info'}`} />
            <span>{t.text}</span>
          </div>
        )
      })}
    </div>
  )
}
