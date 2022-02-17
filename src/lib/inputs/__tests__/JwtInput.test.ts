import { input } from '@lib/inputs/JwtInput'
import { jwt } from '@test/Constants'

describe('inputs', () => {
  describe('JwtInput', () => {
    describe('input', () => {
      it('parses the input', () => {
        const expected = {
          header: {
            alg: 'HS256',
            typ: 'JWT',
          },
          payload: {
            iat: 1516239022,
            name: 'John Doe',
            sub: '1234567890',
          },
          signature: 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        }
        expect(input(jwt)).toEqual(expected)
      })

      it('gives up given an empty input', () => {
        expect(input('')).toBeUndefined()
      })

      it('raises an error if the input could not be parsed', () => {
        expect(() => input('invalid')).toThrow(
          'The input could not be parsed as a valid JWT token',
        )
      })
    })
  })
})
