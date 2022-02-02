import { ConverterOptions } from '@lib/types'
import { output as md5Output } from '@lib/outputs/Md5Output'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'md5'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'plain'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return md5Output(input, options)
}
