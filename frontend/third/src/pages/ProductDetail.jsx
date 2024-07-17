import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'


function ProductDetail() {

  //EĞER STATE GÖNDERİMİ YAPIYORSAM LOCATION KULLANMAM GEREKİYOR
  // const data = useLocation()
  // console.log(data)

  //EĞER URL'DEN PARAMS ALACAKSAM USEPARAMS KULLANMAM GEREKİYOR
  const { productName } = useParams()

  const [data, setData] = useState({})


  useEffect(() => {
    getDataById()
  }, [])


  const getDataById = async () => {
    let id = productName.split("-p-")[1]
    try {
      let response = await axios.get("http://localhost:9000/product/product/" + id)
      setData(response.data.product)
    } catch (error) {
      console.log("Get Product Error", error)
    }
  }

  return (
    <div className='grid grid-cols-6 gap-6 mt-10'>
      <div className='col-start-3'>
        <img src={data.image} alt='product_image' />
      </div>
      <div className='h-80 flex flex-col justify-between'>
        <div>
          <p className='text-3xl font-medium'>{data.name}</p>
          <p className='text-4xl font-bold mt-6'>{data.price}$</p>
        </div>
        <button className='max-w-32 text-white bg-blue-300 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductDetail