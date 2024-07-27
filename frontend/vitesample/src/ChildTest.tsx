import React from 'react'

type Props = {
  name: string,
  age : number
}
interface testTypes {
  name: string,
  age: number,
  city?: string
}

function ChildTest({...props}: Props) {


  let test : testTypes = {
    name : "Oğuzhan2",
    age: 28,
    city: "İstanbul"
  }


  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  )
}

export default ChildTest