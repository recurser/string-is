import { XmlToTomlConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('XmlToTomlConverter', () => {
    it('converts XML data to TOML', async () => {
      await expectOutput(
        XmlToTomlConverter,
        `<?xml version="1.0" encoding="UTF-8"?>  <note> text
</note>`,
        'toml-output',
        `note = "text"
`,
      )
    })
  })
})
