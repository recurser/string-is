import { ConverterOptions } from '@lib/types'
import { output as md5Output } from '@lib/outputs/Md5Output'

export const id = 'md5'

export const outputId = 'plain'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return md5Output(input, options)
}
