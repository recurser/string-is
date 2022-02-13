import { confidence } from '@lib/identities/JsonArrayIdentity'

describe('identities', () => {
  describe('JsonArrayIdentity', () => {
    describe('confidence', () => {
      it('accepts valid JSON arrays', () => {
        ;['[1,2,3]', '[{"a":1,"b":2}]', '[1,]'].forEach((input) => {
          expect(confidence(input)).toEqual(100)
        })
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
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
