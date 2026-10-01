import { TriangleAlert } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { hasVoice, onVoicesChanged, ttsSupported, voicesLoaded } from '../lib/speech/tts'

/** Warns when the device has no Spanish voice: the browser would read Spanish with a Chinese or English voice. */
export function VoiceNotice({ className = '' }: { className?: string }) {
  const [state, setState] = useState(() => ({ loaded: voicesLoaded(), es: hasVoice('es') }))
  useEffect(() => {
    const off = onVoicesChanged(() => setState({ loaded: voicesLoaded(), es: hasVoice('es') }))
    return () => {
      off()
    }
  }, [])
  if (!ttsSupported) {
    return (
      <div className={`flex items-start gap-2 rounded-2xl bg-bad-soft px-4 py-2 text-sm font-semibold text-bad-strong ${className}`}>
        <TriangleAlert size={16} className="mt-0.5 shrink-0" /> 当前浏览器不支持朗读，听力题无法播放。建议使用最新版 Chrome、Edge 或 Safari。
      </div>
    )
  }
  if (!state.loaded || state.es) return null
  return (
    <div className={`flex items-start gap-2 rounded-2xl bg-accent-soft px-4 py-2 text-sm font-semibold ${className}`}>
      <TriangleAlert size={16} className="mt-0.5 shrink-0 text-accent-ink" />
      <span>
        这台设备没有安装西班牙语语音，朗读会用其他语言的声音，发音不准确。
        <Link to="/settings" className="ml-1 underline">
          查看安装方法
        </Link>
      </span>
    </div>
  )
}
