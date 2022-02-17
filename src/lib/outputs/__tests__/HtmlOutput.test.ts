import { output } from '@lib/outputs/HtmlOutput'

describe('outputs', () => {
  describe('HtmlOutput', () => {
    describe('output', () => {
      it('formats HTML', () => {
        const input = `<b >hi there
</ b>`
        const expected = `<b>hi there </b>
`
        expect(output(input)).toEqual(expected)
      })

      it('allows the tab width to be specified', () => {
        const input = `<p>
<b>hi there</b></p>`
        const expected = `<p>
    <b>hi there</b>
</p>
`
        expect(output(input, { tabWidth: 4 })).toEqual(expected)
      })

      it('allows the print width to be specified', () => {
        const input = `<p><b>hi there</b></p>`
        const expected = `<p>
  <b
    >hi
    there</b
  >
</p>
`
        expect(output(input, { printWidth: 15 })).toEqual(expected)
      })
    })
  })
})
