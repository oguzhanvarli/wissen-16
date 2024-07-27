import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound404() {
  const navigate = useNavigate()
  const [counter, setCounter] = useState(5)
  let counterInterval

  //COMPONENT MOUNT OLURKEN
  useEffect(() => {
    reduceTimer(counter)
  }, [])

  //COMPONENT UPDATE OLURKEN
  useEffect(() => {
    if(counter === 0){
      goToHome()
    }
  }, [counter])

  //COMPONENT UNMOUNT OLURKEN
  useEffect(() => {  
    return () => {
      clearInterval(counterInterval)
    }
  }, [])
  
  const reduceTimer = () => {
    counterInterval = setInterval(() => {
      setCounter(prev => prev - 1)
    }, 1000);
  }

  const goToHome = () => {
    navigate("/")
  }

  


  return (
    <>
      <h1 className='text-red-600 text-4xl text-center my-20'>Page Not Found!</h1>
      <h1 className='text-red-300 text-3xl text-center'>{counter}</h1>
    </>
  )
}

export default NotFound404