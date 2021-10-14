/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

import { Convert } from '@pages/Convert'

describe('Convert', () => {
  it('renders a heading', async () => {
    await act(async () => {
      render(<Convert />)
    })

    const heading = screen.getByRole('label', {
      name: /domain-convert-InputForm:label/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
