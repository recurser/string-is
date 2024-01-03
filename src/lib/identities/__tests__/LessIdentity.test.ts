import { confidence } from '@lib/identities/LessIdentity'

describe('identities', () => {
  describe('LessIdentity', () => {
    describe('confidence', () => {
      it('accepts valid LESS', async () => {
        const input = 'h2 { color: @primaryColor }'
        expect(await confidence(input)).toEqual(90)
      })

      it('rejects invalid LESS', async () => {
        const input = 'a { color: @primaryColor'
        expect(await confidence(input)).toEqual(0)
      })

      it('rejects empty input', async () => {
        expect(await confidence('')).toEqual(0)
      })
    })
  })
})
