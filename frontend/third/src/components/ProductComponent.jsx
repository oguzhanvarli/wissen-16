import React from 'react'

function ProductComponent({ product, onClick }) {
  
  return (
    <div
      onClick={() => onClick(product)}
      className='w-full max-w-sm bg-slate-300 border border-gray-200 rounded-lg shadow'>
      <img className='p-8 rounded-t-lg mx-auto max-h-80' src={product.image} alt='product_name' />
      <div className='px-5 pb-5'>
        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-700'>{product.price}$</span>
          <button
            className='text-white bg-blue-300 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent