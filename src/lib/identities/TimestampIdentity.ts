import { isEmpty } from 'lodash'

import { Converter, TimestampConverter } from '@lib/converters'

export const id = 'timestamp'

// See https://stackoverflow.com/a/8571649
export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  if (
    // We assume the timestamp will start with '1'.
    !/^1(\d{9}|\d{12})$/.test(input.trim())
  ) {
    return 0
  }

  return 100
}

export const converters = [TimestampConverter] as Converter[]
