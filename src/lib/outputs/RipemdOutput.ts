import { RIPEMD160 } from 'crypto-js'

import { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'ripemd'

/**
 * Generates a RIPEMD hash of the given input string.
 *
 * @param input    - The string used to generate the hash.
 * @param _options - Ignored by this formatter.
 *
 * @returns the generated RIPEMD hash.
 */
export const output = (input: string, _options: ConverterOptions): string => {
  return RIPEMD160(input).toString()
}
