import { expectError, expectOutput } from './_helpers'
import { CsvFormatter } from '@lib/converters'

describe('converters', () => {
  describe('CsvFormatter', () => {
    it('formats CSV data', async () => {
      await expectOutput(
        CsvFormatter,
        `a,b,c\n1,2,3\n4,5,6`,
        'csv-output',
        `"a","b","c"\n"1","2","3"\n"4","5","6"`,
      )
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(
        CsvFormatter,
        'a',
        'Unable to auto-detect delimiting character; defaulted to ',
        '',
      )
    })
  })
})
