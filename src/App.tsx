import { useEffect, useState } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './app/Layout'
import { Mascot } from './components/Mascot'
import { Toaster } from './components/Toast'
import { loadContent } from './content'
import { ThemeApplier } from './theme/ThemeApplier'
import { TutorPanel } from './features/tutor/TutorPanel'
import { PathPage } from './features/path/PathPage'
import { UnitPage } from './features/unit/UnitPage'
import { LessonPage } from './features/lesson/LessonPage'
import { GrammarList } from './features/grammar/GrammarList'
import { GrammarPage } from './features/grammar/GrammarPage'
import { WordsPage } from './features/words/WordsPage'
import { WordPage } from './features/words/WordPage'
import { BookPage } from './features/words/BookPage'
import { ConjPage } from './features/words/ConjPage'
import { ReadList } from './features/read/ReadList'
import { ReaderPage } from './features/read/ReaderPage'
import { ReviewPage } from './features/review/ReviewPage'
import { CardsPage } from './features/review/CardsPage'
import { MistakesPage } from './features/review/MistakesPage'
import { ExamPage } from './features/exam/ExamPage'
import { ExamRunPage } from './features/exam/ExamRunPage'
import { TalkPage } from './features/talk/TalkPage'
import { TalkChat } from './features/talk/TalkChat'
import { PlacementPage } from './features/placement/PlacementPage'
import { MePage } from './features/me/MePage'
import { SettingsPage } from './features/me/SettingsPage'

function Splash({ error }: { error?: string }) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 p-6 text-center">
      <Mascot size={96} mood={error ? 'sad' : 'happy'} className="anim-bob" />
      <div className="text-3xl font-black text-primary">oliva</div>
      <div className="text-sm font-bold text-ink-3">{error ?? '正在准备课程…'}</div>
    </div>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState<string>()
  useEffect(() => {
    loadContent()
      .then(() => setReady(true))
      .catch((e) => setError('课程加载失败：' + (e?.message ?? e)))
  }, [])
  return (
    <>
      <ThemeApplier />
      <Toaster />
      {!ready ? (
        <Splash error={error} />
      ) : (
        <HashRouter>
          <Routes>
            <Route path="/lesson/:id" element={<LessonPage />} />
            <Route path="/exam/run" element={<ExamRunPage />} />
            <Route path="/review/session" element={<ExamRunPage />} />
            <Route path="/talk/:id" element={<TalkChat />} />
            <Route path="/placement" element={<PlacementPage />} />
            <Route element={<Layout />}>
              <Route index element={<PathPage />} />
              <Route path="/unit/:id" element={<UnitPage />} />
              <Route path="/grammar" element={<GrammarList />} />
              <Route path="/grammar/:id" element={<GrammarPage />} />
              <Route path="/words" element={<WordsPage />} />
              <Route path="/words/book/:id" element={<BookPage />} />
              <Route path="/words/w/:id" element={<WordPage />} />
              <Route path="/words/conj/:verb?" element={<ConjPage />} />
              <Route path="/read" element={<ReadList />} />
              <Route path="/read/:id" element={<ReaderPage />} />
              <Route path="/review" element={<ReviewPage />} />
              <Route path="/review/cards" element={<CardsPage />} />
              <Route path="/review/mistakes" element={<MistakesPage />} />
              <Route path="/exam" element={<ExamPage />} />
              <Route path="/talk" element={<TalkPage />} />
              <Route path="/me" element={<MePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
          <TutorPanel />
        </HashRouter>
      )}
    </>
  )
}
