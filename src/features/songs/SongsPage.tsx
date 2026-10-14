import { useLiveQuery } from 'dexie-react-hooks'
import { Music, Plus, Search, Trash2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PageHeader, Section } from '../../components/PageHeader'
import { ARTISTS, SONGS, artistById } from '../../content/songs/catalog'
import { COUNTRY, STYLES, type SongLevel, type SongStyle } from '../../content/songs/types'
import { searchKey } from '../../lib/text/normalize'
import { db } from '../../store/db'
import { AddSongSheet } from './AddSongSheet'

const LEVELS: SongLevel[] = ['A2', 'B1', 'B2', 'C1']

export function SongsPage() {
  const [params, setParams] = useSearchParams()
  const [style, setStyle] = useState<SongStyle | 'all'>('all')
  const [level, setLevel] = useState<SongLevel | 'all'>('all')
  const [q, setQ] = useState('')
  const mine = useLiveQuery(() => db.userSongs.orderBy('addedAt').reverse().toArray(), [], [])
  const adding = params.get('add') === '1'
  const prefill = useMemo(() => ({ title: params.get('title') ?? '', artist: params.get('artist') ?? '' }), [params])

  const list = useMemo(() => {
    const k = searchKey(q)
    return SONGS.filter((s) => (style === 'all' || s.style === style) && (level === 'all' || s.level === level)).filter((s) => {
      if (!k) return true
      const a = artistById.get(s.artistId)!
      return searchKey(`${s.title} ${a.name} ${s.feat ?? ''} ${s.themes.join(' ')}`).includes(k)
    })
  }, [style, level, q])

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title="听歌学西语"
        sub="跟着原唱学：同步歌词、中文翻译、点词查义、逐句跟唱"
        right={
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setParams({ add: '1' })}>
            <Plus size={16} /> 添加歌曲
          </button>
        }
      />

      <div className="mb-4 flex flex-col gap-2.5">
        <label className="relative block">
          <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-3" />
          <input className="input !pl-10" value={q} onChange={(e) => setQ(e.target.value)} placeholder="搜索歌名、歌手或主题" />
        </label>
        <div className="flex flex-wrap gap-1.5">
          <button type="button" className={`chip ${style === 'all' ? 'chip-on' : ''}`} onClick={() => setStyle('all')}>
            全部风格
          </button>
          {STYLES.map((s) => (
            <button key={s.id} type="button" className={`chip ${style === s.id ? 'chip-on' : ''}`} onClick={() => setStyle(s.id)}>
              {s.icon} {s.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button type="button" className={`chip ${level === 'all' ? 'chip-on' : ''}`} onClick={() => setLevel('all')}>
            全部难度
          </button>
          {LEVELS.map((l) => (
            <button key={l} type="button" className={`chip ${level === l ? 'chip-on' : ''}`} onClick={() => setLevel(l)}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {(mine?.length ?? 0) > 0 && style === 'all' && !q && (
        <Section title="我添加的歌">
          <div className="flex flex-col gap-2">
            {mine!.map((u) => (
              <div key={u.id} className="card flex items-center gap-3 p-3">
                <Link to={`/songs/${u.id}`} className="flex min-w-0 flex-1 items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-surface-2">
                    <Music size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="es block truncate font-bold">{u.title}</span>
                    <span className="block truncate text-sm text-ink-3">{u.artist}</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="rounded-lg p-1.5 text-ink-3 hover:bg-surface-2"
                  aria-label="删除"
                  onClick={async () => {
                    if (!confirm(`删除「${u.title}」？`)) return
                    await db.userSongs.delete(u.id)
                    await db.songLyrics.delete(u.id)
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section title={`精选歌单 · ${list.length} 首`}>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {list.map((s) => {
            const a = artistById.get(s.artistId)!
            return (
              <Link key={s.id} to={`/songs/${s.id}`} className="card flex flex-col gap-1.5 p-3.5 transition hover:border-[var(--primary)]">
                <div className="flex items-start gap-2">
                  <span className="es min-w-0 flex-1 text-[17px] font-black leading-snug">{s.title}</span>
                  <span className="shrink-0 rounded-lg bg-accent px-2 py-0.5 text-xs font-black text-[#2b2108]">{s.level}</span>
                </div>
                <div className="truncate text-sm text-ink-2">
                  {COUNTRY[a.country]?.flag} {a.name}
                  {s.feat ? ` & ${s.feat}` : ''}
                  {s.year ? ` · ${s.year}` : ''}
                </div>
                <div className="flex flex-wrap gap-1">
                  {s.points.slice(0, 3).map((p) => (
                    <span key={p} className="rounded-md bg-primary-soft px-1.5 py-0.5 text-xs font-bold text-primary-ink">
                      {p}
                    </span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
        {!list.length && <div className="rounded-2xl border-2 border-dashed border-line p-6 text-center text-ink-3">没有符合条件的歌</div>}
      </Section>

      <Section title="歌手">
        <div className="flex flex-wrap gap-1.5">
          {ARTISTS.map((a) => (
            <Link key={a.id} to={`/songs/artist/${a.id}`} className="chip">
              {COUNTRY[a.country]?.flag} {a.name}
            </Link>
          ))}
        </div>
      </Section>

      <p className="mb-8 text-xs text-ink-3">
        视频来自 YouTube 官方上传；同步歌词在播放时从开放歌词库 LRCLIB 获取，版权归原作者所有，仅供个人学习。
      </p>

      <AddSongSheet open={adding} onClose={() => setParams({})} initial={prefill} />
    </div>
  )
}
