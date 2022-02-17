import { Converter, YamlFormatter, YamlToJsonConverter } from '@lib/converters'
import { input } from '@lib/inputs/YamlInput'
import { input as jsonInput } from '@lib/inputs/JsonInput'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'yaml'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is YAML.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (data: string) => {
  // We can assume that YAML will have at least 2 lines. Any number
  // is actually valid YAML, so eg. timestamps will trigger it.
  if (data.split(/\r\n|\r|\n/).length < 2) {
    return 0
  }

  const obj = input(data)
  if (!obj) {
    return 0
  }

  // Sometimes js-yaml just gives up and returns the original string.
  if (typeof obj === 'string') {
    return 0
  }

  // Some strings (eg. '[1, 2, 3]') get returned as valid YAML. If something
  // can be parsed as JSON, it is extremely unlikely to also be YAML - the
  // JSON parsing is more likely to be correct.
  try {
    if (jsonInput(data) !== undefined) {
      return 0
    }
  } catch (_err) {}

  return 100
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [YamlFormatter, YamlToJsonConverter] as Converter[]
