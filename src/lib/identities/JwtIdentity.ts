import { Converter, JwtDecoder } from '@lib/converters'
import { input as jwtInput } from '@lib/inputs/JwtInput'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'jwt'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is a JWT token.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (input: string) => {
  if (jwtInput(input) === undefined) {
    return 0
  }

  return 100
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [JwtDecoder] as Converter[]
