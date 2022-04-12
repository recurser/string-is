import { expectError, expectOutput } from './_helpers'
import { TomlFormatter } from '@lib/converters'

describe('converters', () => {
  describe('TomlFormatter', () => {
    it('formats TOML', async () => {
      await expectOutput(
        TomlFormatter,
        `b = 2
a = 1
[c]
d = 3
e = 4`,
        'toml-output',
        `b = 2
a = 1

[c]
d = 3
e = 4
`,
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        TomlFormatter,
        'invalid!',
        'Invalid character, expected "=" at row 1, col 9, pos 8:1> invalid! ^',
      )
    })
  })
})
