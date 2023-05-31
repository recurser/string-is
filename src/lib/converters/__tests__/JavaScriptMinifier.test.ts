import { expectError, expectOutput } from './_helpers'
import { JavaScriptMinifier } from '@lib/converters'

describe('converters', () => {
  describe('JavaScriptMinifier', () => {
    it('formats Javascript', async () => {
      await expectOutput(
        JavaScriptMinifier,
        `const foo =
'bar'
const obj = { a: 1,
b: 2 }`,
        'plain-output',
        'const foo="bar",obj={a:1,b:2};',
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        JavaScriptMinifier,
        'invalid! {',
        'Unexpected token: operator (!)',
      )
    })
  })
})
