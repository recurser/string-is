import { input } from '@lib/inputs/NumberInput'

describe('inputs', () => {
  describe('NumberInput', () => {
    describe('input', () => {
      it('parses the input', () => {
        const data = '123456'
        expect(input(data)).toEqual(data)
      })

      it('strips commas', () => {
        const data = '123,456'
        const expected = '123456'
        expect(input(data)).toEqual(expected)
      })

      it('gives up given an empty input', () => {
        expect(input('')).toBeUndefined()
      })

      it('raises an error if the input could not be parsed', () => {
        expect(() => input('invalid!')).toThrow(
          'The input could not be parsed as a number',
        )
      })
    })
  })
})
