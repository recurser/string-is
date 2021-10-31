import { input } from '@lib/inputs/YamlInput'
import { output } from '@lib/outputs/YamlOutput'
import { Obj } from '@lib/types'

export const id = 'yaml'

export const operation = (data: string): string => {
  const obj = input(data)
  if (!obj) {
    return ''
  }

  return output(obj as Obj)
}
