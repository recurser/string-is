import { ConverterOptions } from '@lib/types'
import { isEmpty } from 'lodash'
import { output as md5Output } from '@lib/outputs/Md5Output'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'md5Encoder'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'plain'

/**
 * An operation that generates an MD5 hash for the given input string.
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
  if (isEmpty(input)) {
    return ''
  }

  return md5Output(input, options)
}
