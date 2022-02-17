import { expectError, expectOutput } from './_helpers'
import { JavaScriptFormatter } from '@lib/converters'

describe('converters', () => {
  describe('JavaScriptFormatter', () => {
    it('formats Javascript', async () => {
      await expectOutput(
        JavaScriptFormatter,
        `const foo =
'bar'
const obj = { a: 1,
b: 2 }`,
        'javascript-output',
        `const foo = 'bar';
const obj = { a: 1, b: 2 };
`,
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        JavaScriptFormatter,
        'invalid! {',
        'Unexpected token (1:11)> 1 | invalid! { | ^',
      )
    })
  })
})
