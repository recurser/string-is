import { expectError, expectOutput } from './_helpers'
import { QueryStringToTomlConverter } from '@lib/converters'

describe('converters', () => {
  describe('QueryStringToTomlConverter', () => {
    it('converts the query string input to TOML', async () => {
      await expectOutput(
        QueryStringToTomlConverter,
        'https://string.is/?foo=bar&today=2022-02-13',
        'toml-output',
        `foo = "bar"
today = "2022-02-13"
`,
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        QueryStringToTomlConverter,
        'invalid!',
        'Invalid URL: invalid!',
      )
    })
  })
})
