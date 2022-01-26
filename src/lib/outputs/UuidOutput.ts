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

export const id = 'uuid'

export const defaultOptions = {
  namespace: v4(),
  version: 'v4',
}

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
