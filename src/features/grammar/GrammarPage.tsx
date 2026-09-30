import { Dumbbell, Sparkles } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { getContent } from '../../content'
import { GrammarView } from '../../components/GrammarView'
import { PageHeader } from '../../components/PageHeader'
import { useTutor, useTutorContext } from '../tutor/store'

export function GrammarPage() {
  const { id = '' } = useParams()
  const c = getContent()
  const g = c.grammarById.get(id)
  const openTutor = useTutor((s) => s.openTutor)
  useTutorContext(g ? `语法点：${g.title}（${g.titleEs ?? ''}）— ${g.summary}` : null)
  if (!g) return <PageHeader title="找不到这个语法点" back="/grammar" />
  const u = g.unit ? c.unitById.get(g.unit) : undefined
  const lesson = c.lessons.find((l) => l.grammar === g.id)
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader back title="" sub={u && <Link to={`/unit/${u.id}`} className="font-bold text-primary-ink">{u.icon} {u.level} · {u.title}</Link>} />
      <div className="card -mt-4 p-5 md:p-7">
        <GrammarView g={g} />
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {lesson && (
          <Link to={`/lesson/${lesson.id}?review=1`} className="btn btn-primary">
            <Dumbbell size={18} /> 练一练
          </Link>
        )}
        <button type="button" className="btn btn-ghost" onClick={() => openTutor(`关于「${g.title}」，能再举几个例子并讲讲容易出错的地方吗？`)}>
          <Sparkles size={18} /> 问 AI
        </button>
      </div>
    </div>
  )
}
