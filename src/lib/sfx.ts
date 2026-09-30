import { useSettings } from '../store/settings'

let ctx: AudioContext | null = null

function tone(freqs: number[], dur = 0.12, type: OscillatorType = 'sine', gap = 0.09, vol = 0.12) {
  if (!useSettings.getState().sfx) return
  try {
    ctx ??= new AudioContext()
    const t0 = ctx.currentTime
    freqs.forEach((f, i) => {
      const o = ctx!.createOscillator()
      const g = ctx!.createGain()
      o.type = type
      o.frequency.value = f
      const st = t0 + i * gap
      g.gain.setValueAtTime(0, st)
      g.gain.linearRampToValueAtTime(vol, st + 0.01)
      g.gain.exponentialRampToValueAtTime(0.0001, st + dur)
      o.connect(g).connect(ctx!.destination)
      o.start(st)
      o.stop(st + dur + 0.02)
    })
  } catch {
    /* audio not available */
  }
}

export const sfx = {
  correct: () => tone([660, 880], 0.16, 'sine'),
  wrong: () => tone([220, 180], 0.18, 'triangle', 0.11, 0.1),
  tap: () => tone([520], 0.05, 'sine', 0, 0.05),
  finish: () => tone([523, 659, 784, 1047], 0.22, 'sine', 0.11),
  match: () => tone([740], 0.08, 'sine', 0, 0.08),
}
