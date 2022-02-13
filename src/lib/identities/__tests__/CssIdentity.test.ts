import { confidence } from '@lib/identities/CssIdentity'

describe('identities', () => {
  describe('CssIdentity', () => {
    describe('confidence', () => {
      it('accepts valid CSS', () => {
        const input = 'a { color: red }'
        expect(confidence(input)).toEqual(80)
      })

      it('rejects invalid CSS', () => {
        const input = 'a { color: red'
        expect(confidence(input)).toEqual(0)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
