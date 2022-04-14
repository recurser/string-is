import { TomlToYamlConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('TomlToYamlConverter', () => {
    it('converts the TOML data to YAML', async () => {
      await expectOutput(
        TomlToYamlConverter,
        `b = 2
a = 1
[c]
d = 3
e = 4`,
        'yaml-output',
        `---
b: 2
a: 1
c:
  d: 3
  e: 4
`,
      )
    })
  })
})
