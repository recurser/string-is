import { Dispatch, useEffect } from 'react'
import { decode } from 'js-base64'
import isEmpty from 'lodash/isEmpty'
import { useRouter } from 'next/router'

import type { ForceInput } from '@contexts/ConverterContext'
import { camelCaseConverterSlug } from '@lib/utilities/String'
import { converters } from '@lib/utilities/Converters'

export function useShareListener(
  converterId: string,
  inputString: string,
  setForceInput: Dispatch<ForceInput>,
) {
  const { query } = useRouter()

  useEffect(() => {
    const converterSlug = (query?.converter || [])[0]
    let input = query?.i
    let options = query?.o

    if (Array.isArray(input)) {
      input = input[0]
    }

    if (Array.isArray(options)) {
      options = options[0]
    }

    if (isEmpty(converterSlug)) {
      return
    } else if (isEmpty(input)) {
      return
    } else if (!input) {
      // This is covered by isEmpty() above, but it's needed to make TypeScript happy...
      return
    } else if (
      // Nothing has changed.
      converterId === converterSlug &&
      inputString === input
    ) {
      return
    }

    const newConverterId = camelCaseConverterSlug(converterSlug)
    const newConverter = converters.find((cnv) => cnv.id === newConverterId)
    const decodedInput = decode(input)

    let decodedOptions
    try {
      decodedOptions = JSON.parse(decode(options || 'e30='))
    } catch (_err) {}

    if (!newConverter) {
      // We couldn't find a converter with a matching ID.
      return
    }

    setForceInput([decodedInput, newConverter, decodedOptions])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {}
}
