import { Converter, NumberBaseConverter } from '@lib/converters'
import { input as numberInput } from '@lib/inputs/NumberInput'

export const id = 'number'

export const confidence = (input: string) => {
  if (numberInput(input) === undefined) {
    return 0
  }

  return 100
}

export const converters = [NumberBaseConverter] as Converter[]
