import { TimestampConverter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('TimestampConverter', () => {
    it('converts the input to local time', async () => {
      await expectOutput(
        TimestampConverter,
        '1234567890',
        'datetime-local-output',
        '2009-02-13 23:31',
      )
    })

    it('converts the input to UTC time', async () => {
      await expectOutput(
        TimestampConverter,
        '1234567890',
        'datetime-utc-output',
        '2009-02-13 23:31',
      )
    })

    it('handles human-readable times', async () => {
      await expectOutput(
        TimestampConverter,
        'January 2020',
        'datetime-local-output',
        '2020-01-01 12:00',
      )
    })

    it('handles timezones', async () => {
      await expectOutput(
        TimestampConverter,
        'January 1st 2020 3pm JST in PST',
        'datetime-local-output',
        '2020-01-01 06:00',
      )
    })
  })
})
