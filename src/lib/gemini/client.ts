import { useSettings, type GeminiSettings } from '../../store/settings'

export interface GMessage {
  role: 'user' | 'model'
  text: string
  /** optional inline media (audio for pronunciation feedback) */
  inline?: { mimeType: string; data: string }
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
}

export class GeminiError extends Error {
  status: number
  constructor(message: string, status = 0) {
    super(message)
    this.status = status
  }
}

function cfg(): GeminiSettings {
  return useSettings.getState().gemini
}

function base(c: GeminiSettings) {
  return (c.baseUrl || 'https://generativelanguage.googleapis.com').replace(/\/+$/, '')
}

function modelPath(model: string) {
  const m = model.trim() || 'gemini-2.5-flash'
  return m.startsWith('models/') ? m : `models/${m}`
}

function body(o: GenerateOptions) {
  const contents = o.messages.map((m) => ({
    role: m.role,
    parts: [...(m.inline ? [{ inlineData: m.inline }] : []), { text: m.text }],
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

async function explain(res: Response): Promise<GeminiError> {
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
  else if (s === 404) msg = `找不到模型「${cfg().model}」，请在设置里重新选择模型`
  else if (s === 429) msg = '请求太频繁或免费额度已用完，请稍后再试'
  else if (s >= 500) msg = 'Gemini 服务暂时不可用，请稍后再试'
  return new GeminiError(msg, s)
}

function networkError(e: unknown): GeminiError {
  if (e instanceof DOMException && e.name === 'AbortError') return new GeminiError('已取消', -1)
  return new GeminiError('无法连接 Gemini。若在中国大陆，需要开启代理，或在「设置 → AI」里填写可用的中转地址。', 0)
}

function requireKey(c: GeminiSettings) {
  if (!c.apiKey.trim()) throw new GeminiError('还没有设置 Gemini API Key。请到「设置 → AI 助手」填写。', -2)
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
  const c = cfg()
  requireKey(c)
  let res: Response
  try {
    res = await fetch(`${base(c)}/v1beta/${modelPath(c.model)}:streamGenerateContent?alt=sse`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': c.apiKey.trim() },
      body: body(o),
      signal: o.signal,
    })
  } catch (e) {
    throw networkError(e)
  }
  if (!res.ok || !res.body) throw await explain(res)
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

export async function generate(o: GenerateOptions): Promise<string> {
  const c = cfg()
  requireKey(c)
  let res: Response
  try {
    res = await fetch(`${base(c)}/v1beta/${modelPath(c.model)}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': c.apiKey.trim() },
      body: body(o),
      signal: o.signal,
    })
  } catch (e) {
    throw networkError(e)
  }
  if (!res.ok) throw await explain(res)
  const j = (await res.json()) as Chunk
  if (j.promptFeedback?.blockReason) throw new GeminiError('内容被安全策略拦截，换个说法试试', 400)
  return textOf(j)
}

export async function generateJSON<T>(o: Omit<GenerateOptions, 'json'>): Promise<T> {
  const text = await generate({ ...o, json: true, temperature: o.temperature ?? 0.4 })
  try {
    return JSON.parse(text) as T
  } catch {
    const m = text.match(/\{[\s\S]*\}|\[[\s\S]*\]/)
    if (m) return JSON.parse(m[0]) as T
    throw new GeminiError('AI 返回的格式无法解析，请重试', 0)
  }
}

export async function listModels(override?: Partial<GeminiSettings>): Promise<{ id: string; name: string }[]> {
  const c = { ...cfg(), ...override }
  requireKey(c)
  let res: Response
  try {
    res = await fetch(`${base(c)}/v1beta/models?pageSize=200`, { headers: { 'x-goog-api-key': c.apiKey.trim() } })
  } catch (e) {
    throw networkError(e)
  }
  if (!res.ok) throw await explain(res)
  const j = (await res.json()) as { models?: { name: string; displayName?: string; supportedGenerationMethods?: string[] }[] }
  return (j.models ?? [])
    .filter((m) => m.supportedGenerationMethods?.includes('generateContent'))
    .filter((m) => /gemini/i.test(m.name) && !/(embedding|aqa|imagen|veo|tts|image|live|native-audio)/i.test(m.name))
    .map((m) => ({ id: m.name.replace(/^models\//, ''), name: m.displayName ?? m.name }))
    .sort((a, b) => b.id.localeCompare(a.id, undefined, { numeric: true }))
}
