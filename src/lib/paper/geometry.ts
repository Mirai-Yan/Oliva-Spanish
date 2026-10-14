/** A rectangle in normalized image coordinates (0..1). */
export interface Rect {
  x: number
  y: number
  w: number
  h: number
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

/** Rectangle spanned by two (normalized) drag points, clamped to the image. */
export function rectFromPoints(a: { x: number; y: number }, b: { x: number; y: number }): Rect {
  const x1 = clamp01(Math.min(a.x, b.x))
  const y1 = clamp01(Math.min(a.y, b.y))
  const x2 = clamp01(Math.max(a.x, b.x))
  const y2 = clamp01(Math.max(a.y, b.y))
  return { x: x1, y: y1, w: x2 - x1, h: y2 - y1 }
}

/** Too small to be a deliberate selection (a tap or a jitter). */
export const tinyRect = (r: Rect) => r.w < 0.04 || r.h < 0.03

/** Pixel source box for drawImage, rounded and kept inside the image. */
export function pixelBox(r: Rect, width: number, height: number): { sx: number; sy: number; sw: number; sh: number } {
  const sx = Math.round(clamp01(r.x) * width)
  const sy = Math.round(clamp01(r.y) * height)
  const sw = Math.max(1, Math.min(width - sx, Math.round(r.w * width)))
  const sh = Math.max(1, Math.min(height - sy, Math.round(r.h * height)))
  return { sx, sy, sw, sh }
}

/** Output size that fits within `max` on the longer side, never upscaling. */
export function fitSize(w: number, h: number, max: number): { w: number; h: number } {
  const k = Math.min(1, max / Math.max(w, h))
  return { w: Math.max(1, Math.round(w * k)), h: Math.max(1, Math.round(h * k)) }
}
