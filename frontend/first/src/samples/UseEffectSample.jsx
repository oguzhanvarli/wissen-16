import React, { useEffect, useState } from 'react'
import axios from "axios"

function UseEffectSample() {
  //NORMAL VALUE TANIMLAMA EKRANDA GÖSTERİLMEYECEĞİ İÇİN STATE KULLANDIM
  // let data = []

  const [data, setData] = useState([])

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async() => {
    try {
      console.log("worked")
      //FETCH İLE GET İŞLEMİ
      // let response = await fetch("http://localhost:9000/product/product")
      // response = await response.json()
      // console.log(response)

      //AXIOS İLE GET İŞLEMİ
      let response = await axios.get("http://localhost:9000/product/product")
      //data = response.data.products
      setData(response.data.products)
      // console.log(response)
      // console.log(data)
    } catch (error) {
      console.log("Get All Product Error", error)
    }
  }


  return (
    <div>
      <button onClick={fetchData}>Get Data</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Arttır</button>
      <button onClick={() => setCounter(counter - 1)}>Azalt</button>
      {
        data.map((product, index) => (
          <h1 key={index}>{product.name}</h1>
        ))
      }
    </div>
  )
}

export default UseEffectSample