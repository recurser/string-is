import { JsonToJavaScriptConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('JsonToJavaScriptConverter', () => {
    it('converts JSON data to JavaScript', async () => {
      await expectOutput(
        JsonToJavaScriptConverter,
        `[
  {
    "a": "1",
    "b": "2",
    "c": "3"
  },
  {
    "a": "4",
    "b": "5",
    "c": "6"
  }
]`,
        'javascript-output',
        `const data = [
  { a: '1', b: '2', c: '3' },
  { a: '4', b: '5', c: '6' },
];
`,
      )
    })
  })
})
