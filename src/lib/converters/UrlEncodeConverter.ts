export const id = 'urlEncode'

export const output = 'plain'

/**
 * Allows the converter to be hidden if it's not a good match
 * for the input string.
 *
 * In this case, there's no point URL-encoding a string if
 * the output is identical to the input.
 */
export const eligible = (input: string): boolean => {
  return operation(input) !== input
}

/**
 * @see https://kimizuka.hatenablog.com/entry/2015/07/19/000000
 * @see https://stackoverflow.com/a/62436236
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#description
 */
export const operation = (input: string): string => {
  return encodeURIComponent(input)
    .replace(/[!'()]/g, escape)
    .replace(/\*/g, '%2A')
}
