import { output as sqlOutput } from '@lib/outputs/SqlOutput'

import type { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'sqlFormatter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'sql'

/**
 * An operation that formats the given SQL input string.
 *
 * @param input   - the string to convert.
 * @param options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return sqlOutput(input, options)
}
