import { isEmpty } from 'lodash'

import { Base64EncodeOutput, Output, UrlEncodeOutput } from '@lib/outputs'

export const id = 'plain'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  return 1
}

export const outputs = [Base64EncodeOutput, UrlEncodeOutput] as Output[]
