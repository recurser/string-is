import { confidence } from '@lib/identities/CssIdentity'

describe('identities', () => {
  describe('CssIdentity', () => {
    describe('confidence', () => {
      it('accepts valid CSS', async () => {
        const input = 'a { color: red }'
        expect(await confidence(input)).toEqual(80)
      })

      it('rejects invalid CSS', async () => {
        const input = 'a { color: red'
        expect(await confidence(input)).toEqual(0)
      })

      it('rejects empty input', async () => {
        expect(await confidence('')).toEqual(0)
      })
    })
  })
})
