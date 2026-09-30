import { generateJSON } from '../../lib/gemini/client'
import { searchKey } from '../../lib/text/normalize'
import { db } from '../../store/db'
import type { POS, Word } from '../../content/types'

const SCHEMA = {
  type: 'OBJECT',
  properties: {
    found: { type: 'BOOLEAN', description: '是否是有效的西班牙语单词或短语' },
    es: { type: 'STRING', description: '原形（名词单数、形容词阳性单数、动词不定式）' },
    zh: { type: 'STRING', description: '简洁中文释义，多个义项用；分隔' },
    pos: { type: 'STRING', enum: ['n', 'v', 'adj', 'adv', 'prep', 'conj', 'pron', 'art', 'det', 'interj', 'num', 'phr'] },
    g: { type: 'STRING', enum: ['m', 'f', 'mf', ''], description: '名词的性' },
    f: { type: 'STRING', description: '阴性形式（如有）' },
    form: { type: 'STRING', description: '如果查询的是变位/复数等形式，说明它是原形的什么形式；否则留空' },
    exEs: { type: 'STRING', description: '一个简单例句' },
    exZh: { type: 'STRING' },
    ety: { type: 'STRING', description: '词源演变（中文），例如：来自拉丁语 X「…」，经过…；只写公认的词源，不确定就写「词源不详」' },
    en: { type: 'STRING', description: '英语或法语同源词（如有）' },
    latam: { type: 'STRING', description: '拉美用法差异（如有）' },
    level: { type: 'STRING', enum: ['A1', 'A2', 'B1', 'B2', 'C1'] },
  },
  required: ['found', 'es', 'zh', 'pos', 'level'],
}

export interface AiEntry {
  word: Word
  form?: string
}

export async function aiLookup(query: string): Promise<AiEntry | null> {
  const key = searchKey(query)
  const cached = await db.aiDict.get(key)
  if (cached) return cached.entry as AiEntry
  const r = await generateJSON<{
    found: boolean
    es: string
    zh: string
    pos: POS
    g?: string
    f?: string
    form?: string
    exEs?: string
    exZh?: string
    ety?: string
    en?: string
    latam?: string
    level: Word['level']
  }>({
    system: '你是严谨的西班牙语—中文词典编纂者，以西班牙本土西语为准。',
    messages: [{ role: 'user', text: `请查词：「${query}」` }],
    schema: SCHEMA,
  })
  if (!r.found) return null
  const entry: AiEntry = {
    word: {
      id: `ai:${searchKey(r.es)}`,
      es: r.es,
      zh: r.zh,
      pos: r.pos,
      g: r.g === 'm' || r.g === 'f' || r.g === 'mf' ? r.g : undefined,
      f: r.f || undefined,
      ex: r.exEs ? [r.exEs, r.exZh ?? ''] : undefined,
      ety: r.ety || undefined,
      en: r.en || undefined,
      latam: r.latam || undefined,
      level: r.level ?? 'B1',
    },
    form: r.form || undefined,
  }
  await db.aiDict.put({ key, entry, createdAt: Date.now() })
  return entry
}
