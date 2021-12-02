import type { Jwt } from 'jsonwebtoken'

import { output as jsonOutput } from '@lib/outputs/JsonOutput'
import { ConverterOptions, Obj } from '@lib/types'

export const id = 'jwt'

export const header = (jwt: Jwt, _options: ConverterOptions = {}): string => {
  return jsonOutput(jwt.header as unknown as Obj)
}

export const output = (jwt: Jwt, _options: ConverterOptions = {}): string => {
  return jsonOutput(jwt.payload)
}
