import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './Slices.js/UserSlice'
import ProductSlice from './Slices.js/ProductSlice'
import CartSlice from './Slices.js/CartSlice'
import OrderSlice from './Slices.js/OrderSlice'

export const store = configureStore({
  reducer: {
    user: UserSlice,
    product: ProductSlice,
    cart: CartSlice,
    order: OrderSlice
  },
})