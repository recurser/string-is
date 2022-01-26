import { isEmpty } from 'lodash'
import { validate as uuidValidate } from 'uuid'

import { Converter, UuidGenerator } from '@lib/converters'

export const id = 'uuid'

const regex = /\r?\n|\r/gm

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

export const converters = [UuidGenerator] as Converter[]
