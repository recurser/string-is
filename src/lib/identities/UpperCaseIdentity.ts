import { isEmpty } from 'lodash'

import { Converter, UpperCaseConverter } from '@lib/converters'

export const id = 'upperCase'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  if (
    // We must have at least one lower-case letter to enable upper-case conversion.
    !/[a-z]/.test(input.trim())
  ) {
    return 0
  }

  return 1
}

export const converters = [UpperCaseConverter] as Converter[]
