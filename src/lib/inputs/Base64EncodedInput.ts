import { isEmpty } from 'lodash'

import { Base64DecodeOutput, Output } from '@lib/outputs'

export const id = 'base64Encoded'

// See https://stackoverflow.com/a/8571649
export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  if (
    !/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/.test(input)
  ) {
    return 0
  }

  // If the output is the same as the input, there is no
  //  reason to decode it, even if it is encoded.
  const output = Base64DecodeOutput.operation(input)
  if (output === input) {
    return 0
  }

  // Character code 65533 is the 'invalid sequence' character.
  const charcodes = output.split('').map((char) => char.charCodeAt(0))
  if (charcodes.includes(65533)) {
    return 0
  }

  return 100
}

export const outputs = [Base64DecodeOutput] as Output[]
