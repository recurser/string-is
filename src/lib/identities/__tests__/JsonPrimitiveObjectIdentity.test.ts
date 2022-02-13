import { confidence } from '@lib/identities/JsonPrimitiveObjectIdentity'

describe('identities', () => {
  describe('JsonPrimitiveObjectIdentity', () => {
    describe('confidence', () => {
      it('accepts valid JSON objects with primitive values', () => {
        ;['{"a":1,"b":2}', '{"a":1,"b":"c","d":true,}'].forEach((input) => {
          expect(confidence(input)).toEqual(100)
        })
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })

      it('rejects objects with complex values', () => {
        expect(confidence('{"a":1,"b":2,"c":{"d":"e"}}')).toEqual(0)
      })

      it('rejects empty objects', () => {
        expect(confidence('{}')).toEqual(0)
      })

      it('rejects objects', () => {
        expect(confidence('[1,2,3]')).toEqual(0)
      })
    })
  })
})
