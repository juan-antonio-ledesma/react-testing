import { describe, expect, it } from 'vitest'

import { render, screen } from '@testing-library/react'

import { Calculator } from './Calculator'

describe('<Calculator />', () => {
  const useCasesTest = [
    { a: 1, b: 2, operation: 'add', expected: 3 },
    { a: 3, b: 2, operation: 'subtract', expected: 1 },
    { a: 2, b: 3, operation: 'multiply', expected: 6 },
    { a: 6, b: 2, operation: 'divide', expected: 3 },
    { a: 1, b: 2, operation: 'invalid', expected: 'Invalid operation' },
  ]

  it.each(useCasesTest)(
    'Should calculate $expected when $a and $b with $operation',
    ({ a, b, operation, expected }) => {
      render(<Calculator a={a} b={b} operation={operation} />)

      const result = screen.getByText(`Result: ${expected}`)

      expect(result).toBeInTheDocument()
    },
  )
})
