import { ExternalLink, Sparkles } from 'lucide-react'
import { useRef, useState } from 'react'
import { Markdown } from '../../../components/Markdown'
import { generateJSON } from '../../../lib/gemini/client'
import { WRITING_SCHEMA, writingPrompt } from '../../../lib/gemini/prompts'
import { askInGemini } from '../../../lib/gemini/handoff'
import { useSettings } from '../../../store/settings'
import type { ExProps } from './types'
import { AccentBar, insertAt } from './AccentBar'

export interface WritingResult {
  score: number
  cefr: string
  summary: string
  corrections: { original: string; corrected: string; explanation: string }[]
  improved: string
}

export function WritingFeedback({ r }: { r: WritingResult }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="text-4xl font-black text-primary">{r.score}</div>
        <div>
          <div className="font-black">分 · 约 {r.cefr}</div>
          <div className="text-sm text-ink-2">{r.summary}</div>
        </div>
      </div>
      {r.corrections.length > 0 && (
        <div className="flex flex-col gap-2">
          {r.corrections.map((c, i) => (
            <div key={i} className="rounded-2xl bg-surface-2 p-3 text-[15px]">
              <div className="es">
                <span className="text-bad line-through">{c.original}</span> → <span className="font-bold text-ok-strong">{c.corrected}</span>
              </div>
              <div className="text-sm text-ink-2">{c.explanation}</div>
            </div>
          ))}
        </div>
      )}
      <div className="rounded-2xl border-2 border-line p-3">
        <div className="mb-1 text-sm font-black text-ink-3">修改后的范文</div>
        <Markdown className="es">{r.improved}</Markdown>
      </div>
    </div>
  )
}

export function Write({ ex, locked, finish }: ExProps<'write'>) {
  const [text, setText] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const [result, setResult] = useState<WritingResult | null>(null)
  const ref = useRef<HTMLTextAreaElement>(null)
  const hasAI = !!useSettings((s) => s.gemini.apiKey)
  const count = text.trim() ? text.trim().split(/\s+/).length : 0
  const [min, max] = ex.prompt.words

  const grade = async () => {
    setBusy(true)
    setErr('')
    try {
      const r = await generateJSON<WritingResult>({
        messages: [{ role: 'user', text: writingPrompt(ex.prompt.prompt, text, ex.level) }],
        schema: WRITING_SCHEMA,
      })
      setResult(r)
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl bg-primary-soft p-4">
        <div className="font-bold text-primary-ink">{ex.prompt.prompt}</div>
        <div className="mt-1 text-sm text-ink-2">
          建议 {min}–{max} 个词
        </div>
        {ex.prompt.hints?.length ? (
          <ul className="mt-2 list-disc pl-5 text-sm text-ink-2">
            {ex.prompt.hints.map((h, i) => (
              <li key={i} className="es">
                {h}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {!result && (
        <>
          <textarea ref={ref} value={text} disabled={locked || busy} onChange={(e) => setText(e.target.value)} rows={7} lang="es" spellCheck={false} placeholder="Escribe aquí…" className="input es resize-y text-lg" />
          <div className="flex items-center justify-between">
            <AccentBar onInsert={(c) => insertAt(ref.current, text, c, setText)} />
            <span className={`text-sm font-bold ${count >= min ? 'text-ok' : 'text-ink-3'}`}>{count} 词</span>
          </div>
          {hasAI ? (
            <button type="button" className="btn btn-accent" disabled={busy || count < Math.min(3, min)} onClick={grade}>
              <Sparkles size={18} /> {busy ? 'AI 正在批改…' : '提交给 AI 批改'}
            </button>
          ) : (
            <>
              <button type="button" className="btn btn-accent" disabled={count < Math.min(3, min)} onClick={() => askInGemini(writingPrompt(ex.prompt.prompt, text, ex.level), { persona: false })}>
                <ExternalLink size={18} /> 复制到 Gemini 网页版批改
              </button>
              <div className="text-center text-xs text-ink-3">没有 API Key 时，作文和批改要求会复制到 Gemini 网页版，用你的会员批改；批改完回来点「跳过」继续。</div>
            </>
          )}
          {err && <div className="rounded-2xl bg-bad-soft p-3 text-sm font-semibold text-bad-strong">{err}</div>}
          {!locked && (
            <button type="button" className="text-sm font-bold text-ink-3 underline" onClick={() => finish({ correct: true, user: text, expected: '', skipped: true })}>
              跳过这道写作题
            </button>
          )}
        </>
      )}
      {result && (
        <>
          <WritingFeedback r={result} />
          {!locked && (
            <button type="button" className="btn btn-primary" onClick={() => finish({ correct: result.score >= 60, user: text, expected: result.improved })}>
              继续
            </button>
          )}
        </>
      )}
    </div>
  )
}
