import { LowerCaseConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('LowerCaseConverter', () => {
    it('converts the input to lower case', async () => {
      await expectOutput(
        LowerCaseConverter,
        `漢字 ThIs Is MiXeD cAsE ひらがな`,
        'plain-output',
        `漢字 this is mixed case ひらがな`,
      )
    })
  })
})
