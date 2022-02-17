import { confidence } from '@lib/identities/JsonObjectIdentity'

describe('identities', () => {
  describe('JsonObjectIdentity', () => {
    describe('confidence', () => {
      it('accepts valid JSON objects', () => {
        ;[
          '{"a":1,"b":2}',
          '{"a":1,"b":2,"c":{"d":"e"}}',
          '{"a":1,"b":2,"c":{"d":"e",},}',
        ].forEach((input) => {
          expect(confidence(input)).toEqual(100)
        })
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })

      it('rejects empty objects', () => {
        expect(confidence('{}')).toEqual(0)
      })

      it('rejects arrays', () => {
        expect(confidence('[1,2,3]')).toEqual(0)
      })
    })
  })
})
