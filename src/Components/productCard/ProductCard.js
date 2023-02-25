import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard() {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <div className='productCard'>
        <Link to='/product/123' style={{ textDecoration: 'none', color: 'initial' }}>
          <img src='https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'></img>
          <div className='info'>
            <div className='productInfo'>
              <h1>Medicine</h1>
              <span></span>
            </div>
            <p>description</p>
            <div className='star'>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <span>5</span>
            </div>
          </div>
          <hr />
        </Link>
        <div className='details'>
          <div className={clicked ? 'iconClicked' : 'cartIcon'} onClick={() => setClicked(!clicked)}>
            <i class='bx bx-cart' ></i>
          </div>
          <div className='price'>
            <span>PRICE</span>
            <h2>NRS. 200</h2>
          </div>
        </div>

      </div>

    </>
  )
}

export default ProductCard