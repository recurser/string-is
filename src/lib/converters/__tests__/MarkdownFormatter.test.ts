import { operation } from '@lib/converters/MarkdownFormatter'

describe('converters', () => {
  describe('MarkdownFormatter', () => {
    describe('operation', () => {
      it('formats the Markdown input', () => {
        const input = `  ### Heading
  **bold text**
*italic text 1*
  _italic text 2_`
        const expected = `### Heading

**bold text**
_italic text 1_
_italic text 2_
`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
