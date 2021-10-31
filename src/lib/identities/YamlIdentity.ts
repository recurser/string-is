import { Converter, YamlConverter, YamlToJsonConverter } from '@lib/converters'
import { input } from '@lib/inputs/YamlInput'

export const id = 'yaml'

export const confidence = (data: string) => {
  const obj = input(data)
  if (!obj) {
    return 0
  }

  // Sometimes js-yaml just gives up and returns the original string.
  if (typeof obj === 'string') {
    return 0
  }

  return 100
}

export const converters = [YamlConverter, YamlToJsonConverter] as Converter[]
