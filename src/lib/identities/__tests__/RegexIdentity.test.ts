import { confidence } from '@lib/identities/RegexIdentity'

describe('identities', () => {
  describe('RegexIdentity', () => {
    describe('confidence', () => {
      it('accepts valid regular expressions', () => {
        const input = '/test/'
        expect(confidence(input)).toEqual(100)
      })

      it('trims whitespace', () => {
        const input = '  /test/  '
        expect(confidence(input)).toEqual(100)
      })

      it('accepts modifiers', () => {
        const input = '/test/igms'
        expect(confidence(input)).toEqual(100)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
