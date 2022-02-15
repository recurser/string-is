import { operation } from '@lib/converters/LowerCaseConverter'

describe('converters', () => {
  describe('LowerCaseConverter', () => {
    describe('operation', () => {
      it('converts the input to lower case', () => {
        const input = `漢字 ThIs Is MiXeD cAsE ひらがな`
        const expected = `漢字 this is mixed case ひらがな`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
