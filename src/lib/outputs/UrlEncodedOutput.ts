export const id = 'urlEncoded'

export const operation = (input: string) => {
  return encodeURI(input)
}
