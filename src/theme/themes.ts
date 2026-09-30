export interface ThemePreset {
  id: string
  name: string
  primary: string
  accent: string
  /** short description of the palette */
  hint: string
}

export const THEMES: ThemePreset[] = [
  { id: 'olive', name: '橄榄绿', primary: '#58a14a', accent: '#f4b63f', hint: '默认 · 橄榄与阳光' },
  { id: 'mint', name: '薄荷绿', primary: '#1fa987', accent: '#ff8a5b', hint: '清新 · 薄荷与珊瑚' },
  { id: 'rojigualda', name: '西班牙红黄', primary: '#d33a2c', accent: '#f5bf2a', hint: '国旗配色' },
  { id: 'med', name: '地中海蓝', primary: '#2b7bcf', accent: '#f6a623', hint: '海岸与沙滩' },
  { id: 'valencia', name: '瓦伦西亚橙', primary: '#ec7a1c', accent: '#3a9b5c', hint: '橙子与橙树叶' },
  { id: 'terracota', name: '陶土', primary: '#c0623a', accent: '#3b7fa3', hint: '安达卢西亚瓷砖' },
  { id: 'jerez', name: '雪莉紫', primary: '#8a58d4', accent: '#ef6a9f', hint: '雪莉酒与花' },
]

export type Mode = 'system' | 'light' | 'dark'

export function resolveTheme(id: string, custom: { primary: string; accent: string }) {
  if (id === 'custom') return custom
  const t = THEMES.find((x) => x.id === id) ?? THEMES[0]
  return { primary: t.primary, accent: t.accent }
}

/** Suggest an accent for a custom primary: rotate hue ~150° and lift lightness. */
export function suggestAccent(hex: string): string {
  const { h, s, l } = hexToHsl(hex)
  return hslToHex((h + 150) % 360, Math.min(0.85, s + 0.1), Math.min(0.62, Math.max(0.5, l + 0.1)))
}

function hexToHsl(hex: string) {
  const n = parseInt(hex.replace('#', ''), 16)
  const r = ((n >> 16) & 255) / 255
  const g = ((n >> 8) & 255) / 255
  const b = (n & 255) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  let h = 0
  let s = 0
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0)
    else if (max === g) h = (b - r) / d + 2
    else h = (r - g) / d + 4
    h *= 60
  }
  return { h, s, l }
}

function hslToHex(h: number, s: number, l: number) {
  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  const to = (x: number) =>
    Math.round(x * 255)
      .toString(16)
      .padStart(2, '0')
  return '#' + to(f(0)) + to(f(8)) + to(f(4))
}
