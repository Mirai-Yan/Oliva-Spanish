import { PageHeader } from '../../components/PageHeader'
import { Mascot } from '../../components/Mascot'

export function TalkPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="情景对话" sub="和 AI 扮演的角色用西语聊天，结束后得到纠错报告" />
      <div className="card flex flex-col items-center gap-3 p-8 text-center">
        <Mascot mood="think" size={80} />
        <div className="text-lg font-black">情景对话陪练即将开放</div>
        <p className="text-ink-2">会在 A2 课程上线时一起推出：点餐、问路、酒店入住、看医生、面试……</p>
      </div>
    </div>
  )
}
