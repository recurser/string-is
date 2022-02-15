import { operation } from '@lib/converters/Base64Decoder'

describe('converters', () => {
  describe('Base64Decoder', () => {
    describe('operation', () => {
      it('decodes base64-encoded input', () => {
        const input = 'c29tZSBlbmNvZGVkIGRhdGE='
        const expected = 'some encoded data'
        expect(operation(input)).toEqual(expected)
      })

      it('throws an error if the input in invalid', () => {
        const input = 'invalid!'
        expect(() => operation(input)).toThrow(
          'The input is not a valid Base64 string',
        )
      })
    })
  })
})
