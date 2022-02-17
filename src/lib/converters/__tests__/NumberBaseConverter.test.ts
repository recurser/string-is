import { expectError, expectOutput } from './_helpers'
import { NumberBaseConverter } from '@lib/converters'

describe('converters', () => {
  describe('NumberBaseConverter', () => {
    it('converts the input number to the appropriate base', async () => {
      await expectOutput(
        NumberBaseConverter,
        '123456789',
        'number-base-output',
        '75BCD15',
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        NumberBaseConverter,
        'invalid! {',
        'The input could not be parsed as a number',
      )
    })
  })
})
