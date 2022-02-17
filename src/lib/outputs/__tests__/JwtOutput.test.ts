import { header, output } from '@lib/outputs/JwtOutput'
import { jwt } from '@test/Constants'
import { input as jwtInput } from '@lib/inputs/JwtInput'

describe('outputs', () => {
  describe('JwtOutput', () => {
    describe('output', () => {
      it('parses JWT tokens', () => {
        const input = jwtInput(jwt)
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
        expect(header(jwt)).toEqual(expected)
      })
    })
  })
})
