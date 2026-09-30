export function BreakdownList({ breakdown }: { breakdown: Record<string, { label: string; c: number; t: number }> }) {
  const rows = Object.values(breakdown).sort((a, b) => a.c / a.t - b.c / b.t)
  return (
    <div className="card p-4">
      <div className="mb-3 font-black">各知识点得分</div>
      <div className="flex flex-col gap-3">
        {rows.map((r) => {
          const v = r.c / r.t
          return (
            <div key={r.label}>
              <div className="mb-1 flex justify-between text-sm font-bold">
                <span className="truncate pr-2">{r.label}</span>
                <span className={v >= 0.8 ? 'text-ok' : v >= 0.6 ? 'text-accent-ink' : 'text-bad'}>
                  {r.c}/{r.t}
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-surface-2">
                <div className="h-full rounded-full" style={{ width: `${v * 100}%`, background: v >= 0.8 ? 'var(--ok)' : v >= 0.6 ? 'var(--accent)' : 'var(--bad)' }} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
