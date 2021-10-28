export const id = 'urlDecode'

export const operation = (input: string): string => {
  return decodeURIComponent(input)
}

export const overrides = ['urlEncode']
