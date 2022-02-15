import { operation } from '@lib/converters/YamlFormatter'

describe('converters', () => {
  describe('YamlFormatter', () => {
    describe('operation', () => {
      it('formats YAML', () => {
        const input = `b:  2
a:      1
c:
  - "d"
  -    e`
        const expected = `---
b: 2
a: 1
c:
  - 'd'
  - 'e'
`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
