import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState= {
  cartData: [],
  isLoading: false,
  error: null
}

export const fetchCartData = createAsyncThunk('fetch/cartData', async()=>{
  const res = await axios.get('/cart/getAllCart')
  return res.data
})


export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addCartData: (state, action)=>{
      state.cartData.push(action.payload)
    },
    editCartData: (state, action)=>{
      const {id, newData} = action.payload
      const indexOfCart = state.cartData.findIndex(item=> item.id === Number(id))
      if(indexOfCart !== -1){
        state.cartData[indexOfCart] = newData
      }
    },
    deleteCartData:(state, action)=>{
      const id = action.payload
      const indexOfCart = state.cartData.findIndex(item=> item.id === Number(id))
      if(indexOfCart !== -1){
        state.cartData.splice(indexOfCart, 1)
      }
    },
    deleteAllCart:(state, action)=>{
      state.cartData = []
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchCartData.pending, (state, action)=>{
      state.isLoading = true;
      state.cartData = [];
      state.error = null;
    }).addCase(fetchCartData.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.cartData = action.payload;
      state.error = null;
    }).addCase(fetchCartData.rejected, (state, action)=>{
      state.isLoading = false;
      state.cartData = [];
      state.error = action.payload;
    })
  }
})

export const {addCartData, editCartData, deleteCartData, deleteAllCart} = CartSlice.actions

export default CartSlice.reducer