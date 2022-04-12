import { output } from '@lib/outputs/TomlOutput'

describe('outputs', () => {
  describe('TomlOutput', () => {
    describe('output', () => {
      it('formats TOML', () => {
        const input = { b: 2, a: 1, c: ['d', 'e'] } // eslint-disable-line sort-keys
        const expected = `b = 2
a = 1
c = [ "d", "e" ]
`
        expect(output(input)).toEqual(expected)
      })

      it('allows keys to be sorted', () => {
        const input = { b: 2, a: 1, c: { e: 4, d: 3 } } // eslint-disable-line sort-keys
        const expected = `a = 1
b = 2

[c]
d = 3
e = 4
`
        expect(output(input, { sortKeys: true })).toEqual(expected)
      })
    })
  })
})
