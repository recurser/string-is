import { confidence } from '@lib/identities/NumberIdentity'

describe('identities', () => {
  describe('NumberIdentity', () => {
    describe('confidence', () => {
      it('accepts numbers', () => {
        expect(confidence('12345')).toEqual(95)
      })

      it('accepts numbers with commas', () => {
        expect(confidence('12,345')).toEqual(95)
      })

      it('accepts numbers in different bases', () => {
        expect(confidence('abcde')).toEqual(95)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })

      it('rejects invalid input', () => {
        expect(confidence('invalid!')).toEqual(0)
      })
    })
  })
})
