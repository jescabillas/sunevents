import { createSlice } from '@reduxjs/toolkit'

export const userTokenSlice = createSlice({
  name: 'userToken',
  initialState: {
    isLoggedIn: false,
    token: '',
    user: '',
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
      state.token = action.payload.token
      state.user = action.payload.user
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.token = ''
      state.user = ''
    },
  },
})

export const { login, logout } = userTokenSlice.actions

export default userTokenSlice.reducer
