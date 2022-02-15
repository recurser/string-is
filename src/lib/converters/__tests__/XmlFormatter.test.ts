import { operation } from '@lib/converters/XmlFormatter'

describe('converters', () => {
  describe('XmlFormatter', () => {
    describe('operation', () => {
      it('formats XML', () => {
        const input = `<?xml version="1.0" encoding="UTF-8"?>  <note> text
</note>`
        const expected = `<?xml version="1.0" encoding="UTF-8"?>
<note> text </note>
`
        expect(operation(input)).toEqual(expected)
      })
    })
  })
})
