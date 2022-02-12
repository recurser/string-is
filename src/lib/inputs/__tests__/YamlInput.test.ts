import { input } from '@lib/inputs/YamlInput'

describe('inputs', () => {
  describe('YamlInput', () => {
    describe('input', () => {
      it('parses the input', () => {
        const data = `---
b: 2
a: 1
c:
  - 'd'
  - 'e'
`
        const expected = { a: 1, b: 2, c: ['d', 'e'] }
        expect(input(data)).toEqual(expected)
      })

      it('gives up given an empty input', () => {
        expect(input('')).toBeUndefined()
      })

      it('raises an error if the input could not be parsed', () => {
        expect(() => input('invalid')).toThrow(
          'The input could not be parsed as valid YAML',
        )
      })
    })
  })
})
