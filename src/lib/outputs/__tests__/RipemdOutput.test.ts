import { output } from '@lib/outputs/RipemdOutput'

describe('outputs', () => {
  describe('RipemdOutput', () => {
    describe('output', () => {
      it('generates a RIPEMD hash', () => {
        const input = 'hash this'
        const expected = 'd5443a154f167e2c1332f6de72cfb4c6ab9c8c17'
        expect(output(input)).toEqual(expected)
      })
    })
  })
})
