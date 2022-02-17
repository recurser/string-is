import { confidence } from '@lib/identities/HtmlIdentity'

describe('identities', () => {
  describe('HtmlIdentity', () => {
    describe('confidence', () => {
      it('accepts valid HTML', () => {
        ;[
          '<h1>heading</h1>',
          '<img />',
          "<script>console.log('test')</script>",
        ].forEach((input) => {
          expect(confidence(input)).toEqual(100)
        })
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })

      it('rejects XML', () => {
        const input = '<?xml version="1.0" encoding="UTF-8"?><note>text</note>'
        expect(confidence(input)).toEqual(0)
      })
    })
  })
})
