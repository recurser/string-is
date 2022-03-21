import { XmlToJsonConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('XmlToJsonConverter', () => {
    it('converts XML data to JSON', async () => {
      await expectOutput(
        XmlToJsonConverter,
        `<?xml version="1.0" encoding="UTF-8"?>  <note> text
</note>`,
        'json-output',
        `{
  "note": "text"
}`,
      )
    })
  })
})
