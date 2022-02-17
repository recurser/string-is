import { confidence } from '@lib/identities/UrlEncodeIdentity'

describe('identities', () => {
  describe('UrlEncodeIdentity', () => {
    describe('confidence', () => {
      it('accepts non-url-encoded input', () => {
        expect(confidence('plain text')).toEqual(1)
      })

      it('rejects url-encoded input', () => {
        expect(confidence('this%20is%20encoded%21')).toEqual(0)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
