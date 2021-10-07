/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import React from 'react'

import { Convert } from '../Convert'

describe('Convert', () => {
  it('renders a heading', () => {
    render(<Convert />)

    const heading = screen.getByRole('heading', {
      name: /pages-convert:page_heading/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
