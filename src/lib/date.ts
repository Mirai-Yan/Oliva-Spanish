/** Local-date key YYYY-MM-DD (study days roll over at local midnight). */
export function dayKey(d: Date | number = new Date()): string {
  const x = typeof d === 'number' ? new Date(d) : d
  const m = String(x.getMonth() + 1).padStart(2, '0')
  const day = String(x.getDate()).padStart(2, '0')
  return `${x.getFullYear()}-${m}-${day}`
}

export function addDays(key: string, n: number): string {
  const [y, m, d] = key.split('-').map(Number)
  return dayKey(new Date(y, m - 1, d + n))
}

/** Consecutive days with activity ending today (or yesterday if today has none yet). */
export function computeStreak(active: Set<string>, today = dayKey()): number {
  let cur = active.has(today) ? today : addDays(today, -1)
  let n = 0
  while (active.has(cur)) {
    n++
    cur = addDays(cur, -1)
  }
  return n
}

export function fmtDuration(sec: number): string {
  if (sec < 60) return `${Math.round(sec)} 秒`
  const m = Math.round(sec / 60)
  if (m < 60) return `${m} 分钟`
  return `${Math.floor(m / 60)} 小时 ${m % 60} 分`
}
