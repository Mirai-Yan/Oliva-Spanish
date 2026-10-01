import { describe, expect, it } from 'vitest'
import { pickDefaultModel } from './client'

const m = (...ids: string[]) => ids.map((id) => ({ id, name: id }))

describe('pickDefaultModel', () => {
  it('prefers the newest stable flash', () => {
    expect(pickDefaultModel(m('gemini-2.5-flash', 'gemini-3.8-flash', 'gemini-3.5-flash-lite', 'gemini-3.1-pro-preview', 'gemini-3-flash-preview', 'gemini-2.5-pro'))).toBe('gemini-3.8-flash')
  })
  it('skips lite / preview when a stable flash exists', () => {
    expect(pickDefaultModel(m('gemini-3.9-flash-lite', 'gemini-4-flash-preview', 'gemini-2.5-flash'))).toBe('gemini-2.5-flash')
  })
  it('falls back to any usable flash, then null', () => {
    expect(pickDefaultModel(m('gemini-2.0-flash-001', 'gemini-2.5-pro'))).toBe('gemini-2.0-flash-001')
    expect(pickDefaultModel(m('gemini-2.5-pro'))).toBe(null)
  })
})
