import { TomlToJsonConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('TomlToJsonConverter', () => {
    it('converts the TOML data to JSON', async () => {
      await expectOutput(
        TomlToJsonConverter,
        `b = 2
a = 1
[c]
d = 3
e = 4`,
        'json-output',
        `{
  "a": 1,
  "b": 2,
  "c": {
    "d": 3,
    "e": 4
  }
}`,
      )
    })
  })
})
