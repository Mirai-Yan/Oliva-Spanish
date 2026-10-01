import type { LevelPack } from '../index'
import { u01 } from './u01'
import { u02 } from './u02'
import { u03 } from './u03'
import { u04 } from './u04'
import { u05 } from './u05'
import { u06 } from './u06'
import { u07 } from './u07'
import { u08 } from './u08'
import { u09 } from './u09'
import { u10 } from './u10'
import { u11 } from './u11'
import { u12 } from './u12'
import { b1Extra } from './extra'

const pack: LevelPack = { level: 'B1', units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12], extraWords: b1Extra }
export default pack
