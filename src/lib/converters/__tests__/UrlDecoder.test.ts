import { expectError, expectOutput } from './_helpers'
import { UrlDecoder } from '@lib/converters'

describe('converters', () => {
  describe('UrlDecoder', () => {
    it('decodes url-encoded input', async () => {
      await expectOutput(
        UrlDecoder,
        'this%20is%20encoded%21',
        'plain-output',
        'this is encoded!',
      )
    })

    it('reports an error if the input is invalid', async () => {
      await expectError(UrlDecoder, '%x', 'URI malformed')
    })
  })
})
