import { ConverterOptions } from '@lib/types'
import { output as lessOutput } from '@lib/outputs/LessOutput'

export const id = 'less'

export const outputId = 'css'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return lessOutput(input, options)
}
