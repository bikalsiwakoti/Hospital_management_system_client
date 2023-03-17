import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({data}) {
  const [clicked, setClicked] = useState(false)
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
            <p>Desciption</p>
          </div>
          <hr />
        </Link>
        <div className='details'>
          <div className={clicked ? 'iconClicked' : 'cartIcon'} onClick={() => setClicked(!clicked)}>
            <i class='bx bx-cart' ></i>
          </div>
          <div className='price'>
            <span>PRICE</span>
            <h2>NRS. {data.price}</h2>
          </div>
        </div>

      </div>

    </>
  )
}

export default ProductCard