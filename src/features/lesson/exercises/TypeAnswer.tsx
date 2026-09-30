import { useEffect, useRef, useState } from 'react'
import { checkAnswer } from '../../../lib/answer/check'
import { useSettings } from '../../../store/settings'
import type { ExProps } from './types'
import { Prompt } from './Prompt'
import { AccentBar, insertAt } from './AccentBar'

export function TypeAnswer({ ex, locked, setAnswer, submit, outcome }: ExProps<'type'>) {
  const [val, setVal] = useState('')
  const ref = useRef<HTMLTextAreaElement>(null)
  const strictAccents = useSettings((s) => s.strictAccents)
  const long = ex.answers[0].length > 24

  useEffect(() => {
    if (!val.trim()) setAnswer(null)
    else
      setAnswer(() => {
        const r = checkAnswer(val, ex.answers, { strict: ex.strict, strictAccents })
        return { correct: r.ok, user: val.trim(), expected: r.best, warn: r.warn }
      })
  }, [val, ex, setAnswer, strictAccents])

  useEffect(() => {
    const t = setTimeout(() => ref.current?.focus(), 350)
    return () => clearTimeout(t)
  }, [])

  return (
    <div>
      <Prompt
        prompt={ex.prompt}
        promptLang={ex.promptLang}
        audio={ex.audio}
        audioOnly={!!ex.audio && !ex.prompt}
        cloze={ex.cloze}
        sub={ex.audio && !ex.prompt ? undefined : ex.sub}
        filled={locked && ex.cloze ? (outcome?.correct ? val.trim() : ex.answers[0]) : undefined}
      />
      <textarea
        ref={ref}
        value={val}
        disabled={locked}
        onChange={(e) => setVal(e.target.value.replace(/\n/g, ''))}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
            e.preventDefault()
            submit()
          }
        }}
        rows={long ? 3 : 1}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        lang="es"
        placeholder={ex.placeholder ?? '输入答案…'}
        className={`input es resize-none text-lg ${locked ? (outcome?.correct ? '!border-ok' : '!border-bad') : ''}`}
      />
      <AccentBar disabled={locked} onInsert={(c) => insertAt(ref.current, val, c, setVal)} />
      {ex.audio && !ex.prompt && ex.sub && locked && <div className="mt-3 text-sm font-semibold text-ink-2">意思：{ex.sub}</div>}
    </div>
  )
}
