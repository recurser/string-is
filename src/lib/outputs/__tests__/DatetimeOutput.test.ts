import {
  output,
  relativeOutput,
  timestampOutput,
  utcOutput,
} from '@lib/outputs/DatetimeOutput'

describe('outputs', () => {
  describe('DatetimeOutput', () => {
    describe('output', () => {
      it('formats the time string', () => {
        const input = '2022/02/02'
        const expected = '2022-02-02 12:00'
        expect(output(input)).toEqual(expected)
      })

      it('respects format and timezone options', () => {
        const input = '2022-02-02 13:00 UTC'
        const options = {
          format: 'DD/MM/YYYY HH:mm:ss',
          timezone: 'Atlantic/Bermuda',
        }
        const expected = '02/02/2022 09:00:00'
        // Make sure we're running in UTC, or this test is going to break.
        expect(new Date().getTimezoneOffset()).toBe(0)
        expect(output(input, options)).toEqual(expected)
      })
    })

    describe('relativeOutput', () => {
      it('returns a relative time', () => {
        const input = '120 minutes ago'
        const expected = '2 hours ago'
        expect(relativeOutput(input)).toEqual(expected)
      })
    })

    describe('timestampOutput', () => {
      it('returns a timestamp', () => {
        const input = '2022-02-02 13:00 UTC'
        const expected = '1643806800'
        expect(timestampOutput(input)).toEqual(expected)
      })
    })

    describe('utcOutput', () => {
      it('formats the time string', () => {
        const input = '2022/02/02 00:00 PST'
        const expected = '2022-02-02 08:00'
        expect(utcOutput(input)).toEqual(expected)
      })

      it('respects the format option', () => {
        const input = '2022-02-02 13:00 PST'
        const options = { format: 'DD/MM/YYYY HH:mm:ss' }
        const expected = '02/02/2022 21:00:00'
        expect(utcOutput(input, options)).toEqual(expected)
      })
    })
  })
})
