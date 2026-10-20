import { fitSize, pixelBox, type Rect } from '../../lib/paper/geometry'

export interface Photo {
  id: string
  /** downscaled working copy (JPEG) */
  blob: Blob
  url: string
  w: number
  h: number
  regions: Rect[]
}

// sized so 100 photos stay comfortable in memory and in Gemini requests, while print stays legible
const WORK_MAX = 1800
const CROP_MAX = 1400

function toBlob(canvas: HTMLCanvasElement, quality = 0.85): Promise<Blob> {
  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('无法生成图片'))), 'image/jpeg', quality))
}

/** Decode with EXIF orientation applied (camera photos are often stored sideways). */
async function decode(file: Blob): Promise<{ src: CanvasImageSource; w: number; h: number; close: () => void }> {
  try {
    const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' })
    return { src: bmp, w: bmp.width, h: bmp.height, close: () => bmp.close() }
  } catch {
    const url = URL.createObjectURL(file)
    try {
      const img = new Image()
      img.src = url
      await img.decode()
      return { src: img, w: img.naturalWidth, h: img.naturalHeight, close: () => URL.revokeObjectURL(url) }
    } catch {
      URL.revokeObjectURL(url)
      throw new Error('无法读取这张图片（如果是 HEIC 格式，请在相机设置里改成「兼容性最佳」或先转成 JPG）')
    }
  }
}

/** Load a camera / album photo as a downscaled, upright JPEG. */
export async function loadPhoto(file: Blob): Promise<Photo> {
  const img = await decode(file)
  try {
    const { w, h } = fitSize(img.w, img.h, WORK_MAX)
    const c = document.createElement('canvas')
    c.width = w
    c.height = h
    c.getContext('2d')!.drawImage(img.src, 0, 0, w, h)
    const blob = await toBlob(c, 0.85)
    return { id: Math.random().toString(36).slice(2), blob, url: URL.createObjectURL(blob), w, h, regions: [] }
  } finally {
    img.close()
  }
}

/** Crop one region (or the whole photo) to a JPEG no longer than `max` px. */
export async function cropPhoto(p: Pick<Photo, 'blob'>, r?: Rect, max = CROP_MAX, quality = 0.82): Promise<Blob> {
  const img = await decode(p.blob)
  try {
    const box = r ? pixelBox(r, img.w, img.h) : { sx: 0, sy: 0, sw: img.w, sh: img.h }
    const { w, h } = fitSize(box.sw, box.sh, max)
    const c = document.createElement('canvas')
    c.width = w
    c.height = h
    const ctx = c.getContext('2d')!
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, w, h)
    ctx.drawImage(img.src, box.sx, box.sy, box.sw, box.sh, 0, 0, w, h)
    return await toBlob(c, quality)
  } finally {
    img.close()
  }
}

/** The selected regions of one photo (or the whole photo when nothing is selected). */
export async function cropsOf(p: Photo, pi: number): Promise<{ blob: Blob; label: string }[]> {
  if (!p.regions.length) return [{ blob: await cropPhoto(p), label: `第 ${pi + 1} 张照片（整张）` }]
  const out: { blob: Blob; label: string }[] = []
  for (const [ri, r] of p.regions.entries()) out.push({ blob: await cropPhoto(p, r), label: `第 ${pi + 1} 张照片 · 框选 ${ri + 1}` })
  return out
}

/** All selected regions of all photos, labelled 图1、图2… */
export async function cropAll(photos: Photo[], onProgress?: (done: number) => void): Promise<{ blob: Blob; label: string }[]> {
  const out: { blob: Blob; label: string }[] = []
  for (const [pi, p] of photos.entries()) {
    out.push(...(await cropsOf(p, pi)))
    onProgress?.(pi + 1)
  }
  return out
}

/** A smaller copy for the paper's "photos used" gallery. */
export const viewCopy = (b: Blob) => cropPhoto({ blob: b }, undefined, 1000, 0.72)

/**
 * Stitch crops into one tall numbered image, for uploading to the Gemini web app
 * (saving many files one by one is awkward on phones).
 */
export async function stitch(crops: Blob[]): Promise<Blob> {
  const imgs = await Promise.all(crops.map(decode))
  try {
    const W = 1400
    const pad = 24
    const head = 56
    const sizes = imgs.map((im) => fitSize(im.w, im.h, W)).map((s) => (s.w < W ? s : { w: W, h: Math.round((s.h * W) / s.w) }))
    let H = pad + sizes.reduce((a, s) => a + head + s.h + pad, 0)
    // keep the canvas within browser limits
    const k = Math.min(1, 12000 / H)
    H = Math.round(H * k)
    const c = document.createElement('canvas')
    c.width = Math.round((W + pad * 2) * k)
    c.height = H
    const ctx = c.getContext('2d')!
    ctx.scale(k, k)
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, W + pad * 2, H / k)
    let y = pad
    imgs.forEach((im, i) => {
      ctx.fillStyle = '#58a14a'
      ctx.font = 'bold 34px system-ui, sans-serif'
      ctx.fillText(`图 ${i + 1}`, pad, y + 38)
      y += head
      ctx.drawImage(im.src, pad, y, sizes[i].w, sizes[i].h)
      ctx.strokeStyle = '#d6dccf'
      ctx.lineWidth = 2
      ctx.strokeRect(pad, y, sizes[i].w, sizes[i].h)
      y += sizes[i].h + pad
    })
    return await toBlob(c, 0.85)
  } finally {
    imgs.forEach((im) => im.close())
  }
}

export function blobToBase64(b: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => resolve(String(r.result).split(',')[1] ?? '')
    r.onerror = () => reject(r.error)
    r.readAsDataURL(b)
  })
}

/** Share a file with the system share sheet when possible, otherwise download it. */
export async function shareOrDownload(blob: Blob, name: string, title: string): Promise<'shared' | 'downloaded' | 'cancelled'> {
  const file = new File([blob], name, { type: blob.type })
  const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean }
  if (nav.canShare?.({ files: [file] })) {
    try {
      await nav.share({ files: [file], title })
      return 'shared'
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return 'cancelled'
    }
  }
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = name
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 2000)
  return 'downloaded'
}

/** Small square-ish preview for the photo grid (full-size copies would use too much memory at 100 photos). */
export const makeThumb = (b: Blob) => cropPhoto({ blob: b }, undefined, 320, 0.7)
