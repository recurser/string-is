import { operation } from '@lib/converters/HtmlFormatter'

describe('converters', () => {
  describe('HtmlFormatter', () => {
    describe('operation', () => {
      it('formats HTML', () => {
        const input = `<b >hi there
</ b>`
        const expected = `<b>hi there </b>
`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
