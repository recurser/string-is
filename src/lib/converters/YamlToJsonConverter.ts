import { input as yamlInput } from '@lib/inputs/YamlInput'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'
import { Obj } from '@lib/types'

export const id = 'yamlToJson'

export const output = 'json'

export const operation = (data: string): string => {
  const obj = yamlInput(data)
  if (!obj) {
    return ''
  }

  return jsonOutput(obj as Obj)
}
