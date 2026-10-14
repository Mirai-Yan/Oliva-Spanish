import { useLiveQuery } from 'dexie-react-hooks'
import { Camera, ChevronRight, FileUp } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Section } from '../../components/PageHeader'
import { Sheet } from '../../components/Sheet'
import { paperTotal } from '../../lib/paper/exercises'
import { parsePaperFile } from '../../lib/paper/share'
import { db } from '../../store/db'

/** "My papers" block on the exam page: photo papers, imports, and their best scores. */
export function MyPapers() {
  const nav = useNavigate()
  const papers = useLiveQuery(() => db.papers.orderBy('createdAt').reverse().toArray(), [], [])
  const scores = useLiveQuery(() => db.exams.where('kind').equals('paper').toArray(), [], [])
  const [importing, setImporting] = useState(false)
  const [text, setText] = useState('')
  const [err, setErr] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const best = (id: number) => (scores ?? []).filter((s) => s.paperId === id).reduce((m, s) => Math.max(m, s.points?.earned ?? -1), -1)

  const doImport = async (raw: string) => {
    setErr('')
    try {
      const paper = parsePaperFile(raw)
      const now = Date.now()
      const id = await db.papers.add({ ...paper, source: 'import', createdAt: now, updatedAt: now })
      setImporting(false)
      setText('')
      nav(`/exam/paper/${id}`)
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e))
    }
  }

  return (
    <Section
      title={<span className="flex items-center gap-2"><Camera size={18} /> 我的试卷</span>}
      right={
        <button type="button" className="btn btn-plain btn-sm" onClick={() => setImporting(true)}>
          <FileUp size={15} /> 导入试卷
        </button>
      }
    >
      <Link to="/exam/photo" className="card mb-3 flex items-center gap-3 bg-primary p-4 text-white !border-[var(--primary-strong)] shadow-[0_4px_0_var(--primary-strong)]">
        <Camera size={30} />
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-black">拍照出卷</span>
          <span className="block text-sm opacity-90">拍课本、框范围、设分值，AI 出一份专属试卷</span>
        </span>
        <ChevronRight />
      </Link>
      {(papers?.length ?? 0) > 0 && (
        <div className="flex flex-col gap-2">
          {papers!.map((p) => {
            const b = best(p.id!)
            const n = Object.values(p.questions).reduce((a, x) => a + x.length, 0)
            return (
              <Link key={p.id} to={`/exam/paper/${p.id}`} className="card flex items-center gap-3 p-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface-2 text-xl">{p.source === 'import' ? '📨' : '📷'}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-bold">{p.title}</span>
                  <span className="block text-xs text-ink-3">
                    {n} 题 · {paperTotal(p)} 分{b >= 0 ? ` · 最好 ${b} 分` : ' · 未做过'} · {new Date(p.createdAt).toLocaleDateString('zh-CN')}
                  </span>
                </span>
                <ChevronRight size={18} className="text-ink-3" />
              </Link>
            )
          })}
        </div>
      )}

      <Sheet open={importing} onClose={() => setImporting(false)} title="导入朋友分享的试卷">
        <p className="mb-3 text-sm text-ink-2">选择朋友发来的试卷文件（.json），或者把文件内容粘贴到下面。导入后你们做的是同一份卷子。</p>
        <button type="button" className="btn btn-ghost w-full" onClick={() => fileRef.current?.click()}>
          <FileUp size={16} /> 选择试卷文件
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json,text/plain"
          hidden
          onChange={async (e) => {
            const f = e.target.files?.[0]
            e.target.value = ''
            if (f) doImport(await f.text())
          }}
        />
        <textarea className="input mt-3 min-h-[110px] font-mono text-xs" placeholder="或者粘贴试卷文件的内容" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="button" className="btn btn-primary mt-2 w-full" disabled={!text.trim()} onClick={() => doImport(text)}>
          导入
        </button>
        {err && <div className="mt-3 rounded-xl bg-bad-soft px-3 py-2 text-sm font-bold text-bad-strong">{err}</div>}
      </Sheet>
    </Section>
  )
}
