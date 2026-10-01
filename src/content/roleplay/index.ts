import type { Scenario } from '../types'
import { a1Scenarios } from './a1'
import { a2Scenarios } from './a2'
import { b1Scenarios } from './b1'

export const SCENARIOS: Scenario[] = [...a1Scenarios, ...a2Scenarios, ...b1Scenarios]
export const scenarioById = new Map(SCENARIOS.map((s) => [s.id, s]))
