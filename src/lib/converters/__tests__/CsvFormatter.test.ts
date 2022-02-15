import { operation } from '@lib/converters/CsvFormatter'

describe('converters', () => {
  describe('CsvFormatter', () => {
    describe('operation', () => {
      it('formats the CSV input', () => {
        const input = `a,b,c\n1,2,3\n4,5,6`
        const expected = `a,b,c\r\n1,2,3\r\n4,5,6`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
