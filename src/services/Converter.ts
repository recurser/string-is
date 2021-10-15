import Promise from 'bluebird'
import { isEmpty, sortBy, uniqBy } from 'lodash'

import { inputs } from '@lib/inputs'
import { Output } from '@lib/outputs'

interface Candidate {
  confidence: number
  output: Output
}

export const selectOutputs = async (inputString: string): Promise<Output[]> => {
  if (isEmpty(inputString)) {
    return []
  }

  // Get a list of all outputs with their confidence.
  const candidates = (
    await Promise.all(
      inputs.map((input): Promise<Candidate[]> => {
        return new Promise((resolve, _reject) => {
          const confidence = input.confidence(inputString)
          return resolve(
            input.outputs.map((output) => ({ confidence, output })),
          )
        })
      }),
    )
  ).flat()

  // We want the highest confidence outputs first so that we can filter.
  const sorted = sortBy(candidates, (candidate) => -candidate.confidence)

  // 1. Remove duplicates.
  // 2. Remove any with zero confidence.
  const outputs = uniqBy(sorted, (candidate) => candidate.output.id)
    .filter((candidate) => candidate.confidence > 0)
    .map((candidate: Candidate) => candidate.output)

  return outputs
}
