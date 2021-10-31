import { isEmpty } from 'lodash'
import { parse } from 'papaparse'

export const input = (data: string): unknown[] | undefined => {
  if (isEmpty(data)) {
    return undefined
  }

  const { data: obj, errors } = parse(data)
  if (errors.length > 0) {
    return undefined
  } else if (!obj) {
    return undefined
  }

  return obj
}
