import { Dumbbell, Sparkles } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { getContent } from '../../content'
import { PageHeader } from '../../components/PageHeader'
import { ReadingView } from '../../components/ReadingView'
import { useTutor, useTutorContext } from '../tutor/store'

export function ReaderPage() {
  const { id = '' } = useParams()
  const c = getContent()
  const r = c.readingById.get(id)
  const openTutor = useTutor((s) => s.openTutor)
  useTutorContext(r ? `阅读短文《${r.title}》（${r.titleZh}，${r.level}）：\n${r.paras.flat().map((s) => s[0]).join(' ')}` : null)
  if (!r) return <PageHeader back="/read" title="找不到这篇短文" />
  const lesson = c.lessons.find((l) => l.reading === r.id)
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader back="/read" title="" />
      <div className="card -mt-4 p-5 md:p-8">
        <ReadingView reading={r} />
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {lesson && (
          <Link to={`/lesson/${lesson.id}?review=1`} className="btn btn-primary">
            <Dumbbell size={18} /> 做阅读练习
          </Link>
        )}
        <button type="button" className="btn btn-ghost" onClick={() => openTutor('请帮我分析这篇短文里比较难的句子和语法点。')}>
          <Sparkles size={18} /> 让 AI 讲解这篇文章
        </button>
      </div>
    </div>
  )
}
