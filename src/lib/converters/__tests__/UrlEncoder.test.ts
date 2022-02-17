import { UrlEncoder } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('UrlEncoder', () => {
    it('url-encodes the input', async () => {
      await expectOutput(
        UrlEncoder,
        'some data to encode',
        'plain-output',
        'some%20data%20to%20encode',
      )
    })
  })
})
