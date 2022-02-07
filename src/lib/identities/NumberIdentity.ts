import { Converter, NumberBaseConverter } from '@lib/converters'
import { input as numberInput } from '@lib/inputs/NumberInput'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'number'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string contains a number.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (input: string) => {
  if (numberInput(input) === undefined) {
    return 0
  }

  // Some types (eg. timestamps) are also valid numbers.
  // We dial down the confidence here to give the other types priority.
  return 95
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [NumberBaseConverter] as Converter[]
