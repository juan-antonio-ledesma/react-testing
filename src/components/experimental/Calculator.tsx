type ValidOperations = 'add' | 'subtract' | 'multiply' | 'divide'

type CalculatorProps = {
  a: number
  b: number
  operation: string
}

export const Calculator = ({ a, b, operation }: CalculatorProps) => {
  const calculate = () => {
    switch (operation as ValidOperations) {
      case 'add':
        return a + b
      case 'subtract':
        return a - b
      case 'multiply':
        return a * b
      case 'divide':
        return b !== 0 ? a / b : 'Error'
      default:
        return 'Invalid operation'
    }
  }

  return <section>Result: {calculate()}</section>
}
