import { useMemo, useState } from 'react'
import { shuffle } from '../../../lib/text/normalize'
import { speak } from '../../../lib/speech/tts'
import { sfx } from '../../../lib/sfx'
import type { ExProps } from './types'

export function Match({ ex, locked, finish }: ExProps<'match'>) {
  const left = useMemo(() => shuffle(ex.pairs.map((p, i) => ({ t: p[0], i }))), [ex])
  const right = useMemo(() => shuffle(ex.pairs.map((p, i) => ({ t: p[1], i }))), [ex])
  const [selL, setSelL] = useState<number | null>(null)
  const [selR, setSelR] = useState<number | null>(null)
  const [done, setDone] = useState<Set<number>>(new Set())
  const [wrong, setWrong] = useState<[number, number] | null>(null)
  const [misses, setMisses] = useState(0)

  const attempt = (l: number | null, r: number | null) => {
    if (l == null || r == null) return
    if (l === r) {
      const next = new Set(done).add(l)
      setDone(next)
      sfx.match()
      setSelL(null)
      setSelR(null)
      if (next.size === ex.pairs.length) {
        setTimeout(() => finish({ correct: true, user: misses ? `配错 ${misses} 次` : '全部配对', expected: '' }), 300)
      }
    } else {
      setWrong([l, r])
      setMisses((m) => m + 1)
      sfx.wrong()
      setTimeout(() => {
        setWrong(null)
        setSelL(null)
        setSelR(null)
      }, 450)
    }
  }

  const tileCls = (side: 'l' | 'r', i: number) => {
    if (done.has(i)) return 'tile tile-ok opacity-50'
    if (wrong && (side === 'l' ? wrong[0] : wrong[1]) === i) return 'tile tile-bad anim-shake'
    if ((side === 'l' ? selL : selR) === i) return 'tile tile-on'
    return 'tile'
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-3">
        {left.map(({ t, i }) => (
          <button
            key={i}
            type="button"
            disabled={locked || done.has(i)}
            className={`${tileCls('l', i)} es min-h-[56px] text-center text-base`}
            onClick={() => {
              speak(t)
              setSelL(i)
              attempt(i, selR)
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {right.map(({ t, i }) => (
          <button
            key={i}
            type="button"
            disabled={locked || done.has(i)}
            className={`${tileCls('r', i)} min-h-[56px] text-center text-base`}
            onClick={() => {
              setSelR(i)
              attempt(selL, i)
            }}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}
