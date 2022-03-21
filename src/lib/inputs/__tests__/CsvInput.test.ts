import { input } from '@lib/inputs/CsvInput'

describe('inputs', () => {
  describe('CsvInput', () => {
    describe('input', () => {
      it('parses the input', () => {
        const data = 'a,b,c,d\r\n1,2,3,d\r\n4,5,6,d'
        const expected = [
          { a: 1, b: 2, c: 3, d: 'd' },
          { a: 4, b: 5, c: 6, d: 'd' },
        ]
        expect(input(data)).toEqual(expected)
      })

      it('gives up given an empty input', () => {
        expect(input('')).toBeUndefined()
      })

      it('raises an error if the input could not be parsed', () => {
        expect(() => input(',')).toThrow(
          'The input could not be parsed as a valid CSV',
        )
      })
    })
  })
})
