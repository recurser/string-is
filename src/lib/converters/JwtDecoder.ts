import type { ConverterOptions } from '@lib/types'
import { input as jwtInput } from '@lib/inputs/JwtInput'
import { output as jwtOutput } from '@lib/outputs/JwtOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'jwtDecoder'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'jwt'

/**
 * An operation that decodes the given JWT input string.
 *
 * @param input    - the string to convert.
 * @param _options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  const jwt = jwtInput(input)
  if (!jwt) {
    return ''
  }

  return jwtOutput(jwt)
}
