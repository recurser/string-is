import { operation } from '@lib/converters/ShaEncoder'

describe('converters', () => {
  describe('ShaEncoder', () => {
    describe('operation', () => {
      it('generates a SHA hash from the input', () => {
        const input = 'hash this'
        const expected =
          '19467788bc0cf11790a075ea718452cecf0e79db59d1964670475e5fe2e4a611'
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
