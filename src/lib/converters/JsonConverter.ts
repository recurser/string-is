import { input as jsonInput } from '@lib/inputs/JsonInput'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'

export const id = 'json'

export const output = 'json'

export const operation = (data: string): string => {
  const obj = jsonInput(data)
  if (!obj) {
    return ''
  }

  return jsonOutput(obj)
}
