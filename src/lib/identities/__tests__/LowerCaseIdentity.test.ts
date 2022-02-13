import { confidence } from '@lib/identities/LowerCaseIdentity'

describe('identities', () => {
  describe('LowerCaseIdentity', () => {
    describe('confidence', () => {
      it('accepts upper-case strings', () => {
        const input = 'THIS IS ALL UPPER-CASE WITH SOME NUMBERS 1 2 3'
        expect(confidence(input)).toEqual(1)
      })

      it('accepts mixed-case strings', () => {
        const input = 'This has some UPPER case characters'
        expect(confidence(input)).toEqual(1)
      })

      it('rejects strings with no alpha characters', () => {
        const input = 'ひらがな'
        expect(confidence(input)).toEqual(0)
      })

      it('rejects lower-case strings', () => {
        const input = 'this is all lower-case with some numbers 1 2 3'
        expect(confidence(input)).toEqual(0)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
