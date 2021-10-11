import { Base64EncodedOutput, Output } from '@lib/outputs'

export const confidence = (_input: string) => {
  return 1
}

export const outputs = [Base64EncodedOutput] as Output[]
