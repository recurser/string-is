import { CsvToXmlConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('CsvToXmlConverter', () => {
    it('converts CSV data to XML', async () => {
      await expectOutput(
        CsvToXmlConverter,
        `a,b,c\n1,2,3\n4,5,6`,
        'html-output',
        `<?xml version="1.0" encoding="UTF-8"?>
<item>
  <a>1</a>
  <b>2</b>
  <c>3</c>
</item>
<item>
  <a>4</a>
  <b>5</b>
  <c>6</c>
</item>
`,
      )
    })
  })
})
