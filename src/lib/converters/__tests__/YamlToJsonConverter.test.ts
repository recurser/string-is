import { operation } from '@lib/converters/YamlToJsonConverter'

describe('converters', () => {
  describe('YamlToJsonConverter', () => {
    describe('operation', () => {
      it('converts the YAML input to JSON', () => {
        const input = `b:  2
a:      1
c:
  - "d"
  -    e`
        const expected = `{
  "a": 1,
  "b": 2,
  "c": [
    "d",
    "e"
  ]
}`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
