/** Translate only distinct non-empty lines (choruses repeat), then map back to every line. */
export function uniqueLines(lines: string[]): { unique: string[]; index: number[] } {
  const unique: string[] = []
  const pos = new Map<string, number>()
  const index = lines.map((l) => {
    const k = l.trim()
    if (!k) return -1
    if (!pos.has(k)) {
      pos.set(k, unique.length)
      unique.push(k)
    }
    return pos.get(k)!
  })
  return { unique, index }
}

export function expandTranslation(index: number[], translated: string[]): string[] {
  return index.map((i) => (i < 0 ? '' : (translated[i] ?? '').trim()))
}

/**
 * Read a pasted "1. 翻译" list (from the Gemini web app) into an array of `n` lines,
 * plus the optional "主题：" summary.
 */
export function parseNumberedTranslation(text: string, n: number): { lines: string[]; summary: string; found: number } {
  const lines: string[] = Array(n).fill('')
  let summary = ''
  let found = 0
  for (const raw of text.split(/\r?\n/)) {
    const l = raw.replace(/^[\s*>-]+/, '').trim()
    const sm = l.match(/^(?:\*\*)?主题(?:\*\*)?\s*[:：]\s*(.+)$/)
    if (sm) {
      summary = sm[1].trim()
      continue
    }
    const m = l.match(/^(\d{1,3})\s*[.、:：)）]\s*(.*)$/)
    if (!m) continue
    const i = Number(m[1]) - 1
    if (i >= 0 && i < n && m[2].trim()) {
      if (!lines[i]) found++
      lines[i] = m[2].replace(/\*\*/g, '').trim()
    }
  }
  return { lines, summary, found }
}
