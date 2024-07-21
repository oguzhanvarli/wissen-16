import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value : 0,
  products : [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment : (state, action) => {
      state.value += 1
      state.products.push(action.payload)
    },
    decrement : (state) => {
      state.value -= 1
    },
    clearCart : (state) => {
      state.value = 0
      state.products = []
    },
    removeProduct : (state,action) => {
      state.value -= 1
      state.products = state.products.filter(product => product._id !== action.payload._id)
    }
  }
})

export const {increment, decrement, clearCart, removeProduct} = cartSlice.actions
export default cartSlice.reducer