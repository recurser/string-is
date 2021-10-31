import { parse } from 'hjson'

import { output } from '@lib/outputs/YamlOutput'

export const id = 'jsonToYaml'

export const operation = (input: string): string => {
  let obj

  try {
    obj = parse(input)
  } catch (err) {
    return ''
  }

  return output(obj)
}

// Some strings (eg. '[1, 2, 3]') get returned as valid YAML. If something
// can be parsed as JSON, it is extremely unlikely to also be YAML - the
// JSON parsing is more likely to be correct.
export const overrides = ['yaml', 'yamlToJson']
