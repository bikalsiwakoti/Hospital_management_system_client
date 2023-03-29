import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editCartData, deleteCartData } from '../../Redux/Slices.js/CartSlice'

function CartComponent({ data }) {
  const [count, setCount] = useState(data?.quantity)
  const dispatch = useDispatch()

  const handleMinus = async () => {
    if (count > 1) {
      setCount(prev => prev - 1)
      await axios.patch(`/cart/updateCart/${data.id}`, { quantity: count - 1, total_price: (count - 1) * data.product_price })
      dispatch(editCartData({ id: data.id, newData: { ...data, quantity: count - 1, total_price: (count - 1) * data.product_price } }))
    }
  }

  const handlePlus = async () => {
    setCount(prev => prev + 1)
    await axios.patch(`/cart/updateCart/${data.id}`, { quantity: count + 1, total_price: (count + 1) * data.product_price })
    dispatch(editCartData({ id: data.id, newData: { ...data, quantity: count + 1, total_price: (count + 1) * data.product_price } }))
  }


  const handleDelete = async() => {
    console.log("clicked")
    try {
      await axios.delete(`/cart/deleteOneCart/${data.id}`)
      dispatch(deleteCartData(data.id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='items-info' key={data.id}>
        <div className='product-img'>
          <img src={`http://localhost:5000/images/${data.img}`}></img>
        </div>
        <div className='title'>
          <h2>{data.product_name}</h2>
          <p>eye</p>
        </div>
        <div className='add-minus-quantity' >
          <i class='bx bx-minus' onClick={handleMinus}></i>
          <input type='text' value={count}></input>
          <i class='bx bx-plus' onClick={handlePlus}></i>
        </div>

        <div className='price'>
          <h3>{data.total_price}</h3>
        </div>

        <div className='remove-item'>
          <i class='bx bxs-x-circle' onClick={handleDelete}></i>
        </div>

      </div>

      <hr></hr></>
  )
}

export default CartComponent