import { confidence } from '@lib/identities/TomlIdentity'

describe('identities', () => {
  describe('TomlIdentity', () => {
    describe('confidence', () => {
      it('accepts valid TOML', () => {
        const input = `b = 2
a = 1
[c]
d = 3
e = 4`
        expect(confidence(input)).toEqual(100)
      })

      it('rejects invalid TOML', () => {
        expect(confidence('invalid!')).toEqual(0)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
