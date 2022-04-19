import type { ConverterOptions } from '@lib/types'
import { createPatch } from 'diff'

/**
 * The default options used to generate diff strings,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  compareString: '',
  suppressIndex: true,
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'diff'

/**
 * Generates a diff from the given string and options.
 *
 * @param input   - The string to convert.
 * @param options - Contains a string to compare against.
 *
 * @returns a diff between the input string, and options.compareString
 */
export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  const { compareString, suppressIndex } = { ...defaultOptions, ...options }

  // We don't have a filename, so we use 'input.txt' arbitrarily.
  const patch = createPatch('input.txt', input, compareString)

  if (input === compareString && suppressIndex) {
    // This is a complete hack, but if the the diff is empty (ie. identical)
    // our default behaviour is to disable the output, thinking we have no
    // result. We return a space to shortcut this and ensure the output is
    // not disabled.
    return ' '
  } else if (suppressIndex) {
    // The first four lines are a bit useless in our context (filenames etc).
    return patch.split('\n').splice(4).join('\n')
  } else return patch
}
