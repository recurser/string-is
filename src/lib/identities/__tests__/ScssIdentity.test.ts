import { confidence } from '@lib/identities/ScssIdentity'

describe('identities', () => {
  describe('ScssIdentity', () => {
    describe('confidence', () => {
      it('accepts valid SCSS', () => {
        const input = 'p { a { color: red } }'
        expect(confidence(input)).toEqual(100)
      })

      it('rejects invalid SCSS', () => {
        const input = 'p { a { color: red '
        expect(confidence(input)).toEqual(0)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
