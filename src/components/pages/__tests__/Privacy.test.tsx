/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import React from 'react'

import { Privacy } from '@pages/Privacy'

describe('Privacy', () => {
  it('renders a heading', () => {
    render(<Privacy />)

    const heading = screen.getByRole('heading', {
      name: /pages-privacy:page_heading/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
