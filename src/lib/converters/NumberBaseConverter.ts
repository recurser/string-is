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

/**
 * An operation that converts the given numeric input string to different bases.
 *
 * @param input   - the string to convert.
 * @param options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  const numberStr = numberInput(input)

  if (numberStr === undefined) {
    return ''
  }

  return numberBaseOutput(numberStr, options)
}
