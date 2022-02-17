import { JsonToYamlConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('JsonToYamlConverter', () => {
    it('converts JSON data to YAML', async () => {
      await expectOutput(
        JsonToYamlConverter,
        `[
  {
    "a": "1",
    "b": "2",
    "c": "3"
  },
  {
    "a": "4",
    "b": "5",
    "c": "6"
  }
]`,
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
