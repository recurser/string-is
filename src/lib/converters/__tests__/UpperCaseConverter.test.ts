import { operation } from '@lib/converters/UpperCaseConverter'

describe('converters', () => {
  describe('UpperCaseConverter', () => {
    describe('operation', () => {
      it('converts the input to upper case', () => {
        const input = `漢字 ThIs Is MiXeD cAsE ひらがな`
        const expected = `漢字 THIS IS MIXED CASE ひらがな`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
