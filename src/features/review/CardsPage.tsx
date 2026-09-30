import { Eye, Keyboard, Volume2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Rating, State, type Grade } from 'ts-fsrs'
import { getContent } from '../../content'
import type { Word } from '../../content/types'
import { Mascot } from '../../components/Mascot'
import { PageHeader } from '../../components/PageHeader'
import { ProgressBar } from '../../components/ProgressBar'
import { SpeakButton, SpeedControl } from '../../components/Speak'
import { WordCard } from '../../components/WordCard'
import { checkAnswer } from '../../lib/answer/check'
import { wordAnswers, wordLabel, wordSpeech } from '../../lib/exercises/generate'
import { sfx } from '../../lib/sfx'
import { speak } from '../../lib/speech/tts'
import { db, type CardRow } from '../../store/db'
import { useProgress } from '../../store/progress'
import { addCards, previewIntervals, rateCard } from '../../store/review'
import { useSettings } from '../../store/settings'
import { AccentBar, insertAt } from '../lesson/exercises/AccentBar'
import { useTutorContext } from '../tutor/store'

type Face = 'read' | 'recall' | 'listen'

function fmtInterval(d: Date): string {
  const min = Math.max(1, Math.round((d.getTime() - Date.now()) / 60000))
  if (min < 60) return `${min} 分钟`
  const h = Math.round(min / 60)
  if (h < 24) return `${h} 小时`
  const days = Math.round(h / 24)
  if (days < 31) return `${days} 天`
  const mo = Math.round(days / 30)
  return mo < 12 ? `${mo} 个月` : `${(days / 365).toFixed(1)} 年`
}

const RATINGS: { g: Grade; label: string; cls: string }[] = [
  { g: Rating.Again, label: '忘记了', cls: 'btn-bad' },
  { g: Rating.Hard, label: '模糊', cls: 'btn-accent' },
  { g: Rating.Good, label: '记得', cls: 'btn-primary' },
  { g: Rating.Easy, label: '太简单', cls: 'btn-ghost' },
]

