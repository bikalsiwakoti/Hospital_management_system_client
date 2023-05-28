import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'
import { addCartData } from '../../Redux/Slices.js/CartSlice'
import { useDispatch } from 'react-redux'

function ProductCard({ data }) {
  const [clicked, setClicked] = useState(false)
  const dispatch = useDispatch()

  const handleAddToCart = async () => {
    if (!clicked) {
      await axios.post('/cart/addcart', {
        product_name: data.name,
        product_price: data.price,
        quantity: 1,
        total_price: data.price * 1,
        img: data.img,
        genre: data.genre,
      })
      setClicked(!clicked)
      dispatch(addCartData({
        product_name: data.name,
        product_price: data.price,
        quantity: 1,
        total_price: data.price * 1,
        img: data.img,
        genre: data.genre,
      }))
    }
  }
  return (
    <>
      <div className='productCard'>
        <Link to={`/product/${data.id}`} style={{ textDecoration: 'none', color: 'initial' }}>
          <img src={`http://localhost:5000/images/${data.img}`}></img>
          <div className='info'>
            <div className='productInfo'>
              <h1>{data.name}</h1>
              <span></span>
            </div>
            <p>{data.genre}</p>
          </div>
          <hr />
        </Link>
        <div className='details'>
          <div className={clicked ? 'iconClicked' : 'cartIcon'} onClick={handleAddToCart}>
            <i class='bx bx-cart' ></i>
          </div>
          <div className='price'>
            <span></span>
            <h2>NRS. {data.price}</h2>
          </div>
        </div>

      </div>

    </>
  )
}

export default ProductCard