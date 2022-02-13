import { format } from 'prettier/standalone'
import { isEmpty } from 'lodash'
import parserPostcss from 'prettier/parser-postcss'

import { Converter, ScssFormatter } from '@lib/converters'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'scss'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is SCSS-flavored CSS.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  try {
    // Prettier will throw an exception if this fails.
    format(input, { parser: 'scss', plugins: [parserPostcss] })
  } catch (_err) {
    return 0
  }

  return 100
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [ScssFormatter] as Converter[]
