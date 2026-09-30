import { create } from 'zustand'
import { useEffect } from 'react'

interface TutorState {
  open: boolean
  /** description of what the learner is looking at, sent with every question */
  context: string
  /** question to send immediately when the panel opens */
  pending: string | null
  openTutor: (question?: string) => void
  close: () => void
  setContext: (c: string) => void
  consumePending: () => string | null
}

export const useTutor = create<TutorState>((set, get) => ({
  open: false,
  context: '',
  pending: null,
  openTutor: (question) => set({ open: true, pending: question ?? null }),
  close: () => set({ open: false }),
  setContext: (context) => set({ context }),
  consumePending: () => {
    const p = get().pending
    if (p) set({ pending: null })
    return p
  },
}))

/** Register what the current page is about so the AI tutor can use it. */
export function useTutorContext(context: string | null | undefined) {
  const setContext = useTutor((s) => s.setContext)
  useEffect(() => {
    if (!context) return
    setContext(context)
    return () => {
      if (useTutor.getState().context === context) setContext('')
    }
  }, [context, setContext])
}
