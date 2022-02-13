import { confidence } from '@lib/identities/JavaScriptIdentity'

describe('identities', () => {
  describe('JavaScriptIdentity', () => {
    describe('confidence', () => {
      it('accepts valid JavaScript', () => {
        ;['var foo', "console.log('test')", 'if (true) false'].forEach(
          (input) => {
            expect(confidence(input)).toEqual(90)
          },
        )
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
