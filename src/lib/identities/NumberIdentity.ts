import { isEmpty } from 'lodash'

import { Converter, NumberBaseConverter } from '@lib/converters'
import { validRadices } from '@lib/outputs/NumberBaseOutput'

export const id = 'number'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  if (validRadices(input).length > 0) {
    return 100
  }

  return 0
}

export const converters = [NumberBaseConverter] as Converter[]
