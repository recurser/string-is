import { MD5 } from 'crypto-js'

import { ConverterOptions } from '@lib/types'

export const id = 'md5'

export const output = (input: string, _options: ConverterOptions): string => {
  return MD5(input).toString()
}
