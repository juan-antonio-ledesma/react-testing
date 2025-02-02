import { describe, it, expect } from 'vitest'

describe('My first test', () => {
  it('The sum of two numbers', () => {
    const sum = (a: number, b: number) => a + b
    const result = sum(1, 2)

    expect(result).toBe(3)
  })

  it('Two equal texts', () => {
    const text1 = 'Hello World!'
    const text2 = 'Hello World!'

    expect(text1).toBe(text2)
  })
})
