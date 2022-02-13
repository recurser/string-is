import { confidence } from '@lib/identities/JsonPrimitiveArrayIdentity'

describe('identities', () => {
  describe('JsonPrimitiveArrayIdentity', () => {
    describe('confidence', () => {
      it('accepts valid JSON arrays of primitives', () => {
        ;['[1,2,3]', '[1,]'].forEach((input) => {
          expect(confidence(input)).toEqual(100)
        })
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })

      it('rejects arrays of complex objects', () => {
        expect(confidence('[{"a":1,"b":2}]')).toEqual(0)
      })

      it('rejects empty arrays', () => {
        expect(confidence('[]')).toEqual(0)
      })

      it('rejects objects', () => {
        expect(confidence('{"a":1,"b":2}')).toEqual(0)
      })
    })
  })
})
