import { output } from '@lib/outputs/Md5Output'

describe('outputs', () => {
  describe('Md5Output', () => {
    describe('output', () => {
      it('generates an MD5 hash', () => {
        const input = 'hash this'
        const expected = 'e80c715e5d4e885f68d7a3853b5fca73'
        expect(output(input)).toEqual(expected)
      })
    })
  })
})
