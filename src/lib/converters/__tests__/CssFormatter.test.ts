import { expectError, expectOutput } from './_helpers'
import { CssFormatter } from '@lib/converters'

describe('converters', () => {
  describe('CssFormatter', () => {
    it('formats CSS', async () => {
      await expectOutput(
        CssFormatter,
        `a { border : 1px solid red\n}`,
        'css-output',
        `a {\n  border: 1px solid red;\n}
`,
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        CssFormatter,
        'invalid! {',
        'CssSyntaxError: Unclosed block (1:1)> 1 | invalid! { | ^',
      )
    })
  })
})
