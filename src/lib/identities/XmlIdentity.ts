import { Converter, XmlFormatter } from '@lib/converters'
import { confidence as htmlConfidence } from '@lib/identities/HtmlIdentity'

export const id = 'xml'

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

export const converters = [XmlFormatter] as Converter[]
