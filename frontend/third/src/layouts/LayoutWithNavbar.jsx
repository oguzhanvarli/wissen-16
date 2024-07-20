import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function LayoutWithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default LayoutWithNavbar