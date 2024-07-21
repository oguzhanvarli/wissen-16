import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isUser : false,
  username : "",
  email: ""
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin : (state,action) => {
      state.isUser = true
      state.username = action.payload.username
      state.email = action.payload.email
    },
    userLogout : (state) => {
      state = initialState
    }
  }
})
export const {userLogin, userLogout} = userSlice.actions
export default userSlice.reducer