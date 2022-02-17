import { CsvToYamlConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('CsvToYamlConverter', () => {
    it('converts CSV data to YAML', async () => {
      await expectOutput(
        CsvToYamlConverter,
        `a,b,c\n1,2,3\n4,5,6`,
        'yaml-output',
        `---
- a: '1'
  b: '2'
  c: '3'
- a: '4'
  b: '5'
  c: '6'
`,
      )
    })
  })
})
