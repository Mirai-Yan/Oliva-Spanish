import { useSettings, type GeminiSettings } from '../../store/settings'

export interface InlineData {
  mimeType: string
  data: string
}

/** One piece of a multi-part message: text, or inline media (base64). */
export type GPart = { text: string } | { inline: InlineData }

export interface GMessage {
  role: 'user' | 'model'
  text: string
  /** optional inline media (audio for pronunciation feedback) */
  inline?: InlineData
  /** several media/text parts in order (e.g. photos, each followed by a label); `text` is appended last */
  parts?: GPart[]
}

export interface GenerateOptions {
  system?: string
  messages: GMessage[]
  temperature?: number
  json?: boolean
  /** OpenAPI-style response schema for JSON mode */
  schema?: unknown
  signal?: AbortSignal
  maxTokens?: number
  /** abort the request after this many milliseconds */
  timeoutMs?: number
}

export class GeminiError extends Error {
  status: number
  constructor(message: string, status = 0) {
    super(message)
    this.status = status
  }
}

/** Used when model auto-detection is impossible (e.g. a relay without ListModels). */
export const FALLBACK_MODEL = 'gemini-2.5-flash'

function cfg(): GeminiSettings {
  return useSettings.getState().gemini
}

function base(c: GeminiSettings) {
  return (c.baseUrl || 'https://generativelanguage.googleapis.com').replace(/\/+$/, '')
}

function modelPath(model: string) {
  const m = model.trim() || FALLBACK_MODEL
  return m.startsWith('models/') ? m : `models/${m}`
}

function body(o: GenerateOptions) {
  const contents = o.messages.map((m) => ({
    role: m.role,
    parts: [
      ...(m.inline ? [{ inlineData: m.inline }] : []),
      ...(m.parts ?? []).map((p) => ('inline' in p ? { inlineData: p.inline } : { text: p.text })),
      ...(m.text ? [{ text: m.text }] : []),
    ],
  }))
  const generationConfig: Record<string, unknown> = { temperature: o.temperature ?? 0.7 }
  if (o.maxTokens) generationConfig.maxOutputTokens = o.maxTokens
  if (o.json) {
    generationConfig.responseMimeType = 'application/json'
    if (o.schema) generationConfig.responseSchema = o.schema
  }
  return JSON.stringify({
    ...(o.system ? { systemInstruction: { parts: [{ text: o.system }] } } : {}),
    contents,
    generationConfig,
  })
}

async function explain(res: Response, model: string): Promise<GeminiError> {
  let detail = ''
  try {
    const j = await res.json()
    detail = j?.error?.message ?? ''
  } catch {
    /* ignore */
  }
  const s = res.status
  let msg = `Gemini 请求失败（${s}）`
  if (s === 400 && /API key/i.test(detail)) msg = 'API Key 无效，请到设置里检查'
  else if (s === 400 && /location|region|country/i.test(detail)) msg = '当前地区不支持 Gemini API，请使用代理或中转地址'
  else if (s === 400) msg = `请求格式有误：${detail || '未知错误'}`
  else if (s === 401 || s === 403) msg = 'API Key 没有权限或已失效，请到设置里检查'
  else if (s === 404) msg = `找不到模型「${model}」，请在设置里重新选择模型`
  else if (s === 429) msg = '免费额度暂时用完或请求太频繁。可以等一两分钟再试，或在「设置 → AI」里把模型换成 Flash-Lite（免费额度更多）。'
  else if (s >= 500) msg = 'Gemini 服务暂时不可用，请稍后再试'
  return new GeminiError(msg, s)
}

function networkError(e: unknown, timedOut = false): GeminiError {
  if (timedOut) return new GeminiError('等待太久，请求已超时。可以减少照片或题目数量后再试', 0)
  if (e instanceof DOMException && e.name === 'AbortError') return new GeminiError('已取消', -1)
  return new GeminiError('无法连接 Gemini。若在中国大陆，需要开启代理，或在「设置 → AI」里填写可用的中转地址。', 0)
}

function requireKey(c: GeminiSettings) {
  if (!c.apiKey.trim()) throw new GeminiError('还没有设置 Gemini API Key。可以在「设置 → AI 助手」免费申请，或者点「复制到 Gemini」用网页版提问。', -2)
}

// ---------- model selection ----------

