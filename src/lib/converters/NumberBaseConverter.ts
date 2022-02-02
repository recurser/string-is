import { ConverterOptions } from '@lib/types'
import { output as numberBaseOutput } from '@lib/outputs/NumberBaseOutput'
import { input as numberInput } from '@lib/inputs/NumberInput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'numberBase'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
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
