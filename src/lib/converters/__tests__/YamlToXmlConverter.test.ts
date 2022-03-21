import { YamlToXmlConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('YamlToXmlConverter', () => {
    it('converts the YAML data to XML', async () => {
      await expectOutput(
        YamlToXmlConverter,
        `b:  2
a:      1
c:
  - "d"
  -    e`,
        'html-output',
        `<?xml version="1.0" encoding="UTF-8"?>
<b>2</b>
<a>1</a>
<c>d</c>
<c>e</c>
`,
      )
    })
  })
})
