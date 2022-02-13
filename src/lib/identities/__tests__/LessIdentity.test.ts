import { confidence } from '@lib/identities/LessIdentity'

describe('identities', () => {
  describe('LessIdentity', () => {
    describe('confidence', () => {
      it('accepts valid LESS', () => {
        const input = 'h2 { color: @primaryColor }'
        expect(confidence(input)).toEqual(90)
      })

      it('rejects invalid LESS', () => {
        const input = 'a { color: @primaryColor'
        expect(confidence(input)).toEqual(0)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
