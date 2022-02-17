import { expectError, expectOutput } from './_helpers'
import { JwtDecoder } from '@lib/converters'
import { jwt } from '@test/Constants'

describe('converters', () => {
  describe('JwtDecoder', () => {
    it('decodes JWT token bodies', async () => {
      await expectOutput(
        JwtDecoder,
        jwt,
        'jwt-body-output',
        `{
  "iat": 1516239022,
  "name": "John Doe",
  "sub": "1234567890"
}`,
      )
    })

    it('decodes JWT token headers', async () => {
      await expectOutput(
        JwtDecoder,
        jwt,
        'jwt-header-output',
        `{
  "alg": "HS256",
  "typ": "JWT"
}`,
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        JwtDecoder,
        'invalid! {',
        'The input could not be parsed as a valid JWT token',
      )
    })
  })
})
