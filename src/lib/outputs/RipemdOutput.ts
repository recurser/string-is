import { RIPEMD160 } from 'crypto-js'

import { ConverterOptions } from '@lib/types'

export const id = 'md5'

export const output = (input: string, _options: ConverterOptions): string => {
  return RIPEMD160(input).toString()
}
