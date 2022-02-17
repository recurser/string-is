import { expectError, expectOutput } from './_helpers'
import { LessFormatter } from '@lib/converters'

describe('converters', () => {
  describe('LessFormatter', () => {
    it('formats LESS', async () => {
      await expectOutput(
        LessFormatter,
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
        LessFormatter,
        'invalid! {',
        'CssSyntaxError: Unclosed block (1:1)> 1 | invalid! { | ^',
      )
    })
  })
})
