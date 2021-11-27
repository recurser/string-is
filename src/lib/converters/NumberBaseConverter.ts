import { output as numberBaseOutput } from '@lib/outputs/NumberBaseOutput'
import { ConverterOptions } from '@lib/types'

export const id = 'numberBase'

export const outputId = 'numberBase'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return numberBaseOutput(input, options)
}
