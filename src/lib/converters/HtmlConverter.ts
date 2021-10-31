import { output } from '@lib/outputs/HtmlOutput'

export const id = 'html'

export const operation = (input: string): string => {
  return output(input)
}
