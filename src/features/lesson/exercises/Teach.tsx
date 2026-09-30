import type { Exercise } from '../../../lib/exercises/types'
import { WordCard } from '../../../components/WordCard'
import { GrammarView } from '../../../components/GrammarView'
import { DialogueView } from '../../../components/DialogueView'
import { ReadingView } from '../../../components/ReadingView'

export function Teach({ ex }: { ex: Exercise }) {
  switch (ex.kind) {
    case 'teach-word':
      return (
        <WordCard word={ex.word} autoPlay />
      )
    case 'teach-grammar':
      return <GrammarView g={ex.grammar} compact />
    case 'teach-dialogue':
      return <DialogueView dialogue={ex.dialogue} />
    case 'teach-reading':
      return <ReadingView reading={ex.reading} />
    default:
      return null
  }
}
