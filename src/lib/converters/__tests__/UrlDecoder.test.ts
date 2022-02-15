import { operation } from '@lib/converters/UrlDecoder'

describe('converters', () => {
  describe('UrlDecoder', () => {
    describe('operation', () => {
      it('decodes url-encoded input', () => {
        const input = 'this%20is%20encoded%21'
        const expected = 'this is encoded!'
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
