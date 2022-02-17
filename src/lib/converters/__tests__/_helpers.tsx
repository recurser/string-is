import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

import * as Converter from '@services/Converter'
import { Convert } from '@pages/Convert'
import { ConverterContext } from '@contexts/ConverterContext'

/**
 * Wrapper for running end-to-end converter tests.
 *
 * @param converter   - The converter being tested.
 * @param inputString - The input string to convert.
 * @param assertion   - The test assertion we want to confirm.
 *
 * @returns void
 *
 */
export const assertOutput = async (converter, inputString, assertion) => {
  const spy = jest.spyOn(Converter, 'converterCandidates')
  spy.mockReturnValue([converter])

  await act(async () => {
    render(
      <ConverterContext>
        <Convert />
      </ConverterContext>,
    )
  })

  const inputElement = screen.getByTestId('user-input')
  fireEvent.change(inputElement, { target: { value: inputString } })

  act(() => jest.runAllTimers())

  await waitFor(assertion)

  spy.mockRestore()
}

/**
 * Tests the conversion process end-to-end, and confirms that
 * the expected output is displayed.
 *
 * @param converter     - The converter being tested.
 * @param inputString   - The input string to convert.
 * @param outputTestId  - The test ID of the output textarea element.
 * @param expectedValue - The output string that we expect to see.
 *
 * @returns void
 *
 */
export const expectOutput = async (
  converter,
  inputString,
  outputTestId,
  expectedValue,
) => {
  await assertOutput(converter, inputString, () => {
    const output = screen.getByTestId(outputTestId)
    expect(output).toHaveValue(expectedValue)
  })
}

/**
 * Tests the conversion process end-to-end, and confirms that
 * the expected error is displayed.
 *
 * @param converter     - The converter being tested.
 * @param inputString   - The input string to convert.
 * @param expectedError - The error message string that we expect to see.
 *
 * @returns void
 *
 */
export const expectError = async (converter, inputString, expectedError) => {
  await assertOutput(converter, inputString, () => {
    const output = screen.getByTestId('output-error')
    expect(output).toHaveTextContent(expectedError)
  })
}
