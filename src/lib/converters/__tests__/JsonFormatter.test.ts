import { expectError, expectOutput } from './_helpers'
import { JsonFormatter } from '@lib/converters'

describe('converters', () => {
  describe('JsonFormatter', () => {
    it('formats JSON', async () => {
      await expectOutput(
        JsonFormatter,
        '{ b: 2, a: 1 }',
        'json-output',
        `{
  "a": 1,
  "b": 2
}`,
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        JsonFormatter,
        'invalid! {',
        'The input could not be parsed as valid JSON',
      )
    })
  })
})
