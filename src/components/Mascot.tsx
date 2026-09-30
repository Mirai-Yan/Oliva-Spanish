export type Mood = 'happy' | 'wow' | 'sad' | 'think' | 'cheer' | 'sleep'

/** Oliva, the little olive mascot. Colors follow the theme. */
export function Mascot({ mood = 'happy', size = 72, className = '' }: { mood?: Mood; size?: number; className?: string }) {
  const eyeY = mood === 'think' ? 47 : 49
  const eyeDx = mood === 'think' ? 3 : 0
  return (
    <svg viewBox="0 0 100 110" width={size} height={size * 1.1} className={className} aria-hidden="true">
      {/* stem + leaf */}
      <path d="M52 20 C 53 13, 56 8, 61 5" stroke="color-mix(in oklch, var(--primary) 40%, #6b4a2b)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M58 9 C 70 -1, 88 4, 90 12 C 80 19, 66 18, 58 9 Z" fill="color-mix(in oklch, var(--primary) 70%, #2f6a2a)" />
      <path d="M60 10 C 70 9, 80 10, 88 12" stroke="rgb(255 255 255 / 0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* body */}
      <ellipse cx="50" cy="62" rx="35" ry="42" fill="var(--primary)" />
      <ellipse cx="50" cy="66" rx="35" ry="38" fill="color-mix(in oklch, var(--primary) 85%, black)" opacity="0.25" />
      <ellipse cx="50" cy="60" rx="33" ry="40" fill="var(--primary)" />
      <ellipse cx="36" cy="38" rx="9" ry="13" fill="white" opacity="0.28" transform="rotate(-20 36 38)" />
      {/* cheeks */}
      <ellipse cx="30" cy="66" rx="6" ry="4" fill="#ff8f8f" opacity="0.45" />
      <ellipse cx="70" cy="66" rx="6" ry="4" fill="#ff8f8f" opacity="0.45" />
      {/* eyes */}
      {mood === 'sleep' ? (
        <>
          <path d="M34 52 q5 4 10 0" stroke="#1d2419" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M56 52 q5 4 10 0" stroke="#1d2419" strokeWidth="3" fill="none" strokeLinecap="round" />
        </>
      ) : mood === 'cheer' ? (
        <>
          <path d="M34 53 q5 -7 10 0" stroke="#1d2419" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M56 53 q5 -7 10 0" stroke="#1d2419" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <ellipse cx={39 + eyeDx} cy={eyeY} rx="4.5" ry={mood === 'wow' ? 6 : 5.5} fill="#1d2419" />
          <ellipse cx={61 + eyeDx} cy={eyeY} rx="4.5" ry={mood === 'wow' ? 6 : 5.5} fill="#1d2419" />
          <circle cx={40.5 + eyeDx} cy={eyeY - 2} r="1.6" fill="white" />
          <circle cx={62.5 + eyeDx} cy={eyeY - 2} r="1.6" fill="white" />
        </>
      )}
      {/* mouth */}
      {mood === 'sad' ? (
        <path d="M42 76 q8 -7 16 0" stroke="#1d2419" strokeWidth="3" fill="none" strokeLinecap="round" />
      ) : mood === 'wow' ? (
        <ellipse cx="50" cy="74" rx="5" ry="6" fill="#1d2419" />
      ) : mood === 'think' ? (
        <path d="M44 74 h12" stroke="#1d2419" strokeWidth="3" strokeLinecap="round" />
      ) : mood === 'sleep' ? (
        <ellipse cx="50" cy="73" rx="3" ry="2.5" fill="#1d2419" />
      ) : (
        <path d={mood === 'cheer' ? 'M39 68 q11 14 22 0 z' : 'M41 70 q9 9 18 0'} stroke="#1d2419" strokeWidth="3" fill={mood === 'cheer' ? '#1d2419' : 'none'} strokeLinecap="round" strokeLinejoin="round" />
      )}
      {mood === 'cheer' && (
        <g fill="var(--accent)">
          <path d="M10 30 l3 -8 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 z" />
          <path d="M88 44 l2 -5 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 z" />
        </g>
      )}
    </svg>
  )
}
