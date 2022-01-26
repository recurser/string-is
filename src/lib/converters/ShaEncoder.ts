import { ConverterOptions } from '@lib/types'
import { output as shaOutput } from '@lib/outputs/ShaOutput'

export const id = 'sha'

export const outputId = 'sha'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return shaOutput(input, options)
}
