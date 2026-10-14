import { lazy, Suspense, useEffect, useState, type ComponentType } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./app/Layout";
import { Mascot } from "./components/Mascot";
import { Toaster } from "./components/Toast";
import { loadContent } from "./content";
import { ThemeApplier } from "./theme/ThemeApplier";
import { TutorPanel } from "./features/tutor/TutorPanel";
import { PathPage } from "./features/path/PathPage";

/** Route-level code splitting: each page is loaded the first time it is visited. */
function page<K extends string>(
  load: () => Promise<Record<K, ComponentType>>,
  name: K,
) {
  return lazy(() => load().then((m) => ({ default: m[name] })));
}

const UnitPage = page(() => import("./features/unit/UnitPage"), "UnitPage");
const LessonPage = page(
  () => import("./features/lesson/LessonPage"),
  "LessonPage",
);
const GrammarList = page(
  () => import("./features/grammar/GrammarList"),
  "GrammarList",
);
const GrammarPage = page(
  () => import("./features/grammar/GrammarPage"),
  "GrammarPage",
);
const WordsPage = page(() => import("./features/words/WordsPage"), "WordsPage");
const WordPage = page(() => import("./features/words/WordPage"), "WordPage");
const BookPage = page(() => import("./features/words/BookPage"), "BookPage");
const ConjPage = page(() => import("./features/words/ConjPage"), "ConjPage");
const ReadList = page(() => import("./features/read/ReadList"), "ReadList");
const ReaderPage = page(
  () => import("./features/read/ReaderPage"),
  "ReaderPage",
);
const ReviewPage = page(
  () => import("./features/review/ReviewPage"),
  "ReviewPage",
);
const CardsPage = page(
  () => import("./features/review/CardsPage"),
  "CardsPage",
);
const MistakesPage = page(
  () => import("./features/review/MistakesPage"),
  "MistakesPage",
);
const ExamPage = page(() => import("./features/exam/ExamPage"), "ExamPage");
const ExamRunPage = page(
  () => import("./features/exam/ExamRunPage"),
  "ExamRunPage",
);
const TalkPage = page(() => import("./features/talk/TalkPage"), "TalkPage");
const PhotoPaperPage = page(
  () => import("./features/paper/PhotoPaperPage"),
  "PhotoPaperPage",
);
const PaperPage = page(() => import("./features/paper/PaperPage"), "PaperPage");
const PaperPrintPage = page(
  () => import("./features/paper/PaperPrintPage"),
  "PaperPrintPage",
);
const TalkChat = page(() => import("./features/talk/TalkChat"), "TalkChat");
const PlacementPage = page(
  () => import("./features/placement/PlacementPage"),
  "PlacementPage",
);
const MePage = page(() => import("./features/me/MePage"), "MePage");
const SettingsPage = page(
  () => import("./features/me/SettingsPage"),
  "SettingsPage",
);

function PageLoading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Mascot size={56} className="anim-bob" />
    </div>
  );
}

function Splash({ error }: { error?: string }) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 p-6 text-center">
      <Mascot size={96} mood={error ? "sad" : "happy"} className="anim-bob" />
      <div className="text-3xl font-black text-primary">oliva</div>
      <div className="text-sm font-bold text-ink-3">
        {error ?? "正在准备课程…"}
      </div>
    </div>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string>();
  useEffect(() => {
    loadContent()
      .then(() => setReady(true))
      .catch((e) => setError("课程加载失败：" + (e?.message ?? e)));
  }, []);
  return (
    <>
      <ThemeApplier />
      <Toaster />
      {!ready ? (
        <Splash error={error} />
      ) : (
        <HashRouter>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/lesson/:id" element={<LessonPage />} />
              <Route path="/exam/run" element={<ExamRunPage />} />
              <Route path="/review/session" element={<ExamRunPage />} />
              <Route path="/talk/:id" element={<TalkChat />} />
              <Route path="/placement" element={<PlacementPage />} />
              <Route path="/exam/paper/:id/print" element={<PaperPrintPage />} />
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
                <Route path="/exam/photo" element={<PhotoPaperPage />} />
                <Route path="/exam/paper/:id" element={<PaperPage />} />
                <Route path="/talk" element={<TalkPage />} />
                <Route path="/me" element={<MePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </Suspense>
          <TutorPanel />
        </HashRouter>
      )}
    </>
  );
}
