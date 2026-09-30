const CHARS = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡']

/** Buttons to type Spanish characters without a Spanish keyboard. */
export function AccentBar({ onInsert, disabled }: { onInsert: (c: string) => void; disabled?: boolean }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {CHARS.map((c) => (
        <button
          key={c}
          type="button"
          disabled={disabled}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onInsert(c)}
          className="es h-9 w-9 rounded-xl border-2 border-line bg-surface text-base font-bold shadow-[0_2px_0_var(--line)] active:translate-y-0.5 active:shadow-none"
        >
          {c}
        </button>
      ))}
    </div>
  )
}

export function insertAt(el: HTMLInputElement | HTMLTextAreaElement | null, value: string, c: string, set: (v: string) => void) {
  if (!el) return set(value + c)
  const s = el.selectionStart ?? value.length
  const e = el.selectionEnd ?? value.length
  const next = value.slice(0, s) + c + value.slice(e)
  set(next)
  requestAnimationFrame(() => {
    el.focus()
    el.setSelectionRange(s + c.length, s + c.length)
  })
}
