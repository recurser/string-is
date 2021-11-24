import Promise from 'bluebird'
import { isEmpty, sortBy, uniqBy } from 'lodash'

import { Converter } from '@lib/converters'
import { Identity } from '@lib/identities'
import * as untypedIdentities from '@lib/identities'

interface Candidate {
  confidence: number
  id: string
  converter: Converter
}

const identities = Object.values(untypedIdentities as unknown as Identity[])

export const selectConverters = async (
  inputString: string,
): Promise<Converter[]> => {
  // Get a list of all converters with their confidence.
  const candidates = (
    await Promise.all(
      identities.map((identity): Promise<Candidate[]> => {
        return new Promise((resolve, _reject) => {
          const confidence = identity.confidence(inputString)
          return resolve(
            identity.converters.map((converter) => ({
              confidence,
              converter,
              id: identity.id,
            })),
          )
        })
      }),
    )
  ).flat()

  // We want the highest confidence converters first so that we can filter.
  const sorted = sortBy(candidates, (candidate) => -candidate.confidence)

  // 1. Remove duplicates.
  // 2. Remove any with zero confidence.
  const converters = uniqBy(sorted, (candidate) => candidate.converter.id)
    // Allow all options if we have no input, so the user can see what's available.
    .filter((candidate) => candidate.confidence > 0 || isEmpty(inputString))
    .map((candidate: Candidate) => candidate.converter)

  return converters
}
