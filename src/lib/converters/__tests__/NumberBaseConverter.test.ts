import { operation } from '@lib/converters/NumberBaseConverter'

describe('converters', () => {
  describe('NumberBaseConverter', () => {
    describe('operation', () => {
      it('converts the number to the appropriate base', () => {
        const input = '123456789a'
        const expected = '21110211000120012112201'
        expect(operation(input, { fromRadix: 16, toRadix: 3 })).toEqual(
          expected,
        )
      })
    })
  })
})
