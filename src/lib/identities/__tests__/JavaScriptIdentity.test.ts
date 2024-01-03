import { confidence } from '@lib/identities/JavaScriptIdentity'

describe('identities', () => {
  describe('JavaScriptIdentity', () => {
    describe('confidence', () => {
      it('accepts valid JavaScript', async () => {
        ;['var foo', "console.log('test')", 'if (true) false'].forEach(
          async (input) => {
            expect(await confidence(input)).toEqual(90)
          },
        )
      })

      it('rejects empty input', async () => {
        expect(await confidence('')).toEqual(0)
      })
    })
  })
})
