import { assertOutput, expectError } from './_helpers'
import { fireEvent, screen } from '@testing-library/react'
import { RegexDebugger } from '@lib/converters'

describe('converters', () => {
  describe('RegexDebugger', () => {
    it('displays a single match', async () => {
      await assertOutput(RegexDebugger, '/find this/', () => {
        const inputElement = screen.getByTestId('regex-input')
        fireEvent.change(inputElement, {
          target: { value: 'can you find this?' },
        })

        const matchOutput = screen.getByTestId('regex-match-output')
        expect(matchOutput.value).toEqual('find this')

        const alert = screen.getByTestId('output-success')
        expect(alert).toHaveTextContent('alert_single_match')
      })
    })

    it('displays multiple matches', async () => {
      await assertOutput(RegexDebugger, '/find this/g', () => {
        const inputElement = screen.getByTestId('regex-input')
        fireEvent.change(inputElement, {
          target: { value: 'can you find this?\ncan you find this?' },
        })

        const matchOutputs = screen.getAllByTestId('regex-match-output')
        expect(matchOutputs.length).toEqual(2)
        matchOutputs.forEach((output) =>
          expect(output.value).toEqual('find this'),
        )

        const alerts = screen.getAllByTestId('output-success')
        expect(alerts.length).toEqual(2)
        alerts.forEach((alert) =>
          expect(alert).toHaveTextContent('alert_multiple_matches'),
        )
      })
    })

    it('handles captured groups', async () => {
      await assertOutput(RegexDebugger, '/find (this)/', () => {
        const inputElement = screen.getByTestId('regex-input')
        fireEvent.change(inputElement, {
          target: { value: 'can you find this?' },
        })

        const matchOutput = screen.getByTestId('regex-match-output')
        expect(matchOutput.value).toEqual('find this')

        const groupOutput = screen.getByTestId('regex-group-output')
        expect(groupOutput.value).toEqual('this')

        const alert = screen.getByTestId('output-success')
        expect(alert).toHaveTextContent('alert_single_match')
      })
    })

    it('reports an error if the input in invalid', async () => {
      await expectError(RegexDebugger, '(invalid!', 'alert_invalid_input')
    })
  })
})
