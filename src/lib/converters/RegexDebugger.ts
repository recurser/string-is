import type { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'regexDebugger'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'regex'

/**
 * An operation that allows debugging of the given regex string.
 *
 * @param input    - the string to convert.
 * @param _options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  return input
}
