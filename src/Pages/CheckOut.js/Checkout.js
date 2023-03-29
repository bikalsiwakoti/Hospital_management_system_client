import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import './Checkout.css'
import _ from 'lodash'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import KhaltiCheckout from 'khalti-checkout-web'
import { deleteAllCart } from '../../Redux/Slices.js/CartSlice'
import mykey from "../../Components/khaliti/KhaltiKey";
import { useNavigate } from 'react-router-dom'



function Checkout() {
  const cart = useSelector(state => state?.cart)
  const dispatch = useDispatch()
  const [delivery, setDelivery] = useState(100)
  const [orderData, setOrderData] = useState({
    address: "",
    address2: "",
    email: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    state: "",
    zip: ""
  })

  const [paymentOption, setPaymentOption] = useState("");

  const navigate = useNavigate()


  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const totalPrice = []

  const handleAllData = (e) => {
    setOrderData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }


  // khalti configureation 
  let config = {
    // replace this key with yours
    "publicKey": mykey.publicTestKey,
    "productIdentity": "1234567890",
    "productName": "Hospital Management System",
    "productUrl": "http://localhost:3000",
    "eventHandler": {
      async onSuccess(payload) {
        // hit merchant api for initiating verfication
        let data = {
          "token": payload.token,
          "amount": payload.amount / 100,
        };

        let config = {
          headers: { 'Authorization': mykey.secretKey }
        };

        const res = await axios.post('/order/addOrder', { ...orderData, ['order_payment']: paymentOption, ['totalAmount']: (_.sum(totalPrice) + delivery) })
        await axios.post('/payment/addPayment', {
          totalAmount: payload.amount / 100,
          status: 'Success',
          paymentMethod: 'Khalti',
          token: payload.token,
          orderId: res.data.id
        })
        await axios.delete('/cart/deleteAllCart')
        dispatch(deleteAllCart())
        // navigate('/products')
        toast.success('Succefully placed order', {
          position: "top-right",
          theme: "colored"
        })
      },
      onError(error) {
        toast.error(error, {
          position: "top-right",
          theme: "colored"
        })
      },
      onClose() {
        toast.error("Ordered has been canceled", {
          position: "top-right",
          theme: "colored"
        })
      }
    },
    "paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
  };

  let checkOut = new KhaltiCheckout(config)



  const handleForm = async (e) => {
    e.preventDefault()
    try {

      if (paymentOption === 'khalti') {
        checkOut.show({ amount: (_.sum(totalPrice) + delivery) * 100 })
      } else {
        const res = await axios.post('/order/addOrder', { ...orderData, ['order_payment']: paymentOption, ['totalAmount']: (_.sum(totalPrice) + delivery) })
        await axios.delete('/cart/deleteAllCart')
        dispatch(deleteAllCart())
        toast.success('Succefully placed order', {
          position: "top-right",
          theme: "colored"
        })
        // navigate('/products')

      }

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    setOrderData((prev) => ({ ...prev, products: cart?.cartData }))
  }, [])

  return (
    <>
      <Navbar />
      <div className="maincontainer checkoutall">
        <div class="container">
          <div class="py-5">
            <h1>Checkout form</h1>
            <p class="lead"></p>
          </div>
          <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul class="list-group mb-3">
                {cart?.cartData?.map((cartOne => {
                  totalPrice.push(cartOne.total_price)
                  return (<li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <small class="text-muted">{cartOne.product_name}</small>
                    </div>
                    <div>
                      <small class="text-muted">{cartOne.quantity}</small>
                    </div>
                    <span class="text-muted">NPR. {cartOne.total_price}</span>
                  </li>)
                }))}

                <li class="list-group-item d-flex justify-content-between bg-light">
                  <div class="text-danger">
                    <small>Delivery fee</small>
                  </div>
                  <span class="text-danger">NPR. {delivery}</span>
                </li>

                <li class="list-group-item d-flex justify-content-between">
                  <span>Total NPR </span>
                  <strong>{_.sum(totalPrice) + delivery}</strong>
                </li>
              </ul>


            </div>
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Billing address</h4>
              <hr class="mb-4" />
              <form class="needs-validation" novalidate onSubmit={handleForm}>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstname" onChange={handleAllData} placeholder="" required />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastname" onChange={handleAllData} placeholder="" required />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                {/* <div class="mb-3">

                username
              </div> */}
                <div class="mb-3">
                  <label for="email">Email <span class="text-muted">*</span></label>
                  {/* <input type="email" class="form-control" id="email" placeholder="you@example.com"/> */}
                  <input type="text" class="form-control" id="email" onChange={handleAllData} placeholder="" required />
                </div>
                <div class="mb-3">


                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="phonenumber">Phone Number</label>
                      <input type="text" class="form-control" onChange={handleAllData} id="phonenumber" placeholder="" required />
                      <div class="invalid-feedback">
                        Valid phone number is required.
                      </div>
                    </div>
                  </div>


                  <label for="address">Address</label>
                  <input type="text" class="form-control" id="address" onChange={handleAllData} placeholder="" required />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>



                <div class="mb-3">
                  <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                  <input type="text" class="form-control" onChange={handleAllData} id="address2" placeholder="" />
                </div>
                <div class="row">
                  <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <input type="text" class="form-control" onChange={handleAllData} id="state" placeholder="" required />
                    <div class="invalid-feedback">
                      State is required.
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input type="text" class="form-control" onChange={handleAllData} id="zip" placeholder="" required />
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
                <h4 class="mb-3">Payment</h4>
                <div class="d-block my-3">
                  <div>
                    <label>
                      <input
                        type="radio"
                        value="cashOnDelivery"
                        checked={paymentOption === "cashOnDelivery"}
                        onChange={handlePaymentOptionChange}
                      />
                      Cash on Delivery
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        value="khalti"
                        checked={paymentOption === "khalti"}
                        onChange={handlePaymentOptionChange}
                      />
                      Khalti
                    </label>
                    <br />
                  </div>
                </div>

                {/* <button class="btn btn-primary btn-lg btn-block" type="button">Continue to checkout</button> */}
                <div className='checkoutbtn'>
                  <button type='submit'>Continue to checkout</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Checkout