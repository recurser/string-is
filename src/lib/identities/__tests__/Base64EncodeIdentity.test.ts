import { confidence } from '@lib/identities/Base64EncodeIdentity'

describe('identities', () => {
  describe('Base64EncodeIdentity', () => {
    describe('confidence', () => {
      it('accepts non-base64-encoded input', () => {
        expect(confidence('plain text')).toEqual(1)
      })

      it('rejects base64-encoded input', () => {
        expect(confidence('c29tZSBlbmNvZGVkIGRhdGE=')).toEqual(0)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
