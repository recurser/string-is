import type { Jwt, JwtPayload } from 'jsonwebtoken'

import { ConverterOptions, Obj } from '@lib/types'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'
import { input as jwtInput } from '@lib/inputs/JwtInput'

export const id = 'jwt'

export const header = (
  data: string,
  _options: ConverterOptions = {},
): string => {
  try {
    const jwt = jwtInput(data)
    if (!jwt?.header) {
      return ''
    }

    return jsonOutput(jwt.header as unknown as Obj)
  } catch (err) {
    return ''
  }
}

export const output = (jwt: Jwt, _options: ConverterOptions = {}): string => {
  return jsonOutput(jwt.payload as JwtPayload)
}
