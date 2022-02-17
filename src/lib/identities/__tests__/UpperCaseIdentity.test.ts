import { confidence } from '@lib/identities/UpperCaseIdentity'

describe('identities', () => {
  describe('UpperCaseIdentity', () => {
    describe('confidence', () => {
      it('accepts lower-case strings', () => {
        const input = 'this is all lower-case with some numbers 1 2 3'
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

      it('rejects upper-case strings', () => {
        const input = 'THIS IS ALL UPPER-CASE WITH SOME NUMBERS 1 2 3'
        expect(confidence(input)).toEqual(0)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
