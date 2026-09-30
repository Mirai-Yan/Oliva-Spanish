import { SpeakButton } from '../../../components/Speak'
import type { Lang } from '../../../lib/exercises/types'

/** Renders the question area shared by several exercise types. */
export function Prompt({
  prompt,
  promptLang,
  audio,
  audioOnly,
  cloze,
  sub,
  filled,
  autoPlay = true,
}: {
  prompt?: string
  promptLang?: Lang
  audio?: string
  audioOnly?: boolean
  cloze?: string
  sub?: string
  /** text to show in the blank after answering */
  filled?: string
  autoPlay?: boolean
}) {
  return (
    <div className="mb-6 flex flex-col gap-4">
      {audioOnly && audio && (
        <div className="flex items-center justify-center gap-4 py-4">
          <SpeakButton text={audio} size="xl" autoPlay={autoPlay} />
          <SpeakButton text={audio} size="lg" slow />
        </div>
      )}
      {!audioOnly && (prompt || audio) && (
        <div className="flex items-center gap-3">
          {audio && <SpeakButton text={audio} size="md" autoPlay={autoPlay} />}
          {audio && <SpeakButton text={audio} size="sm" slow />}
          {prompt && (
            <div className={`rounded-2xl border-2 border-line px-4 py-3 text-xl font-bold ${promptLang === 'es' ? 'es' : ''}`}>
              {prompt}
            </div>
          )}
        </div>
      )}
      {cloze && (
        <div className="es text-2xl font-bold leading-relaxed">
          {cloze.split('___').map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className={`mx-1 inline-block min-w-[4.5rem] border-b-4 px-1 text-center ${filled ? 'border-primary text-primary-ink' : 'border-ink-3'}`}>
                  {filled ?? ' '}
                </span>
              )}
            </span>
          ))}
        </div>
      )}
      {sub && <div className="text-base font-semibold text-ink-2">{sub}</div>}
    </div>
  )
}
