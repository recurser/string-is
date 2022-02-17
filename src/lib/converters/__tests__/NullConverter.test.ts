import { NullConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('NullConverter', () => {
    it('always returns an empty string', async () => {
      await expectOutput(NullConverter, 'ignore this', 'plain-output', '')
    })
  })
})
