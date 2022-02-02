import type { Jwt, JwtPayload } from 'jsonwebtoken'

import { ConverterOptions, Obj } from '@lib/types'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'
import { input as jwtInput } from '@lib/inputs/JwtInput'

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'jwt'

/**
 * Parses the given JWT token, and returns the header object.
 *
 * @param input    - The JWT token to parse.
 * @param _options - Ignored by this parser.
 *
 * @returns the extracted and decoded JWT header, formatted as JSON.
 */
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

/**
 * Parses the given JWT token, and returns the payload.
 *
 * @param input    - The JWT token to parse.
 * @param _options - Ignored by this parser.
 *
 * @returns the extracted and decoded JWT payload, formatted as JSON.
 */
export const output = (jwt: Jwt, _options: ConverterOptions = {}): string => {
  return jsonOutput(jwt.payload as JwtPayload)
}
