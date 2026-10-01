import { Check, Download, Eye, EyeOff, KeyRound, Palette, RefreshCw, Upload, Volume2, Sparkles, GraduationCap, Database } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { Sheet } from '../../components/Sheet'
import { THEMES, suggestAccent, type Mode } from '../../theme/themes'
import { DEFAULT_GEMINI, useSettings } from '../../store/settings'
import { useProgress } from '../../store/progress'
import { onVoicesChanged, spanishVoices, speak, ttsSupported } from '../../lib/speech/tts'
import { generate, listModels } from '../../lib/gemini/client'
import { exportBackup, importBackup, resetAll } from './backup'

function Card({ id, icon, title, children }: { id?: string; icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <section id={id} className="card mb-6 scroll-mt-24 p-5">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-black">
        {icon}
        {title}
      </h2>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  )
}

function Row({ label, hint, children }: { label: string; hint?: ReactNode; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <div className="font-bold">{label}</div>
        {hint && <div className="text-sm text-ink-3">{hint}</div>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  )
}

function Toggle({ on, onChange, label }: { on: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => onChange(!on)}
      className={`relative h-8 w-14 rounded-full transition ${on ? 'bg-primary' : 'bg-line'}`}
    >
      <span className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-all ${on ? 'left-7' : 'left-1'}`} />
    </button>
  )
}

function Segmented<T extends string | number>({ value, options, onChange }: { value: T; options: { v: T; label: string }[]; onChange: (v: T) => void }) {
  return (
    <div className="inline-flex flex-wrap gap-1 rounded-2xl bg-surface-2 p-1">
      {options.map((o) => (
        <button key={String(o.v)} type="button" onClick={() => onChange(o.v)} className={`rounded-xl px-3 py-1.5 text-sm font-bold transition ${value === o.v ? 'bg-surface text-primary-ink shadow' : 'text-ink-2'}`}>
          {o.label}
        </button>
      ))}
    </div>
  )
}

export function SettingsPage() {
  const s = useSettings()
  const loc = useLocation()
  const [voices, setVoices] = useState(spanishVoices())
  const [showKey, setShowKey] = useState(false)
  const [models, setModels] = useState<{ id: string; name: string }[]>([])
  const [test, setTest] = useState<{ busy: boolean; msg?: string; ok?: boolean }>({ busy: false })
  const [confirmReset, setConfirmReset] = useState(false)
  const [withKey, setWithKey] = useState(false)
  const [importMsg, setImportMsg] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)
  const resetProgress = useProgress((p) => p.reset)

  useEffect(() => onVoicesChanged(() => setVoices(spanishVoices())) as unknown as () => void, [])
  useEffect(() => {
    if (loc.hash) setTimeout(() => document.getElementById(loc.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 100)
  }, [loc.hash])

  const testAI = async () => {
    setTest({ busy: true })
    try {
      const list = await listModels().catch(() => [])
      if (list.length) setModels(list)
      const text = await generate({ messages: [{ role: 'user', text: '用一句西班牙语和一句中文向学生打招呼。' }], maxTokens: 200 })
      setTest({ busy: false, ok: true, msg: `连接成功！AI 说：${text.trim()}` })
    } catch (e) {
      setTest({ busy: false, ok: false, msg: e instanceof Error ? e.message : String(e) })
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="设置" />

      <Card icon={<Palette size={20} className="text-primary" />} title="外观">
        <div>
          <div className="mb-2 font-bold">主题颜色</div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {THEMES.map((t) => (
              <button key={t.id} type="button" onClick={() => s.set({ theme: t.id })} className={`tile flex items-center gap-2 !p-3 ${s.theme === t.id ? 'tile-on' : ''}`}>
                <span className="relative h-9 w-9 shrink-0">
                  <span className="absolute inset-0 rounded-full" style={{ background: t.primary }} />
                  <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-[var(--surface)]" style={{ background: t.accent }} />
                </span>
                <span className="min-w-0 text-left">
                  <span className="block truncate text-sm">{t.name}</span>
                  <span className="block truncate text-[11px] font-semibold text-ink-3">{t.hint}</span>
                </span>
                {s.theme === t.id && <Check size={16} className="ml-auto shrink-0" />}
              </button>
            ))}
            <button type="button" onClick={() => s.set({ theme: 'custom' })} className={`tile flex items-center gap-2 !p-3 ${s.theme === 'custom' ? 'tile-on' : ''}`}>
              <span className="relative h-9 w-9 shrink-0 rounded-full" style={{ background: `conic-gradient(${s.custom.primary}, ${s.custom.accent}, ${s.custom.primary})` }} />
              <span className="text-sm">自定义</span>
            </button>
          </div>
          {s.theme === 'custom' && (
            <div className="mt-3 flex flex-wrap items-center gap-4 rounded-2xl bg-surface-2 p-3">
              <label className="flex items-center gap-2 text-sm font-bold">
                主色
                <input type="color" value={s.custom.primary} onChange={(e) => s.set({ custom: { primary: e.target.value, accent: suggestAccent(e.target.value) } })} className="h-9 w-12 cursor-pointer rounded-lg border-0 bg-transparent" />
              </label>
              <label className="flex items-center gap-2 text-sm font-bold">
                点缀色
                <input type="color" value={s.custom.accent} onChange={(e) => s.set({ custom: { ...s.custom, accent: e.target.value } })} className="h-9 w-12 cursor-pointer rounded-lg border-0 bg-transparent" />
              </label>
              <span className="text-xs text-ink-3">选好主色后会自动搭配点缀色，也可以手动调整</span>
            </div>
          )}
        </div>
        <Row label="显示模式">
          <Segmented<Mode>
            value={s.mode}
            onChange={(mode) => s.set({ mode })}
            options={[
              { v: 'system', label: '跟随系统' },
              { v: 'light', label: '浅色' },
              { v: 'dark', label: '深色' },
            ]}
          />
        </Row>
        <Row label="字号">
          <Segmented<number>
            value={s.fontScale}
            onChange={(fontScale) => s.set({ fontScale })}
            options={[
              { v: 0.9, label: '小' },
              { v: 1, label: '标准' },
              { v: 1.1, label: '大' },
              { v: 1.2, label: '特大' },
            ]}
          />
        </Row>
      </Card>

      <Card icon={<Volume2 size={20} className="text-primary" />} title="发音与声音">
        {!ttsSupported ? (
          <div className="rounded-2xl bg-bad-soft p-3 text-sm">当前浏览器不支持语音朗读，建议使用最新版 Chrome、Edge 或 Safari。</div>
        ) : voices.length === 0 ? (
          <div className="rounded-2xl bg-accent-soft p-3 text-sm">
            系统里没有找到西班牙语语音。
            <br />
            Windows：设置 → 时间和语言 → 语音 → 添加语音「西班牙语（西班牙）」；
            <br />
            Mac / iPhone：设置 → 辅助功能 → 朗读内容 → 声音 → 西班牙语，下载 Mónica 或 Jorge。
          </div>
        ) : (
          <Row label="朗读声音" hint="推荐选西班牙（es-ES）口音；标有 Enhanced / Premium / Natural 的音质更好">
            <select value={s.voiceURI ?? ''} onChange={(e) => s.set({ voiceURI: e.target.value || null })} className="input !w-auto max-w-[260px] !py-2">
              <option value="">自动选择</option>
              {voices.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name}（{v.lang}）
                </option>
              ))}
            </select>
          </Row>
        )}
        <Row label={`默认语速 ${s.rate.toFixed(2)}×`} hint="每道听力题右上角也可以随时调节">
          <div className="flex items-center gap-2">
            <input type="range" min={0.4} max={2} step={0.05} value={s.rate} onChange={(e) => s.set({ rate: Number(e.target.value) })} className="w-40 accent-[var(--primary)]" />
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => speak('¡Hola! Me llamo Oliva. ¿Qué tal estás?')}>
              试听
            </button>
          </div>
        </Row>
        <Row label="自动播放发音" hint="题目出现时自动朗读">
          <Toggle label="自动播放发音" on={s.autoplay} onChange={(autoplay) => s.set({ autoplay })} />
        </Row>
        <Row label="音效" hint="答对/答错的提示音">
          <Toggle label="音效" on={s.sfx} onChange={(sfx) => s.set({ sfx })} />
        </Row>
      </Card>

      <Card id="ai" icon={<Sparkles size={20} className="text-accent" />} title="AI 助手（Gemini）">
        <div className="rounded-2xl bg-surface-2 p-4 text-sm text-ink-2">
          <div className="mb-2 font-black text-ink">免费获取 API Key（不需要付费、不用绑卡）</div>
          <ol className="list-decimal space-y-1 pl-5">
            <li>
              打开{' '}
              <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer" className="font-bold text-primary-ink underline">
                aistudio.google.com/apikey
              </a>
              ，用你的 Google 账号登录（就是开通 Gemini 会员的那个账号也可以）。
            </li>
            <li>点「Create API key」（创建 API 密钥），如果要求选项目，选默认的即可。</li>
            <li>复制生成的以 AIza 开头的密钥，粘贴到下面的输入框，然后点「测试连接」。</li>
          </ol>
          <div className="mt-3 space-y-1 text-xs">
            <p>
              💡 <b>Gemini 会员（Google AI Pro）和 API 是两个独立的产品</b>：会员不包含 API，也不能用会员账号直接登录第三方网站。但 API 有官方免费额度，个人学习一般够用。
            </p>
            <p>🔒 Key 只保存在这台设备的浏览器里。注意：免费额度下，Google 可能会用你发送的内容改进产品，不要发送隐私信息。</p>
            <p>🌏 需要在 Google 支持的地区使用（中国大陆、香港不在支持范围，需要代理，且账号所在地区受支持）。</p>
            <p>📋 不想申请 Key 也可以：所有 AI 按钮会把问题复制到 Gemini 网页版，用你的会员回答。</p>
          </div>
        </div>
        <div>
          <div className="mb-1.5 flex items-center gap-2 font-bold">
            <KeyRound size={16} /> API Key
          </div>
          <div className="flex gap-2">
            <input type={showKey ? 'text' : 'password'} value={s.gemini.apiKey} onChange={(e) => s.setGemini({ apiKey: e.target.value.trim() })} placeholder="AIza…" autoComplete="off" spellCheck={false} className="input font-mono" />
            <button type="button" className="btn btn-ghost !px-3" onClick={() => setShowKey((v) => !v)} aria-label={showKey ? '隐藏' : '显示'}>
              {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <div>
          <div className="mb-1.5 font-bold">API 地址</div>
          <input value={s.gemini.baseUrl} onChange={(e) => s.setGemini({ baseUrl: e.target.value.trim() })} placeholder={DEFAULT_GEMINI.baseUrl} spellCheck={false} className="input font-mono text-sm" />
          <div className="mt-1 text-xs text-ink-3">在中国大陆直连 Google 通常不通。可以开启代理，或者填写兼容 Gemini 接口的中转地址（格式同官方：地址后面接 /v1beta/models/…）。</div>
        </div>
        <div>
          <div className="mb-1.5 font-bold">模型</div>
          <div className="flex flex-wrap gap-2">
            <input
              value={s.gemini.model}
              onChange={(e) => s.setGemini({ model: e.target.value.trim() })}
              placeholder="自动（推荐）"
              spellCheck={false}
              list="gemini-models"
              className="input !w-auto min-w-[220px] flex-1 font-mono text-sm"
            />
            <datalist id="gemini-models">
              {models.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </datalist>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              disabled={!s.gemini.apiKey}
              onClick={async () => {
                try {
                  setModels(await listModels())
                  setTest({ busy: false, ok: true, msg: '已获取可用模型列表，点输入框即可选择' })
                } catch (e) {
                  setTest({ busy: false, ok: false, msg: e instanceof Error ? e.message : String(e) })
                }
              }}
            >
              <RefreshCw size={14} /> 获取模型列表
            </button>
          </div>
          <div className="mt-1 text-xs text-ink-3">留空 = 自动选择最新的免费 Flash 模型（推荐）。免费额度用完时可以换成名字带 flash-lite 的模型；Pro 模型讲解更深入但免费额度更少。清空输入框即可恢复自动。</div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="btn btn-accent" disabled={!s.gemini.apiKey || test.busy} onClick={testAI}>
            {test.busy ? '测试中…' : '测试连接'}
          </button>
          {test.msg && <div className={`flex-1 rounded-2xl px-3 py-2 text-sm font-semibold ${test.ok ? 'bg-ok-soft text-ok-strong' : 'bg-bad-soft text-bad-strong'}`}>{test.msg}</div>}
        </div>
      </Card>

      <Card icon={<GraduationCap size={20} className="text-primary" />} title="学习">
        <Row label="每日目标" hint="每天想获得的经验值">
          <Segmented<number>
            value={s.dailyGoal}
            onChange={(dailyGoal) => s.set({ dailyGoal })}
            options={[
              { v: 10, label: '轻松 10' },
              { v: 20, label: '普通 20' },
              { v: 30, label: '认真 30' },
              { v: 50, label: '硬核 50' },
            ]}
          />
        </Row>
        <Row label="每次背新词数量">
          <Segmented<number> value={s.newWordsPerDay} onChange={(newWordsPerDay) => s.set({ newWordsPerDay })} options={[5, 10, 15, 20, 30].map((v) => ({ v, label: String(v) }))} />
        </Row>
        <Row label="严格检查重音符号" hint="关闭时，漏写 á é í ó ú ñ 只提示不判错">
          <Toggle label="严格检查重音符号" on={s.strictAccents} onChange={(strictAccents) => s.set({ strictAccents })} />
        </Row>
        <Row label="自由模式" hint="解锁全部课程，可以不按顺序学习">
          <Toggle label="自由模式" on={s.freeMode} onChange={(freeMode) => s.set({ freeMode })} />
        </Row>
      </Card>

      <Card icon={<Database size={20} className="text-primary" />} title="数据与备份">
        <div className="text-sm text-ink-2">学习进度只保存在这台设备的浏览器里。换设备或清理浏览器数据前，记得先导出备份。</div>
        <label className="flex items-center gap-2 text-sm font-bold">
          <input type="checkbox" checked={withKey} onChange={(e) => setWithKey(e.target.checked)} className="h-4 w-4 accent-[var(--primary)]" />
          备份里包含 API Key
        </label>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn btn-primary btn-sm" onClick={() => exportBackup(withKey)}>
            <Download size={16} /> 导出备份
          </button>
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => fileRef.current?.click()}>
            <Upload size={16} /> 导入备份
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={async (e) => {
              const f = e.target.files?.[0]
              if (!f) return
              try {
                await importBackup(await f.text())
                setImportMsg('导入成功，页面即将刷新…')
                setTimeout(() => location.reload(), 800)
              } catch (err) {
                setImportMsg('导入失败：' + (err instanceof Error ? err.message : String(err)))
              }
            }}
          />
          <button type="button" className="btn btn-plain btn-sm !text-bad" onClick={() => setConfirmReset(true)}>
            清空学习进度
          </button>
        </div>
        {importMsg && <div className="text-sm font-bold">{importMsg}</div>}
      </Card>

      <p className="pb-6 text-center text-xs text-ink-3">Oliva 橄榄西语 · 课程内容为原创，按 CEFR 与塞万提斯学院课程大纲编排</p>

      <Sheet open={confirmReset} onClose={() => setConfirmReset(false)} title="清空全部学习进度？">
        <p className="mb-4 text-ink-2">课程进度、经验、记忆卡、错题、考试记录和 AI 对话都会被删除，设置和 API Key 保留。这个操作无法撤销，建议先导出备份。</p>
        <button
          type="button"
          className="btn btn-bad w-full"
          onClick={async () => {
            await resetAll()
            resetProgress()
            setConfirmReset(false)
          }}
        >
          确认清空
        </button>
      </Sheet>
    </div>
  )
}
