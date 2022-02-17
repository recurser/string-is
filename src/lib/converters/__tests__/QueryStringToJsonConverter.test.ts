import { expectError, expectOutput } from './_helpers'
import { QueryStringToJsonConverter } from '@lib/converters'

describe('converters', () => {
  describe('QueryStringToJsonConverter', () => {
    it('converts the query string input to JSON', async () => {
      await expectOutput(
        QueryStringToJsonConverter,
        'https://string.is/?foo=bar&today=2022-02-13',
        'json-output',
        `{
  "foo": "bar",
  "today": "2022-02-13"
}`,
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        QueryStringToJsonConverter,
        'invalid!',
        'Invalid URL: invalid!',
      )
    })
  })
})
