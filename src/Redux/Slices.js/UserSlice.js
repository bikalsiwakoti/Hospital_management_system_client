import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  user: null,
  error: null
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LoginStart: (state) => {
      return {
        ...state,
        isLoading: true,
        user: null,
        error: null
      }
    },
    LoginSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: null
      }
    },
    LoginFailed: (state, action) => {
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.payload
      }
    },
    Logout: (state, action) => {
      return {
        ...state,
        isLoading: false,
        user: null,
        error: null
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { LoginStart, LoginSuccess, LoginFailed, Logout } = UserSlice.actions

export default UserSlice.reducer