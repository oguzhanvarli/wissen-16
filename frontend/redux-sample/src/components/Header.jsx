import React from 'react'
import { useSelector } from 'react-redux'

function Header() {

  //OKUMA İŞLEMİ İÇİN USESELECTOR KULLANACAĞIM
  const {value} = useSelector(state => state.counter)

  return (
    <h1>{value}</h1>
  )
}

export default Header