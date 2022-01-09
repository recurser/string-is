import { isEmpty } from 'lodash'

import { Converter, RegexDebugger } from '@lib/converters'

export const id = 'regex'

// Regex-for-matching-a-regex. There is a better one on Stack
// Overflow (see https://stackoverflow.com/a/17843773), but
// this is simpler.
const regex = /^\s*\/.*\/([gmi]+)?\s*$/gm

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

export const converters = [RegexDebugger] as Converter[]
