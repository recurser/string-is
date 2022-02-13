import { confidence } from '@lib/identities/QueryStringIdentity'

describe('identities', () => {
  describe('QueryStringIdentity', () => {
    describe('confidence', () => {
      it('accepts URLs with a query component', () => {
        const input = 'https://string.is/?foo=bar&today=2022-02-13'
        expect(confidence(input)).toEqual(100)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })

      it('rejects URLs with no query component', () => {
        expect(confidence('https://string.is/?')).toEqual(0)
      })
    })
  })
})
