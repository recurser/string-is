import { operation } from '@lib/converters/JsonToYamlConverter'

describe('converters', () => {
  describe('JsonToYamlConverter', () => {
    describe('operation', () => {
      it('converts the JSON input to YAML', () => {
        const input = `[
  {
    "a": "1",
    "b": "2",
    "c": "3"
  },
  {
    "a": "4",
    "b": "5",
    "c": "6"
  }
]`
        const expected = `---
- a: '1'
  b: '2'
  c: '3'
- a: '4'
  b: '5'
  c: '6'
`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
