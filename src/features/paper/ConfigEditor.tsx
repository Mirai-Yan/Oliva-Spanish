import { Minus, Plus, Wand2 } from 'lucide-react'
import { configTotal, fitTotal } from '../../lib/paper/exercises'
import { SECTIONS, type PaperConfig, type SectionId } from '../../lib/paper/types'

const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1))

function Stepper({ value, onChange, min, max, step, label }: { value: number; onChange: (v: number) => void; min: number; max: number; step: number; label: string }) {
  const set = (v: number) => onChange(Math.min(max, Math.max(min, Math.round(v / step) * step)))
  return (
    <div className="flex items-center gap-1" aria-label={label}>
      <button type="button" className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-2 disabled:opacity-40" onClick={() => set(value - step)} disabled={value <= min} aria-label={`${label}减少`}>
        <Minus size={16} />
      </button>
      <span className="w-10 text-center text-lg font-black tabular-nums">{fmt(value)}</span>
      <button type="button" className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-2 disabled:opacity-40" onClick={() => set(value + step)} disabled={value >= max} aria-label={`${label}增加`}>
        <Plus size={16} />
      </button>
    </div>
  )
}

/** Question counts and points per question type, with a live total. */
export function ConfigEditor({ config, onChange }: { config: PaperConfig; onChange: (c: PaperConfig) => void }) {
  const total = configTotal(config)
  const setSec = (id: SectionId, patch: Partial<{ count: number; points: number }>) =>
    onChange({ ...config, sections: { ...config.sections, [id]: { ...config.sections[id], ...patch } } })
  const questions = SECTIONS.reduce((a, s) => a + config.sections[s.id].count, 0)

  return (
    <div className="flex flex-col gap-3">
      {SECTIONS.map((s) => {
        const sec = config.sections[s.id]
        const off = sec.count === 0
        return (
          <div key={s.id} className={`card p-3 ${off ? 'opacity-60' : ''}`}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="min-w-[8rem] flex-1">
                <div className="font-black">{s.label}</div>
                <div className="text-xs text-ink-3">{s.desc}</div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-ink-3">{s.unit === '对' ? '对数' : '题数'}</span>
                  <Stepper label={`${s.label}题数`} value={sec.count} min={0} max={s.id === 'match' ? 20 : 25} step={1} onChange={(v) => setSec(s.id, { count: v })} />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-ink-3">每{s.unit}</span>
                  <Stepper label={`${s.label}每题分值`} value={sec.points} min={0.5} max={20} step={0.5} onChange={(v) => setSec(s.id, { points: v })} />
                  <span className="text-xs font-bold text-ink-3">分</span>
                </div>
                <div className="w-16 text-right text-sm font-black text-primary-ink">{off ? '不考' : `${fmt(sec.count * sec.points)} 分`}</div>
              </div>
            </div>
          </div>
        )
      })}
      <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-primary-soft px-4 py-3">
        <div className="flex-1 font-black">
          共 {questions} 题 · 总分 <span className="text-2xl text-primary-ink">{fmt(total)}</span> 分
        </div>
        {total !== 100 && questions > 0 && (
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => onChange(fitTotal(config))}>
            <Wand2 size={15} /> 按比例凑满 100 分
          </button>
        )}
      </div>
    </div>
  )
}
