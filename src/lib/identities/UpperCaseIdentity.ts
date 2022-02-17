import { isEmpty } from 'lodash'

import { Converter, UpperCaseConverter } from '@lib/converters'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'upperCase'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is convertible to upper-case.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
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

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [UpperCaseConverter] as Converter[]
