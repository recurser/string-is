import { expectError, expectOutput } from './_helpers'
import { YamlFormatter } from '@lib/converters'

describe('converters', () => {
  describe('YamlFormatter', () => {
    it('formats YAML', async () => {
      await expectOutput(
        YamlFormatter,
        `b:  2
a:      1
c:
  - "d"
  -    e`,
        'yaml-output',
        `---
b: 2
a: 1
c:
  - 'd'
  - 'e'
`,
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        YamlFormatter,
        'invalid!',
        'The input could not be parsed as valid YAML',
      )
    })
  })
})
