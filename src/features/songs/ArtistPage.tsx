import { ExternalLink, GraduationCap, Loader2, Pause, Play, Plus } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { PageHeader, Section } from '../../components/PageHeader'
import { SONGS, artistById } from '../../content/songs/catalog'
import { COUNTRY, STYLES, type Artist } from '../../content/songs/types'
import { searchKey } from '../../lib/text/normalize'
import { stopSpeaking } from '../../lib/speech/tts'

interface WikiSummary {
  title: string
  extract: string
  thumb?: string
  url: string
  lang: 'zh' | 'es'
}

interface Track {
  trackId: number
  trackName: string
  collectionName?: string
  releaseDate?: string
  previewUrl?: string
  trackViewUrl?: string
  artworkUrl100?: string
}

async function fetchWiki(a: Artist, signal: AbortSignal): Promise<WikiSummary | null> {
  const tries: [WikiSummary['lang'], string][] = []
  if (a.wiki.zh) tries.push(['zh', a.wiki.zh])
  tries.push(['es', a.wiki.es])
  for (const [lang, title] of tries) {
    try {
      const res = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`, {
        signal,
        headers: lang === 'zh' ? { 'Accept-Language': 'zh-CN' } : undefined,
      })
      if (!res.ok) continue
      const j = await res.json()
      if (!j.extract) continue
      return { title: j.title, extract: j.extract, thumb: j.thumbnail?.source, url: j.content_urls?.desktop?.page ?? `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(title)}`, lang }
    } catch (e) {
      if (signal.aborted) throw e
    }
  }
  return null
}

/** "¡Corre! (Versión Deluxe)" and "¡Corre! - En Directo" count as the same work. */
const workKey = (t: string) => searchKey(t.replace(/\s*[([].*?[)\]]/g, '').replace(/\s+-\s+.*$/, ''))

async function fetchWorks(id: number, signal: AbortSignal): Promise<Track[]> {
  const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song&limit=60`, { signal })
  if (!res.ok) throw new Error(String(res.status))
  const j = (await res.json()) as { results: (Track & { wrapperType: string })[] }
  const seen = new Set<string>()
  return j.results
    .filter((r) => r.wrapperType === 'track')
    .filter((r) => {
      const k = workKey(r.trackName)
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
    .slice(0, 24)
}

export function ArtistPage() {
  const { id = '' } = useParams()
  const a = artistById.get(id)
  if (!a) return <Navigate to="/songs" replace />
  return <ArtistView key={a.id} a={a} />
}

function ArtistView({ a }: { a: Artist }) {
  const nav = useNavigate()
  const songs = useMemo(() => SONGS.filter((s) => s.artistId === a.id || s.feat === a.name), [a])
  const inCatalog = useMemo(() => new Map(songs.map((s) => [workKey(s.title), s.id])), [songs])
  const [wiki, setWiki] = useState<WikiSummary | null | 'loading'>('loading')
  const [works, setWorks] = useState<Track[] | 'loading' | 'error'>('loading')
  const [playing, setPlaying] = useState<number | null>(null)
  const audio = useRef<HTMLAudioElement | null>(null)
  const c = COUNTRY[a.country]

  useEffect(() => {
    const ctl = new AbortController()
    fetchWiki(a, ctl.signal)
      .then(setWiki)
      .catch(() => !ctl.signal.aborted && setWiki(null))
    if (a.itunesId)
      fetchWorks(a.itunesId, ctl.signal)
        .then(setWorks)
        .catch(() => !ctl.signal.aborted && setWorks('error'))
    else setWorks([])
    return () => ctl.abort()
  }, [a])

  useEffect(
    () => () => {
      audio.current?.pause()
    },
    [],
  )

  const preview = (t: Track) => {
    if (!t.previewUrl) return
    if (playing === t.trackId) {
      audio.current?.pause()
      setPlaying(null)
      return
    }
    stopSpeaking()
    audio.current?.pause()
    const el = new Audio(t.previewUrl)
    el.onended = () => setPlaying(null)
    el.play().catch(() => setPlaying(null))
    audio.current = el
    setPlaying(t.trackId)
  }

  const q = (t: string) => encodeURIComponent(`${a.name} ${t}`)

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader back="/songs" title={a.name} sub={`${c?.flag ?? ''} ${c?.zh ?? ''}${a.years ? ` · ${a.years}` : ''} · ${a.genresZh}`} />

      <div className="card mb-6 flex flex-col gap-4 p-4 sm:flex-row">
        {wiki && wiki !== 'loading' && wiki.thumb && <img src={wiki.thumb} alt={a.name} className="h-40 w-40 shrink-0 self-center rounded-2xl object-cover sm:self-start" loading="lazy" />}
        <div className="min-w-0 flex-1">
          <p>{a.bioZh}</p>
          {wiki === 'loading' && (
            <div className="mt-3 flex items-center gap-2 text-sm text-ink-3">
              <Loader2 size={15} className="animate-spin" /> 正在读取维基百科…
            </div>
          )}
          {wiki && wiki !== 'loading' && (
            <div className="mt-3 rounded-xl bg-surface-2 p-3 text-sm text-ink-2">
              <div className={wiki.lang === 'es' ? 'es' : ''}>{wiki.extract.length > 420 ? `${wiki.extract.slice(0, 420)}…` : wiki.extract}</div>
              <a href={wiki.url} target="_blank" rel="noopener noreferrer" className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-primary-ink">
                维基百科{wiki.lang === 'es' ? '（西语）' : ''} · 阅读全文 <ExternalLink size={12} />
              </a>
            </div>
          )}
        </div>
      </div>

      <Section title="在 Oliva 学唱">
        <div className="flex flex-col gap-2">
          {songs.map((s) => (
            <Link key={s.id} to={`/songs/${s.id}`} className="card flex items-center gap-3 p-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <GraduationCap size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="es block truncate font-bold">{s.title}</span>
                <span className="block text-xs text-ink-3">
                  {STYLES.find((x) => x.id === s.style)?.label}
                  {s.year ? ` · ${s.year}` : ''} · {s.level}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="其它作品">
        {works === 'loading' ? (
          <div className="flex items-center gap-2 text-sm text-ink-3">
            <Loader2 size={15} className="animate-spin" /> 正在读取作品列表…
          </div>
        ) : works === 'error' ? (
          <div className="text-sm text-ink-3">暂时读不到作品列表，请检查网络。</div>
        ) : (
          <ul className="flex flex-col gap-2">
            {works.map((t) => {
              const learn = inCatalog.get(workKey(t.trackName))
              return (
                <li key={t.trackId} className="card flex items-center gap-3 p-2.5">
                  <button
                    type="button"
                    className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-surface-2 disabled:opacity-60"
                    onClick={() => preview(t)}
                    disabled={!t.previewUrl}
                    aria-label={playing === t.trackId ? '停止试听' : '试听 30 秒'}
                  >
                    {t.artworkUrl100 && <img src={t.artworkUrl100} alt="" className="h-full w-full object-cover" loading="lazy" />}
                    <span className="absolute inset-0 flex items-center justify-center bg-black/35 text-white">{playing === t.trackId ? <Pause size={18} /> : <Play size={18} />}</span>
                  </button>
                  <div className="min-w-0 flex-1">
                    <div className="es truncate font-bold">{t.trackName}</div>
                    <div className="truncate text-xs text-ink-3">
                      {t.collectionName}
                      {t.releaseDate ? ` · ${t.releaseDate.slice(0, 4)}` : ''}
                    </div>
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs font-bold">
                      <a className="text-primary-ink" href={`https://www.youtube.com/results?search_query=${q(t.trackName)}`} target="_blank" rel="noopener noreferrer">
                        YouTube
                      </a>
                      <a className="text-primary-ink" href={`https://open.spotify.com/search/${q(t.trackName)}`} target="_blank" rel="noopener noreferrer">
                        Spotify
                      </a>
                      {t.trackViewUrl && (
                        <a className="text-primary-ink" href={t.trackViewUrl} target="_blank" rel="noopener noreferrer">
                          Apple Music
                        </a>
                      )}
                    </div>
                  </div>
                  {learn ? (
                    <Link to={`/songs/${learn}`} className="chip chip-on shrink-0">
                      <GraduationCap size={13} /> 学唱
                    </Link>
                  ) : (
                    <button type="button" className="chip shrink-0" onClick={() => nav(`/songs?add=1&artist=${encodeURIComponent(a.name)}&title=${encodeURIComponent(t.trackName.replace(/\s*[([].*?[)\]]/g, ''))}`)}>
                      <Plus size={13} /> 添加来学
                    </button>
                  )}
                </li>
              )
            })}
          </ul>
        )}
        <p className="mt-3 text-xs text-ink-3">作品列表和 30 秒试听来自 Apple iTunes；简介摘要来自维基百科（CC BY-SA）。</p>
      </Section>
    </div>
  )
}
