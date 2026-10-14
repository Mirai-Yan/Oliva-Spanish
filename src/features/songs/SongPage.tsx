import { useLiveQuery } from 'dexie-react-hooks'
import { ClipboardPaste, Copy, ExternalLink, FileText, Gauge, Languages, Loader2, Mic, Pause, Play, RefreshCw, Repeat, SkipBack, SkipForward, SlidersHorizontal, StepForward } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { Sheet } from '../../components/Sheet'
import { toast } from '../../components/Toast'
import { generateJSON } from '../../lib/gemini/client'
import { askInGemini } from '../../lib/gemini/handoff'
import { SONG_TRANSLATE_SCHEMA, songTranslatePrompt } from '../../lib/gemini/prompts'
import { isLrc, lineAt, lineEnd, parseLrc, plainLines } from '../../lib/songs/lrc'
import { expandTranslation, parseNumberedTranslation, uniqueLines } from '../../lib/songs/translate'
import { stopSpeaking } from '../../lib/speech/tts'
import { db, type SongLyricsRow } from '../../store/db'
import { useSettings } from '../../store/settings'
import { useTutorContext } from '../tutor/store'
import { forgetLyrics, loadLyrics, saveManualLyrics, updateLyrics } from './lyrics'
import { LyricsList, type ShowMode } from './LyricsList'
import { catalogSong, fromUser, fullArtist, type PlaySong } from './resolve'
import { SingPanel } from './SingPanel'
import { StudySheet } from './StudySheet'
import { SyncTool } from './SyncTool'
import { useSongClock } from './useSongClock'

export function SongPage() {
  const { id = '' } = useParams()
  const cat = catalogSong(id)
  const user = useLiveQuery(async () => (id.startsWith('u-') ? await db.userSongs.get(id) : undefined), [id], null)
  if (cat) return <Player key={cat.id} song={cat} />
  if (user === null) return null
  if (!user) return <Navigate to="/songs" replace />
  return <Player key={user.id} song={fromUser(user)} />
}

const MODES: { id: ShowMode; label: string }[] = [
  { id: 'both', label: '双语' },
  { id: 'es', label: '西语' },
  { id: 'zh', label: '中文' },
  { id: 'hidden', label: '隐藏' },
]

type LyricsState = { status: 'loading' | 'ready' | 'none' | 'error'; row?: SongLyricsRow; err?: string }

