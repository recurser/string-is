import { operation } from '@lib/converters/CsvToJsonConverter'

describe('converters', () => {
  describe('CsvToJsonConverter', () => {
    describe('operation', () => {
      it('converts the CSV input to JSON', () => {
        const input = `a,b,c\n1,2,3\n4,5,6`
        const expected = `[
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
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
