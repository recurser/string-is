import { operation } from '@lib/converters/ScssFormatter'

describe('converters', () => {
  describe('ScssFormatter', () => {
    describe('operation', () => {
      it('formats the SCSS input', () => {
        const input = `a { border : 1px solid red; b { font-weight: bold; }
}`
        const expected = `a {
  border: 1px solid red;
  b {
    font-weight: bold;
  }
}
`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
