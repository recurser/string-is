export const id = 'json'

export type JsonInput = Record<string, unknown>

export const output = (input: JsonInput): string => {
  return JSON.stringify(input, null, 2)
}
