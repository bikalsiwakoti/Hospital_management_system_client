import LoginPage from './Pages/Login/LoginPage'
import RegisterPage from './Pages/Register/RegisterPage'
import AboutUsPage from './Pages/AboutUs/AboutUs'
import DoctorPage from './Pages/Doctor/Doctor'
import ProductPage from './Pages/Product/Product'
import HomePage from './Pages/Home/Home'
import SingleProductPage from './Pages/SingleProduct/SingleProduct'
import SingleDoctorPage from './Pages/SingleDoctor/SingleDoctor'
import CartPage from './Pages/Cart/Cart'
import CheckOutPage from './Pages/CheckOut.js/Checkout'
import { Route, Routes, Navigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartData } from './Redux/Slices.js/CartSlice'
import { useEffect } from 'react'


function App() {
  const cart = useSelector(state => state?.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCartData())
  },[])
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Navigate to={'/login'}/>} /> */}
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/doctors' element={<DoctorPage />} />
        <Route path='/doctor/:id' element={<SingleDoctorPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckOutPage />} />
      </Routes>
    </>
  );
}

export default App;
