import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../store/features/cartSlice'
import { toast } from 'react-toastify'

function ProductComponent({ product, onClick }) {
  
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(increment(product))
    toast.success("Product added to cart")
  }

  return (
    <div
      className='w-full max-w-sm bg-slate-300 border border-gray-200 rounded-lg shadow'>
      <p className='text-2xl font-bold text-gray-700 text-center mt-4'>{product.name}</p>
      <img className='py-4 px-8 rounded-t-lg mx-auto max-h-80 mix-blend-multiply' src={product.image} alt='product_name' onClick={() => onClick(product)} />
      <div className='px-5 pb-5'>
        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-700'>{product.price}$</span>
          <button
            onClick={() => handleAddToCart(product)}
            className='text-white bg-blue-300 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent