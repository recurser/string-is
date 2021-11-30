import { isEmpty } from 'lodash'

import { Obj } from '@lib/types'

export const input = (data: string): Obj | undefined => {
  if (isEmpty(data)) {
    return undefined
  } else if (!window.URLSearchParams) {
    // See https://caniuse.com/urlsearchparams
    return undefined
  }

  let url
  try {
    url = new URL(data)
  } catch (err) {
    return undefined
  }

  if (isEmpty(url.search)) {
    return undefined
  }

  const params = new URLSearchParams(url.search)
  const obj = Object.fromEntries(params.entries())

  if (isEmpty(obj)) {
    return undefined
  }

  return obj
}
