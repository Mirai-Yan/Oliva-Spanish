import { conjugate, PERSONS, TENSE_BY_ID, type Tense } from '../lib/conjugate'
import { SpeakButton } from './Speak'

export function ConjTable({ verb, tense, compact = false }: { verb: string; tense: Tense; compact?: boolean }) {
  const forms = conjugate(verb, tense)
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-line">
      <div className="flex items-center justify-between bg-primary-soft px-3 py-2">
        <span className="es font-black text-primary-ink">{verb}</span>
        <span className="text-xs font-bold text-primary-ink">{TENSE_BY_ID[tense].zh}</span>
      </div>
      <table className="w-full text-left">
        <tbody>
          {forms.map((f, i) =>
            f == null ? null : (
              <tr key={i} className="border-t border-line">
                <td className={`w-[45%] px-3 ${compact ? 'py-1' : 'py-1.5'} text-sm text-ink-3`}>{PERSONS[i]}</td>
                <td className={`es px-3 ${compact ? 'py-1' : 'py-1.5'} font-bold`}>{f}</td>
                <td className="w-10 pr-2 text-right">
                  <SpeakButton text={f} size="sm" className="!h-7 !w-7 !shadow-none" />
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  )
}