export interface ModelInfo {
  id: string
  name: string
}

function versionOf(id: string): number {
  const m = id.match(/gemini-(\d+(?:\.\d+)?)/)
  return m ? Number(m[1]) : 0
}

/**
 * Pick the best everyday model: the newest stable Flash (not lite / preview / tts / image / live).
 * Free-tier keys can use these.
 */
export function pickDefaultModel(models: ModelInfo[]): string | null {
  const ids = models.map((m) => m.id)
  const stableFlash = ids.filter((id) => /^gemini-\d+(\.\d+)?-flash$/.test(id))
  if (stableFlash.length) return stableFlash.sort((a, b) => versionOf(b) - versionOf(a))[0]
  const anyFlash = ids.filter((id) => /flash/.test(id) && !/(lite|preview|exp|tts|image|live|audio|transcribe|translate)/.test(id))
  if (anyFlash.length) return anyFlash.sort((a, b) => versionOf(b) - versionOf(a))[0]
  return null
}

let resolving: Promise<string> | null = null

/** The model to use; when the setting is empty (auto), detect it once and remember it. */
async function currentModel(forceRefresh = false): Promise<string> {
  const c = cfg()
  if (c.model.trim() && !forceRefresh) return c.model.trim()
  resolving ??= (async () => {
    try {
      const picked = pickDefaultModel(await listModels())
      const model = picked ?? FALLBACK_MODEL
      useSettings.getState().setGemini({ model })
      return model
    } catch {
      return c.model.trim() || FALLBACK_MODEL
    } finally {
      setTimeout(() => (resolving = null), 0)
    }
  })()
  return resolving
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

/**
 * POST with the two recoveries free-tier users hit most:
 * 404 (model retired or not available to this key) → re-detect the model once;
 * 429 (rate limit) → wait and retry once.
 */
async function post(path: (model: string) => string, o: GenerateOptions): Promise<Response> {
  const c = cfg()
  requireKey(c)
  let model = await currentModel()
  let retried404 = false
  let retried429 = false
  // one controller for the caller's signal and the optional timeout
  const ctl = new AbortController()
  let timedOut = false
  if (o.signal) {
    if (o.signal.aborted) ctl.abort()
    else o.signal.addEventListener('abort', () => ctl.abort(), { once: true })
  }
  const timer = o.timeoutMs
    ? setTimeout(() => {
        timedOut = true
        ctl.abort()
      }, o.timeoutMs)
    : undefined
  for (;;) {
    let res: Response
    try {
      res = await fetch(`${base(c)}/v1beta/${modelPath(model)}:${path(model)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': c.apiKey.trim() },
        body: body(o),
        signal: ctl.signal,
      })
    } catch (e) {
      clearTimeout(timer)
      throw networkError(e, timedOut)
    }
    if (res.status === 404 && !retried404) {
      retried404 = true
      const next = await currentModel(true)
      if (next !== model) {
        model = next
        continue
      }
    }
    if (res.status === 429 && !retried429) {
      retried429 = true
      const ra = Number(res.headers.get('retry-after'))
      await sleep(Math.min(8000, Number.isFinite(ra) && ra > 0 ? ra * 1000 : 2500))
      continue
    }
    clearTimeout(timer)
    if (!res.ok) throw await explain(res, model)
    return res
  }
}

type Part = { text?: string; thought?: boolean }
type Chunk = { candidates?: { content?: { parts?: Part[] }; finishReason?: string }[]; promptFeedback?: { blockReason?: string } }

function textOf(chunk: Chunk): string {
  const parts = chunk.candidates?.[0]?.content?.parts ?? []
  return parts
    .filter((p) => !p.thought && typeof p.text === 'string')
    .map((p) => p.text)
    .join('')
}

/** Stream text deltas. */
export async function* streamGenerate(o: GenerateOptions): AsyncGenerator<string> {
  const res = await post(() => 'streamGenerateContent?alt=sse', o)
  if (!res.body) throw new GeminiError('Gemini 没有返回内容', 0)
  const reader = res.body.getReader()
  const dec = new TextDecoder()
  let buf = ''
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      buf += dec.decode(value, { stream: true })
      let nl: number
      while ((nl = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, nl).trim()
        buf = buf.slice(nl + 1)
        if (!line.startsWith('data:')) continue
        const data = line.slice(5).trim()
        if (!data || data === '[DONE]') continue
        try {
          const chunk = JSON.parse(data) as Chunk
          if (chunk.promptFeedback?.blockReason) throw new GeminiError('内容被安全策略拦截，换个说法试试', 400)
          const t = textOf(chunk)
          if (t) yield t
        } catch (e) {
          if (e instanceof GeminiError) throw e
        }
      }
    }
  } catch (e) {
    if (e instanceof GeminiError) throw e
    throw networkError(e)
  }
}

const FINISH_ZH: Record<string, string> = {
  MAX_TOKENS: 'AI 的回答太长被截断了，可以减少题目数量后再试',
  SAFETY: '内容被安全策略拦截，换个说法试试',
  PROHIBITED_CONTENT: '内容被安全策略拦截，换个说法试试',
  RECITATION: 'AI 因版权保护（原文复述）停止了回答。可以改用「复制到 Gemini」在网页版里处理',
  BLOCKLIST: '内容被安全策略拦截，换个说法试试',
}

export async function generate(o: GenerateOptions): Promise<string> {
  const res = await post(() => 'generateContent', o)
  const j = (await res.json()) as Chunk
  if (j.promptFeedback?.blockReason) throw new GeminiError('内容被安全策略拦截，换个说法试试', 400)
  const text = textOf(j)
  const reason = j.candidates?.[0]?.finishReason ?? ''
  // a truncated JSON answer is useless; a truncated chat answer is still worth showing
  if (FINISH_ZH[reason] && (!text.trim() || o.json)) throw new GeminiError(FINISH_ZH[reason], 0)
  return text
}

/**
 * Pull the first complete JSON object/array out of model text:
 * tolerates ``` fences and prose around it (pasted replies from the Gemini web app).
 */
export function extractJSON<T = unknown>(text: string): T {
  const t = text.trim()
  try {
    return JSON.parse(t) as T
  } catch {
    /* fall through */
  }
  const fenced = t.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fenced) {
    try {
      return JSON.parse(fenced[1].trim()) as T
    } catch {
      /* fall through */
    }
  }
  // scan for a balanced {...} or [...] (string-aware)
  for (let start = 0; start < t.length; start++) {
    const open = t[start]
    if (open !== '{' && open !== '[') continue
    const close = open === '{' ? '}' : ']'
    let depth = 0
    let inStr = false
    let esc = false
    for (let i = start; i < t.length; i++) {
      const ch = t[i]
      if (inStr) {
        if (esc) esc = false
        else if (ch === '\\') esc = true
        else if (ch === '"') inStr = false
        continue
      }
      if (ch === '"') inStr = true
      else if (ch === open) depth++
      else if (ch === close && --depth === 0) {
        try {
          return JSON.parse(t.slice(start, i + 1)) as T
        } catch {
          break
        }
      }
    }
  }
  throw new GeminiError('AI 返回的格式无法解析，请重试', 0)
}

export async function generateJSON<T>(o: Omit<GenerateOptions, 'json'>): Promise<T> {
  const text = await generate({ ...o, json: true, temperature: o.temperature ?? 0.4 })
  return extractJSON<T>(text)
}

export async function listModels(override?: Partial<GeminiSettings>): Promise<ModelInfo[]> {
  const c = { ...cfg(), ...override }
  requireKey(c)
  let res: Response
  try {
    res = await fetch(`${base(c)}/v1beta/models?pageSize=200`, { headers: { 'x-goog-api-key': c.apiKey.trim() } })
  } catch (e) {
    throw networkError(e)
  }
  if (!res.ok) throw await explain(res, c.model)
  const j = (await res.json()) as { models?: { name: string; displayName?: string; supportedGenerationMethods?: string[] }[] }
  return (j.models ?? [])
    .filter((m) => m.supportedGenerationMethods?.includes('generateContent'))
    .filter((m) => /gemini/i.test(m.name) && !/(embedding|aqa|imagen|veo|tts|image|live|native-audio|robotics|transcribe|translate|omni)/i.test(m.name))
    .map((m) => ({ id: m.name.replace(/^models\//, ''), name: m.displayName ?? m.name }))
    .sort((a, b) => versionOf(b.id) - versionOf(a.id) || a.id.localeCompare(b.id))
}

// ---------- text to speech ----------

/** Used when the TTS model cannot be detected. */
export const TTS_FALLBACK_MODEL = 'gemini-3.8-flash-lite-tts'

/** Newest TTS model, preferring the cheaper Flash-Lite one that is meant for read-aloud features. */
export function pickTtsModel(ids: string[]): string | null {
  const tts = ids.filter((id) => /-tts\b/.test(id))
  if (!tts.length) return null
  const score = (id: string) => versionOf(id) * 10 + (/flash-lite/.test(id) ? 3 : /flash/.test(id) ? 2 : 0) - (/preview/.test(id) ? 1 : 0)
  return [...tts].sort((a, b) => score(b) - score(a))[0]
}

let ttsModelCache: string | null = null

async function ttsModel(refresh = false): Promise<string> {
  if (ttsModelCache && !refresh) return ttsModelCache
  const c = cfg()
  try {
    const res = await fetch(`${base(c)}/v1beta/models?pageSize=200`, { headers: { 'x-goog-api-key': c.apiKey.trim() } })
    if (res.ok) {
      const j = (await res.json()) as { models?: { name: string }[] }
      ttsModelCache = pickTtsModel((j.models ?? []).map((m) => m.name.replace(/^models\//, ''))) ?? TTS_FALLBACK_MODEL
      return ttsModelCache
    }
  } catch {
    /* fall back below */
  }
  ttsModelCache = TTS_FALLBACK_MODEL
  return ttsModelCache
}

/** First audio payload in an Interactions or generateContent response. */
export function findAudio(json: unknown): { data: string; mimeType?: string } | null {
  let found: { data: string; mimeType?: string } | null = null
  const walk = (o: unknown) => {
    if (found || !o || typeof o !== 'object') return
    const r = o as Record<string, unknown>
    const mime = (typeof r.mimeType === 'string' ? r.mimeType : typeof r.mime_type === 'string' ? r.mime_type : undefined) as string | undefined
    if (typeof r.data === 'string' && (r.type === 'audio' || (mime && /audio/i.test(mime)))) {
      found = { data: r.data, mimeType: mime }
      return
    }
    for (const v of Object.values(r)) walk(v)
  }
  walk(json)
  return found
}

function b64ToBytes(b64: string): Uint8Array {
  const bin = atob(b64)
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}

export interface SpeechAudio {
  bytes: Uint8Array
  mimeType: string
  model: string
}

const TTS_STYLE = 'Clear, natural Castilian Spanish from Spain, at a calm pace for language learners'

/** Read Spanish text aloud with a Gemini TTS model (Interactions API, with a generateContent fallback). */
export async function synthesizeSpeech(text: string, voice: string, signal?: AbortSignal): Promise<SpeechAudio> {
  const c = cfg()
  requireKey(c)
  const headers = { 'Content-Type': 'application/json', 'x-goog-api-key': c.apiKey.trim() }
  let model = await ttsModel()
  const call = async (legacy: boolean) => {
    const url = legacy ? `${base(c)}/v1beta/${modelPath(model)}:generateContent` : `${base(c)}/v1beta/interactions`
    const payload = legacy
      ? {
          contents: [{ parts: [{ text: `Read in a clear Castilian Spanish accent: ${text}` }] }],
          generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } } },
        }
      : {
          model,
          input: [{ type: 'user_input', content: [{ type: 'text', text, annotations: [{ type: 'speech_metadata', style: TTS_STYLE }] }] }],
          response_format: { type: 'audio' },
          generation_config: { speech_config: [{ voice }] },
        }
    try {
      return await fetch(url, { method: 'POST', headers, body: JSON.stringify(payload), signal })
    } catch (e) {
      throw networkError(e)
    }
  }
  let res = await call(false)
  if (res.status === 404) {
    const next = await ttsModel(true)
    if (next !== model) {
      model = next
      res = await call(false)
    }
  }
  // relays or older models without the Interactions API
  if (res.status === 404 || res.status === 405) res = await call(true)
  if (res.status === 429) {
    await sleep(2500)
    res = await call(false)
  }
  if (!res.ok) throw await explain(res, model)
  const audio = findAudio(await res.json())
  if (!audio) throw new GeminiError('Gemini 没有返回音频', 0)
  return { bytes: b64ToBytes(audio.data), mimeType: audio.mimeType ?? 'audio/wav', model }
}
