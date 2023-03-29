import './Cart.css'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import CartComponent from '../../Components/cart/CartComponent'
import { fetchCartData } from '../../Redux/Slices.js/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


function Cart() {
  const cart = useSelector(state => state?.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const totalPrice = []

  useEffect(() => {
    dispatch(fetchCartData())
  }, [])

  const handleCheckout=()=>{
    if(cart?.cartData?.length > 0){
      navigate('/checkout')
    }else{
      toast.error('Cart Is Empty', {
        position: "top-right",
        theme: "colored"
      })
    }
  }
  return (
    <>
      <Navbar />
      <section className='main-cart-section container my-5'>
        <h1>Shopping Cart</h1>
        <p className='total-items'>You have <span className='total-items-count'> {cart?.cartData.length} </span>items in cart</p>

        <div className='cart-items'>
          <div className='cart-items-container'>
            {cart?.cartData.map((oneCart, i) => {
              totalPrice.push(oneCart.total_price)
              return <CartComponent data={oneCart} />
            })}
          </div>
        </div>

        <div className='card-total'>
          <h3>Cart Total: <span>{_.sum(totalPrice)}</span></h3>
          <button onClick={handleCheckout}>Checkout</button>
        </div>

      </section>
      <Footer />
      <ToastContainer/>
    </>
  )
}

export default Cart