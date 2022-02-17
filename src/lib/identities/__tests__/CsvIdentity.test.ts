import { confidence } from '@lib/identities/CsvIdentity'

describe('identities', () => {
  describe('CsvIdentity', () => {
    describe('confidence', () => {
      it('accepts valid CSVs', () => {
        const input = `a,b,c
1,2,3`
        expect(confidence(input)).toEqual(100)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })

      it('rejects input with no commas', () => {
        expect(confidence('a\n1')).toEqual(0)
      })

      it('rejects valid CSVs that can be parsed as JSON', () => {
        expect(confidence('{ a: 2, b: 2 }')).toEqual(0)
      })
    })
  })
})
