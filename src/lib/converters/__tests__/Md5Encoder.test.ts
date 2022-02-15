import { operation } from '@lib/converters/Md5Encoder'

describe('converters', () => {
  describe('Md5Encoder', () => {
    describe('operation', () => {
      it('generates an MD5 hash from the input', () => {
        const input = 'hash this'
        const expected = 'e80c715e5d4e885f68d7a3853b5fca73'
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
