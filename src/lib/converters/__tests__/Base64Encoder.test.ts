import { Base64Encoder } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('Base64Encoder', () => {
    it('base64-encodes the input', async () => {
      await expectOutput(
        Base64Encoder,
        'some data to encode',
        'plain-output',
        'c29tZSBkYXRhIHRvIGVuY29kZQ==',
      )
    })
  })
})
