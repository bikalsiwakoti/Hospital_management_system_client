import './Cart.css'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import CartComponent from '../../Components/cart/CartComponent'

function Cart() {
  return (
    <>
      <Navbar />
      <section className='main-cart-section container my-5'>
        <h1>Shopping Cart</h1>
        <p className='total-items'>You have <span className='total-items-count'>7</span>items in cart</p>

        <div className='cart-items'>
          <div className='cart-items-container'>
            <CartComponent />
            <CartComponent />
            <CartComponent />
            <CartComponent />
            <CartComponent />
            <CartComponent />
            <CartComponent />
          </div>
        </div>

<div className='card-total'>
  <h3>Cart Total: <span>2000rs</span></h3>
  <button>Checkout</button>

</div>

      </section>
      <Footer />
    </>
  )
}

export default Cart