import { expectError, expectOutput } from './_helpers'
import { QueryStringToYamlConverter } from '@lib/converters'

describe('converters', () => {
  describe('QueryStringToYamlConverter', () => {
    it('converts the query string input to YAML', async () => {
      await expectOutput(
        QueryStringToYamlConverter,
        'https://string.is/?foo=bar&today=2022-02-13',
        'json-output',
        `---
foo: 'bar'
today: '2022-02-13'
`,
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        QueryStringToYamlConverter,
        'invalid!',
        'Invalid URL: invalid!',
      )
    })
  })
})
