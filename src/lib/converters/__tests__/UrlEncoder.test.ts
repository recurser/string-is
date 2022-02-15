import { operation } from '@lib/converters/UrlEncoder'

describe('converters', () => {
  describe('UrlEncoder', () => {
    describe('operation', () => {
      it('URL-encodes the input', () => {
        const input = 'some data to encode'
        const expected = 'some%20data%20to%20encode'
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
