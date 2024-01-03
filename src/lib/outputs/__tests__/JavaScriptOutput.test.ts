import { output } from '@lib/outputs/JavaScriptOutput'

describe('outputs', () => {
  describe('JavaScriptOutput', () => {
    describe('output', () => {
      it('formats JavaScript', async () => {
        const input = `const foo =
'bar'
const obj = { a: 1,
b: 2 }`
        const expected = `const foo = 'bar';
const obj = { a: 1, b: 2 };
`
        expect(await output(input)).toEqual(expected)
      })

      it('allows the print width to be specified', async () => {
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
        expect(await output(input, { printWidth: 15 })).toEqual(expected)
      })

      it('allows semicolons to be removed', async () => {
        const input = `const foo = bar; let a = 10;`
        const expected = `const foo = bar
let a = 10
`
        expect(await output(input, { semi: false })).toEqual(expected)
      })

      it('allows single quotes to be enforced', async () => {
        const input = `const foo = "bar"`
        const expected = `const foo = 'bar';
`
        expect(await output(input, { singleQuote: true })).toEqual(expected)
      })

      it('allows the tab width to be specified', async () => {
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
        expect(await output(input, { tabWidth: 4 })).toEqual(expected)
      })
    })
  })
})
