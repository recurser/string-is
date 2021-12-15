import { output as javaSscriptOutput } from '@lib/outputs/JavaSscriptOutput'
import { ConverterOptions } from '@lib/types'

export const id = 'javaSscript'

export const outputId = 'javaSscript'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return javaSscriptOutput(input, options)
}
