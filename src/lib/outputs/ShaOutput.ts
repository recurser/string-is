import { SHA1, SHA224, SHA256, SHA384, SHA512 } from 'crypto-js'

import { ConverterOptions } from '@lib/types'

export const id = 'sha'

export const output = (input: string, options: ConverterOptions): string => {
  const { algorithm } = options

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
