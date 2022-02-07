import { isEmpty } from 'lodash'
import { validate as uuidValidate } from 'uuid'

import { Converter, UuidGenerator } from '@lib/converters'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'uuid'

/**
 * Regex for replacing line breaks.
 */
const regex = /\r?\n|\r/gm

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is a UUID, or contains the
 * string 'uuid' requesting generation of a UUID.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  const trimmed = input.replace(regex, ' ').trim().toLocaleLowerCase()

  if (trimmed === 'uuid') {
    return 100
  } else if (uuidValidate(trimmed)) {
    return 100
  }

  return 0
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [UuidGenerator] as Converter[]
