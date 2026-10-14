import { useLiveQuery } from 'dexie-react-hooks'
import { ChevronLeft, Printer } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { paperSections, paperTotal } from '../../lib/paper/exercises'
import { db, type PaperRow } from '../../store/db'

const L = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

/** Stable shuffle (same paper → same printed order, so the answer key always matches). */
function seededOrder(n: number, seedText: string): number[] {
  let h = 2166136261
  for (const ch of seedText) h = Math.imul(h ^ ch.charCodeAt(0), 16777619)
  const rand = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return ((h ^= h >>> 16) >>> 0) / 4294967296
  }
  const a = Array.from({ length: n }, (_, i) => i)
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const isStandalone = () => (navigator as Navigator & { standalone?: boolean }).standalone === true || matchMedia('(display-mode: standalone)').matches

/** Paper-style print view (A4), with an optional answer key on its own page. */
export function PaperPrintPage() {
  const { id } = useParams()
  const nav = useNavigate()
  const row = useLiveQuery(() => db.papers.get(Number(id)), [id], null as PaperRow | null | undefined)
  const [withKey, setWithKey] = useState(true)
  const matchOrder = useMemo(() => (row ? seededOrder(row.questions.match.length, row.questions.match.map((m) => m.es).join('|')) : []), [row])

  if (row === undefined) return <Navigate to="/exam" replace />
  if (row === null) return null
  const q = row.questions
  const secs = paperSections(row)
  const total = paperTotal(row)
  const heading = (s: (typeof secs)[number]) => `${s.num}、${s.label}（每${s.id === 'match' ? '对' : '题'} ${s.per} 分，共 ${s.total} 分）`

  return (
    <div className="paper-print min-h-dvh">
      <div className="print-hide sticky top-0 z-10 border-b border-[#ddd] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[210mm] flex-wrap items-center gap-2 px-4 py-3">
          <button type="button" className="btn btn-plain btn-sm" onClick={() => nav(-1)}>
            <ChevronLeft size={18} /> 返回
          </button>
          <label className="flex items-center gap-1.5 text-sm font-bold">
            <input type="checkbox" checked={withKey} onChange={(e) => setWithKey(e.target.checked)} /> 附答案页
          </label>
          <span className="flex-1" />
          <button type="button" className="btn btn-primary btn-sm" onClick={() => window.print()}>
            <Printer size={16} /> 打印 / 存为 PDF
          </button>
        </div>
        {isStandalone() && <div className="mx-auto max-w-[210mm] px-4 pb-2 text-xs text-[#a15c00]">在主屏幕 App 里可能无法打印。打不开打印窗口时，请在 Safari / Chrome 浏览器里打开本网站再打印。</div>}
      </div>

      <article className="paper-sheet mx-auto max-w-[210mm] px-[14mm] py-[12mm]">
        <header className="mb-5 border-b-2 border-black pb-3 text-center">
          <h1 className="text-[20pt] font-black leading-tight">{row.title}</h1>
          {row.scope && <div className="mt-1 text-[10.5pt]">{row.scope}</div>}
          <div className="mt-3 flex justify-between text-[11pt]">
            <span>姓名 ________________</span>
            <span>日期 ____________</span>
            <span>
              得分 ______ / {total}
            </span>
          </div>
          {row.config.minutes > 0 && <div className="mt-1 text-[10pt]">考试时间：{row.config.minutes} 分钟</div>}
        </header>

        {secs.map((s) => (
          <section key={s.id} className="paper-section mb-5">
            <h2 className="mb-2 text-[12.5pt] font-black">{heading(s)}</h2>
            {s.id === 'match' && (
              <>
                <div className="mb-1.5 text-[10pt]">把左边的西语和右边的中文意思配对，在括号里填字母。</div>
                <div className="grid grid-cols-2 gap-x-8 text-[11pt]">
                  <ol className="flex flex-col gap-1.5">
                    {q.match.map((m, i) => (
                      <li key={i}>
                        （　）{i + 1}. <span className="es">{m.es}</span>
                      </li>
                    ))}
                  </ol>
                  <ol className="flex flex-col gap-1.5">
                    {matchOrder.map((mi, i) => (
                      <li key={i}>
                        {L[i]}. {q.match[mi].zh}
                      </li>
                    ))}
                  </ol>
                </div>
              </>
            )}
            {s.id === 'tf' && (
              <>
                <div className="mb-1.5 text-[10pt]">判断句子是否正确，正确写 ✓，错误写 ✗。</div>
                <ol className="flex flex-col gap-1.5 text-[11pt]">
                  {q.tf.map((t, i) => (
                    <li key={i}>
                      （　）{i + 1}. <span className="es">{t.sentence}</span>
                    </li>
                  ))}
                </ol>
              </>
            )}
            {s.id === 'choice' && (
              <ol className="flex flex-col gap-2 text-[11pt]">
                {q.choice.map((c, i) => (
                  <li key={i} className="avoid-break">
                    （　）{i + 1}. <span className={c.questionLang === 'es' ? 'es' : ''}>{c.question.replace('___', '______')}</span>
                    <div className="ml-10 flex flex-wrap gap-x-8">
                      {c.options.map((o, j) => (
                        <span key={j}>
                          {L[j]}. {o}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            )}
            {s.id === 'cloze' && (
              <ol className="flex flex-col gap-2 text-[11pt]">
                {q.cloze.map((c, i) => (
                  <li key={i} className="avoid-break">
                    {i + 1}. <span className="es">{c.sentence.replace('___', '______________')}</span>
                    {c.hintZh && <span className="text-[9.5pt]">（{c.hintZh}）</span>}
                  </li>
                ))}
              </ol>
            )}
            {s.id === 'listen' && (
              <>
                <div className="mb-1.5 text-[10pt]">请同伴朗读每题的西语句子（原文见答案页），选出正确的意思。</div>
                <ol className="flex flex-col gap-2 text-[11pt]">
                  {q.listen.map((l, i) => (
                    <li key={i} className="avoid-break">
                      （　）{i + 1}.
                      <div className="ml-10 flex flex-wrap gap-x-8">
                        {l.options.map((o, j) => (
                          <span key={j}>
                            {L[j]}. {o}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </section>
        ))}

        {withKey && (
          <section className="page-break mt-10 border-t-2 border-dashed border-black pt-6">
            <h1 className="mb-4 text-center text-[16pt] font-black">答案与解析 · {row.title}</h1>
            {secs.map((s) => (
              <div key={s.id} className="mb-4 text-[10.5pt]">
                <h2 className="mb-1 font-black">
                  {s.num}、{s.label}
                </h2>
                {s.id === 'match' && <div>{q.match.map((_, i) => `${i + 1}-${L[matchOrder.indexOf(i)]}`).join('　')}</div>}
                {s.id === 'tf' && (
                  <ol className="flex flex-col gap-0.5">
                    {q.tf.map((t, i) => (
                      <li key={i}>
                        {i + 1}. {t.correct ? '✓' : '✗'}
                        {t.fix && <span className="es"> → {t.fix}</span>} {t.explain}
                      </li>
                    ))}
                  </ol>
                )}
                {s.id === 'choice' && (
                  <ol className="flex flex-col gap-0.5">
                    {q.choice.map((c, i) => (
                      <li key={i}>
                        {i + 1}. {L[c.answer]} {c.explain}
                      </li>
                    ))}
                  </ol>
                )}
                {s.id === 'cloze' && (
                  <ol className="flex flex-col gap-0.5">
                    {q.cloze.map((c, i) => (
                      <li key={i}>
                        {i + 1}. <b className="es">{[c.answer, ...(c.alts ?? [])].join(' / ')}</b> {c.explain}
                      </li>
                    ))}
                  </ol>
                )}
                {s.id === 'listen' && (
                  <ol className="flex flex-col gap-0.5">
                    {q.listen.map((l, i) => (
                      <li key={i}>
                        {i + 1}. {L[l.answer]} · 原文：<span className="es">{l.es}</span>（{l.zh}）
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </section>
        )}
      </article>
    </div>
  )
}
