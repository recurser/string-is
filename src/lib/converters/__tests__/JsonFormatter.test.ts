import { operation } from '@lib/converters/JsonFormatter'

describe('converters', () => {
  describe('JsonFormatter', () => {
    describe('operation', () => {
      it('formats JSON', () => {
        const input = '{ b: 2, a: 1 }'
        const expected = `{
  "a": 1,
  "b": 2
}`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
