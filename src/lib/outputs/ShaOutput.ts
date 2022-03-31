import { SHA1, SHA224, SHA256, SHA384, SHA512 } from 'crypto-js'

import type { ConverterOptions } from '@lib/types'

/**
 * The default options used to generate SHA hashes,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  algorithm: 'sha256',
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'sha'

/**
 * Generates a SHA hash of the given input string.
 *
 * @param input   - The string used to generate the hash.
 * @param options - Includes the algorithm used to generate the hash.
 *
 * @returns the generated SHA hash.
 */
export const output = (input: string, options: ConverterOptions): string => {
  const { algorithm } = { ...defaultOptions, ...options }

  switch (algorithm) {
    case 'sha1':
      return SHA1(input).toString()
    case 'sha224':
      return SHA224(input).toString()
    case 'sha256':
      return SHA256(input).toString()
    case 'sha384':
      return SHA384(input).toString()
    case 'sha512':
      return SHA512(input).toString()
    default:
      console.error(`Unknown SHA algorithm (${algorithm})`)
      return ''
  }
}
