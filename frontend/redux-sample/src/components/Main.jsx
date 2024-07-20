import React from 'react'
import { useDispatch } from 'react-redux'
import { arttir, azalt } from '../store/features/counterSlice'

function Main() {


    //değiştirme işlemi yapmak istiyorsam USEDISPATCH KULLANACAĞIM
    const dispatch = useDispatch()

    const decrement = () => {
      dispatch(azalt())
    }

  return (
    <div>
      <button onClick={decrement}>Azalt</button>
      <button onClick={() => dispatch(arttir())}>Arttır</button>
    </div>
  )
}

export default Main