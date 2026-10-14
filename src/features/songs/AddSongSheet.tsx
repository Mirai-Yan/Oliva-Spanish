import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sheet } from '../../components/Sheet'
import { youtubeId } from '../../lib/songs/sing'
import { db } from '../../store/db'

/** Add any song by YouTube link; lyrics are looked up on LRCLIB when it opens. */
export function AddSongSheet({ open, onClose, initial }: { open: boolean; onClose: () => void; initial?: { title?: string; artist?: string } }) {
  const nav = useNavigate()
  const [link, setLink] = useState('')
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [err, setErr] = useState('')

  useEffect(() => {
    if (!open) return
    setTitle(initial?.title ?? '')
    setArtist(initial?.artist ?? '')
    setLink('')
    setErr('')
  }, [open, initial?.title, initial?.artist])

  const save = async () => {
    const id = youtubeId(link)
    if (!id) return setErr('没有识别出 YouTube 视频链接')
    if (!title.trim() || !artist.trim()) return setErr('请填写歌名和歌手，用来查找歌词')
    const songId = `u-${id}`
    await db.userSongs.put({ id: songId, title: title.trim(), artist: artist.trim(), youtubeId: id, addedAt: Date.now() })
    onClose()
    nav(`/songs/${songId}`)
  }

  const search = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${artist} ${title}`.trim() || 'canción en español')}`

  return (
    <Sheet open={open} onClose={onClose} title="添加一首歌">
      <p className="mb-3 text-sm text-ink-2">
        在 YouTube 找到这首歌（最好是唱片公司的官方音频，标题里常带「Topic」或「Audio」，时间轴最准），复制链接粘贴到下面。
      </p>
      <div className="flex flex-col gap-3">
        <label className="block">
          <span className="mb-1 block text-xs font-bold text-ink-3">歌名</span>
          <input className="input es" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="例如：Me voy" />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-bold text-ink-3">歌手</span>
          <input className="input es" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="例如：Julieta Venegas" />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-bold text-ink-3">YouTube 链接</span>
          <input className="input" value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://www.youtube.com/watch?v=…" inputMode="url" />
        </label>
        <a href={search} target="_blank" rel="noopener noreferrer" className="btn btn-plain btn-sm self-start">
          <Search size={15} /> 去 YouTube 搜索这首歌
        </a>
        {err && <div className="rounded-xl bg-bad-soft px-3 py-2 text-sm font-bold text-bad-strong">{err}</div>}
        <button type="button" className="btn btn-primary" onClick={save}>
          添加并打开
        </button>
      </div>
    </Sheet>
  )
}
