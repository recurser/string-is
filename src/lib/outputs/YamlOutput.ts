import { dump, load } from 'js-yaml'

export const id = 'yaml'

export const operation = (input: string) => {
  let obj

  try {
    obj = load(input)
  } catch (err) {
    return ''
  }

  // See https://github.com/nodeca/js-yaml/issues/376
  return `---\n${dump(obj)}`
}
