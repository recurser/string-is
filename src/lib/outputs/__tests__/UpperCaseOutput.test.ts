import { output } from '@lib/outputs/UpperCaseOutput'

describe('outputs', () => {
  describe('UpperCaseOutput', () => {
    describe('output', () => {
      it('converts text to upper case', () => {
        const input = `漢字 ThIs Is MiXeD cAsE ひらがな`
        const expected = `漢字 THIS IS MIXED CASE ひらがな`
        expect(output(input)).toEqual(expected)
      })
    })
  })
})
