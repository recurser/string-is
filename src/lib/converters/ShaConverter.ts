import { output as shaOutput } from '@lib/outputs/ShaOutput'
import { ConverterOptions } from '@lib/types'

export const id = 'sha'

export const outputId = 'sha'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return shaOutput(input, options)
}
