import { input } from '@lib/inputs/TomlInput'

describe('inputs', () => {
  describe('TomlInput', () => {
    describe('input', () => {
      it('parses the input', () => {
        const data = `[abc]
foo = 123
bar = [1,2,3]`
        const expected = { abc: { foo: 123, bar: [1, 2, 3] } } // eslint-disable-line sort-keys
        expect(input(data)).toEqual(expected)
      })

      it('gives up given an empty input', () => {
        expect(input('')).toBeUndefined()
      })

      it('raises an error if the input could not be parsed', () => {
        expect(() => input('invalid')).toThrow(
          /Key ended without value at row 1, col 10, pos 9/,
        )
      })
    })
  })
})
