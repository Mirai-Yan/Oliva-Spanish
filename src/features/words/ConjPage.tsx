import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ConjTable } from '../../components/ConjTable'
import { PageHeader } from '../../components/PageHeader'
import { SpeakButton } from '../../components/Speak'
import { getContent } from '../../content'
import { gerund, isVerbInfinitive, participle, TENSES } from '../../lib/conjugate'
import { searchKey } from '../../lib/text/normalize'

const MOODS = ['陈述式', '虚拟式', '命令式'] as const

export function ConjPage() {
  const { verb: param } = useParams()
  const nav = useNavigate()
  const c = getContent()
  const [q, setQ] = useState(param ?? '')
  const verb = param ? decodeURIComponent(param) : ''
  const suggestions = useMemo(() => {
    const k = searchKey(q)
    if (!k) return []
    return c.words.filter((w) => w.pos === 'v' && searchKey(w.es).startsWith(k)).slice(0, 8)
  }, [q, c])
  const valid = verb && isVerbInfinitive(verb)
  const w = c.words.find((x) => x.es === verb)

  const go = (v: string) => {
    const lemma = c.lookup(v)?.word
    const target = lemma && lemma.pos === 'v' ? lemma.es : v.trim().toLowerCase()
    setQ(target)
    nav(`/words/conj/${encodeURIComponent(target)}`, { replace: true })
  }

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader back="/words" title="动词变位查询" sub="输入原形或任意变位形式，查看全部时态" />
      <form
        className="relative mb-2"
        onSubmit={(e) => {
          e.preventDefault()
          if (q.trim()) go(q)
        }}
      >
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-3" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="例如 tener、hablar、fui…" className="input es !pl-11 text-lg" lang="es" autoCapitalize="off" />
      </form>
      {suggestions.length > 0 && q !== verb && (
        <div className="mb-6 flex flex-wrap gap-1.5">
          {suggestions.map((s) => (
            <button key={s.id} type="button" className="chip es" onClick={() => go(s.es)}>
              {s.es} · {s.zh}
            </button>
          ))}
        </div>
      )}
      {valid ? (
        <>
          <div className="card my-6 flex flex-wrap items-center gap-4 p-4">
            <div className="es text-3xl font-black">{verb}</div>
            {w && <div className="text-lg text-ink-2">{w.zh}</div>}
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="flex items-center gap-1.5">
                副动词 <b className="es">{gerund(verb)}</b> <SpeakButton text={gerund(verb)} size="sm" className="!h-7 !w-7 !shadow-none" />
              </span>
              <span className="flex items-center gap-1.5">
                过去分词 <b className="es">{participle(verb)}</b> <SpeakButton text={participle(verb)} size="sm" className="!h-7 !w-7 !shadow-none" />
              </span>
            </div>
          </div>
          {MOODS.map((m) => (
            <section key={m} className="mb-8">
              <h2 className="mb-3 text-lg font-black">{m}</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {TENSES.filter((t) => t.mood === m).map((t) => (
                  <div key={t.id}>
                    <div className="mb-1 flex items-center justify-between px-1 text-xs font-bold text-ink-3">
                      <span className="es">{t.es}</span>
                      <span>{t.level}</span>
                    </div>
                    <ConjTable verb={verb} tense={t.id} compact />
                  </div>
                ))}
              </div>
            </section>
          ))}
          {!w && <p className="text-sm text-ink-3">这个动词不在内置词库里，变位由规则自动生成；如果它是不规则动词，结果可能不准确。</p>}
        </>
      ) : verb ? (
        <div className="card mt-6 p-5 text-center text-ink-2">「{verb}」看起来不是动词原形（应以 -ar / -er / -ir 结尾）。</div>
      ) : null}
    </div>
  )
}
