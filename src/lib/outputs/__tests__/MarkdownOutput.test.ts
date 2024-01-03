import { output } from '@lib/outputs/MarkdownOutput'

describe('outputs', () => {
  describe('MarkdownOutput', () => {
    describe('output', () => {
      it('formats Markdown', async () => {
        const input = `  ### Heading
  **bold text**
*italic text 1*
  _italic text 2_`
        const expected = `### Heading

**bold text**
_italic text 1_
_italic text 2_
`
        expect(await output(input)).toEqual(expected)
      })
    })
  })
})
