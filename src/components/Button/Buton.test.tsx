import { describe, expect, it, vi } from 'vitest'

import { render, screen, fireEvent, act } from '@testing-library/react'

import { Button } from './Button'

describe('<Button />', () => {
  it('Should render a button', () => {
    render(<Button label="Click me" />)

    const button = screen.getByText('Click me')

    expect(button).toBeInTheDocument()
  })

  it('Should call the on click function', async () => {
    const handleClick = vi.fn()

    render(<Button label="Click me" onClick={handleClick} />)

    const button = screen.getByText('Click me')

    await act(() => fireEvent.click(button))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
