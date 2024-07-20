import React from 'react'

function Main({setCounter, counter}) {
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>Azalt</button>
      <button onClick={() => setCounter(counter + 1)}>Arrtır</button>
    </div>
  )
}

export default Main