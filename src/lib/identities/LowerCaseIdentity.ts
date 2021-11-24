import { isEmpty } from 'lodash'

import { Converter, LowerCaseConverter } from '@lib/converters'

export const id = 'lowerCase'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  if (
    // We must have at least one upper-case letter to enable lower-case conversion.
    !/[A-Z]/.test(input.trim())
  ) {
    return 0
  }

  return 1
}

export const converters = [LowerCaseConverter] as Converter[]
