import { maxBy, uniqBy } from 'lodash'
import Promise from 'bluebird'

import * as untypedIdentities from '@lib/identities'
import { Converter } from '@lib/converters'
import { Identity } from '@lib/identities'

interface Candidate {
  confidence: number
  converter: Converter
}

const identities = Object.values(untypedIdentities as unknown as Identity[])

export const converterCandidates = async (
  inputString: string,
): Promise<Converter[]> => {
  const candidates = (
    await Promise.all(
      identities.map((identity): Promise<Candidate[]> => {
        return new Promise((resolve, _reject) => {
          let confidence: number
          try {
            confidence = identity.confidence(inputString)
          } catch (err) {
            confidence = 0
          }
          return resolve(
            identity.converters.map((converter) => ({
              confidence,
              converter,
            })),
          )
        })
      }),
    )
  ).flat()

  const maxConfidence = maxBy(candidates, 'confidence')?.confidence || 0
  const filtered = candidates
    .filter((candidate) => candidate.confidence === maxConfidence)
    .map((candidate) => candidate.converter)
  const unique = uniqBy(filtered, 'id')
  return unique
}
