import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './Slices.js/UserSlice'

export const store = configureStore({
  reducer: {
    user: UserSlice
  },
})