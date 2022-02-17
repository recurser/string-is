import { output } from '@lib/outputs/LowerCaseOutput'

describe('outputs', () => {
  describe('LowerCaseOutput', () => {
    describe('output', () => {
      it('converts text to lower case', () => {
        const input = `漢字 ThIs Is MiXeD cAsE ひらがな`
        const expected = `漢字 this is mixed case ひらがな`
        expect(output(input)).toEqual(expected)
      })
    })
  })
})
