import { Camera, ClipboardPaste, Copy, Download, Eye, EyeOff, ImagePlus, Loader2, Save, Sparkles, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { toast } from '../../components/Toast'
import { extractJSON } from '../../lib/gemini/client'
import { askInGemini } from '../../lib/gemini/handoff'
import { configTotal, paperTotal } from '../../lib/paper/exercises'
import { sanitizePaper, type SanitizeResult } from '../../lib/paper/sanitize'
import { DEFAULT_CONFIG, SECTION_LABEL, type PaperConfig, type PaperQuestions, type SectionId } from '../../lib/paper/types'
import type { Level } from '../../content/types'
import { db } from '../../store/db'
import { useSettings } from '../../store/settings'
import { useLearnerLevel } from '../path/useLearnerLevel'
import { ConfigEditor } from './ConfigEditor'
import { generatePaper, handoffPrompt, regenerateSection, type PaperImage } from './generate'
import { cropAll, loadPhoto, shareOrDownload, stitch, type Photo } from './image'
import { PaperEditor } from './PaperEditor'
import { RegionPicker } from './RegionPicker'

const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1']
const MAX_REGIONS = 8
const CONFIG_KEY = 'oliva-paper-config'

function loadConfig(level: string): PaperConfig {
  try {
    const saved = JSON.parse(localStorage.getItem(CONFIG_KEY) ?? 'null') as PaperConfig | null
    if (saved?.sections) return { ...DEFAULT_CONFIG, ...saved, sections: { ...DEFAULT_CONFIG.sections, ...saved.sections }, note: '' }
  } catch {
    /* ignore */
  }
  return { ...DEFAULT_CONFIG, level: (LEVELS.includes(level as Level) ? level : 'A1') as Level }
}

const STEPS = ['照片与范围', '题型与分值', '生成试卷', '预览修改']

export function PhotoPaperPage() {
  const nav = useNavigate()
  const learner = useLearnerLevel()
  const hasAI = !!useSettings((s) => s.gemini.apiKey)
  const [step, setStep] = useState(0)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(0)
  const [config, setConfig] = useState<PaperConfig>(() => loadConfig(learner))
  const [crops, setCrops] = useState<PaperImage[]>([])
  const [gen, setGen] = useState<{ stage: string; started: number } | null>(null)
  const [error, setError] = useState('')
  const [draft, setDraft] = useState<SanitizeResult | null>(null)
  const [paste, setPaste] = useState('')
  const [showAnswers, setShowAnswers] = useState(true)
  const [busySection, setBusySection] = useState<SectionId | null>(null)
  const [, tick] = useState(0)
  const abort = useRef<AbortController | null>(null)
  const camRef = useRef<HTMLInputElement>(null)
  const albumRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    try {
      localStorage.setItem(CONFIG_KEY, JSON.stringify({ ...config, note: '' }))
    } catch {
      /* ignore */
    }
  }, [config])

  // elapsed-time display while generating
  useEffect(() => {
    if (!gen) return
    const t = setInterval(() => tick((n) => n + 1), 1000)
    return () => clearInterval(t)
  }, [gen])

  useEffect(() => () => photos.forEach((p) => URL.revokeObjectURL(p.url)), []) // eslint-disable-line react-hooks/exhaustive-deps

  const regions = photos.reduce((a, p) => a + Math.max(1, p.regions.length), 0)

  const addFiles = async (files: FileList | null) => {
    if (!files?.length) return
    const list = [...files]
    setLoading((n) => n + list.length)
    for (const f of list) {
      try {
        const p = await loadPhoto(f)
        setPhotos((ps) => [...ps, p])
      } catch (e) {
        toast(e instanceof Error ? e.message : '无法读取图片', 'warn')
      } finally {
        setLoading((n) => n - 1)
      }
    }
  }

  const prepareCrops = async () => {
    const c = await cropAll(photos)
    setCrops(c)
    return c
  }

  const runAI = async () => {
    setError('')
    const ctl = new AbortController()
    abort.current = ctl
    setGen({ stage: '正在准备图片…', started: Date.now() })
    try {
      const images = photos.length ? await prepareCrops() : []
      const r = await generatePaper(images, config, ctl.signal, (stage) => setGen((g) => (g ? { ...g, stage } : g)))
      setDraft(r)
      setStep(3)
    } catch (e) {
      if (!ctl.signal.aborted) setError(e instanceof Error ? e.message : String(e))
    } finally {
      setGen(null)
      abort.current = null
    }
  }

  const saveImage = async () => {
    if (!photos.length) return
    const c = crops.length ? crops : await prepareCrops()
    const blob = await stitch(c.map((x) => x.blob))
    const how = await shareOrDownload(blob, 'oliva-出卷图片.jpg', '出卷图片')
    if (how === 'downloaded') toast('图片已保存，等会儿在 Gemini 里上传它', 'ok')
  }

  const readPaste = () => {
    setError('')
    try {
      const r = sanitizePaper(extractJSON(paste), config)
      if (!Object.values(r.paper.questions).some((a) => a.length)) throw new Error('回复里没有找到题目')
      setDraft(r)
      setStep(3)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    }
  }

  const regen = async (s: SectionId) => {
    if (!draft) return
    setBusySection(s)
    try {
      const q = await regenerateSection(crops, config, s, draft.paper.questions)
      setDraft({ ...draft, paper: { ...draft.paper, questions: q } })
    } catch (e) {
      toast(e instanceof Error ? e.message : String(e), 'warn')
    } finally {
      setBusySection(null)
    }
  }

  const save = async () => {
    if (!draft) return
    const now = Date.now()
    const id = (await db.papers.add({ ...draft.paper, config, source: crops.length || !paste ? 'photo' : 'paste', createdAt: now, updatedAt: now })) as number
    if (crops.length) await db.paperImages.bulkAdd(crops.map((c) => ({ paperId: id, blob: c.blob, label: c.label, createdAt: now })))
    toast('试卷已保存', 'ok')
    nav(`/exam/paper/${id}`, { replace: true })
  }

  const setQuestions = (q: PaperQuestions) => draft && setDraft({ ...draft, paper: { ...draft.paper, questions: q } })

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
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="tile flex flex-col items-center gap-1 !py-5" onClick={() => camRef.current?.click()}>
              <Camera size={28} className="text-primary" />
              拍照
            </button>
            <button type="button" className="tile flex flex-col items-center gap-1 !py-5" onClick={() => albumRef.current?.click()}>
              <ImagePlus size={28} className="text-primary" />
              从相册选择
            </button>
            <input ref={camRef} type="file" accept="image/*" capture="environment" hidden onChange={(e) => (addFiles(e.target.files), (e.target.value = ''))} />
            <input ref={albumRef} type="file" accept="image/*" multiple hidden onChange={(e) => (addFiles(e.target.files), (e.target.value = ''))} />
          </div>
          {loading > 0 && (
            <div className="flex items-center gap-2 text-sm text-ink-2">
              <Loader2 size={16} className="animate-spin" /> 正在处理 {loading} 张照片…
            </div>
          )}
          {photos.length > 0 && <div className="text-sm text-ink-2">在照片上拖动手指或鼠标画框，选出要考的部分（生词表、语法框、课文段落……）。不画框就使用整张照片。</div>}
          {photos.map((p, i) => (
            <RegionPicker
              key={p.id}
              photo={p}
              index={i}
              onChange={(r) => setPhotos((ps) => ps.map((x) => (x.id === p.id ? { ...x, regions: r } : x)))}
              onRemove={() => {
                URL.revokeObjectURL(p.url)
                setPhotos((ps) => ps.filter((x) => x.id !== p.id))
              }}
            />
          ))}
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
          <p className="text-xs text-ink-3">照片会发给 Google Gemini 识别。免费 Key 的内容可能被 Google 用于改进产品，请不要拍含有个人信息的页面。</p>
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn btn-primary flex-1" disabled={(!photos.length && !config.note.trim()) || regions > MAX_REGIONS || loading > 0} onClick={() => setStep(1)}>
              下一步：题型与分值
            </button>
          </div>
          <button type="button" className="btn btn-plain btn-sm self-start" onClick={() => setStep(2)}>
            <ClipboardPaste size={15} /> 已经在 Gemini 网页版拿到了回复？直接粘贴
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <ConfigEditor config={config} onChange={setConfig} />
          <div className="card p-4">
            <div className="mb-2 font-black">限时</div>
            <div className="flex flex-wrap gap-1.5">
              {[0, 10, 20, 30, 45, 60].map((m) => (
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
            <div className="card flex flex-col items-center gap-3 p-8 text-center">
              <Loader2 size={36} className="animate-spin text-primary" />
              <div className="font-black">{gen.stage}</div>
              <div className="text-sm text-ink-3">已用 {Math.round((Date.now() - gen.started) / 1000)} 秒，通常需要 20–90 秒。请不要切到别的 App。</div>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => abort.current?.abort()}>
                <X size={15} /> 取消
              </button>
            </div>
          ) : (
            <>
              {hasAI && (photos.length > 0 || config.note.trim()) && (
                <div className="card p-4">
                  <div className="font-black">用 AI 直接出卷</div>
                  <div className="mb-3 text-sm text-ink-2">
                    {photos.length ? `把 ${regions} 个区域发给 Gemini，` : '按范围说明，'}出 {Object.values(config.sections).reduce((a, s) => a + s.count, 0)} 道题，总分 {configTotal(config)} 分。
                  </div>
                  <button type="button" className="btn btn-primary w-full" onClick={runAI}>
                    <Sparkles size={17} /> 开始出卷
                  </button>
                </div>
              )}
              <div className="card p-4">
                <div className="font-black">{hasAI ? '或者：用 Gemini 网页版（不用 Key）' : '用 Gemini 网页版出卷（不需要 API Key）'}</div>
                <ol className="mt-2 flex list-decimal flex-col gap-3 pl-5 text-sm">
                  {photos.length > 0 && (
                    <li>
                      把框选的内容保存成一张图片
                      <button type="button" className="btn btn-ghost btn-sm mt-1.5 flex" onClick={saveImage}>
                        <Download size={15} /> 保存图片
                      </button>
                    </li>
                  )}
                  <li>
                    复制出卷要求并打开 Gemini
                    <button type="button" className="btn btn-ghost btn-sm mt-1.5 flex" onClick={() => askInGemini(handoffPrompt(config, photos.length ? regions : 0), { persona: false })}>
                      <Copy size={15} /> 复制并打开 Gemini
                    </button>
                  </li>
                  <li>在 Gemini 里{photos.length ? '上传刚才的图片，' : ''}粘贴要求并发送；等它回复后，复制整段回复</li>
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
              。{hasAI && crops.length ? '可以点该部分的「重新生成」，' : ''}总分会按实际题数计算。
            </div>
          )}
          <div className="flex justify-end">
            <button type="button" className="chip" onClick={() => setShowAnswers((v) => !v)}>
              {showAnswers ? <EyeOff size={14} /> : <Eye size={14} />} {showAnswers ? '隐藏答案' : '显示答案'}
            </button>
          </div>
          <PaperEditor paper={{ ...draft.paper, config }} onChange={setQuestions} showAnswers={showAnswers} onRegenerate={hasAI && crops.length ? regen : undefined} busy={busySection} />
          <div className="safe-bottom sticky bottom-20 z-10 flex gap-2 lg:bottom-4">
            <button type="button" className="btn btn-ghost flex-1 bg-surface" onClick={() => setStep(2)}>
              重新生成
            </button>
            <button type="button" className="btn btn-primary flex-[2]" onClick={save} disabled={!Object.values(draft.paper.questions).some((a) => a.length)}>
              <Save size={17} /> 保存试卷
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
