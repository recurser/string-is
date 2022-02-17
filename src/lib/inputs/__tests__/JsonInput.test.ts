import { input } from '@lib/inputs/JsonInput'

describe('inputs', () => {
  describe('JsonInput', () => {
    describe('input', () => {
      it('parses the input', () => {
        const data = `{"a":1,"b":2}`
        const expected = { a: 1, b: 2 }
        expect(input(data)).toEqual(expected)
      })

      it('gives up given an empty input', () => {
        expect(input('')).toBeUndefined()
      })

      it('raises an error if the input could not be parsed', () => {
        expect(() => input('invalid')).toThrow(
          'The input could not be parsed as valid JSON',
        )
      })
    })
  })
})
