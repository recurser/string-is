import { Md5Encoder } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('Md5Encoder', () => {
    it('generates an MD5 hash', async () => {
      await expectOutput(
        Md5Encoder,
        'hash this',
        'plain-output',
        'e80c715e5d4e885f68d7a3853b5fca73',
      )
    })
  })
})
