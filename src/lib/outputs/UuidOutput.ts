import {
  validate as uuidValidate,
  version as uuidVersion,
  v1,
  v3,
  v4,
  v5,
} from 'uuid'
import { isEmpty } from 'lodash'

import { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'uuid'

/**
 * The default options used to generate UUIDs,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  namespace: v4(),
  version: 'v4',
}

/**
 * Generates a UUID based on the given input string.
 *
 * @param input   - If the input is already a valid UUID, we return
 *                  it back. This avoids having the output constantly
 *                  change every time an option are changed.
 * @param options - Includes the algorithm version used to generate the UUID.
 *
 * @returns the generated UUID.
 */
export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  if (isEmpty(input)) {
    return ''
  }

  const withDefaults = { ...defaultOptions, ...options }

  // If we already have a user-inputted UUID with the right version, we don't need to generate one.
  if (
    uuidValidate(input) &&
    `v${uuidVersion(input)}` === withDefaults.version
  ) {
    return input
  }

  if (withDefaults.version === 'v1') {
    return v1()
  } else if (withDefaults.version === 'v3') {
    return v3(input, withDefaults.namespace)
  } else if (withDefaults.version === 'v4') {
    return v4()
  } else if (withDefaults.version === 'v5') {
    return v5(input, withDefaults.namespace)
  }

  throw new Error('Invalid UUID version')
}
