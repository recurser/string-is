import { dump } from 'js-yaml'
import { parse } from 'papaparse'

export const id = 'csvToYaml'

export const operation = (input: string): string => {
  const { data } = parse(input)

  // See https://github.com/nodeca/js-yaml/issues/376
  return `---\n${dump(data)}`
}
