import { Camera, ClipboardPaste, Copy, Download, Eye, EyeOff, History, ImagePlus, Loader2, RotateCcw, Save, Sparkles, Trash2, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { toast } from '../../components/Toast'
import { extractJSON } from '../../lib/gemini/client'
import { askInGemini } from '../../lib/gemini/handoff'
import { configTotal, paperTotal } from '../../lib/paper/exercises'
import { materialSize, materialToText, mergeMaterial, type Material } from '../../lib/paper/material'
import { extractAll, generateSections, tagSources } from '../../lib/paper/pipeline'
import { sanitizePaper, type SanitizeResult } from '../../lib/paper/sanitize'
import { DEFAULT_CONFIG, SECTION_LABEL, SECTIONS, type PaperConfig, type PaperQuestions, type SectionId } from '../../lib/paper/types'
import type { Level } from '../../content/types'
import { db } from '../../store/db'
import { useSettings } from '../../store/settings'
import { useLearnerLevel } from '../path/useLearnerLevel'
import { ConfigEditor } from './ConfigEditor'
import { regionsKey, useDraftPhotos } from './draft'
import { DIRECT_MAX, generatePaper, geminiDeps, handoffPrompt, regenerateSection, type PaperImage } from './generate'
import { cropAll, cropsOf, shareOrDownload, stitch, viewCopy } from './image'
import { PaperEditor } from './PaperEditor'
import { PhotoGrid, RegionSheet } from './PhotoGrid'

const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1']
/** regions per paper with an API key (read in batches); the Gemini web app path stays at DIRECT_MAX */
const MAX_REGIONS = 100
const CONFIG_KEY = 'oliva-paper-config'

function loadConfig(level: string): PaperConfig {
  try {
    const saved = JSON.parse(localStorage.getItem(CONFIG_KEY) ?? 'null') as PaperConfig | null
    if (saved?.sections) return { ...DEFAULT_CONFIG, ...saved, sections: { ...DEFAULT_CONFIG.sections, ...saved.sections }, note: saved.note ?? '' }
  } catch {
    /* ignore */
  }
  return { ...DEFAULT_CONFIG, level: (LEVELS.includes(level as Level) ? level : 'A1') as Level }
}

const STEPS = ['照片与范围', '题型与分值', '生成试卷', '预览修改']

type Gen = {
  phase: 'direct' | 'prep' | 'extract' | 'generate' | 'save'
  started: number
  label?: string
  done?: number
  total?: number
  waiting?: number
  section?: SectionId
  info?: { vocab: number; grammar: number; sentences: number }
}

const errText = (e: unknown) => (e instanceof Error ? e.message : String(e))

export function PhotoPaperPage() {
  const nav = useNavigate()
  const learner = useLearnerLevel()
  const hasAI = !!useSettings((s) => s.gemini.apiKey)
  const d = useDraftPhotos()
  const photos = d.photos
  const [step, setStep] = useState(0)
  const [config, setConfig] = useState<PaperConfig>(() => loadConfig(learner))
  const [crops, setCrops] = useState<PaperImage[]>([])
  const [material, setMaterial] = useState<Material | null>(null)
  const [gen, setGen] = useState<Gen | null>(null)
  const [partial, setPartial] = useState<{ labels: string[]; total: number; reason: string } | null>(null)
  const [error, setError] = useState('')
  const [draft, setDraft] = useState<SanitizeResult | null>(null)
  const [paste, setPaste] = useState('')
  const [showAnswers, setShowAnswers] = useState(true)
  const [busySection, setBusySection] = useState<SectionId | null>(null)
  const [sheetIdx, setSheetIdx] = useState<number | null>(null)
  const [, tick] = useState(0)
  const abort = useRef<AbortController | null>(null)
  const camRef = useRef<HTMLInputElement>(null)
  const albumRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    try {
      localStorage.setItem(CONFIG_KEY, JSON.stringify(config))
    } catch {
      /* ignore */
    }
  }, [config])

  // elapsed-time display while working
  useEffect(() => {
    if (!gen) return
    const t = setInterval(() => tick((n) => n + 1), 1000)
    return () => clearInterval(t)
  }, [gen])

  const regions = photos.reduce((a, p) => a + Math.max(1, p.regions.length), 0)
  const cachedRegions = photos.reduce((a, p) => a + (p.materialKey === regionsKey(p.regions) && p.material ? p.material.length : 0), 0)
  const totalQuestions = SECTIONS.reduce((a, s) => a + config.sections[s.id].count, 0)
  const big = regions > DIRECT_MAX

  const addFiles = (files: FileList | null) => {
    if (!files?.length) return
    const room = MAX_REGIONS - photos.length
    const list = [...files].slice(0, Math.max(0, room))
    if (list.length < files.length) toast(`一次最多 ${MAX_REGIONS} 张照片，多出来的 ${files.length - list.length} 张没有加入`, 'warn')
    if (list.length) d.add(list, (m) => toast(m, 'warn'))
  }

  const runAI = async (skipFailed = false) => {
    setError('')
    setPartial(null)
    const ctl = new AbortController()
    abort.current = ctl
    const started = Date.now()
    try {
      if (!big) {
        // a handful of regions: one request with the images themselves
        setGen({ phase: 'direct', started, label: '正在准备图片…' })
        const images = photos.length ? await cropAll(photos) : []
        setCrops(images)
        setMaterial(null)
        const r = await generatePaper(images, config, ctl.signal, (label) => setGen((g) => (g ? { ...g, label } : g)))
        setDraft(r)
        setStep(3)
        return
      }

      // 1) crop every region
      setGen({ phase: 'prep', started, done: 0, total: photos.length })
      const items: (PaperImage & { pi: number; ri: number })[] = []
      for (const [pi, p] of photos.entries()) {
        if (ctl.signal.aborted) return
        ;(await cropsOf(p, pi)).forEach((c, ri) => items.push({ ...c, pi, ri }))
        setGen((g) => (g ? { ...g, done: pi + 1 } : g))
      }
      setCrops(items)

      // 2) read them in batches, reusing what earlier attempts already read
      const cached = items.map((it) => {
        const p = photos[it.pi]
        return p.materialKey === regionsKey(p.regions) ? p.material?.[it.ri] : undefined
      })
      const deps = geminiDeps(config, () => '')
      const ex = await extractAll(items, deps, {
        cached,
        signal: ctl.signal,
        onProgress: (pr) => setGen((g) => (g ? { ...g, phase: 'extract', done: pr.done, total: pr.total, waiting: pr.waiting } : g)),
      })
      if (ctl.signal.aborted) return
      photos.forEach((p, pi) => {
        const mats = items.flatMap((it, k) => (it.pi === pi ? [ex.perImage[k]] : []))
        if (mats.length && mats.every(Boolean)) d.setMaterial(p.id, mats as Material[], regionsKey(p.regions))
      })
      if (ex.failed.length && !skipFailed) {
        setPartial({ labels: ex.failed.map((k) => items[k].label), total: items.length, reason: errText(ex.lastError) })
        return
      }
      const merged = mergeMaterial(tagSources(ex.perImage))
      const size = materialSize(merged)
      if (!size.vocab && !size.grammar && !size.sentences) throw new Error('没有从照片里读出可以出题的内容，请检查照片是否清晰')
      setMaterial(merged)

      // 3) one request per question type, from the merged text material
      const text = materialToText(merged)
      setGen((g) => (g ? { ...g, phase: 'generate', done: 0, total: 1, waiting: undefined, info: size } : g))
      const r = await generateSections(config, geminiDeps(config, () => text), {
        signal: ctl.signal,
        onProgress: (pr) => setGen((g) => (g ? { ...g, phase: 'generate', done: pr.done, total: pr.total, section: pr.section, waiting: pr.waiting } : g)),
      })
      if (ctl.signal.aborted) return
      setDraft(r)
      setStep(3)
    } catch (e) {
      if (!ctl.signal.aborted) setError(errText(e))
    } finally {
      setGen(null)
      abort.current = null
    }
  }

  const saveImage = async () => {
    if (!photos.length || big) return
    const c = crops.length ? crops : await cropAll(photos)
    setCrops(c)
    const blob = await stitch(c.map((x) => x.blob))
    const how = await shareOrDownload(blob, 'oliva-出卷图片.jpg', '出卷图片')
    if (how === 'downloaded') toast('图片已保存，等会儿在 Gemini 里上传它', 'ok')
  }

  const readPaste = () => {
    setError('')
    try {
      const r = sanitizePaper(extractJSON(paste), config)
      if (!Object.values(r.paper.questions).some((a) => a.length)) throw new Error('回复里没有找到题目')
      setMaterial(null)
      setDraft(r)
      setStep(3)
    } catch (e) {
      setError(errText(e))
    }
  }

  const regen = async (s: SectionId) => {
    if (!draft) return
    setBusySection(s)
    try {
      const q = await regenerateSection({ images: crops, material: material ?? undefined }, config, s, draft.paper.questions)
      setDraft({ ...draft, paper: { ...draft.paper, questions: q } })
    } catch (e) {
      toast(errText(e), 'warn')
    } finally {
      setBusySection(null)
    }
  }

  const save = async () => {
    if (!draft) return
    const now = Date.now()
    setGen({ phase: 'save', started: now, done: 0, total: crops.length })
    try {
      const id = (await db.papers.add({ ...draft.paper, config, material: material ?? undefined, source: crops.length || !paste ? 'photo' : 'paste', createdAt: now, updatedAt: now })) as number
      const rows = []
      for (const [k, c] of crops.entries()) {
        // many photos: keep lighter copies for the paper's gallery
        rows.push({ paperId: id, blob: crops.length > DIRECT_MAX ? await viewCopy(c.blob) : c.blob, label: c.label, createdAt: now })
        setGen((g) => (g ? { ...g, done: k + 1 } : g))
      }
      if (rows.length) await db.paperImages.bulkAdd(rows)
      await d.clear()
      setConfig((c) => ({ ...c, note: '' }))
      toast('试卷已保存', 'ok')
      nav(`/exam/paper/${id}`, { replace: true })
    } catch (e) {
      toast(`保存失败：${errText(e)}`, 'warn')
    } finally {
      setGen(null)
    }
  }

  const setQuestions = (q: PaperQuestions) => draft && setDraft({ ...draft, paper: { ...draft.paper, questions: q } })
  const pct = (g: Gen) => (g.total ? Math.round(((g.done ?? 0) / g.total) * 100) : 0)

  return (
    <div className="mx-auto max-w-3xl pb-10">
      <PageHeader back="/exam" title="拍照出卷" sub="拍下课本或讲义，框出要考的范围，AI 按你设定的题型和分值出一份卷子" />

      <ol className="mb-6 grid grid-cols-4 gap-1.5">
        {STEPS.map((s, i) => (
          <li key={s}>
            <button
              type="button"
              disabled={i > step || !!gen}
              onClick={() => setStep(i)}
              className={`w-full rounded-xl px-1 py-2 text-center text-xs font-black sm:text-sm ${i === step ? 'bg-primary text-white' : i < step ? 'bg-primary-soft text-primary-ink' : 'bg-surface-2 text-ink-3'}`}
            >
              {i + 1}. {s}
            </button>
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div className="flex flex-col gap-4">
          {d.restored > 0 && (
            <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-primary-soft px-4 py-3 text-sm">
              <History size={16} className="text-primary" />
              <span className="flex-1 font-bold">已恢复上次没做完的草稿（{d.restored} 张照片）</span>
              <button type="button" className="chip" onClick={d.dismissRestored}>
                知道了
              </button>
              <button type="button" className="chip" onClick={() => confirm('清空草稿里的所有照片和框？') && d.clear()}>
                <Trash2 size={13} /> 清空草稿
              </button>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="tile flex flex-col items-center gap-1 !py-5" onClick={() => camRef.current?.click()} disabled={photos.length >= MAX_REGIONS}>
              <Camera size={28} className="text-primary" />
              拍照
            </button>
            <button type="button" className="tile flex flex-col items-center gap-1 !py-5" onClick={() => albumRef.current?.click()} disabled={photos.length >= MAX_REGIONS}>
              <ImagePlus size={28} className="text-primary" />
              从相册选择（可多选）
            </button>
            <input ref={camRef} type="file" accept="image/*" capture="environment" hidden onChange={(e) => (addFiles(e.target.files), (e.target.value = ''))} />
            <input ref={albumRef} type="file" accept="image/*" multiple hidden onChange={(e) => (addFiles(e.target.files), (e.target.value = ''))} />
          </div>
          {d.adding.total > 0 && (
            <div className="card p-3">
              <div className="mb-1.5 flex items-center gap-2 text-sm text-ink-2">
                <Loader2 size={15} className="animate-spin" /> 正在处理照片 {d.adding.done}/{d.adding.total}…
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${(d.adding.done / d.adding.total) * 100}%` }} />
              </div>
            </div>
          )}
          {photos.length > 0 && (
            <>
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex-1 text-sm">
                  共 {photos.length} 张照片 · 已选 <b className={regions > MAX_REGIONS ? 'text-bad' : 'text-primary-ink'}>{regions}</b> / {MAX_REGIONS} 个区域
                </span>
                <button type="button" className="chip" onClick={() => confirm('删除全部照片和框？') && d.clear()}>
                  <Trash2 size={13} /> 全部清空
                </button>
              </div>
              <div className="text-sm text-ink-2">点一张照片，在上面拖动画框，选出要考的部分（生词表、语法框、课文段落……）。不画框就使用整张照片。</div>
              <PhotoGrid photos={photos} onOpen={setSheetIdx} />
            </>
          )}
          {regions > MAX_REGIONS && <div className="rounded-2xl bg-bad-soft px-4 py-2 text-sm font-bold text-bad-strong">一次最多 {MAX_REGIONS} 个区域（现在 {regions} 个），请删掉一些照片或框。</div>}

          <div className="card p-4">
            <div className="mb-2 font-black">难度</div>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {LEVELS.map((l) => (
                <button key={l} type="button" className={`chip ${config.level === l ? 'chip-on' : ''}`} onClick={() => setConfig({ ...config, level: l })}>
                  {l}
                </button>
              ))}
            </div>
            <label className="block">
              <span className="mb-1 block font-black">范围说明（可选）</span>
              <textarea
                className="input min-h-[76px] text-base"
                placeholder="例如：只考第 3 课的生词和 estar 的用法；或者没有照片时，直接写要考的内容"
                value={config.note}
                onChange={(e) => setConfig({ ...config, note: e.target.value })}
              />
            </label>
          </div>
          <p className="text-xs text-ink-3">照片会发给 Google Gemini 识别。免费 Key 的内容可能被 Google 用于改进产品，请不要拍含有个人信息的页面。照片会先保存在这台设备上，出完卷后自动清除。</p>
          <button type="button" className="btn btn-primary" disabled={(!photos.length && !config.note.trim()) || regions > MAX_REGIONS || d.adding.total > 0} onClick={() => setStep(1)}>
            下一步：题型与分值
          </button>
          <button type="button" className="btn btn-plain btn-sm self-start" onClick={() => setStep(2)}>
            <ClipboardPaste size={15} /> 已经在 Gemini 网页版拿到了回复？直接粘贴
          </button>
        </div>
      )}

      <RegionSheet photos={photos} index={sheetIdx} onIndex={setSheetIdx} onClose={() => setSheetIdx(null)} onRegions={d.setRegions} onRemove={d.remove} />

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <ConfigEditor config={config} onChange={setConfig} />
          <div className="card p-4">
            <div className="mb-2 font-black">限时</div>
            <div className="flex flex-wrap gap-1.5">
              {[0, 10, 20, 30, 45, 60, 90, 120].map((m) => (
                <button key={m} type="button" className={`chip ${config.minutes === m ? 'chip-on' : ''}`} onClick={() => setConfig({ ...config, minutes: m })}>
                  {m ? `${m} 分钟` : '不限时'}
                </button>
              ))}
            </div>
          </div>
          <button type="button" className="btn btn-primary" disabled={configTotal(config) <= 0} onClick={() => setStep(2)}>
            下一步：生成试卷
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-4">
          {gen ? (
            <div className="card flex flex-col items-center gap-3 p-6 text-center">
              <Loader2 size={34} className="animate-spin text-primary" />
              <div className="font-black">
                {gen.phase === 'direct' && gen.label}
                {gen.phase === 'prep' && `正在裁剪图片 ${gen.done}/${gen.total} 张`}
                {gen.phase === 'extract' && `AI 正在读图 ${gen.done}/${gen.total}`}
                {gen.phase === 'generate' && `正在出题${gen.section ? `：${SECTION_LABEL[gen.section]}` : ''}（${Math.min((gen.done ?? 0) + 1, gen.total ?? 1)}/${gen.total}）`}
                {gen.phase === 'save' && `正在保存图片 ${gen.done}/${gen.total}`}
              </div>
              {gen.phase !== 'direct' && (
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
                  <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct(gen)}%` }} />
                </div>
              )}
              {gen.info && (
                <div className="text-sm text-ink-2">
                  已整理出 {gen.info.vocab} 个单词、{gen.info.grammar} 个语法点、{gen.info.sentences} 个例句
                </div>
              )}
              {!!gen.waiting && <div className="rounded-xl bg-accent-soft px-3 py-1.5 text-sm font-bold">免费额度限速中，{gen.waiting} 秒后自动继续…</div>}
              <div className="text-sm text-ink-3">
                已用 {Math.round((Date.now() - gen.started) / 1000)} 秒{big && gen.phase !== 'save' ? '，照片多时需要几分钟' : ''}。请保持页面打开，不要切到别的 App。
              </div>
              {gen.phase !== 'save' && (
                <button type="button" className="btn btn-ghost btn-sm" onClick={() => abort.current?.abort()}>
                  <X size={15} /> 取消
                </button>
              )}
            </div>
          ) : (
            <>
              {partial && (
                <div className="card border-[color-mix(in_oklch,var(--bad)_40%,transparent)] p-4">
                  <div className="font-black text-bad-strong">
                    有 {partial.labels.length} 个区域没读出来（共 {partial.total} 个）
                  </div>
                  <div className="mt-1 text-sm text-ink-2">
                    {partial.labels.slice(0, 4).join('、')}
                    {partial.labels.length > 4 ? ' 等' : ''}。原因：{partial.reason}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => runAI()}>
                      <RotateCcw size={15} /> 重试没读出来的部分
                    </button>
                    <button type="button" className="btn btn-ghost btn-sm" onClick={() => runAI(true)}>
                      跳过，用已读到的内容出卷
                    </button>
                  </div>
                </div>
              )}
              {hasAI && (photos.length > 0 || config.note.trim()) && !partial && (
                <div className="card p-4">
                  <div className="font-black">用 AI 直接出卷</div>
                  <div className="mb-3 text-sm text-ink-2">
                    {!photos.length
                      ? `按范围说明出 ${totalQuestions} 道题，总分 ${configTotal(config)} 分。`
                      : big
                        ? `${regions} 个区域会先分批读图${cachedRegions ? `（其中 ${cachedRegions} 个上次已经读过，不再重复）` : ''}，再按题型出 ${totalQuestions} 道题，总分 ${configTotal(config)} 分。通常需要 2–5 分钟。`
                        : `把 ${regions} 个区域发给 Gemini，出 ${totalQuestions} 道题，总分 ${configTotal(config)} 分。`}
                  </div>
                  <button type="button" className="btn btn-primary w-full" onClick={() => runAI()}>
                    <Sparkles size={17} /> 开始出卷
                  </button>
                </div>
              )}
              <div className="card p-4">
                <div className="font-black">{hasAI ? '或者：用 Gemini 网页版（不用 Key）' : '用 Gemini 网页版出卷（不需要 API Key）'}</div>
                {big ? (
                  <div className="mt-2 rounded-xl bg-accent-soft px-3 py-2 text-sm">
                    网页版一次最多 {DIRECT_MAX} 个区域（现在 {regions} 个）。更多区域请在
                    <Link to="/settings" className="mx-1 font-bold text-primary-ink underline">
                      设置 → AI 助手
                    </Link>
                    里填写免费的 API Key，或者删掉一些照片和框。
                  </div>
                ) : null}
                <ol className="mt-2 flex list-decimal flex-col gap-3 pl-5 text-sm">
                  {!big && photos.length > 0 && (
                    <li>
                      把框选的内容保存成一张图片
                      <button type="button" className="btn btn-ghost btn-sm mt-1.5 flex" onClick={saveImage}>
                        <Download size={15} /> 保存图片
                      </button>
                    </li>
                  )}
                  {!big && (
                    <>
                      <li>
                        复制出卷要求并打开 Gemini
                        <button type="button" className="btn btn-ghost btn-sm mt-1.5 flex" onClick={() => askInGemini(handoffPrompt(config, photos.length ? regions : 0), { persona: false })}>
                          <Copy size={15} /> 复制并打开 Gemini
                        </button>
                      </li>
                      <li>在 Gemini 里{photos.length ? '上传刚才的图片，' : ''}粘贴要求并发送；等它回复后，复制整段回复</li>
                    </>
                  )}
                  <li>
                    粘贴到这里
                    <textarea className="input mt-1.5 min-h-[120px] font-mono text-xs" placeholder="把 Gemini 的回复粘贴到这里（包含 ```json 的那一段）" value={paste} onChange={(e) => setPaste(e.target.value)} />
                    <button type="button" className="btn btn-primary btn-sm mt-2" disabled={!paste.trim()} onClick={readPaste}>
                      <ClipboardPaste size={15} /> 读取题目
                    </button>
                  </li>
                </ol>
              </div>
            </>
          )}
          {error && <div className="rounded-2xl bg-bad-soft px-4 py-3 text-sm font-bold text-bad-strong">{error}</div>}
        </div>
      )}

      {step === 3 && draft && (
        <div className="flex flex-col gap-4">
          <div className="card p-4">
            <label className="block">
              <span className="mb-1 block text-xs font-bold text-ink-3">试卷标题</span>
              <input className="input text-lg font-black" value={draft.paper.title} onChange={(e) => setDraft({ ...draft, paper: { ...draft.paper, title: e.target.value } })} />
            </label>
            {draft.paper.scope && <div className="mt-2 text-sm text-ink-2">考查范围：{draft.paper.scope}</div>}
            <div className="mt-2 text-sm font-bold">
              共 {Object.values(draft.paper.questions).reduce((a, x) => a + x.length, 0)} 题 · 总分 {paperTotal({ ...draft.paper, config })} 分{config.minutes ? ` · 限时 ${config.minutes} 分钟` : ''}
            </div>
          </div>
          {Object.keys(draft.shortfall).length > 0 && (
            <div className="rounded-2xl bg-accent-soft px-4 py-3 text-sm">
              有些题型的题目不够：
              {Object.entries(draft.shortfall)
                .map(([k, n]) => `${SECTION_LABEL[k as SectionId]}少 ${n} ${k === 'match' ? '对' : '道'}`)
                .join('，')}
              。{hasAI && (crops.length || material) ? '可以点该部分的「重新生成」，' : ''}总分会按实际题数计算。
            </div>
          )}
          <div className="flex justify-end">
            <button type="button" className="chip" onClick={() => setShowAnswers((v) => !v)}>
              {showAnswers ? <EyeOff size={14} /> : <Eye size={14} />} {showAnswers ? '隐藏答案' : '显示答案'}
            </button>
          </div>
          <PaperEditor paper={{ ...draft.paper, config }} onChange={setQuestions} showAnswers={showAnswers} onRegenerate={hasAI && (crops.length || material) ? regen : undefined} busy={busySection} />
          {gen?.phase === 'save' && (
            <div className="card flex items-center gap-2 p-3 text-sm">
              <Loader2 size={15} className="animate-spin" /> 正在保存图片 {gen.done}/{gen.total}…
            </div>
          )}
          <div className="safe-bottom sticky bottom-20 z-10 flex gap-2 lg:bottom-4">
            <button type="button" className="btn btn-ghost flex-1 bg-surface" onClick={() => setStep(2)} disabled={!!gen}>
              重新生成
            </button>
            <button type="button" className="btn btn-primary flex-[2]" onClick={save} disabled={!!gen || !Object.values(draft.paper.questions).some((a) => a.length)}>
              <Save size={17} /> 保存试卷
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
