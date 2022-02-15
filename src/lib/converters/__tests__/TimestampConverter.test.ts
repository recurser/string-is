import { operation } from '@lib/converters/TimestampConverter'

describe('converters', () => {
  describe('TimestampConverter', () => {
    describe('operation', () => {
      it('converts the input to a datetime string', () => {
        const input = 'January 2020'
        const expected = '2020-01-01 12:00'
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
