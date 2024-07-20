import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function CounterWithState({setDeneme}) {
  const [counter, setCounter] = useState(0)

  setDeneme(counter)

  return (
    <div>
      <Header counter={counter}/>
      <Main setCounter={setCounter} counter={counter}/>
      <Footer counter={counter}/>
    </div>
  )
}

export default CounterWithState