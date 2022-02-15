import { operation } from '@lib/converters/CssFormatter'

describe('converters', () => {
  describe('CssFormatter', () => {
    describe('operation', () => {
      it('formats the CSS input', () => {
        const input = `a { border : 1px solid red
}`
        const expected = `a {
  border: 1px solid red;
}
`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
