import { JsonToXmlConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('JsonToXmlConverter', () => {
    it('converts JSON data to XML', async () => {
      await expectOutput(
        JsonToXmlConverter,
        `[
  {
    "a": "1",
    "b": "2",
    "c": "3"
  },
  {
    "a": "4",
    "b": "5",
    "c": "6"
  }
]`,
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
