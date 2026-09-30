import { BookOpen, ClipboardCheck, House, MessagesSquare, Newspaper, Puzzle, RotateCcw, Settings, UserRound, type LucideIcon } from 'lucide-react'

export interface NavItem {
  to: string
  label: string
  icon: LucideIcon
  /** show in the phone bottom bar */
  tab?: boolean
}

export const NAV: NavItem[] = [
  { to: '/', label: '学习', icon: House, tab: true },
  { to: '/review', label: '复习', icon: RotateCcw, tab: true },
  { to: '/words', label: '词书', icon: BookOpen, tab: true },
  { to: '/read', label: '阅读', icon: Newspaper, tab: true },
  { to: '/grammar', label: '语法', icon: Puzzle },
  { to: '/exam', label: '考试', icon: ClipboardCheck },
  { to: '/talk', label: '对话', icon: MessagesSquare },
  { to: '/me', label: '我的', icon: UserRound, tab: true },
  { to: '/settings', label: '设置', icon: Settings },
]
