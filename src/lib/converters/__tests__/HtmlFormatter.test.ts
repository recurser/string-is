import { expectError, expectOutput } from './_helpers'
import { HtmlFormatter } from '@lib/converters'

describe('converters', () => {
  describe('HtmlFormatter', () => {
    it('formats HTML', async () => {
      await expectOutput(
        HtmlFormatter,
        `<b >hi there
</ b>`,
        'html-output',
        `<b>hi there </b>
`,
      )
    })

    it('reports an error if the input is invalid', async () => {
      await expectError(
        HtmlFormatter,
        '<paragraph',
        'Opening tag "paragraph" not terminated. (1:1)> 1 |',
      )
    })
  })
})
