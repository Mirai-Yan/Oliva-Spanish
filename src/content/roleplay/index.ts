import type { Scenario } from '../types'
import { a1Scenarios } from './a1'

export const SCENARIOS: Scenario[] = [...a1Scenarios]
export const scenarioById = new Map(SCENARIOS.map((s) => [s.id, s]))
