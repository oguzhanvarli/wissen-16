import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'

function LayoutWithNavbar() {
  const {isUser} = useSelector(state => state.user)
  const navigate = useNavigate()


  // if(!isUser){
  //   return <></>
  // }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default LayoutWithNavbar