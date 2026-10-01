import { describe, expect, it } from 'vitest'
import { toPlayableBlob } from './hqVoice'
import { findAudio, pickTtsModel } from '../gemini/client'

describe('Gemini TTS helpers', () => {
  it('wraps raw PCM in a WAV header', async () => {
    const pcm = new Uint8Array([1, 2, 3, 4])
    const blob = toPlayableBlob(pcm, 'audio/L16;codec=pcm;rate=24000')
    expect(blob.type).toBe('audio/wav')
    const buf = new Uint8Array(await blob.arrayBuffer())
    expect(buf.length).toBe(48)
    expect(String.fromCharCode(...buf.slice(0, 4))).toBe('RIFF')
    expect(new DataView(buf.buffer).getUint32(24, true)).toBe(24000)
  })

  it('keeps WAV and compressed audio as they are', async () => {
    const wav = new Uint8Array([0x52, 0x49, 0x46, 0x46, 0, 0])
    expect((await toPlayableBlob(wav, 'audio/wav').arrayBuffer()).byteLength).toBe(6)
    expect(toPlayableBlob(new Uint8Array([9]), 'audio/mpeg').type).toBe('audio/mpeg')
  })

  it('finds audio in Interactions and generateContent responses', () => {
    const interactions = { steps: [{ type: 'model_output', content: [{ type: 'audio', data: 'QUJD', mime_type: 'audio/wav' }] }] }
    expect(findAudio(interactions)).toEqual({ data: 'QUJD', mimeType: 'audio/wav' })
    const legacy = { candidates: [{ content: { parts: [{ inlineData: { mimeType: 'audio/L16;rate=24000', data: 'REVG' } }] } }] }
    expect(findAudio(legacy)).toEqual({ data: 'REVG', mimeType: 'audio/L16;rate=24000' })
    expect(findAudio({ candidates: [{ content: { parts: [{ text: 'hola' }] } }] })).toBeNull()
  })

  it('prefers the newest Flash-Lite TTS model', () => {
    expect(pickTtsModel(['gemini-2.5-flash', 'gemini-2.5-pro-preview-tts', 'gemini-3.8-flash-tts', 'gemini-3.8-flash-lite-tts'])).toBe('gemini-3.8-flash-lite-tts')
    expect(pickTtsModel(['gemini-2.5-flash'])).toBeNull()
  })
})
