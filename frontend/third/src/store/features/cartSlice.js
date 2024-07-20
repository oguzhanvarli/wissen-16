import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value : 0,
  products : []
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
    }
  }
})

export const {increment, decrement} = cartSlice.actions
export default cartSlice.reducer