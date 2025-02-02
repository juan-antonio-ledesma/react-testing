import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(count + 1)

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
