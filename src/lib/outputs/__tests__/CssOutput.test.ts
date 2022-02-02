import { output } from '@lib/outputs/CssOutput'

describe('outputs', () => {
  describe('CssOutput', () => {
    describe('output', () => {
      it('formats CSS', () => {
        const input = `a { border : 1px solid red
}`
        const expected = `a {
  border: 1px solid red;
}
`
        expect(output(input)).toEqual(expected)
      })
    })
  })
})
