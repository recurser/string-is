import { parse } from 'hjson'
import { Parser } from 'json2csv'

export const id = 'jsonToCsv'

/**
 * Note that this does NOT work for JSON arrays, since json2csv
 * expects column names (ie key → value objects).
 */
export const operation = (input: string): string => {
  let obj

  try {
    obj = parse(input)
  } catch (err) {
    return ''
  }

  const parser = new Parser()
  return parser.parse(obj) || ''
}

// Some strings (eg. '[1, 2, 3]') get returned as valid YAML. If something
// can be parsed as JSON, it is extremely unlikely to also be YAML - the
// JSON parsing is more likely to be correct.
export const overrides = ['yaml', 'yamlToJson']
