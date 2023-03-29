import './SingleProduct.css'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCartData } from '../../Redux/Slices.js/CartSlice';

function SingleProduct() {
  const [count, setCount] = useState(1);
  const [oneProduct, setOneProduct] = useState({});
  const dispatch = useDispatch()

  const id = window.location.pathname.split('/')[2]

  useEffect(() => {
    axios.get(`/product/getOneProduct/${id}`).then((res) => {
      setOneProduct(res.data)
    }).catch((err) => {
      console.log(err)
    })

  }, [])


  const handleAddToCart = async () => {
    await axios.post('/cart/addcart', {
      product_name: oneProduct.name,
      product_price: oneProduct.price,
      quantity: count,
      total_price: oneProduct.price * count,
      img: oneProduct.img,
      genre: oneProduct.genre,
    })
    dispatch(addCartData({
      product_name: oneProduct.name,
      product_price: oneProduct.price,
      quantity: count,
      total_price: oneProduct.price * count,
      img: oneProduct.img,
      genre: oneProduct.genre,
    }))
  }

  return (
    <>
      <Navbar />
      <section class='sproduct my-5 pt-5'>
        <div class='insideProduct'>
          <div class='col-lg-5 col-md-12 col-12 imgPart'>
            <img class='img-fluid w-100' src={`http://localhost:5000/images/${oneProduct.img}`}></img>
          </div>

          <div class='col-lg-6 col-md-12 col-12 desPart'>
            <h6>Home | Product | Medicine</h6>
            <h3>{oneProduct.name}</h3>
            <h3>NRS. {oneProduct.price}</h3>
            <div className="d-flex counter mt-3">
              <button onClick={() => count > 1 && setCount(count - 1)} className="btn fw-700">-</button>
              <input value={count} onChange={(e) => setCount(e.target.value)} className="form-control text-center fw-500 text-secondary w-25" type="text" />
              <button onClick={() => setCount(count + 1)} className="btn fw-700">+</button>
            </div>
            <button className="btn btn-lg py-3 btn-outline-dark addtocartbtn mt-3" onClick={handleAddToCart}><span>Add To Cart</span></button>
            <h4 className='mt-3'>{oneProduct.desc}</h4>
          </div>

        </div>

      </section>
      <Footer />
    </>
  )
}

export default SingleProduct