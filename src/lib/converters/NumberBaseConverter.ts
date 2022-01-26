import { ConverterOptions } from '@lib/types'
import { output as numberBaseOutput } from '@lib/outputs/NumberBaseOutput'
import { input as numberInput } from '@lib/inputs/NumberInput'

export const id = 'numberBase'

export const outputId = 'numberBase'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  const numberStr = numberInput(data)

  if (numberStr === undefined) {
    return ''
  }

  return numberBaseOutput(numberStr, options)
}
