import { Converter, XmlFormatter } from '@lib/converters'
import { confidence as htmlConfidence } from '@lib/identities/HtmlIdentity'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'xml'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is XML.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (data: string) => {
  const trimmed = data.trim()
  if (!trimmed.startsWith('<')) {
    return 0
  } else if (!trimmed.endsWith('>')) {
    return 0
  } else if (htmlConfidence(data) === 100) {
    // If we already have HTML, we don't need an XML converter as well.
    return 0
  }

  return 100
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [XmlFormatter] as Converter[]
