import { TomlToXmlConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('TomlToXmlConverter', () => {
    it('converts the TOML data to XML', async () => {
      await expectOutput(
        TomlToXmlConverter,
        `b = 2
a = 1
[c]
d = 3
e = 4`,
        'html-output',
        `<?xml version="1.0" encoding="UTF-8"?>
<b>2</b>
<a>1</a>
<c>
  <d>3</d>
  <e>4</e>
</c>
`,
      )
    })
  })
})
