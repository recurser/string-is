import { CsvToJsonConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('CsvToJsonConverter', () => {
    it('converts CSV data to JSON', async () => {
      await expectOutput(
        CsvToJsonConverter,
        `a,b,c\n1,2,3\n4,5,6`,
        'json-output',
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
      )
    })
  })
})
