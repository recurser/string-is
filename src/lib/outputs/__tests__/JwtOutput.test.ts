import { header, output } from '@lib/outputs/JwtOutput'
import { input as jwtInput } from '@lib/inputs/JwtInput'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

describe('outputs', () => {
  describe('JwtOutput', () => {
    describe('output', () => {
      it('parses JWT tokens', () => {
        const input = jwtInput(token)
        const expected = `{
  "iat": 1516239022,
  "name": "John Doe",
  "sub": "1234567890"
}`
        expect(output(input)).toEqual(expected)
      })
    })

    describe('header', () => {
      it('parses JWT tokens', () => {
        const expected = `{
  "alg": "HS256",
  "typ": "JWT"
}`
        expect(header(token)).toEqual(expected)
      })
    })
  })
})
