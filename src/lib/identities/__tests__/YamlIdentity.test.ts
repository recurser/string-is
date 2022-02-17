import { confidence } from '@lib/identities/YamlIdentity'

describe('identities', () => {
  describe('YamlIdentity', () => {
    describe('confidence', () => {
      it('accepts valid YAML', () => {
        const input = `---
b: 2
a: 1
c:
  - 'd'
  - 'e'
`
        expect(confidence(input)).toEqual(100)
      })

      it('rejects invalid YAML', () => {
        expect(confidence('invalid!')).toEqual(0)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
