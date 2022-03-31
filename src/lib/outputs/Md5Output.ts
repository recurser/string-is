import { MD5 } from 'crypto-js'

import type { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'md5'

/**
 * Generates an MD5 hash of the given input string.
 *
 * @param input    - The string used to generate the hash.
 * @param _options - Ignored by this formatter.
 *
 * @returns the generated MD5 hash.
 */
export const output = (input: string, _options: ConverterOptions): string => {
  return MD5(input).toString()
}
