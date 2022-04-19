import {
  Base64Encoder,
  DiffCompare,
  HtmlFormatter,
  Md5Encoder,
  RipemdEncoder,
  ShaEncoder,
  UpperCaseConverter,
  UrlEncoder,
} from '@lib/converters'

import { converterCandidates } from '@services/Converter'

describe('services', () => {
  describe('Converter', () => {
    describe('converterCandidates', () => {
      it('returns multiple candidates', async () => {
        const input = 'plain text!'
        const expected = [
          Base64Encoder,
          DiffCompare,
          Md5Encoder,
          RipemdEncoder,
          ShaEncoder,
          UpperCaseConverter,
          UrlEncoder,
        ]
        const result = await converterCandidates(input)
        expect(result).toEqual(expected)
      })

      it('returns single candidates', async () => {
        const input = '<b>html</b>'
        const expected = [HtmlFormatter]
        const result = await converterCandidates(input)
        expect(result).toEqual(expected)
      })
    })
  })
})
