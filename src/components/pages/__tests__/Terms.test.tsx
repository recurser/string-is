/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import React from 'react'

import { Terms } from '../Terms'

describe('Terms', () => {
  it('renders a heading', () => {
    render(<Terms />)

    const heading = screen.getByRole('heading', {
      name: /pages-terms:page_heading/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
