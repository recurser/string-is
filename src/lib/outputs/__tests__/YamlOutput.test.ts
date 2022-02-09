import { output } from '@lib/outputs/YamlOutput'

describe('outputs', () => {
  describe('YamlOutput', () => {
    describe('output', () => {
      it('formats YAML', () => {
        const input = { b: 2, a: 1, c: ['d', 'e'] } // eslint-disable-line sort-keys
        const expected = `---
b: 2
a: 1
c:
  - 'd'
  - 'e'
`
        expect(output(input)).toEqual(expected)
      })

      it('allows quotes to be optional', () => {
        const input = { a: ['b', 'c'] }
        const expected = `---
a:
  - b
  - c
`
        expect(output(input, { forceQuotes: false })).toEqual(expected)
      })

      it('allows indentation to be specified', () => {
        const input = { a: ['b', 'c'] }
        const expected = `---
a:
    - 'b'
    - 'c'
`
        expect(output(input, { indent: 4 })).toEqual(expected)
      })

      it('allows keys to be sorted', () => {
        const input = { b: 2, a: 1, c: { e: 4, d: 3 } } // eslint-disable-line sort-keys
        const expected = `---
a: 1
b: 2
c:
  d: 3
  e: 4
`
        expect(output(input, { sortKeys: true })).toEqual(expected)
      })
    })
  })
})
