import React from 'react'

function CartComponent() {
  return (
    <>
      <div className='items-info'>
        <div className='product-img'>
          <img src='https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'></img>
        </div>
        <div className='title'>
          <h2>Medicine</h2>
          <p>eye</p>
        </div>
        <div className='add-minus-quantity'>
          <i class='bx bx-minus'></i>
          <input type='text' value='2'></input>
          <i class='bx bx-plus'></i>
        </div>

        <div className='price'>
          <h3>2000</h3>
        </div>

        <div className='remove-item'>
          <i class='bx bxs-x-circle'></i>
        </div>


      </div>

      <hr></hr></>
  )
}

export default CartComponent