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
    return undefined
  } else if (!obj) {
    return undefined
  }

  return obj
}
