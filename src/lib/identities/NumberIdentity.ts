import { Converter, NumberBaseConverter } from '@lib/converters'
import { input as numberInput } from '@lib/inputs/NumberInput'

export const id = 'number'

export const confidence = (input: string) => {
  if (numberInput(input) === undefined) {
    return 0
  }

  // Some types (eg. timestamps) are also valid numbers.
  // We dial down the confidence here to give the other types priority.
  return 95
}

export const converters = [NumberBaseConverter] as Converter[]
