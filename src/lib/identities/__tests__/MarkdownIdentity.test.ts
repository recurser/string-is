import { confidence } from '@lib/identities/MarkdownIdentity'

describe('identities', () => {
  describe('MarkdownIdentity', () => {
    describe('confidence', () => {
      it('accepts strings containing Markdown links', () => {
        const input = 'See [example](https://string.is/) page'
        expect(confidence(input)).toEqual(100)
      })

      it('accepts strings containing Markdown headings', () => {
        const input = `Some introductory text
## A heading
### A sub-heading

A paragraph`
        expect(confidence(input)).toEqual(100)
      })

      it('accepts strings containing Markdown strike-throughs', () => {
        const input = `Some introductory text
then ~~strike this~~ ok`
        expect(confidence(input)).toEqual(100)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
