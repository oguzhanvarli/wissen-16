import React from 'react'

function TailwindSample() {
  return (
    <div>
      {/* <h1 className='text-xs'>Deneme</h1>
      <h2 className='text-lg'>Deneme</h2>
      <h3 className='text-4xl'>Deneme</h3>
      <h6 className='text-9xl'>Deneme</h6>


      <h3 className='text-4xl text-red-700 bg-yellow-300'>Deneme</h3>
      <h3 className='text-4xl text-lime-300 bg-blue-400'>Deneme</h3>
      <h3 className='text-4xl text-teal-500 bg-black'>Deneme</h3>
      <h3 className='text-4xl text-indigo-950 bg-red-300'>Deneme</h3> */}


      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-red-50 dark:bg-blue-800'>01</div>
        <div className='bg-red-100'>02</div>
        <div className='bg-red-200'>03</div>
        <div className='bg-red-300'>04</div>
        <div className='bg-red-400'>05</div>
        <div className='bg-red-500'>06</div>
        <div className='bg-red-600 col-span-2 hover:col-span-3'>07</div>
        <div className='bg-red-700'>08</div>
      </div> */}



      <div style={{display: "flex"}}>
        <div className='bg-red-50'>01</div>
        <div className='bg-red-100'>02</div>
        <div className='bg-red-200'>03</div>
        <div className='bg-red-300'>04</div>
        <div className='bg-red-400'>05</div>
        <div className='bg-red-500'>06</div>
        <div className='bg-red-600'>07</div>
        <div className='bg-red-700'>08</div>
      </div>


      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h1>Merhaba</h1>
      </div>




      <div className='flex justify-center items-center h-40'>
        <h1 className='text-3xl'>Merhaba</h1>
      </div>



      {/* <h1>09</h1>
        <h1>10</h1>
        <span>11</span>
        <span>12</span>


      <div className='bg-blue-500 mt-20'>13</div>
      <span>14</span>

      <span>15</span>
      <div className='bg-blue-800'>16</div> */}



    </div>
  )
}

export default TailwindSample