function Player({ song }: { song: PlaySong }) {
  const hasAI = !!useSettings((s) => s.gemini.apiKey)
  const host = useRef<HTMLDivElement>(null)
  const clock = useSongClock(host, song.youtubeId)
  const [lyr, setLyr] = useState<LyricsState>({ status: 'loading' })
  const [reload, setReload] = useState(0)
  const lines = useMemo(() => (lyr.row ? parseLrc(lyr.row.lrc) : []), [lyr.row])
  const offset = lyr.row?.offset ?? 0
  const zh = lyr.row?.zh
  const [cur, setCur] = useState(-1)
  const [mode, setMode] = useState<ShowMode>('both')
  const [autoPause, setAutoPause] = useState(false)
  const [loop, setLoop] = useState<number | null>(null)
  const [follow, setFollow] = useState(true)
  const [study, setStudy] = useState<number | null>(null)
  const [singIdx, setSingIdx] = useState<number | null>(null)
  const [sync, setSync] = useState<string[] | null>(null)
  const [sheet, setSheet] = useState<null | 'calibrate' | 'lyrics' | 'paste'>(null)
  const [pasteText, setPasteText] = useState('')
  const [translating, setTranslating] = useState(false)
  const [tip, setTip] = useState('')
  const artistLabel = fullArtist(song)

  // values the 100 ms ticker reads without restarting
  const stopAt = useRef<number | null>(null)
  const autoPausedAt = useRef(-1)
  const opts = useRef({ autoPause, loop, playing: clock.playing })
  opts.current = { autoPause, loop, playing: clock.playing }

  useTutorContext(`正在听西语歌《${song.title}》（${artistLabel}）${cur >= 0 && lines[cur]?.text ? `\n当前歌词：${lines[cur].text}${zh?.[cur] ? `（${zh[cur]}）` : ''}` : ''}`)

  // ---- lyrics ----
  const needDuration = song.custom && !song.durationSec
  useEffect(() => {
    if (needDuration && !clock.ready) return
    const ctl = new AbortController()
    setLyr({ status: 'loading' })
    loadLyrics({ id: song.id, title: song.title, artist: song.artist, lrclibId: song.lrclibId, durationSec: song.durationSec ?? (clock.duration() || undefined) }, ctl.signal)
      .then((row) => !ctl.signal.aborted && setLyr(row ? { status: 'ready', row } : { status: 'none' }))
      .catch((e: Error) => !ctl.signal.aborted && setLyr({ status: 'error', err: e.message }))
    return () => ctl.abort()
  }, [song.id, reload, needDuration ? clock.ready : true]) // eslint-disable-line react-hooks/exhaustive-deps

  // ---- playback ticker: current line, stop points, loop, auto-pause ----
  useEffect(() => {
    if (!clock.ready || !lines.length) return
    const tick = () => {
      const t = clock.time() + offset
      const o = opts.current
      if (stopAt.current != null && t >= stopAt.current - 0.06) {
        stopAt.current = null
        clock.pause()
      }
      const i = lineAt(lines, t)
      if (o.loop != null && o.playing && (t >= lineEnd(lines, o.loop) - 0.06 || t < lines[o.loop].t - 1.5)) clock.seek(lines[o.loop].t - offset)
      else if (o.autoPause && o.playing && i >= 0 && autoPausedAt.current !== i && lines[i].text && t >= lineEnd(lines, i) - 0.15) {
        autoPausedAt.current = i
        clock.pause()
      }
      setCur((c) => (c === i ? c : i))
    }
    const h = setInterval(tick, 100)
    return () => clearInterval(h)
  }, [clock, lines, offset])

  useEffect(() => {
    if (clock.playing) {
      setFollow(true)
      setTip('')
      stopSpeaking()
    }
  }, [clock.playing])

  const seekLine = useCallback(
    (i: number) => {
      if (!lines[i]) return
      stopAt.current = null
      autoPausedAt.current = -1
      clock.seek(lines[i].t - offset + 0.02)
      setCur(i)
      setFollow(true)
      if (!clock.playing) clock.play()
    },
    [clock, lines, offset],
  )

  const playLine = useCallback(
    (i: number) => {
      if (!lines[i]) return
      autoPausedAt.current = i
      clock.seek(lines[i].t - offset + 0.02)
      stopAt.current = lineEnd(lines, i)
      clock.play()
    },
    [clock, lines, offset],
  )

  const togglePlay = useCallback(() => {
    if (clock.playing) return clock.pause()
    stopAt.current = null
    clock.play()
    if (clock.mode === 'youtube')
      setTimeout(() => {
        if (!opts.current.playing) setTip('如果没有开始播放，请直接点一下视频画面（手机浏览器要求第一次手动点播放）。')
      }, 1800)
  }, [clock])

  const pauseForWord = useCallback(() => {
    clock.pause()
    setFollow(false)
  }, [clock])

  const step = (d: number) => {
    let i = cur + d
    while (lines[i] && !lines[i].text) i += d
    if (lines[i]) seekLine(i)
  }

  // keyboard: space = play / pause, arrows = previous / next line
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (sync || sheet || study != null) return
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.code === 'Space') {
        e.preventDefault()
        togglePlay()
      } else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  })

  // ---- calibration ----
  const setOffset = async (v: number) => {
    const o = Math.round(v * 100) / 100
    await updateLyrics(song.id, { offset: o })
    setLyr((l) => (l.row ? { ...l, row: { ...l.row, offset: o } } : l))
  }

  // ---- translation ----
  const texts = lines.map((l) => l.text)
  const translate = async () => {
    const { unique, index } = uniqueLines(texts)
    setTranslating(true)
    try {
      const r = await generateJSON<{ summaryZh: string; lines: string[] }>({
        messages: [{ role: 'user', text: songTranslatePrompt(song.title, artistLabel, unique) }],
        schema: SONG_TRANSLATE_SCHEMA,
        temperature: 0.3,
        timeoutMs: 120_000,
      })
      const z = expandTranslation(index, r.lines ?? [])
      await updateLyrics(song.id, { zh: z, summaryZh: r.summaryZh })
      setLyr((l) => (l.row ? { ...l, row: { ...l.row, zh: z, summaryZh: r.summaryZh } } : l))
    } catch (e) {
      toast(e instanceof Error ? e.message : String(e), 'warn', 8000)
    } finally {
      setTranslating(false)
    }
  }
  const handoff = () => askInGemini(songTranslatePrompt(song.title, artistLabel, uniqueLines(texts).unique, true), { persona: false })
  const savePasted = async () => {
    const { unique, index } = uniqueLines(texts)
    const r = parseNumberedTranslation(pasteText, unique.length)
    if (r.found < Math.max(1, unique.length * 0.5)) return toast(`只读到 ${r.found} 句翻译（共 ${unique.length} 句），请确认粘贴的是带编号的完整回复`, 'warn', 8000)
    const z = expandTranslation(index, r.lines)
    await updateLyrics(song.id, { zh: z, summaryZh: r.summary || undefined })
    setLyr((l) => (l.row ? { ...l, row: { ...l.row, zh: z, summaryZh: r.summary || l.row.summaryZh } } : l))
    setSheet(null)
    setPasteText('')
  }

  // ---- manual lyrics ----
  const applyManual = async () => {
    if (isLrc(pasteText)) {
      const row = await saveManualLyrics(song.id, pasteText)
      setLyr({ status: 'ready', row })
    } else {
      const ls = plainLines(pasteText)
      if (!ls.length) return
      clock.pause()
      clock.seek(0)
      setSync(ls)
    }
    setSheet(null)
    setPasteText('')
  }

  const dur = clock.mode === 'youtube' ? clock.duration() : 0
  const mismatch = dur > 0 && lines.length > 0 && lines[lines.length - 1].t - offset > dur + 2
  const studyLine = study != null ? lines[study] : null

  return (
    <div className="mx-auto max-w-5xl pb-6">
      <PageHeader
        back="/songs"
        title={<span className="es">{song.title}</span>}
        sub={
          <span className="flex flex-wrap items-center gap-x-2">
            {song.artistId ? (
              <Link to={`/songs/artist/${song.artistId}`} className="font-bold text-primary-ink underline-offset-4 hover:underline">
                {song.artist}
              </Link>
            ) : (
              <span className="font-bold">{song.artist}</span>
            )}
            {song.feat && <span>& {song.feat}</span>}
            {song.year && <span>· {song.year}</span>}
            {song.level && <span className="rounded-md bg-accent px-1.5 text-xs font-black text-[#2b2108]">{song.level}</span>}
          </span>
        }
      />

      {/* two columns only when the content area itself is wide (the sidebars eat a lot of a laptop screen) */}
      <div className="@container">
      <div className="grid gap-4 @4xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-3 @4xl:sticky @4xl:top-4 @4xl:self-start">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
            <div ref={host} className="absolute inset-0 [&>iframe]:h-full [&>iframe]:w-full" />
            {clock.mode !== 'youtube' && (
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-sm text-white/80">
                {clock.mode === 'loading' ? <Loader2 className="animate-spin" /> : <span className="text-3xl">🎵</span>}
                {clock.mode === 'loading' ? '正在加载视频…' : '只看歌词模式：用下面的按钮控制时间'}
              </div>
            )}
          </div>
          {clock.error && (
            <div className="rounded-2xl bg-accent-soft px-4 py-2 text-sm">
              {clock.error}。
              <a className="font-bold text-primary-ink underline" href={`https://www.youtube.com/watch?v=${song.youtubeId}`} target="_blank" rel="noopener noreferrer">
                在 YouTube 打开 <ExternalLink size={12} className="inline" />
              </a>
            </div>
          )}
          {tip && <div className="rounded-2xl bg-accent-soft px-4 py-2 text-sm">{tip}</div>}

          {/* transport */}
          <div className="card flex flex-col gap-3 p-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <button type="button" className="btn btn-ghost btn-sm !px-3" onClick={() => step(-1)} aria-label="上一句" disabled={!lines.length}>
                  <SkipBack size={17} />
                </button>
                <button type="button" className="btn btn-primary !h-12 !w-12 !rounded-full !p-0" onClick={togglePlay} aria-label={clock.playing ? '暂停' : '播放'} disabled={!clock.ready}>
                  {clock.playing ? <Pause size={22} /> : <Play size={22} className="ml-0.5" />}
                </button>
                <button type="button" className="btn btn-ghost btn-sm !px-3" onClick={() => step(1)} aria-label="下一句" disabled={!lines.length}>
                  <SkipForward size={17} />
                </button>
              </div>
              <div className="flex items-center gap-1" aria-label="播放速度">
                <Gauge size={16} className="text-ink-3" />
                {clock.rates.map((r) => (
                  <button key={r} type="button" className={`chip !px-2 ${clock.rate === r ? 'chip-on' : ''}`} onClick={() => clock.setRate(r)}>
                    {r}×
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button type="button" className={`chip ${autoPause ? 'chip-on' : ''}`} onClick={() => setAutoPause((v) => !v)} disabled={!lines.length}>
                <StepForward size={14} /> 逐句停
              </button>
              <button type="button" className={`chip ${loop != null ? 'chip-on' : ''}`} onClick={() => setLoop(loop != null ? null : Math.max(0, cur))} disabled={!lines.length}>
                <Repeat size={14} /> {loop != null ? `循环第 ${loop + 1} 句` : '单句循环'}
              </button>
              <button type="button" className={`chip ${singIdx != null ? 'chip-on' : ''}`} onClick={() => setSingIdx(singIdx != null ? null : Math.max(0, lines.findIndex((l, i) => i >= cur && l.text)))} disabled={!lines.length}>
                <Mic size={14} /> 跟唱
              </button>
              <button type="button" className="chip" onClick={() => setSheet('calibrate')} disabled={!lines.length}>
                <SlidersHorizontal size={14} /> 校准{offset ? ` ${offset > 0 ? '+' : ''}${offset}s` : ''}
              </button>
            </div>
          </div>

          {singIdx != null && lines.length > 0 && (
            <SingPanel lines={lines} zh={zh} idx={singIdx} setIdx={setSingIdx} rate={clock.rate} playLine={playLine} onExit={() => setSingIdx(null)} />
          )}

          {(song.note || lyr.row?.summaryZh) && (
            <details className="card p-4 text-sm" open={!!lyr.row?.summaryZh}>
              <summary className="cursor-pointer font-black">关于这首歌</summary>
              <div className="mt-2">
              {lyr.row?.summaryZh && (
                <p className="mb-2">
                  <b>这首歌讲什么：</b>
                  {lyr.row.summaryZh}
                </p>
              )}
              {song.note && <p className="text-ink-2">{song.note}</p>}
              {song.points && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {song.points.map((p) => (
                    <span key={p} className="rounded-md bg-primary-soft px-1.5 py-0.5 text-xs font-bold text-primary-ink">
                      {p}
                    </span>
                  ))}
                </div>
              )}
              </div>
            </details>
          )}
        </div>

        <div className="flex min-w-0 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <div className="flex rounded-xl bg-surface-2 p-0.5" role="group" aria-label="歌词显示">
              {MODES.map((m) => (
                <button key={m.id} type="button" className={`rounded-lg px-2.5 py-1 text-sm font-bold ${mode === m.id ? 'bg-surface text-primary-ink shadow' : 'text-ink-3'}`} onClick={() => setMode(m.id)}>
                  {m.label}
                </button>
              ))}
            </div>
            <span className="flex-1" />
            {lyr.status === 'ready' && !zh?.length && (
              hasAI ? (
                <button type="button" className="btn btn-ghost btn-sm" onClick={translate} disabled={translating}>
                  {translating ? <Loader2 size={15} className="animate-spin" /> : <Languages size={15} />} {translating ? '翻译中…' : 'AI 翻译成中文'}
                </button>
              ) : (
                <>
                  <button type="button" className="btn btn-ghost btn-sm" onClick={handoff}>
                    <Copy size={15} /> 复制到 Gemini 翻译
                  </button>
                  <button type="button" className="btn btn-ghost btn-sm" onClick={() => setSheet('paste')}>
                    <ClipboardPaste size={15} /> 粘贴译文
                  </button>
                </>
              )
            )}
            <button type="button" className="btn btn-plain btn-sm" onClick={() => setSheet('lyrics')} aria-label="歌词设置">
              <FileText size={15} /> 歌词
            </button>
          </div>
          {mismatch && <div className="rounded-xl bg-accent-soft px-3 py-2 text-sm">歌词的时间轴比视频长，可能是不同的版本。如果对不上，可以用「校准」调整。</div>}

          {sync ? (
            <SyncTool
              texts={sync}
              clock={clock}
              onCancel={() => setSync(null)}
              onDone={async (lrc) => {
                const row = await saveManualLyrics(song.id, lrc)
                setLyr({ status: 'ready', row })
                setSync(null)
                toast('时间轴已保存', 'ok')
              }}
            />
          ) : lyr.status === 'loading' ? (
            <div className="card flex items-center justify-center gap-2 p-10 text-ink-3">
              <Loader2 className="animate-spin" /> 正在获取同步歌词…
            </div>
          ) : lyr.status === 'ready' ? (
            <LyricsList
              lines={lines}
              zh={zh}
              cur={cur}
              mode={mode}
              follow={follow}
              onSeek={seekLine}
              onStudy={(i) => {
                clock.pause()
                setStudy(i)
              }}
              onWordTap={pauseForWord}
              className="card h-[52dvh] p-1.5 @4xl:h-[calc(100dvh-170px)]"
            />
          ) : (
            <div className="card flex flex-col items-center gap-3 p-8 text-center">
              <div className="text-3xl">📝</div>
              <div className="font-black">{lyr.status === 'error' ? lyr.err : '歌词库里没有找到这首歌的同步歌词'}</div>
              <div className="text-sm text-ink-2">可以把歌词粘贴进来，再跟着音乐点按对齐时间。</div>
              <div className="flex gap-2">
                <button type="button" className="btn btn-primary btn-sm" onClick={() => setSheet('lyrics')}>
                  粘贴歌词
                </button>
                <button type="button" className="btn btn-ghost btn-sm" onClick={() => setReload((n) => n + 1)}>
                  <RefreshCw size={15} /> 重试
                </button>
              </div>
            </div>
          )}
          {lyr.row && (
            <div className="text-xs text-ink-3">
              歌词来源：{lyr.row.source === 'manual' ? '你手动添加' : '开放歌词库 LRCLIB（社区提供）'}，版权归原作者所有，仅供个人学习。
            </div>
          )}
        </div>
      </div>
      </div>

      {studyLine && study != null && (
        <StudySheet
          open
          onClose={() => setStudy(null)}
          line={studyLine.text}
          zh={zh?.[study]}
          prev={lines[study - 1]?.text}
          next={lines[study + 1]?.text}
          title={song.title}
          artist={artistLabel}
          looping={loop === study}
          onPlay={() => playLine(study)}
          onLoop={() => {
            setLoop(loop === study ? null : study)
            if (loop !== study) seekLine(study)
            setStudy(null)
          }}
          onSing={() => {
            setSingIdx(study)
            setStudy(null)
          }}
        />
      )}

      <Sheet open={sheet === 'calibrate'} onClose={() => setSheet(null)} title="校准歌词时间">
        <p className="mb-3 text-sm text-ink-2">歌词比歌声早或晚时调整这里。也可以在歌曲播放时，点一下现在正在唱的那一句。</p>
        <div className="mb-3 flex items-center justify-between gap-2">
          {[-1, -0.25].map((d) => (
            <button key={d} type="button" className="btn btn-ghost btn-sm" onClick={() => setOffset(offset + d)}>
              {d}s
            </button>
          ))}
          <span className="font-mono text-lg font-black">
            {offset > 0 ? '+' : ''}
            {offset.toFixed(2)}s
          </span>
          {[0.25, 1].map((d) => (
            <button key={d} type="button" className="btn btn-ghost btn-sm" onClick={() => setOffset(offset + d)}>
              +{d}s
            </button>
          ))}
        </div>
        <div className="mb-1 text-xs font-bold text-ink-3">现在正在唱的是哪一句？</div>
        <div className="flex flex-col gap-1">
          {lines
            .map((l, i) => ({ l, i }))
            .filter(({ l, i }) => l.text && i >= cur - 2 && i <= cur + 4)
            .map(({ l, i }) => (
              <button
                key={i}
                type="button"
                className={`rounded-xl px-3 py-2 text-left ${i === cur ? 'bg-primary-soft font-bold' : 'hover:bg-surface-2'}`}
                onClick={() => {
                  setOffset(l.t - clock.time())
                  setSheet(null)
                }}
              >
                <span className="es">{l.text}</span>
              </button>
            ))}
        </div>
        <button type="button" className="btn btn-plain btn-sm mt-3" onClick={() => setOffset(0)}>
          恢复默认
        </button>
      </Sheet>

      <Sheet open={sheet === 'lyrics' || sheet === 'paste'} onClose={() => setSheet(null)} title={sheet === 'paste' ? '粘贴中文翻译' : '添加或替换歌词'}>
        {sheet === 'paste' ? (
          <p className="mb-2 text-sm text-ink-2">把 Gemini 回复的「编号. 翻译」整段粘贴到下面。</p>
        ) : (
          <p className="mb-2 text-sm text-ink-2">粘贴普通歌词（每句一行）后，可以跟着音乐点按对齐时间；如果粘贴的是带时间戳的 LRC 歌词，会直接使用。</p>
        )}
        <textarea className="input min-h-[160px] text-sm" value={pasteText} onChange={(e) => setPasteText(e.target.value)} placeholder={sheet === 'paste' ? '1. ……\n2. ……' : '在这里粘贴歌词'} />
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" className="btn btn-primary btn-sm flex-1" disabled={!pasteText.trim()} onClick={sheet === 'paste' ? savePasted : applyManual}>
            {sheet === 'paste' ? '保存翻译' : isLrc(pasteText) ? '使用这份歌词' : '开始对齐'}
          </button>
          {sheet === 'lyrics' && lyr.row && (
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={async () => {
                await forgetLyrics(song.id)
                setSheet(null)
                setReload((n) => n + 1)
              }}
            >
              <RefreshCw size={15} /> 重新从歌词库获取
            </button>
          )}
        </div>
      </Sheet>
    </div>
  )
}
