import { describe, expect, it } from 'vitest'
import { batchImages, MATERIAL_LIMITS, materialToText, mergeMaterial, readMaterial, type Material } from './material'
import { extractAll, generateSections, tagSources, withRetry, type PipelineDeps, type PipelineImage } from './pipeline'
import { DEFAULT_CONFIG, type PaperConfig, type SectionId } from './types'

const img = (n: number, size = 200_000): PipelineImage => ({ blob: { size } as Blob, label: `图${n}` })
const noSleep = async () => {}
const rateLimited = () => Object.assign(new Error('429'), { status: 429 })

describe('material helpers', () => {
  it('batches by count and by size', () => {
    const items = Array.from({ length: 100 }, () => ({ size: 250_000 }))
    expect(batchImages(items).map((b) => b.length)).toEqual([...Array(12).fill(8), 4])
    const big = Array.from({ length: 5 }, () => ({ size: 5_000_000 }))
    expect(batchImages(big).map((b) => b.length)).toEqual([2, 2, 1])
  })

  it('reads, de-duplicates and spreads the cap over images', () => {
    const a = readMaterial({ vocab: [{ es: 'la casa', zh: '房子', src: 1 }, { es: 'La Casa', zh: '房子', src: 2 }, { es: '', zh: 'x' }], grammar: [{ point: 'ser / estar' }], sentences: [{ es: 'Hola.', zh: '你好。' }, { es: 'ok' }] })
    expect(a.vocab).toHaveLength(2)
    expect(a.sentences).toHaveLength(1)
    const parts: Material[] = Array.from({ length: 4 }, (_, i) => ({ vocab: Array.from({ length: 10 }, (_, k) => ({ es: `p${i}w${k}`, zh: 'z', src: i + 1 })), grammar: [], sentences: [] }))
    const merged = mergeMaterial(parts, { ...MATERIAL_LIMITS, vocab: 8 })
    expect(merged.vocab).toHaveLength(8)
    expect(new Set(merged.vocab.map((v) => v.src))).toEqual(new Set([1, 2, 3, 4]))
    expect(mergeMaterial([a, a]).vocab).toHaveLength(1)
    expect(materialToText(merged)).toContain('【单词和短语】\np0w0 = z〔图1〕')
  })
})

describe('extractAll', () => {
  it('reads in batches, retries rate limits, and maps sources back per image', async () => {
    let calls = 0
    let limited = false
    const deps: PipelineDeps = {
      extract: async (images) => {
        calls++
        if (!limited) {
          limited = true
          throw rateLimited()
        }
        return { vocab: images.map((im, k) => ({ es: `w-${im.label}`, zh: '词', src: k + 1 })), grammar: [], sentences: [] }
      },
      generate: async () => ({}),
      sleep: noSleep,
    }
    const images = Array.from({ length: 20 }, (_, i) => img(i + 1))
    const waits: number[] = []
    const r = await extractAll(images, deps, { onProgress: (p) => p.waiting && waits.push(p.waiting) })
    expect(r.failed).toEqual([])
    expect(calls).toBe(4) // 3 batches + 1 retry
    expect(waits[0]).toBe(5)
    expect(r.perImage[13]?.vocab[0].es).toBe('w-图14')
    expect(tagSources(r.perImage)[13].vocab[0].src).toBe(14)
  })

  it('keeps good batches when one keeps failing, and skips cached images', async () => {
    const seen: string[] = []
    const deps: PipelineDeps = {
      extract: async (images) => {
        seen.push(...images.map((i) => i.label))
        if (images.some((i) => i.label === '图10')) throw Object.assign(new Error('bad request'), { status: 400 })
        return { vocab: [{ es: 'hola', zh: '你好', src: 1 }], grammar: [], sentences: [] }
      },
      generate: async () => ({}),
      sleep: noSleep,
    }
    const images = Array.from({ length: 17 }, (_, i) => img(i + 1))
    const cached: (Material | undefined)[] = []
    cached[0] = { vocab: [{ es: 'cacheado', zh: '缓存' }], grammar: [], sentences: [] }
    const r = await extractAll(images, deps, { cached })
    expect(seen).not.toContain('图1')
    expect(r.perImage[0]?.vocab[0].es).toBe('cacheado')
    expect(r.failed).toEqual([9, 10, 11, 12, 13, 14, 15, 16])
    expect(r.perImage[1]?.vocab[0].es).toBe('hola')
    expect(r.perImage[9]).toBeNull()
  })
})

describe('generateSections', () => {
  const config: PaperConfig = { ...DEFAULT_CONFIG, sections: { match: { count: 6, points: 1 }, tf: { count: 4, points: 2 }, choice: { count: 0, points: 3 }, cloze: { count: 0, points: 4 }, listen: { count: 0, points: 2 } } }

  it('asks once per type and tops up a short section', async () => {
    const asked: [SectionId, number, number][] = []
    const deps: PipelineDeps = {
      extract: async () => ({}),
      sleep: noSleep,
      generate: async (section, count, avoid) => {
        asked.push([section, count, avoid.length])
        if (section === 'match') {
          const start = avoid.length
          const n = avoid.length ? count : count - 2 // first answer is 2 short
          return { title: 'Mi casa', scope: '家居', match: Array.from({ length: n }, (_, k) => ({ es: `palabra${start + k}`, zh: `词${start + k}` })) }
        }
        return { tf: Array.from({ length: count }, (_, k) => ({ sentence: `Frase número ${k}.`, correct: k % 2 === 0, explain: '解析' })) }
      },
    }
    const r = await generateSections(config, deps)
    expect(asked).toEqual([
      ['match', 6, 0],
      ['match', 2, 4],
      ['tf', 4, 0],
    ])
    expect(r.paper.questions.match).toHaveLength(6)
    expect(r.paper.questions.tf).toHaveLength(4)
    expect(r.paper.title).toBe('Mi casa')
    expect(r.shortfall).toEqual({})
  })

  it('reports what is still missing and fails only when nothing came back', async () => {
    const deps: PipelineDeps = {
      extract: async () => ({}),
      sleep: noSleep,
      generate: async (section) => {
        if (section === 'tf') throw Object.assign(new Error('boom'), { status: 400 })
        return { match: [{ es: 'uno', zh: '一' }] }
      },
    }
    const r = await generateSections(config, deps)
    expect(r.shortfall).toEqual({ match: 5, tf: 4 })
    const failing: PipelineDeps = { ...deps, generate: async () => Promise.reject(Object.assign(new Error('nope'), { status: 400 })) }
    await expect(generateSections(config, failing)).rejects.toThrow('nope')
  })
})

describe('withRetry', () => {
  it('gives up after three waits on persistent rate limits', async () => {
    let n = 0
    await expect(
      withRetry(
        async () => {
          n++
          throw rateLimited()
        },
        { sleep: noSleep },
      ),
    ).rejects.toThrow('429')
    expect(n).toBe(4)
  })
})
