import { input } from '@lib/inputs/YamlInput'
import { output } from '@lib/outputs/JsonOutput'
import { Obj } from '@lib/types'

export const id = 'yamlToJson'

export const operation = (data: string): string => {
  const obj = input(data)
  if (!obj) {
    return ''
  }

  return output(obj as Obj)
}
