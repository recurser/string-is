import { isEmpty } from 'lodash'
import { parse } from 'papaparse'

const defaults = {
  header: true,
}

export const input = (data: string): unknown[] | undefined => {
  if (isEmpty(data)) {
    return undefined
  }

  const { data: obj, errors } = parse(data, defaults)

  if (errors.length > 0) {
    throw new Error(errors[0].message)
  } else if (!obj) {
    throw new Error('The input could not be parsed as a valid CSV')
  }

  return obj
}
