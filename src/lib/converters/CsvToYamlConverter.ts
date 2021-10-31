import { parse } from 'papaparse'

import { output, YamlInput } from '@lib/outputs/YamlOutput'

export const id = 'csvToYaml'

export const operation = (input: string): string => {
  const { data } = parse(input)

  return output(data as unknown as YamlInput)
}
