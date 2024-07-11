import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductComponent from '../components/ProductComponent'

function Home() {
  //NORMAL VALUE TANIMLAMA EKRANDA GÖSTERİLMEYECEĞİ İÇİN STATE KULLANDIM
  // let data = []

  const [data, setData] = useState([])

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
    <div className='grid grid-cols-4 gap-5'>
      {/* <button onClick={fetchData}>Get Data</button> */}
      {
        data.map((product, index) => (
          <ProductComponent product={product} key={index} />
        ))
      }
  
    </div>
  )
}

export default Home