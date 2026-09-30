import { Globe2, Languages, Sprout, StickyNote } from 'lucide-react'
import { POS_ZH, type Word } from '../content/types'
import { wordLabel, wordSpeech } from '../lib/exercises/generate'
import { EsText } from './EsText'
import { SpeakButton } from './Speak'

const G_ZH = { m: '阳性', f: '阴性', mf: '阴阳同形' }

export function WordCard({ word, autoPlay = false, big = true }: { word: Word; autoPlay?: boolean; big?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {word.emoji && <div className={big ? 'text-6xl' : 'text-4xl'}>{word.emoji}</div>}
        <div className="min-w-0 flex-1">
          <div className={`es font-black leading-tight ${big ? 'text-4xl' : 'text-2xl'}`}>{wordLabel(word)}</div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            <span className="chip">{POS_ZH[word.pos]}</span>
            {word.g && <span className="chip">{G_ZH[word.g]}</span>}
            {word.pl && <span className="chip es">复数 {word.pl}</span>}
            <span className="chip">{word.level === 'A0' ? '发音' : word.level}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <SpeakButton text={wordSpeech(word)} size="lg" autoPlay={autoPlay} />
          <SpeakButton text={wordSpeech(word)} size="sm" slow className="self-center" />
        </div>
      </div>
      <div className="text-2xl font-bold">{word.zh}</div>
      {word.ex && (
        <div className="rounded-2xl bg-surface-2 p-4">
          <div className="flex items-start gap-3">
            <SpeakButton text={word.ex[0]} size="sm" />
            <div>
              <div className="es text-lg font-bold">
                <EsText text={word.ex[0]} />
              </div>
              <div className="text-ink-2">{word.ex[1]}</div>
            </div>
          </div>
        </div>
      )}
      {word.ety && (
        <div className="rounded-2xl border-2 border-[color-mix(in_oklch,var(--accent)_40%,transparent)] bg-accent-soft p-4">
          <div className="mb-1 flex items-center gap-1.5 text-sm font-black text-accent-ink">
            <Sprout size={16} /> 词源
          </div>
          <div className="leading-relaxed">{word.ety}</div>
        </div>
      )}
      {(word.en || word.latam || word.note) && (
        <div className="flex flex-col gap-2 text-[15px]">
          {word.en && (
            <div className="flex gap-2">
              <Languages size={18} className="mt-0.5 shrink-0 text-info" />
              <span>
                <b>同源词：</b>
                {word.en}
              </span>
            </div>
          )}
          {word.latam && (
            <div className="flex gap-2">
              <Globe2 size={18} className="mt-0.5 shrink-0 text-primary" />
              <span>
                <b>拉美：</b>
                {word.latam}
              </span>
            </div>
          )}
          {word.note && (
            <div className="flex gap-2">
              <StickyNote size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>{word.note}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
