import { expectError, expectOutput } from './_helpers'
import { XmlFormatter } from '@lib/converters'

describe('converters', () => {
  describe('XmlFormatter', () => {
    it('formats XML', async () => {
      await expectOutput(
        XmlFormatter,
        `<?xml version="1.0" encoding="UTF-8"?>  <note> text
</note>`,
        'html-output',
        `<?xml version="1.0" encoding="UTF-8"?>
<note> text </note>
`,
      )
    })

    it('reports an error if the input is invalid', async () => {
      await expectError(
        XmlFormatter,
        '<note',
        'Opening tag "note" not terminated. (1:1)> 1 |',
      )
    })
  })
})
