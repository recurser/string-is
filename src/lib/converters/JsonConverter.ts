import { input } from '@lib/inputs/JsonInput'
import { output } from '@lib/outputs/JsonOutput'

export const id = 'json'

export const operation = (data: string): string => {
  const obj = input(data)
  if (!obj) {
    return ''
  }

  return output(obj)
}
