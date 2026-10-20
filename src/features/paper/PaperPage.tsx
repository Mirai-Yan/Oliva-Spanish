import { useLiveQuery } from 'dexie-react-hooks'
import { ChevronDown, Eye, EyeOff, History, Pencil, Play, Printer, Share2, Trash2, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { Empty, PageHeader, Section } from '../../components/PageHeader'
import { toast } from '../../components/Toast'
import { paperSections, paperToExercises, paperTotal } from '../../lib/paper/exercises'
import { paperFileName, paperFileText } from '../../lib/paper/share'
import type { PaperQuestions, SectionId } from '../../lib/paper/types'
import { db, type PaperRow } from '../../store/db'
import { useRun } from '../../store/run'
import { useSettings } from '../../store/settings'
import { BreakdownList } from '../exam/Breakdown'
import { regenerateSection } from './generate'
import { shareOrDownload } from './image'
import { PaperEditor } from './PaperEditor'

export function PaperPage() {
  const { id } = useParams()
  const paperId = Number(id)
  const nav = useNavigate()
  const start = useRun((s) => s.start)
  const hasAI = !!useSettings((s) => s.gemini.apiKey)
  const row = useLiveQuery(() => db.papers.get(paperId), [paperId], null as PaperRow | null | undefined)
  const attempts = useLiveQuery(() => db.exams.where('paperId').equals(paperId).reverse().sortBy('createdAt'), [paperId], [])
  const images = useLiveQuery(() => db.paperImages.where('paperId').equals(paperId).toArray(), [paperId], [])
  const [editing, setEditing] = useState<PaperQuestions | null>(null)
  const [showAnswers, setShowAnswers] = useState(false)
  const [busy, setBusy] = useState<SectionId | null>(null)
  const [openAttempt, setOpenAttempt] = useState<number | null>(null)
  const [showImages, setShowImages] = useState(false)
  const imageUrls = useMemo(() => (showImages ? (images ?? []).map((im) => URL.createObjectURL(im.blob)) : []), [images, showImages])
  useEffect(() => () => imageUrls.forEach((u) => URL.revokeObjectURL(u)), [imageUrls])

  if (row === undefined) return <Navigate to="/exam" replace />
  if (row === null) return null
  const paper = editing ? { ...row, questions: editing } : row
  const secs = paperSections(paper)
  const total = paperTotal(paper)
  const best = (attempts ?? []).reduce((m, a) => Math.max(m, a.points?.earned ?? -1), -1)

  const begin = () => {
    const { exercises, points } = paperToExercises(row, paperId)
    start({ kind: 'paper', title: row.title, exercises, points, paperId, timeLimit: row.config.minutes ? row.config.minutes * 60 : undefined, allowSkip: false, retryWrong: false })
    nav('/exam/run')
  }

  const share = async () => {
    const how = await shareOrDownload(new Blob([paperFileText(row)], { type: 'application/json' }), paperFileName(row), row.title)
    if (how === 'downloaded') toast('试卷文件已下载，发给朋友后，对方在「考试 → 导入试卷」里打开就能做同一份', 'ok', 8000)
  }

  const saveEdit = async () => {
    if (!editing) return
    await db.papers.update(paperId, { questions: editing, updatedAt: Date.now() })
    setEditing(null)
    toast('已保存修改', 'ok')
  }

  const regen = async (s: SectionId) => {
    if (!editing) return
    setBusy(s)
    try {
      const imgs = (images ?? []).map((im) => ({ blob: im.blob, label: im.label }))
      setEditing(await regenerateSection({ images: imgs, material: row.material }, row.config, s, editing))
    } catch (e) {
      toast(e instanceof Error ? e.message : String(e), 'warn')
    } finally {
      setBusy(null)
    }
  }

  const remove = async () => {
    if (!confirm(`删除试卷「${row.title}」？做题记录会保留。`)) return
    await db.paperImages.where('paperId').equals(paperId).delete()
    await db.papers.delete(paperId)
    nav('/exam', { replace: true })
  }

  return (
    <div className="mx-auto max-w-3xl pb-10">
      <PageHeader back="/exam" title={row.title} sub={row.scope || undefined} />

      <div className="card mb-6 p-4">
        <div className="flex flex-col gap-1.5">
          {secs.map((s) => (
            <div key={s.id} className="flex items-center justify-between text-sm">
              <span className="font-bold">
                {s.num}、{s.label}
              </span>
              <span className="text-ink-2">
                {s.n} {s.id === 'match' ? '对' : '题'} × {s.per} 分 = <b className="text-ink">{s.total}</b> 分
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between border-t-2 border-line pt-3 font-black">
          <span>总分 {total} 分</span>
          <span className="text-sm text-ink-2">{row.config.minutes ? `限时 ${row.config.minutes} 分钟` : '不限时'}{best >= 0 ? ` · 最好 ${best} 分` : ''}</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <button type="button" className="btn btn-primary col-span-2 sm:col-span-1" onClick={begin} disabled={!!editing}>
            <Play size={17} /> 开始答题
          </button>
          <Link to={`/exam/paper/${paperId}/print`} className="btn btn-ghost">
            <Printer size={16} /> 打印 / PDF
          </Link>
          <button type="button" className="btn btn-ghost" onClick={share}>
            <Share2 size={16} /> 分享
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => setEditing(editing ? null : row.questions)}>
            {editing ? <X size={16} /> : <Pencil size={16} />} {editing ? '取消编辑' : '编辑'}
          </button>
        </div>
      </div>

      <Section title={<span className="flex items-center gap-2"><History size={18} /> 做题记录</span>}>
        {!attempts?.length ? (
          <Empty>还没做过这份卷子</Empty>
        ) : (
          <div className="flex flex-col gap-2">
            {attempts.map((a) => (
              <div key={a.id} className="card">
                <button type="button" className="flex w-full items-center gap-3 p-3 text-left" onClick={() => setOpenAttempt(openAttempt === a.id ? null : a.id!)}>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black ${a.score >= 0.8 ? 'bg-ok-soft text-ok-strong' : a.score >= 0.6 ? 'bg-accent-soft text-accent-ink' : 'bg-bad-soft text-bad-strong'}`}>
                    {a.points?.earned ?? Math.round(a.score * 100)}
                  </span>
                  <span className="min-w-0 flex-1 text-sm text-ink-2">
                    {new Date(a.createdAt).toLocaleString('zh-CN')} · {a.points ? `${a.points.earned}/${a.points.total} 分` : ''} · 用时 {Math.round(a.seconds / 60)} 分钟
                  </span>
                  <ChevronDown size={18} className={`text-ink-3 transition ${openAttempt === a.id ? 'rotate-180' : ''}`} />
                </button>
                {openAttempt === a.id && (
                  <div className="px-3 pb-3">
                    <BreakdownList breakdown={a.breakdown} title="各部分得分" keepOrder />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section
        title="题目"
        right={
          <button type="button" className="chip" onClick={() => setShowAnswers((v) => !v)}>
            {showAnswers ? <EyeOff size={14} /> : <Eye size={14} />} {showAnswers ? '隐藏答案' : '显示答案'}
          </button>
        }
      >
        <PaperEditor
          paper={paper}
          onChange={(q) => setEditing(q)}
          showAnswers={showAnswers || !!editing}
          onRegenerate={editing && hasAI && (images?.length || row.material) ? regen : undefined}
          busy={busy}
        />
        {editing && (
          <div className="safe-bottom sticky bottom-20 z-10 mt-4 flex gap-2 lg:bottom-4">
            <button type="button" className="btn btn-ghost flex-1 bg-surface" onClick={() => setEditing(null)}>
              放弃修改
            </button>
            <button type="button" className="btn btn-primary flex-[2]" onClick={saveEdit}>
              保存修改
            </button>
          </div>
        )}
      </Section>

      {(images?.length ?? 0) > 0 && (
        <Section title="出卷用的图片">
          <button type="button" className="chip mb-3" onClick={() => setShowImages((v) => !v)}>
            {showImages ? '收起' : `查看 ${images!.length} 张`}
          </button>
          {showImages && (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {imageUrls.map((u, i) => (
                <figure key={u} className="card overflow-hidden">
                  <img src={u} alt={images![i].label} className="w-full" />
                  <figcaption className="p-2 text-xs text-ink-3">{images![i].label}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </Section>
      )}

      <button type="button" className="btn btn-plain btn-sm text-bad" onClick={remove}>
        <Trash2 size={15} /> 删除这份试卷
      </button>
    </div>
  )
}
