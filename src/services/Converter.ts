import Promise from 'bluebird'
import { maxBy } from 'lodash'

import { Input, inputs } from '@lib/inputs'
import * as Base64EncodedInput from '@lib/inputs/Base64EncodedInput'

interface Candidate {
  confidence: number
  input: Input
}

export const selectInput = async (inputString: string): Promise<Input> => {
  const candidates = await Promise.all(
    inputs.map((input): Promise<Candidate> => {
      return new Promise((resolve, _reject) => {
        return resolve({
          confidence: input.confidence(inputString),
          input,
        })
      })
    }),
  )

  const winner = maxBy(
    candidates,
    (candidate: Candidate) => candidate.confidence,
  ) as Candidate

  return winner.input
}

export const DefaultInput = Base64EncodedInput as Input
