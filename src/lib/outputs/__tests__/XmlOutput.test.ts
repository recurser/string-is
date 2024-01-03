import { output } from '@lib/outputs/XmlOutput'

describe('outputs', () => {
  describe('XmlOutput', () => {
    describe('output', () => {
      it('formats XML', async () => {
        const input = { note: 'text' }
        const expected = `<?xml version="1.0" encoding="UTF-8"?>
<note>text</note>
`
        expect(await output(input)).toEqual(expected)
      })

      it('allows the tab width to be specified', async () => {
        const input = { line: { note: 'text' } }
        const expected = `<?xml version="1.0" encoding="UTF-8"?>
<line>
    <note>text</note>
</line>
`
        expect(await output(input, { tabWidth: 4 })).toEqual(expected)
      })

      it('allows the print width to be specified', async () => {
        const input = { note: 'text' }
        const expected = `<?xml version="1.0" encoding="UTF-8"?>
<note
  >text</note
>
`
        expect(await output(input, { printWidth: 15 })).toEqual(expected)
      })
    })
  })
})
