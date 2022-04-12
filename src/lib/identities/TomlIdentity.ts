import { Converter, TomlFormatter } from '@lib/converters'
import { input } from '@lib/inputs/TomlInput'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'toml'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is TOML.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (data: string) => {
  // We can assume that TOML will have at least 2 lines.
  if (data.split(/\r\n|\r|\n/).length < 2) {
    return 0
  }

  try {
    // @iarna/toml will throw an exception if this fails.
    input(data)
  } catch (_err) {
    return 0
  }

  return 100
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [TomlFormatter] as Converter[]
