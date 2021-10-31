import { dump } from 'js-yaml'

import { Obj } from '@lib/types'

export const id = 'yaml'

export const output = (input: Obj): string => {
  // See https://github.com/nodeca/js-yaml/issues/376
  return `---\n${dump(input)}`
}
