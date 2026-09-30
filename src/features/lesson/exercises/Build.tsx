import { useEffect, useState } from 'react'
import { checkAnswer } from '../../../lib/answer/check'
import { speak } from '../../../lib/speech/tts'
import type { ExProps } from './types'
import { Prompt } from './Prompt'

export function Build({ ex, locked, setAnswer }: ExProps<'build'>) {
  const [picked, setPicked] = useState<number[]>([])

  useEffect(() => {
    if (!picked.length) setAnswer(null)
    else
      setAnswer(() => {
        const user = picked.map((i) => ex.tokens[i]).join(' ')
        const r = checkAnswer(user, ex.answers, { strict: true })
        return { correct: r.ok, user, expected: ex.answers[0], warn: r.warn }
      })
  }, [picked, ex, setAnswer])

  return (
    <div>
      <Prompt prompt={ex.prompt} promptLang={ex.promptLang} audio={ex.audio} />
      <div className="mb-6 flex min-h-[112px] flex-wrap content-start gap-2 border-b-2 border-t-2 border-line py-3" style={{ backgroundImage: 'linear-gradient(var(--line) 2px, transparent 2px)', backgroundSize: '100% 56px', backgroundPosition: '0 52px' }}>
        {picked.map((i) => (
          <button
            key={i}
            type="button"
            disabled={locked}
            className="tile es anim-pop !px-3 !py-2 text-lg"
            onClick={() => setPicked((p) => p.filter((x) => x !== i))}
          >
            {ex.tokens[i]}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {ex.tokens.map((t, i) => {
          const used = picked.includes(i)
          return (
            <button
              key={i}
              type="button"
              disabled={locked || used}
              className={`tile es !px-3 !py-2 text-lg ${used ? '!bg-surface-2 !text-transparent !shadow-none' : ''}`}
              onClick={() => {
                speak(t)
                setPicked((p) => [...p, i])
              }}
            >
              {t}
            </button>
          )
        })}
      </div>
    </div>
  )
}
