import { XmlToYamlConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('XmlToYamlConverter', () => {
    it('converts XML data to YAML', async () => {
      await expectOutput(
        XmlToYamlConverter,
        `<?xml version="1.0" encoding="UTF-8"?>  <note> text
</note>`,
        'yaml-output',
        `---
note: 'text'
`,
      )
    })
  })
})
