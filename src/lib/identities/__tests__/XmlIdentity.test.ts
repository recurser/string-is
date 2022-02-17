import { confidence } from '@lib/identities/XmlIdentity'

describe('identities', () => {
  describe('XmlIdentity', () => {
    describe('confidence', () => {
      it('accepts valid XML', () => {
        const input = '<?xml version="1.0" encoding="UTF-8"?><note>text</note>'
        expect(confidence(input)).toEqual(100)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })

      it('rejects HTML', () => {
        const input = '<body><p>text</p></body>'
        expect(confidence(input)).toEqual(0)
      })
    })
  })
})
