import { isEmpty } from 'lodash'

import { Converter, SqlFormatter } from '@lib/converters'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'sql'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is an SQL query.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  // This is pretty primitive, and will probably need tweaking at some point:
  if (/^\s*select.*from/gims.test(input)) {
    return 100
  } else if (/^\s*update.*set/gims.test(input)) {
    return 100
  } else if (/^\s*delete\s*from.*where/gims.test(input)) {
    return 100
  } else if (/^\s*insert\s*into.*values/gims.test(input)) {
    return 100
  }

  return 0
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [SqlFormatter] as Converter[]
