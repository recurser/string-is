import { operation } from '@lib/converters/JwtDecoder'

import { jwt } from '@test/Constants'

describe('converters', () => {
  describe('JwtDecoder', () => {
    describe('operation', () => {
      it('decodes the JWT body', () => {
        const expected = `{
  "iat": 1516239022,
  "name": "John Doe",
  "sub": "1234567890"
}`
        expect(operation(jwt)).toEqual(expected)
      })
    })
  })
})
