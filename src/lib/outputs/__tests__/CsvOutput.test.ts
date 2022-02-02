import { output } from '@lib/outputs/CsvOutput'

describe('outputs', () => {
  describe('CsvOutput', () => {
    describe('output', () => {
      it('formats an array of objects as a CSV', () => {
        const input = [
          { a: 1, b: 2, c: 3 },
          { a: 4, b: 5, c: 6 },
        ]
        const expected = `a,b,c\r\n1,2,3\r\n4,5,6`
        expect(output(input)).toEqual(expected)
      })

      it('handles non-arrays', () => {
        const input = [{ a: 1, b: 2, c: 3 }]
        const expected = `a,b,c\r\n1,2,3`
        expect(output(input)).toEqual(expected)
      })
    })
  })
})
