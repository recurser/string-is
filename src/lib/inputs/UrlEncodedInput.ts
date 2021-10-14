import { isEmpty } from 'lodash'

import { UrlDecodedOutput, Output } from '@lib/outputs'

export const id = 'urlEncoded'

// Characters that can't exist in a URL-encoded string.
// See https://www.urlencoder.io/learn/#ascii-character-encoding-reference
const specialChars = [
  '!',
  '"',
  '#',
  '$',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  '\\',
  ']',
  '^',
  '`',
  '{',
  '|',
  '}',
]

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  // URL-encoded strings can't contain any ofthese characters.
  const includesSpecial = specialChars.some((char) => input.includes(char))
  if (includesSpecial) {
    return 0
  }

  let decoded
  try {
    decoded = UrlDecodedOutput.operation(input)
  } catch {
    return 0
  }

  // See https://stackoverflow.com/a/2295286
  if (decoded !== input) {
    return 100
  }

  return 100
}

export const outputs = [UrlDecodedOutput] as Output[]
