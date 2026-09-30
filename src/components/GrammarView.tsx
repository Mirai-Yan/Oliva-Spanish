import { AlertTriangle, Globe2, ScrollText } from 'lucide-react'
import type { GrammarPoint } from '../content/types'
import { ConjTable } from './ConjTable'
import { EsText } from './EsText'
import { Markdown } from './Markdown'
import { SpeakButton } from './Speak'

export function GrammarView({ g, compact = false }: { g: GrammarPoint; compact?: boolean }) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-black leading-tight">{g.title}</h2>
        {g.titleEs && <div className="es mt-0.5 font-bold text-ink-3">{g.titleEs}</div>}
        <p className="mt-2 rounded-2xl bg-primary-soft px-4 py-3 font-bold text-primary-ink">{g.summary}</p>
      </div>
      <Markdown>{g.body}</Markdown>
      {g.tables?.length ? (
        <div className={`grid gap-3 ${compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
          {g.tables.flatMap((t) => t.verbs.map((v) => <ConjTable key={v + t.tense} verb={v} tense={t.tense} compact />))}
        </div>
      ) : null}
      {g.examples.length > 0 && (
        <div>
          <h3 className="mb-2 font-black">例句</h3>
          <div className="flex flex-col gap-2">
            {g.examples.map(([es, zh], i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl bg-surface-2 p-3">
                <SpeakButton text={es} size="sm" />
                <div>
                  <div className="es font-bold">
                    <EsText text={es} />
                  </div>
                  <div className="text-sm text-ink-2">{zh}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {g.origin && (
        <div className="rounded-2xl border-2 border-[color-mix(in_oklch,var(--accent)_40%,transparent)] bg-accent-soft p-4">
          <div className="mb-1 flex items-center gap-1.5 font-black text-accent-ink">
            <ScrollText size={18} /> 语法溯源
          </div>
          <Markdown>{g.origin}</Markdown>
        </div>
      )}
      {g.pitfalls?.length ? (
        <div className="rounded-2xl border-2 border-[color-mix(in_oklch,var(--bad)_30%,transparent)] bg-bad-soft p-4">
          <div className="mb-1 flex items-center gap-1.5 font-black text-bad-strong">
            <AlertTriangle size={18} /> 中国学生易错
          </div>
          <ul className="prose-oliva">
            {g.pitfalls.map((p, i) => (
              <li key={i}>
                <Markdown>{p}</Markdown>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {g.latam && (
        <div className="flex gap-2 rounded-2xl bg-surface-2 p-4">
          <Globe2 size={18} className="mt-1 shrink-0 text-primary" />
          <div>
            <b>拉美差异：</b>
            <Markdown>{g.latam}</Markdown>
          </div>
        </div>
      )}
    </div>
  )
}
