import { ChevronRight, Search } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getContent } from '../../content'
import { LEVEL_INFO } from '../../content/types'
import { PageHeader } from '../../components/PageHeader'
import { searchKey } from '../../lib/text/normalize'

export function GrammarList() {
  const c = getContent()
  const [q, setQ] = useState('')
  const k = searchKey(q)
  const match = (s: string) => !k || searchKey(s).includes(k) || s.includes(q.trim())
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="语法手册" sub="所有语法点的讲解、变位表和语法溯源" />
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-3" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="搜索语法点，例如 ser、过去时、虚拟式…" className="input !pl-11" />
      </div>
      {c.levels.map((lvl) => {
        const units = c.units.filter((u) => u.level === lvl)
        const items = units.flatMap((u) => u.grammar.map((g) => ({ g, u }))).filter(({ g }) => match(g.title + ' ' + (g.titleEs ?? '') + ' ' + g.summary))
        if (!items.length) return null
        return (
          <section key={lvl} className="mb-8">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-black">
              <span className="rounded-lg bg-accent px-2 py-0.5 text-sm text-[#2b2108]">{lvl === 'A0' ? '起步' : lvl}</span>
              {LEVEL_INFO[lvl].name}
            </h2>
            <div className="flex flex-col gap-2">
              {items.map(({ g, u }) => (
                <Link key={g.id} to={`/grammar/${g.id}`} className="tile flex items-center gap-3">
                  <span className="text-2xl">{u.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block">{g.title}</span>
                    <span className="block truncate text-sm font-semibold text-ink-3">{g.summary}</span>
                  </span>
                  <ChevronRight size={18} className="text-ink-3" />
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
