import { useEffect, useState } from 'react'
import { SpeakButton } from '../../../components/Speak'
import type { ExProps } from './types'

export function Stress({ ex, locked, setAnswer }: ExProps<'stress'>) {
  const [sel, setSel] = useState<number | null>(null)
  useEffect(() => {
    if (sel == null) setAnswer(null)
    else setAnswer(() => ({ correct: sel === ex.answer, user: ex.syllables[sel], expected: ex.syllables.map((s, i) => (i === ex.answer ? s.toUpperCase() : s)).join('-') }))
  }, [sel, ex, setAnswer])
  return (
    <div className="flex flex-col items-center gap-6 py-4">
      <div className="flex items-center gap-3">
        <SpeakButton text={ex.word} size="lg" autoPlay />
        <SpeakButton text={ex.word} size="md" slow />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {ex.syllables.map((s, i) => {
          let cls = 'tile'
          if (locked) cls += i === ex.answer ? ' tile-ok' : i === sel ? ' tile-bad' : ''
          else if (i === sel) cls += ' tile-on'
          return (
            <button key={i} type="button" disabled={locked} className={`${cls} es min-w-[64px] !py-4 text-center text-2xl`} onClick={() => setSel(i)}>
              {s}
            </button>
          )
        })}
      </div>
      <p className="text-sm text-ink-3">提示：没有重音符号时，以元音、n、s 结尾的词重读倒数第二个音节，否则重读最后一个。</p>
    </div>
  )
}
