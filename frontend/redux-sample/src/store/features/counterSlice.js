import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: "counter",
  initialState : {
    value : 0,
  },
  reducers : {
    arttir : (state) => {
      state.value += 1
    },
    azalt : (state) => {
      state.value -= 1
    }
  }
})

export const {arttir, azalt} = counterSlice.actions
export default counterSlice.reducer
