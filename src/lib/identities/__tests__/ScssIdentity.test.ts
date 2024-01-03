import { confidence } from '@lib/identities/ScssIdentity'

describe('identities', () => {
  describe('ScssIdentity', () => {
    describe('confidence', () => {
      it('accepts valid SCSS', async () => {
        const input = 'p { a { color: red } }'
        expect(await confidence(input)).toEqual(100)
      })

      it('rejects invalid SCSS', async () => {
        const input = 'p { a { color: red '
        expect(await confidence(input)).toEqual(0)
      })

      it('rejects empty input', async () => {
        expect(await confidence('')).toEqual(0)
      })
    })
  })
})
