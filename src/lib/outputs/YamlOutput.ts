import { dump } from 'js-yaml'

export const id = 'yaml'

export type YamlInput = Record<string, unknown>

export const output = (input: YamlInput): string => {
  // See https://github.com/nodeca/js-yaml/issues/376
  return `---\n${dump(input)}`
}
