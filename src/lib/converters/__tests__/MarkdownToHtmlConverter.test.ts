import { MarkdownToHtmlConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('MarkdownToHtmlConverter', () => {
    it('converts Markdown data to HTML', async () => {
      await expectOutput(
        MarkdownToHtmlConverter,
        `### Heading
  **bold text**
*italic text 1*
  _italic text 2_`,
        'html-output',
        `<h3>Heading</h3>
<p>
  <strong>bold text</strong>
  <em>italic text 1</em>
  <em>italic text 2</em>
</p>
`,
      )
    })
  })
})
