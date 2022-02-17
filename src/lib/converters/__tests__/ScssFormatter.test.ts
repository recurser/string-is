import { expectError, expectOutput } from './_helpers'
import { ScssFormatter } from '@lib/converters'

describe('converters', () => {
  describe('ScssFormatter', () => {
    it('formats SCSS', async () => {
      await expectOutput(
        ScssFormatter,
        `a { border : 1px solid red; b { font-weight: bold; }
}`,
        'css-output',
        `a {
  border: 1px solid red;
  b {
    font-weight: bold;
  }
}
`,
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        ScssFormatter,
        'invalid! {',
        'CssSyntaxError: Unclosed block (1:1)> 1 | invalid! { | ^',
      )
    })
  })
})
