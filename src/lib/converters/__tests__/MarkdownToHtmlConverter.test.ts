import { operation } from '@lib/converters/MarkdownToHtmlConverter'

describe('converters', () => {
  describe('MarkdownToHtmlConverter', () => {
    describe('operation', () => {
      it('converts the Markdown input to HTML', () => {
        const input = `### Heading
  **bold text**
*italic text 1*
  _italic text 2_`
        const expected = `<h3>Heading</h3>
<p>
  <strong>bold text</strong>
  <em>italic text 1</em>
  <em>italic text 2</em>
</p>
`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
