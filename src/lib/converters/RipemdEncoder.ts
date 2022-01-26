import { ConverterOptions } from '@lib/types'
import { output as ripemdOutput } from '@lib/outputs/RipemdOutput'

export const id = 'ripemd'

export const outputId = 'plain'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return ripemdOutput(input, options)
}
