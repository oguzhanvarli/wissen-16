import { useState } from 'react'
import './App.css'
import ChildTest from './ChildTest'
import GetSample from './GetSample'

function App() {
  
  let name = "oguzhan"
  let age = 28
  let surname :string = "Varlı"
  let current : number = 28
  let isTired : boolean = false
  let test : any = 28
  let test2 : number | boolean = 99
  let test3;
  let test4: number[] | string[] = [1,2,3,4,5]

  // age = "Merhaba"
  // name = "Oguzhan Varlı"
  // current = "Test"
  test = "Selam"
  test2 = false
  test3 = "Selam"
  test3 = 44

  console.log(name)
  console.log(age)

  const [counter, setCounter] = useState<number | string>(0)

  // setCounter(22)


  return (
   <>
    <ChildTest name={name} age={age}/>
    <GetSample />
   </>
  )
}

export default App
