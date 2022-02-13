import { confidence } from '@lib/identities/TimestampIdentity'

describe('identities', () => {
  describe('TimestampIdentity', () => {
    describe('confidence', () => {
      it('accepts timestamps', () => {
        expect(confidence('1234567890')).toEqual(100)
      })

      it('accepts human-readable time strings', () => {
        expect(confidence('yesterday')).toEqual(100)
      })

      it('accepts keywords', () => {
        ;['now', 'time', 'timestamp'].forEach((input) =>
          expect(confidence(input)).toEqual(100),
        )
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })

      it('rejects invalid input', () => {
        expect(confidence('Invalid!')).toEqual(0)
      })
    })
  })
})
