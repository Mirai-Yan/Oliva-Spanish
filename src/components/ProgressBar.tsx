export function ProgressBar({ value, className = '', color = 'var(--primary)' }: { value: number; className?: string; color?: string }) {
  const v = Math.max(0, Math.min(1, value))
  return (
    <div className={`h-4 w-full overflow-hidden rounded-full bg-surface-2 ${className}`}>
      <div
        className="relative h-full rounded-full transition-[width] duration-500 ease-out"
        style={{ width: `${Math.max(v * 100, v > 0 ? 6 : 0)}%`, background: color }}
      >
        <div className="absolute left-2 right-2 top-1 h-1 rounded-full bg-white/35" />
      </div>
    </div>
  )
}

export function Ring({ value, size = 56, stroke = 7, children }: { value: number; size?: number; stroke?: number; children?: React.ReactNode }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const v = Math.max(0, Math.min(1, value))
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-2)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - v)}
          className="transition-[stroke-dashoffset] duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  )
}
