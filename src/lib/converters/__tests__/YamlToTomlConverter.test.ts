import { YamlToTomlConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('YamlToTomlConverter', () => {
    it('converts the YAML data to TOML', async () => {
      await expectOutput(
        YamlToTomlConverter,
        `b: 2
a: 1
c:
  d: 3
  e: 4`,
        'toml-output',
        `b = 2
a = 1

[c]
d = 3
e = 4
`,
      )
    })
  })
})
