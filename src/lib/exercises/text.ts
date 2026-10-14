import type { Exercise } from './types'

/** The question content (sentence / prompt / heard text) as one line, for notebooks and result lists. */
export function questionText(ex: Exercise): string {
  switch (ex.kind) {
    case 'choice':
    case 'type':
      return ex.cloze ?? ex.prompt ?? (ex.audio ? `🔊 ${ex.audio}` : '')
    case 'build':
      return ex.prompt
    case 'speak':
      return ex.text
    case 'stress':
      return ex.word
    default:
      return ''
  }
}
