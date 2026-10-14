/** One timed lyric line; empty text marks an instrumental gap. */
export interface LyricLine {
  /** seconds from the start of the recording */
  t: number
  text: string
}

const STAMP = /\[(\d{1,3}):(\d{1,2})(?:[.:](\d{1,3}))?\]/g

/**
 * Parse LRC text: multiple timestamps per line, [offset:±ms], metadata tags ignored,
 * enhanced word stamps <mm:ss.xx> stripped. Lines are returned sorted by time.
 */
export function parseLrc(lrc: string): LyricLine[] {
  let offset = 0
  const out: LyricLine[] = []
  for (const raw of lrc.split(/\r?\n/)) {
    const line = raw.trim()
    const off = line.match(/^\[offset:\s*([+-]?\d+)\s*\]$/i)
    if (off) {
      offset = Number(off[1]) / 1000
      continue
    }
    const stamps = [...line.matchAll(STAMP)]
    if (!stamps.length || line.indexOf(stamps[0][0]) !== 0) continue
    const text = line
      .replace(STAMP, '')
      .replace(/<\d{1,3}:\d{1,2}(?:[.:]\d{1,3})?>/g, '')
      .replace(/\s+/g, ' ')
      .trim()
    for (const m of stamps) {
      const frac = m[3] ? Number(m[3]) / 10 ** m[3].length : 0
      out.push({ t: Number(m[1]) * 60 + Number(m[2]) + frac, text })
    }
  }
  // per the LRC convention a positive offset shows lyrics earlier
  return out.map((l) => ({ ...l, t: Math.max(0, Math.round((l.t - offset) * 1000) / 1000) })).sort((a, b) => a.t - b.t)
}

/** Does this text look like LRC (has timestamps)? */
export const isLrc = (s: string) => /^\s*\[\d{1,3}:\d{1,2}(?:[.:]\d{1,3})?\]/m.test(s)

/** Index of the line playing at time `t` (-1 before the first line). */
export function lineAt(lines: LyricLine[], t: number): number {
  let lo = 0
  let hi = lines.length - 1
  let ans = -1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (lines[mid].t <= t) {
      ans = mid
      lo = mid + 1
    } else hi = mid - 1
  }
  return ans
}

/** End time of line i (start of the next line, or a few seconds later for the last one). */
export const lineEnd = (lines: LyricLine[], i: number) => (i + 1 < lines.length ? lines[i + 1].t : lines[i].t + 6)

const pad = (n: number, w = 2) => String(n).padStart(w, '0')

export function fmtStamp(t: number): string {
  const cs = Math.round(t * 100)
  return `${pad(Math.floor(cs / 6000))}:${pad(Math.floor(cs / 100) % 60)}.${pad(cs % 100)}`
}

export function toLrc(lines: LyricLine[]): string {
  return lines.map((l) => `[${fmtStamp(l.t)}]${l.text}`).join('\n')
}

/** Plain pasted lyrics → lines to sync by hand (blank lines dropped, whitespace tidied). */
export function plainLines(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
}
