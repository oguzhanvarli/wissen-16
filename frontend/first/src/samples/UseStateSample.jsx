import React, { useState } from 'react'

function UseStateSample() {

  const [get, set] = useState("Oğuz")
  const [surname, setSurname] = useState("Var")

  let name = "Oğuzhan"

  console.log("Merhaba Ben çalıştım")

  const handleName = () => {
    name = "Oğuzhan Varlı"
    console.log(name)
    set("Oğuzhan")
    setSurname("Varlı")
  }

  return (
    <div>
      <h1>{name}</h1>
      <h3>{get}</h3>
      <h3>{surname}</h3>
      <button onClick={handleName}>Change Name</button>
    </div>
  )
}

export default UseStateSample