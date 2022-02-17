import { output } from '@lib/outputs/NumberBaseOutput'

describe('outputs', () => {
  describe('NumberBaseOutput', () => {
    describe('output', () => {
      it('converts numbers between bases', () => {
        const input = '123456789a'
        const expected = '21110211000120012112201'
        expect(output(input, { fromRadix: 16, toRadix: 3 })).toEqual(expected)
      })

      it('handles invalid input gracefully', () => {
        const input = 'aaa'
        const expected = ''
        expect(output(input, { fromRadix: 2, toRadix: 10 })).toEqual(expected)
      })
    })
  })
})
