import { operation } from '@lib/converters/Base64Encoder'

describe('converters', () => {
  describe('Base64Encoder', () => {
    describe('operation', () => {
      it('base64-encodes the input', () => {
        const input = 'some data to encode'
        const expected = 'c29tZSBkYXRhIHRvIGVuY29kZQ=='
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
