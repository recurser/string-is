import Promise from 'bluebird'
import { maxBy } from 'lodash'

import { Converter, converters } from '@converters/index'

interface Candidate {
  confidence: number
  converter: Converter
}

export const selectConverter = async (input: string): Promise<Converter> => {
  const candidates = await Promise.all(
    converters.map((conv): Promise<Candidate> => {
      return new Promise((resolve, _reject) => {
        return resolve({
          confidence: conv.confidence(input),
          converter: conv,
        })
      })
    }),
  )

  const winner = maxBy(
    candidates,
    (candidate: Candidate) => candidate.confidence,
  ) as Candidate

  return winner.converter
}

export const DefaultConverter = converters[1]
