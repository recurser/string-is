import Promise from 'bluebird'
import { isEmpty, sortBy } from 'lodash'

import { Input, inputs } from '@lib/inputs'
import * as Base64EncodedInput from '@lib/inputs/Base64EncodedInput'

interface Candidate {
  confidence: number
  input: Input
}

export const selectInputs = async (inputString: string): Promise<Input[]> => {
  if (isEmpty(inputString)) {
    return []
  }

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

  return sortBy(candidates, (candidate: Candidate) => -candidate.confidence)
    .filter((candidate: Candidate) => candidate.confidence > 0)
    .map((candidate: Candidate) => candidate.input)
}

export const DefaultInput = Base64EncodedInput as Input
