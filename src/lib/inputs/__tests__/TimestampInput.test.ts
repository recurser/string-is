import { input } from '@lib/inputs/TimestampInput'

describe('inputs', () => {
  describe('TimestampInput', () => {
    describe('input', () => {
      it('parses the input', () => {
        const data = '1234567890'
        expect(input(data)).toEqual(data)
      })

      it('parses human-readable time strings', () => {
        const data = 'January 1st 2020'
        const expected = '1577880000000'
        expect(input(data)).toEqual(expected)
      })

      it('parses explicitly UTC time strings', () => {
        const data = '2020-01-01 12:13 UTC'
        const expected = '1577880780000'
        expect(input(data)).toEqual(expected)
      })

      it('parses keywords that trigger the current time', () => {
        const spy = jest
          .spyOn(global.Date, 'now')
          .mockImplementation(() =>
            new Date('2020-01-01T00:00:00.005Z').valueOf(),
          )
        const data = 'now'
        const expected = '1577836800005'
        expect(input(data)).toEqual(expected)
        spy.mockRestore()
      })

      it('gives up given an empty input', () => {
        expect(input('')).toBeUndefined()
      })

      it('gives up if the input could not be parsed', () => {
        expect(input('invalid')).toBeUndefined()
      })

      it('assumes that the timestamp will start with a 1', () => {
        expect(input('2234567890')).toBeUndefined()
      })
    })
  })
})
