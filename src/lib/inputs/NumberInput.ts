import { isEmpty } from 'lodash'

import { validRadices } from '@lib/outputs/NumberBaseOutput'

// Removes commas from numbers and returns the resulting string.
export const input = (input: string): string | undefined => {
  if (isEmpty(input)) {
    return undefined
  }

  const converted = input.trim().replace(',', '')
  if (validRadices(converted).length > 0) {
    return converted
  }

  throw new Error('The input could not be parsed as a number')
}
