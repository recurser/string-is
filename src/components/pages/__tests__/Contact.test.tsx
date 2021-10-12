/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import React from 'react'

import { Contact } from '@pages/Contact'

describe('Contact', () => {
  it('renders a heading', () => {
    render(<Contact />)

    const heading = screen.getByRole('heading', {
      name: /pages-contact:page_heading/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
