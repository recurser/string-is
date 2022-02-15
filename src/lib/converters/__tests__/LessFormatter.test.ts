import { operation } from '@lib/converters/LessFormatter'

describe('converters', () => {
  describe('LessFormatter', () => {
    describe('operation', () => {
      it('formats the LESS input', () => {
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
