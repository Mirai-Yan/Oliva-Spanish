import { Check, Pencil, RefreshCw, Trash2, Volume2 } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { speak } from '../../lib/speech/tts'
import { CN_NUM } from '../../lib/paper/exercises'
import { SECTIONS, type ChoiceItem, type ClozeItem, type ListenItem, type MatchItem, type Paper, type PaperQuestions, type SectionId, type TfItem } from '../../lib/paper/types'

const L = 'ABC'

function Field({ label, value, onChange, es = false }: { label: string; value: string; onChange: (v: string) => void; es?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold text-ink-3">{label}</span>
      <input className={`input !py-2 text-base ${es ? 'es' : ''}`} value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  )
}

function OptionsField({ options, answer, onChange }: { options: string[]; answer: number; onChange: (o: { options: string[]; answer: number }) => void }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-bold text-ink-3">选项（点圆圈设为正确答案）</span>
      {options.map((o, i) => (
        <div key={i} className="flex items-center gap-2">
          <button
            type="button"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-black ${i === answer ? 'border-ok bg-ok text-white' : 'border-line'}`}
            onClick={() => onChange({ options, answer: i })}
            aria-label={`设 ${L[i]} 为正确答案`}
          >
            {L[i]}
          </button>
          <input className="input !py-2 text-base" value={o} onChange={(e) => onChange({ options: options.map((x, j) => (j === i ? e.target.value : x)), answer })} />
        </div>
      ))}
    </div>
  )
}

function Opts({ options, answer, show }: { options: string[]; answer: number; show: boolean }) {
  return (
    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
      {options.map((o, i) => (
        <span key={i} className={show && i === answer ? 'font-black text-ok-strong' : 'text-ink-2'}>
          {L[i]}. {o}
        </span>
      ))}
    </div>
  )
}

/** Paper preview with per-question edit / delete and optional per-section regeneration. */
export function PaperEditor({
  paper,
  onChange,
  showAnswers,
  onRegenerate,
  busy,
}: {
  paper: Paper
  onChange: (q: PaperQuestions) => void
  showAnswers: boolean
  onRegenerate?: (s: SectionId) => void
  busy?: SectionId | null
}) {
  const [editing, setEditing] = useState<string | null>(null)
  const q = paper.questions
  const update = <K extends SectionId>(sec: K, i: number, patch: Partial<PaperQuestions[K][number]>) =>
    onChange({ ...q, [sec]: q[sec].map((x, j) => (j === i ? { ...x, ...patch } : x)) })
  const remove = (sec: SectionId, i: number) => onChange({ ...q, [sec]: q[sec].filter((_, j) => j !== i) })

  const sections = SECTIONS.filter((s) => q[s.id].length > 0 || paper.config.sections[s.id].count > 0)
  // numerals follow the paper: only sections that have questions get one
  const numbered = SECTIONS.filter((s) => q[s.id].length > 0).map((s) => s.id)

  return (
    <div className="flex flex-col gap-6">
      {sections.map((s) => {
        const per = paper.config.sections[s.id].points
        const items = q[s.id] as unknown[]
        return (
          <section key={s.id}>
            <div className="mb-2 flex items-center gap-2">
              <h3 className="flex-1 font-black">
                {numbered.includes(s.id) ? `${CN_NUM[numbered.indexOf(s.id)]}、` : ''}
                {s.label}
                <span className="ml-2 text-sm font-bold text-ink-3">
                  {items.length} {s.unit} × {per} 分 = {items.length * per} 分
                </span>
              </h3>
              {onRegenerate && (
                <button type="button" className="chip" disabled={!!busy} onClick={() => onRegenerate(s.id)}>
                  <RefreshCw size={14} className={busy === s.id ? 'animate-spin' : ''} /> {busy === s.id ? '生成中…' : '重新生成'}
                </button>
              )}
            </div>
            {!items.length && <div className="rounded-2xl border-2 border-dashed border-line p-4 text-sm text-ink-3">这一部分没有题目</div>}
            <ol className="flex flex-col gap-2">
              {items.map((it, i) => {
                const id = `${s.id}:${i}`
                const open = editing === id
                let view: ReactNode = null
                let form: ReactNode = null
                if (s.id === 'match') {
                  const m = it as MatchItem
                  view = (
                    <div>
                      <span className="es font-bold">{m.es}</span> <span className="text-ink-3">—</span> {m.zh}
                    </div>
                  )
                  form = (
                    <div className="grid gap-2 sm:grid-cols-2">
                      <Field es label="西语" value={m.es} onChange={(v) => update('match', i, { es: v })} />
                      <Field label="中文" value={m.zh} onChange={(v) => update('match', i, { zh: v })} />
                    </div>
                  )
                } else if (s.id === 'tf') {
                  const t = it as TfItem
                  view = (
                    <div>
                      <div className="es font-semibold">{t.sentence}</div>
                      {showAnswers && (
                        <div className="mt-1 text-sm text-ink-2">
                          <b className={t.correct ? 'text-ok-strong' : 'text-bad-strong'}>{t.correct ? '✓ 正确' : '✗ 错误'}</b>
                          {t.fix && <span className="es"> → {t.fix}</span>} {t.explain}
                        </div>
                      )}
                    </div>
                  )
                  form = (
                    <div className="flex flex-col gap-2">
                      <Field es label="句子" value={t.sentence} onChange={(v) => update('tf', i, { sentence: v })} />
                      <div className="flex gap-2">
                        {[true, false].map((v) => (
                          <button key={String(v)} type="button" className={`chip ${t.correct === v ? 'chip-on' : ''}`} onClick={() => update('tf', i, { correct: v })}>
                            {v ? '这句是正确的' : '这句有错误'}
                          </button>
                        ))}
                      </div>
                      {!t.correct && <Field es label="正确写法" value={t.fix ?? ''} onChange={(v) => update('tf', i, { fix: v })} />}
                      <Field label="解析" value={t.explain} onChange={(v) => update('tf', i, { explain: v })} />
                    </div>
                  )
                } else if (s.id === 'choice') {
                  const c = it as ChoiceItem
                  view = (
                    <div>
                      <div className={`font-semibold ${c.questionLang === 'es' ? 'es' : ''}`}>{c.question}</div>
                      <Opts options={c.options} answer={c.answer} show={showAnswers} />
                      {showAnswers && c.explain && <div className="mt-1 text-sm text-ink-2">{c.explain}</div>}
                    </div>
                  )
                  form = (
                    <div className="flex flex-col gap-2">
                      <Field label="题干" value={c.question} onChange={(v) => update('choice', i, { question: v })} />
                      <OptionsField options={c.options} answer={c.answer} onChange={(o) => update('choice', i, o)} />
                      <Field label="解析" value={c.explain ?? ''} onChange={(v) => update('choice', i, { explain: v })} />
                    </div>
                  )
                } else if (s.id === 'cloze') {
                  const c = it as ClozeItem
                  const bad = c.sentence.split('___').length !== 2
                  view = (
                    <div>
                      <div className="es font-semibold">{c.sentence}</div>
                      {c.hintZh && <div className="text-sm text-ink-3">{c.hintZh}</div>}
                      {showAnswers && (
                        <div className="mt-1 text-sm">
                          答案：<b className="es text-ok-strong">{[c.answer, ...(c.alts ?? [])].join(' / ')}</b> {c.explain && <span className="text-ink-2">{c.explain}</span>}
                        </div>
                      )}
                    </div>
                  )
                  form = (
                    <div className="flex flex-col gap-2">
                      <Field es label="句子（用 ___ 表示空格，只能有一个）" value={c.sentence} onChange={(v) => update('cloze', i, { sentence: v })} />
                      {bad && <div className="text-sm font-bold text-bad">句子里要有且只有一个 ___</div>}
                      <div className="grid gap-2 sm:grid-cols-2">
                        <Field es label="答案" value={c.answer} onChange={(v) => update('cloze', i, { answer: v })} />
                        <Field es label="其它正确写法（逗号分隔）" value={(c.alts ?? []).join(', ')} onChange={(v) => update('cloze', i, { alts: v.split(/[,，]/).map((x) => x.trim()).filter(Boolean) })} />
                      </div>
                      <Field label="中文意思" value={c.hintZh ?? ''} onChange={(v) => update('cloze', i, { hintZh: v })} />
                    </div>
                  )
                } else {
                  const l = it as ListenItem
                  view = (
                    <div>
                      <button type="button" className="chip" onClick={() => speak(l.es)}>
                        <Volume2 size={14} /> 播放
                      </button>
                      {showAnswers && <span className="es ml-2 font-semibold">{l.es}</span>}
                      <Opts options={l.options} answer={l.answer} show={showAnswers} />
                    </div>
                  )
                  form = (
                    <div className="flex flex-col gap-2">
                      <Field es label="朗读的句子" value={l.es} onChange={(v) => update('listen', i, { es: v })} />
                      <Field label="中文意思" value={l.zh} onChange={(v) => update('listen', i, { zh: v })} />
                      <OptionsField options={l.options} answer={l.answer} onChange={(o) => update('listen', i, o)} />
                    </div>
                  )
                }
                return (
                  <li key={i} className="card p-3">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 w-6 shrink-0 text-sm font-black text-ink-3">{i + 1}.</span>
                      <div className="min-w-0 flex-1">{open ? form : view}</div>
                      <button type="button" className="rounded-lg p-1.5 text-ink-3 hover:bg-surface-2" onClick={() => setEditing(open ? null : id)} aria-label={open ? '完成编辑' : '编辑'}>
                        {open ? <Check size={17} /> : <Pencil size={16} />}
                      </button>
                      <button type="button" className="rounded-lg p-1.5 text-ink-3 hover:bg-surface-2" onClick={() => (setEditing(null), remove(s.id, i))} aria-label="删除这题">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>
        )
      })}
    </div>
  )
}
