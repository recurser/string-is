import { fromPairs, isArray, isObject, map } from 'lodash'

import { Obj } from '@lib/types'

export const sortByKeys = (object: Obj): Obj => {
  if (isArray(object)) {
    return object.map((entry) => {
      if (isObject(entry)) {
        return sortByKeys(entry as Obj)
      }

      return entry
    })
  }

  const sortedKeys = Object.keys(object).sort() as string[]

  return fromPairs(
    map(sortedKeys, (key) => {
      let value = object[key]
      if (isObject(object[key])) {
        value = sortByKeys(value as Obj)
      }

      return [key, value]
    }),
  )
}
