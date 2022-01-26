import { ConverterOptions } from '@lib/types'
import { output as uuidOutput } from '@lib/outputs/UuidOutput'

export const id = 'uuid'

export const outputId = 'uuid'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  return uuidOutput(data, options)
}
