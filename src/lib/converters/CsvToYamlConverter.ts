import { input } from '@lib/inputs/CsvInput'
import { output } from '@lib/outputs/YamlOutput'

export const id = 'csvToYaml'

export const operation = (data: string): string => {
  const obj = input(data)
  if (!obj) {
    return ''
  }

  return output(obj)
}
