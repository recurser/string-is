import { isEmpty } from 'lodash'

import { Converter, RegexDebugger } from '@lib/converters'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'regex'

/**
 * Regex-for-matching-a-regex. There is a better one on Stack
 * Overflow (see https://stackoverflow.com/a/17843773), but
 * this is simpler.
 */
const regex = /^\s*\/.*\/([gmi]+)?\s*$/gm

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is a regular expression.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  const trimmed = input.trim()

  if (trimmed.match(regex)) {
    return 100
  }

  return 0
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [RegexDebugger] as Converter[]
