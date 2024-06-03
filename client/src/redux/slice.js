import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    currentUser:null
}

export const logSlice = createSlice({
  name: 'logger',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    setCurrentUser: (state, action) => {
        state.currentUser = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut, setCurrentUser } = logSlice.actions

export default logSlice.reducer