import * as babel from 'prettier/plugins/babel'
// eslint-disable-next-line import/namespace
import * as estree from 'prettier/plugins/estree'
import { format } from 'prettier/standalone'
import { isEmpty } from 'lodash'

import { Converter, JavaScriptFormatter } from '@lib/converters'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'javaScript'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is JavaScript.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = async (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  try {
    // Prettier will throw an exception if this fails.
    await format(input, { parser: 'babel', plugins: [babel, estree] })
  } catch (_err) {
    return 0
  }

  // Lots of other types (eg. number base conversion, timestamps) can be parsed as Javascript.
  // We dial down the confidence here to give the other types priority.
  return 90
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [JavaScriptFormatter] as Converter[]
