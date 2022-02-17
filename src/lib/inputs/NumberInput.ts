import { isEmpty } from 'lodash'

import { validRadices } from '@lib/outputs/NumberBaseOutput'

/**
 * Removes commas from numbers and returns the resulting string.
 *
 * @param data - the numeric string to parse.
 *
 * @returns the resulting number.
 */
export const input = (data: string): string | undefined => {
  if (isEmpty(data)) {
    return undefined
  }

  const converted = data.trim().replace(',', '')
  if (validRadices(converted).length > 0) {
    return converted
  }

  throw new Error('The input could not be parsed as a number')
}
