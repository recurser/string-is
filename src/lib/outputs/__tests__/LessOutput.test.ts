import { output } from '@lib/outputs/LessOutput'

describe('outputs', () => {
  describe('LessOutput', () => {
    describe('output', () => {
      it('formats LESS', async () => {
        const input = `a { border : 1px solid red; b { font-weight: bold; }
}`
        const expected = `a {
  border: 1px solid red;
  b {
    font-weight: bold;
  }
}
`
        expect(await output(input)).toEqual(expected)
      })

      it('allows the tab width to be specified', async () => {
        const input = `a { border : 1px solid red
}`
        const expected = `a {
    border: 1px solid red;
}
`
        expect(await output(input, { tabWidth: 4 })).toEqual(expected)
      })

      it('allows the print width to be specified', async () => {
        const input = `a { border : 1px solid red }`
        const expected = `a {
  border: 1px solid
    red;
}
`
        expect(await output(input, { printWidth: 20 })).toEqual(expected)
      })
    })
  })
})
