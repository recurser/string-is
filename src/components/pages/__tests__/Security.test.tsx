/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import React from 'react'

import { Security } from '../Security'

describe('Security', () => {
  it('renders a heading', () => {
    render(<Security />)

    const heading = screen.getByRole('heading', {
      name: /pages-security:page_heading/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
