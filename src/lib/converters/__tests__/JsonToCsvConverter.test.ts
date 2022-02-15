import { operation } from '@lib/converters/JsonToCsvConverter'

describe('converters', () => {
  describe('JsonToCsvConverter', () => {
    describe('operation', () => {
      it('converts the JSON input to CSV', () => {
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
        const expected = `a,b,c\r\n1,2,3\r\n4,5,6`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
