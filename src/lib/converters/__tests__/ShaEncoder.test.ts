import { ShaEncoder } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('ShaEncoder', () => {
    it('generates a SHA hash', async () => {
      await expectOutput(
        ShaEncoder,
        'hash this',
        'sha-output',
        '19467788bc0cf11790a075ea718452cecf0e79db59d1964670475e5fe2e4a611',
      )
    })
  })
})
