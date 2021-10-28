import { parse } from 'hjson'
import { Parser } from 'json2csv'
import { keyBy } from 'lodash'

export const id = 'jsonToCsv'

export const operation = (input: string): string => {
  let obj

  try {
    obj = parse(input)
  } catch (err) {
    return ''
  }

  // json2csv doesn't work for arrays - it expects column names (ie key → value objects).
  if (Array.isArray(obj)) {
    let index = 0
    obj = keyBy(obj, () => {
      index++
      return `field ${index}`
    })
  }

  const parser = new Parser()
  return parser.parse(obj) || ''
}

// Some strings (eg. '[1, 2, 3]') get returned as valid YAML. If something
// can be parsed as JSON, it is extremely unlikely to also be YAML - the
// JSON parsing is more likely to be correct.
export const overrides = ['yaml', 'yamlToJson']
