import { input as csvInput } from '@lib/inputs/CsvInput'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'

export const id = 'csvToJson'

export const outputId = 'json'

export const operation = (data: string): string => {
  const obj = csvInput(data)
  if (!obj) {
    return ''
  }

  return jsonOutput(obj)
}
