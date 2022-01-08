import { isEmpty } from 'lodash'

import { Converter, RegexDebugger } from '@lib/converters'

export const id = 'regex'

// See https://stackoverflow.com/a/17843773
const regex =
  /\/((?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+)\/((?:g(?:im?|mi?)?|i(?:gm?|mg?)?|m(?:gi?|ig?)?)?)/

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
