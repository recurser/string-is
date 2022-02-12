import { input } from '@lib/inputs/QueryStringInput'

describe('inputs', () => {
  describe('QueryStringInput', () => {
    describe('input', () => {
      it('parses the input', () => {
        const data = 'https://string.is/?foo=bar&today=2022-02-13'
        const expected = { foo: 'bar', today: '2022-02-13' }
        expect(input(data)).toEqual(expected)
      })

      it('gives up given an empty input', () => {
        expect(input('')).toBeUndefined()
      })

      it('gives up if the query string is empty', () => {
        expect(input('https://string.is/?')).toBeUndefined()
      })

      it('gives up on unsupported browsers', () => {
        const restore = window.URLSearchParams
        window.URLSearchParams = undefined
        expect(input('https://string.is/?foo=bar')).toBeUndefined()
        window.URLSearchParams = restore
      })

      it('raises an error if the input could not be parsed', () => {
        expect(() => input('invalid')).toThrow('Invalid URL: invalid')
      })
    })
  })
})
