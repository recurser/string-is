import Promise from 'bluebird'
import { maxBy } from 'lodash'

import { Converter } from '@lib/converters'
import { Identity } from '@lib/identities'
import * as untypedIdentities from '@lib/identities'

interface Candidate {
  confidence: number
  converter: Converter
}

const identities = Object.values(untypedIdentities as unknown as Identity[])

export const selectConverter = async (
  inputString: string,
): Promise<Converter | undefined> => {
  const candidates = (
    await Promise.all(
      identities.map((identity): Promise<Candidate[]> => {
        return new Promise((resolve, _reject) => {
          const confidence = identity.confidence(inputString)
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

  return maxBy(candidates, 'confidence')?.converter
}
