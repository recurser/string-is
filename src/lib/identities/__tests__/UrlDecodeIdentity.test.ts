import { confidence } from '@lib/identities/UrlDecodeIdentity'

describe('identities', () => {
  describe('UrlDecodeIdentity', () => {
    describe('confidence', () => {
      it('recognises url-encoded input', () => {
        expect(confidence('this%20is%20encoded%21')).toEqual(100)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })

      it('rejects output that is identical to the input', () => {
        expect(confidence('some plain data')).toEqual(0)
      })
    })
  })
})
