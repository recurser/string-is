import { operation } from '@lib/converters/RipemdEncoder'

describe('converters', () => {
  describe('RipemdEncoder', () => {
    describe('operation', () => {
      it('generates an MD5 hash from the input', () => {
        const input = 'hash this'
        const expected = 'd5443a154f167e2c1332f6de72cfb4c6ab9c8c17'
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
