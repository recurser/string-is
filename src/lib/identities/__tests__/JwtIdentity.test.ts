import { confidence } from '@lib/identities/JwtIdentity'
import { jwt } from '@test/Constants'

describe('identities', () => {
  describe('JwtIdentity', () => {
    describe('confidence', () => {
      it('accepts valid JWT tokens', () => {
        expect(confidence(jwt)).toEqual(100)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })

      it('rejects invalid input', () => {
        expect(confidence('not a token')).toEqual(0)
      })
    })
  })
})
