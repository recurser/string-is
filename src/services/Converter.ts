import { maxBy, uniqBy } from 'lodash'
import Bluebird from 'bluebird'

import * as untypedIdentities from '@lib/identities'
import { Converter } from '@lib/converters'
import { Identity } from '@lib/identities'

interface Candidate {
  /**
   * A number betwen 0 and 100 indicating the confidence
   * that the associated converter can handle the given
   * input.
   */
  confidence: number

  /**
   * The converter whose confidence we are describing.
   */
  converter: Converter
}

/**
 * Collect all of the identity modules exported from lib/identities.
 */
const identities = Object.values(untypedIdentities as unknown as Identity[])

/**
 * Returns a list of converters that are most likely to
 * handle the given input string, based on the identity
 * confidence.
 *
 * @param inputString - the string which we are want to find
 *                      a suitable converter for.
 *
 * @returns the converter(s) with the highest confidence.
 */
export const converterCandidates = async (
  inputString: string,
): Promise<Converter[]> => {
  const candidates = (
    await Bluebird.all(
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
