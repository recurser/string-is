export const id = 'urlDecoded'

export const operation = (input: string) => {
  return decodeURIComponent(input)
}
