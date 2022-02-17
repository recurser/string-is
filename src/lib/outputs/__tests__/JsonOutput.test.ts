import { output } from '@lib/outputs/JsonOutput'

describe('outputs', () => {
  describe('JsonOutput', () => {
    describe('output', () => {
      it('formats JSON', () => {
        const input = { b: 2, a: 1 } // eslint-disable-line sort-keys
        const expected = `{
  "a": 1,
  "b": 2
}`
        expect(output(input)).toEqual(expected)
      })

      it('allows key sorting to be disabled', () => {
        const input = { b: 2, a: 1 } // eslint-disable-line sort-keys
        const expected = `{
  "b": 2,
  "a": 1
}`
        expect(output(input, { sortKeys: false })).toEqual(expected)
      })

      it('allows whitespace to be specified', () => {
        const input = { a: 1, b: 2 }
        const expected = `{
    "a": 1,
    "b": 2
}`
        expect(output(input, { space: '    ' })).toEqual(expected)
      })
    })
  })
})
