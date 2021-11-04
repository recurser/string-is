import { input as yamlInput } from '@lib/inputs/YamlInput'
import { output as yamlOutput } from '@lib/outputs/YamlOutput'
import { Obj } from '@lib/types'

export const id = 'yaml'

export const output = 'yaml'

export const operation = (data: string): string => {
  const obj = yamlInput(data)
  if (!obj) {
    return ''
  }

  return yamlOutput(obj as Obj)
}
