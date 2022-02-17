import { expectError, expectOutput } from './_helpers'
import { Base64Decoder } from '@lib/converters'

describe('converters', () => {
  describe('Base64Decoder', () => {
    it('decodes base64-encoded input', async () => {
      await expectOutput(
        Base64Decoder,
        'c29tZSBlbmNvZGVkIGRhdGE=',
        'plain-output',
        'some encoded data',
      )
    })

    it('reports an error if the input is invalid', async () => {
      await expectError(
        Base64Decoder,
        'invalid!',
        'The input is not a valid Base64 string',
      )
    })
  })
})
