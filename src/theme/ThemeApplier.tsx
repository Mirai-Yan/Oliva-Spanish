import { useEffect } from 'react'
import { useSettings } from '../store/settings'
import { resolveTheme } from './themes'

/** Writes theme tokens to <html> and follows the system light/dark preference. */
export function ThemeApplier() {
  const theme = useSettings((s) => s.theme)
  const custom = useSettings((s) => s.custom)
  const mode = useSettings((s) => s.mode)
  const fontScale = useSettings((s) => s.fontScale)

  useEffect(() => {
    const root = document.documentElement
    const { primary, accent } = resolveTheme(theme, custom)
    root.style.setProperty('--primary', primary)
    root.style.setProperty('--accent', accent)
    root.style.setProperty('--font-scale', String(fontScale))
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', primary)
  }, [theme, custom, fontScale])

  useEffect(() => {
    const root = document.documentElement
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => root.setAttribute('data-mode', mode === 'system' ? (mq.matches ? 'dark' : 'light') : mode)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [mode])

  return null
}
