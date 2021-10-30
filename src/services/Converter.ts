import Promise from 'bluebird'
import { isEmpty, sortBy, uniqBy } from 'lodash'

import { Converter } from '@lib/converters'
import { inputs } from '@lib/inputs'

interface Candidate {
  confidence: number
  id: string
  converter: Converter
}

export const selectConverters = async (
  inputString: string,
): Promise<Converter[]> => {
  if (isEmpty(inputString)) {
    return []
  }

  // Get a list of all converters with their confidence.
  const candidates = (
    await Promise.all(
      inputs.map((input): Promise<Candidate[]> => {
        return new Promise((resolve, _reject) => {
          const confidence = input.confidence(inputString)
          return resolve(
            input.converters.map((converter) => ({
              confidence,
              converter,
              id: input.id,
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
  // 3. Remove any that conflict with higher confidence options.
  let overrides: string[] = []
  const converters = uniqBy(sorted, (candidate) => candidate.converter.id)
    .filter((candidate) => candidate.confidence > 0)
    .filter((candidate) => {
      const overriden = overrides.includes(candidate.converter.id)
      overrides = overrides.concat(candidate.converter.overrides || [])
      return !overriden
    })
    .map((candidate: Candidate) => candidate.converter)
    // Outputs can implement an optional eligible() function to decide if
    // a particular string is a bad fit.
    .filter(
      (converter) => !converter.eligible || converter.eligible(inputString),
    )

  return converters
}
