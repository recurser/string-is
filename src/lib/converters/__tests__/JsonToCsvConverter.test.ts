import { JsonToCsvConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('JsonToCsvConverter', () => {
    it('converts JSON data to CSV', async () => {
      await expectOutput(
        JsonToCsvConverter,
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
        'csv-output',
        `"a","b","c"\n"1","2","3"\n"4","5","6"`,
      )
    })
  })
})
