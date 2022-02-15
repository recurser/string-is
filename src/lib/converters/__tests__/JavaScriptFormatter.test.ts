import { operation } from '@lib/converters/JavaScriptFormatter'

describe('converters', () => {
  describe('JavaScriptFormatter', () => {
    describe('operation', () => {
      it('formats JavaScript', () => {
        const input = `const foo =
'bar'
const obj = { a: 1,
b: 2 }`
        const expected = `const foo = 'bar';
const obj = { a: 1, b: 2 };
`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
