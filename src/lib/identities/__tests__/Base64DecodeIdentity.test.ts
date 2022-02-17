import { confidence } from '@lib/identities/Base64DecodeIdentity'

describe('identities', () => {
  describe('Base64DecodeIdentity', () => {
    describe('confidence', () => {
      it('recognises base64-encoded input', () => {
        expect(confidence('c29tZSBlbmNvZGVkIGRhdGE=')).toEqual(100)
      })

      it('rejects invalid encoded input', () => {
        expect(confidence('some plain data')).toEqual(0)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
