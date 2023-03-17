import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './Slices.js/UserSlice'
import ProductSlice from './Slices.js/ProductSlice'

export const store = configureStore({
  reducer: {
    user: UserSlice,
    product: ProductSlice
  },
})