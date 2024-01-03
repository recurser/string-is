import { output } from '@lib/outputs/DiffOutput'

describe('outputs', () => {
  describe('DiffOutput', () => {
    describe('output', () => {
      it('displays a diff', async () => {
        const input = 'line 1\nline 2\n'
        const expected = `@@ -1,2 +1,2 @@
 line 1
-line 2
+line 3
`
        expect(
          await output(input, { compareString: 'line 1\nline 3\n' }),
        ).toEqual(expected)
      })
    })
  })
})
