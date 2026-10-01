import { toast } from '../../components/Toast'
import { TUTOR_PERSONA } from './prompts'

export const GEMINI_WEB = 'https://gemini.google.com/app'

/**
 * Use the learner's own Gemini membership without an API key:
 * copy a ready-made prompt and open the Gemini website, where they paste and send it.
 */
export async function askInGemini(prompt: string, opts: { persona?: boolean } = {}) {
  const text = opts.persona === false ? prompt : `${TUTOR_PERSONA}\n\n---\n\n${prompt}`
  let copied = false
  try {
    await navigator.clipboard.writeText(text)
    copied = true
  } catch {
    copied = fallbackCopy(text)
  }
  window.open(GEMINI_WEB, '_blank', 'noopener')
  toast(copied ? '已复制问题，并打开了 Gemini 网页版：在输入框粘贴（Ctrl/⌘ + V）后发送即可。' : '无法自动复制，请手动复制问题后到 Gemini 网页版粘贴。', copied ? 'ok' : 'warn')
  return copied
}

function fallbackCopy(text: string): boolean {
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    ta.remove()
    return ok
  } catch {
    return false
  }
}
