import { useEffect, useState } from 'react'
import { speak } from '../../../lib/speech/tts'
import type { ExProps } from './types'
import { Prompt } from './Prompt'

export function Choice({ ex, locked, setAnswer }: ExProps<'choice'>) {
  const [sel, setSel] = useState<number | null>(null)
  const long = ex.options.some((o) => o.length > 18)

  useEffect(() => {
    if (sel == null) setAnswer(null)
    else setAnswer(() => ({ correct: sel === ex.answer, user: ex.options[sel], expected: ex.options[ex.answer] }))
  }, [sel, ex, setAnswer])

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (locked) return
      const n = Number(e.key)
      if (n >= 1 && n <= ex.options.length) pick(n - 1)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  })

  const pick = (i: number) => {
    if (locked) return
    setSel(i)
    if (ex.speakOptions || ex.optionLang === 'es') speak(ex.options[i])
  }

  const filled = locked && ex.cloze ? ex.options[ex.answer] : sel != null && ex.cloze ? ex.options[sel] : undefined

  return (
    <div>
      <Prompt prompt={ex.prompt} promptLang={ex.promptLang} audio={ex.audio} audioOnly={ex.audioOnly} cloze={ex.cloze} sub={ex.sub} filled={filled} />
      <div className={`grid gap-3 ${long ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {ex.options.map((o, i) => {
          let cls = 'tile'
          if (locked) {
            if (i === ex.answer) cls += ' tile-ok'
            else if (i === sel) cls += ' tile-bad'
            else cls += ' opacity-60'
          } else if (i === sel) cls += ' tile-on'
          return (
            <button key={i} type="button" className={`${cls} flex items-center gap-3`} onClick={() => pick(i)} disabled={locked}>
              <span className="kbd hidden sm:inline">{i + 1}</span>
              <span className={`text-lg ${ex.optionLang === 'es' ? 'es' : ''}`}>{o}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
