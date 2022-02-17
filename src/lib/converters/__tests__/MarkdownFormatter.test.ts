import { MarkdownFormatter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('MarkdownFormatter', () => {
    it('formats Markdown', async () => {
      await expectOutput(
        MarkdownFormatter,
        `  ### Heading
  **bold text**
*italic text 1*
  _italic text 2_`,
        'markdown-output',
        `### Heading

**bold text**
_italic text 1_
_italic text 2_
`,
      )
    })
  })
})
