import { JsonToTomlConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('JsonToTomlConverter', () => {
    it('converts JSON data to TOML', async () => {
      await expectOutput(
        JsonToTomlConverter,
        `{
  "a": 1,
  "b": 2,
  "c": {
    "d": 3,
    "e": 4
  }
}`,
        'toml-output',
        `a = 1
b = 2

[c]
d = 3
e = 4
`,
      )
    })
  })
})