export function CardsPage() {
  const c = getContent()
  const nav = useNavigate()
  const perDay = useSettings((s) => s.newWordsPerDay)
  const addXp = useProgress((s) => s.addXp)
  const [queue, setQueue] = useState<CardRow[] | null>(null)
  const [i, setI] = useState(0)
  const [face, setFace] = useState<Face>('read')
  const [revealed, setRevealed] = useState(false)
  const [typed, setTyped] = useState('')
  const [typedOk, setTypedOk] = useState<boolean | null>(null)
  const [reviewed, setReviewed] = useState(0)
  const started = useRef(Date.now())
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const load = async () => {
    const due = await db.cards.where('due').belowOrEqual(new Date()).sortBy('due')
    setQueue(due.filter((d) => c.wordById.has(d.wordId)).slice(0, 60))
    setI(0)
  }
  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const card = queue?.[i]
  const word: Word | undefined = card ? c.wordById.get(card.wordId) : undefined
  useTutorContext(word ? `背单词：${word.es}（${word.zh}）` : '背单词')

  // choose a face for each card
  useEffect(() => {
    if (!card) return
    const r = Math.random()
    setFace(card.state === State.New ? 'read' : r < 0.45 ? 'read' : r < 0.75 ? 'recall' : 'listen')
    setRevealed(false)
    setTyped('')
    setTypedOk(null)
  }, [card])

  useEffect(() => {
    if (card && word && face === 'listen') speak(wordSpeech(word))
  }, [face, card, word])

  const finishSession = () => {
    if (reviewed) addXp(Math.min(30, reviewed), Math.round((Date.now() - started.current) / 1000))
  }

  const rate = async (g: Grade) => {
    if (!card || !queue) return
    await rateCard(card.wordId, g)
    setReviewed((n) => n + 1)
    const fresh = await db.cards.get(card.wordId)
    const nextQ = queue.slice()
    // cards due again within 10 minutes come back in this session
    if (fresh && fresh.due.getTime() - Date.now() < 10 * 60000) nextQ.push(fresh)
    setQueue(nextQ)
    if (i + 1 >= nextQ.length) finishSession()
    setI((x) => x + 1)
  }

  const checkTyped = () => {
    if (!word || !typed.trim()) return
    const r = checkAnswer(typed, wordAnswers(word))
    setTypedOk(r.ok)
    if (r.ok) sfx.correct()
    else sfx.wrong()
    setRevealed(true)
    speak(wordSpeech(word))
  }

  // keyboard: space = reveal, 1-4 = rate
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'TEXTAREA') return
      if (!revealed && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault()
        setRevealed(true)
        if (word) speak(wordSpeech(word))
      } else if (revealed && ['1', '2', '3', '4'].includes(e.key)) rate(RATINGS[Number(e.key) - 1].g)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  })

  if (!queue) return null

  if (!card || !word) {
    const learnNew = async () => {
      const have = new Set((await db.cards.toCollection().primaryKeys()) as string[])
      const done = useProgress.getState().lessons
      // prefer words from lessons the learner has completed, then the next words in course order
      const taught = c.lessons.filter((l) => l.kind === 'vocab' && done[l.id]).flatMap((l) => l.words ?? [])
      const order = [...taught, ...c.words.filter((w) => w.level !== 'A0').map((w) => w.id)]
      const fresh = [...new Set(order)].filter((id) => !have.has(id)).slice(0, perDay)
      await addCards(fresh, 'book')
      await load()
    }
    return (
      <div className="mx-auto max-w-xl">
        <PageHeader back="/review" title="背单词" />
        <div className="card flex flex-col items-center gap-4 p-8 text-center">
          <Mascot mood={reviewed ? 'cheer' : 'sleep'} size={96} />
          <div className="text-xl font-black">{reviewed ? `完成！复习了 ${reviewed} 张卡片` : '现在没有到期的卡片'}</div>
          <p className="text-ink-2">系统会根据你的记忆情况，在快要忘记的时候提醒你复习。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button type="button" className="btn btn-primary" onClick={learnNew}>
              学 {perDay} 个新词
            </button>
            <Link to="/words" className="btn btn-ghost">
              去词书挑选
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const iv = revealed ? previewIntervals(card) : null

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-4 flex items-center gap-3">
        <button type="button" className="btn btn-plain btn-sm" onClick={() => (finishSession(), nav('/review'))}>
          结束
        </button>
        <ProgressBar value={i / queue.length} className="flex-1" />
        <span className="text-sm font-bold text-ink-3">
          {i + 1}/{queue.length}
        </span>
        <SpeedControl compact />
      </div>

      <div className="card min-h-[420px] p-6">
        <div className="mb-4 flex items-center gap-2 text-xs font-black text-ink-3">
          {card.state === State.New && <span className="rounded-md bg-accent px-1.5 py-0.5 text-[#2b2108]">新词</span>}
          {face === 'read' && (
            <span className="flex items-center gap-1">
              <Eye size={14} /> 认读：想想它的意思
            </span>
          )}
          {face === 'recall' && (
            <span className="flex items-center gap-1">
              <Keyboard size={14} /> 回忆：写出西班牙语
            </span>
          )}
          {face === 'listen' && (
            <span className="flex items-center gap-1">
              <Volume2 size={14} /> 听音：想想它的意思
            </span>
          )}
        </div>

        {!revealed ? (
          <div className="flex min-h-[280px] flex-col items-center justify-center gap-6 text-center">
            {face === 'read' && (
              <>
                <div className="es text-4xl font-black">{wordLabel(word)}</div>
                <SpeakButton text={wordSpeech(word)} size="md" />
              </>
            )}
            {face === 'listen' && (
              <div className="flex gap-3">
                <SpeakButton text={wordSpeech(word)} size="xl" />
                <SpeakButton text={wordSpeech(word)} size="lg" slow />
              </div>
            )}
            {face === 'recall' && (
              <div className="w-full">
                <div className="mb-4 text-3xl font-black">{word.zh}</div>
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={typed}
                  onChange={(e) => setTyped(e.target.value.replace(/\n/g, ''))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                      e.preventDefault()
                      checkTyped()
                    }
                  }}
                  className="input es resize-none text-center text-xl"
                  placeholder="输入西班牙语…"
                  autoCapitalize="off"
                  spellCheck={false}
                  autoFocus
                />
                <div className="flex justify-center">
                  <AccentBar onInsert={(ch) => insertAt(inputRef.current, typed, ch, setTyped)} />
                </div>
              </div>
            )}
            <button
              type="button"
              className="btn btn-primary w-full max-w-xs"
              onClick={() => {
                if (face === 'recall' && typed.trim()) checkTyped()
                else {
                  setRevealed(true)
                  speak(wordSpeech(word))
                }
              }}
            >
              {face === 'recall' && typed.trim() ? '检查' : '显示答案'}
            </button>
          </div>
        ) : (
          <div className="anim-fade">
            {typedOk != null && (
              <div className={`mb-4 rounded-2xl px-4 py-2 font-bold ${typedOk ? 'bg-ok-soft text-ok-strong' : 'bg-bad-soft text-bad-strong'}`}>
                {typedOk ? '拼写正确！' : `你写的是「${typed}」`}
              </div>
            )}
            <WordCard word={word} big={false} />
          </div>
        )}
      </div>

      {revealed && iv && (
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {RATINGS.map((r, k) => (
            <button key={r.g} type="button" className={`btn ${r.cls} flex-col !gap-0 !py-2.5`} onClick={() => rate(r.g)}>
              <span>{r.label}</span>
              <span className="text-xs font-bold opacity-80">
                <span className="kbd mr-1 hidden !border-current sm:inline">{k + 1}</span>
                {fmtInterval(iv[r.g])}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
