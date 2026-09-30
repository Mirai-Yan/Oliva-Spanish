import { ChevronLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

export function PageHeader({ title, sub, back, right }: { title: ReactNode; sub?: ReactNode; back?: boolean | string; right?: ReactNode }) {
  const nav = useNavigate()
  return (
    <div className="mb-6 flex items-start gap-3">
      {back && (
        <button
          type="button"
          onClick={() => (typeof back === 'string' ? nav(back) : nav(-1))}
          className="-ml-2 mt-0.5 rounded-xl p-1.5 text-ink-3 hover:bg-surface-2"
          aria-label="返回"
        >
          <ChevronLeft size={26} />
        </button>
      )}
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-black leading-tight md:text-3xl">{title}</h1>
        {sub && <div className="mt-1 text-ink-2">{sub}</div>}
      </div>
      {right}
    </div>
  )
}

export function Section({ title, children, right }: { title: ReactNode; children: ReactNode; right?: ReactNode }) {
  return (
    <section className="mb-8">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-lg font-black">{title}</h2>
        {right}
      </div>
      {children}
    </section>
  )
}

export function Empty({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border-2 border-dashed border-line p-6 text-center text-ink-3">{children}</div>
}
