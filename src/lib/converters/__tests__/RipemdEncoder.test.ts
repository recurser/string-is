import { RipemdEncoder } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('RipemdEncoder', () => {
    it('generates a RIPEMD hash', async () => {
      await expectOutput(
        RipemdEncoder,
        'hash this',
        'plain-output',
        'd5443a154f167e2c1332f6de72cfb4c6ab9c8c17',
      )
    })
  })
})
