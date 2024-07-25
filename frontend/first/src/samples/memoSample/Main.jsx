import React, { useState } from 'react'
import Child from './components/Child'

export function Main() {
  const [counter, setCounter] = useState(0)
  console.log("Main Render Oldu")
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>Azalt</button>
      <button onClick={() => setCounter(counter + 1)}>Arttır</button>
      <Child/>
    </div>
  )
}

