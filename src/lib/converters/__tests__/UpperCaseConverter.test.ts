import { UpperCaseConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('UpperCaseConverter', () => {
    it('converts the input to upper case', async () => {
      await expectOutput(
        UpperCaseConverter,
        `漢字 ThIs Is MiXeD cAsE ひらがな`,
        'plain-output',
        `漢字 THIS IS MIXED CASE ひらがな`,
      )
    })
  })
})
