import { input as csvInput } from '@lib/inputs/CsvInput'
import { output as yamlOutput } from '@lib/outputs/YamlOutput'

export const id = 'csvToYaml'

export const output = 'yaml'

export const operation = (data: string): string => {
  const obj = csvInput(data)
  if (!obj) {
    return ''
  }

  return yamlOutput(obj)
}
