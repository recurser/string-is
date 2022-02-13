import { confidence } from '@lib/identities/UuidGeneratorIdentity'

describe('identities', () => {
  describe('UuidGeneratorIdentity', () => {
    describe('confidence', () => {
      it("accepts the 'uuid' keyword", () => {
        expect(confidence('uuid')).toEqual(100)
      })

      it('trims the input', () => {
        expect(confidence('  uuid  ')).toEqual(100)
      })

      it('accepts UUIDs as input', () => {
        expect(confidence('55da00a1-f708-4321-b2c6-d7c7551f35f8')).toEqual(100)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })

      it('rejects invalid input', () => {
        expect(confidence('invalid')).toEqual(0)
      })
    })
  })
})
