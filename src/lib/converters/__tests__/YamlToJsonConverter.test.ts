import { YamlToJsonConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('YamlToJsonConverter', () => {
    it('converts the YAML data to JSON', async () => {
      await expectOutput(
        YamlToJsonConverter,
        `b:  2
a:      1
c:
  - "d"
  -    e`,
        'json-output',
        `{
  "a": 1,
  "b": 2,
  "c": [
    "d",
    "e"
  ]
}`,
      )
    })
  })
})
