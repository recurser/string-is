import { output } from '@lib/outputs/JavaScriptOutput'

describe('outputs', () => {
  describe('JavaScriptOutput', () => {
    describe('output', () => {
      it('formats JavaScript', () => {
        const input = `const foo =
'bar'
const obj = { a: 1,
b: 2 }`
        const expected = `const foo = 'bar';
const obj = { a: 1, b: 2 };
`
        expect(output(input)).toEqual(expected)
      })

      it('allows the print width to be specified', () => {
        const input = `const foo =
'bar'
const obj = { a: 1,
b: 2 }`
        const expected = `const foo =
  'bar';
const obj = {
  a: 1,
  b: 2,
};
`
        expect(output(input, { printWidth: 15 })).toEqual(expected)
      })

      it('allows semicolons to be removed', () => {
        const input = `const foo = bar; let a = 10;`
        const expected = `const foo = bar
let a = 10
`
        expect(output(input, { semi: false })).toEqual(expected)
      })

      it('allows single quotes to be enforced', () => {
        const input = `const foo = "bar"`
        const expected = `const foo = 'bar';
`
        expect(output(input, { singleQuote: true })).toEqual(expected)
      })

      it('allows the tab width to be specified', () => {
        const input = `const obj = { a: 1,
b: 2, c: {
  d: 3
}
}`
        const expected = `const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
    },
};
`
        expect(output(input, { tabWidth: 4 })).toEqual(expected)
      })
    })
  })
})
