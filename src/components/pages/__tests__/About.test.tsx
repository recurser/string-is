/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import React from 'react'

import { About } from '@pages/About'

describe('About', () => {
  it('renders a heading', () => {
    render(<About />)

    const heading = screen.getByRole('heading', {
      name: /pages-about:page_heading/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
