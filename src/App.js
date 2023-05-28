import LoginPage from './Pages/Login/LoginPage'
import RegisterPage from './Pages/Register/RegisterPage'
import AboutUsPage from './Pages/AboutUs/AboutUs'
import DoctorPage from './Pages/Doctor/Doctor'
import ProductPage from './Pages/Product/Product'
import HomePage from './Pages/Home/Home'
import SingleProductPage from './Pages/SingleProduct/SingleProduct'
import AttendancePage from './Pages/Attendance/Attendance'
import Myorders from './Pages/Myorders/Myorders'
import SingleDoctorPage from './Pages/SingleDoctor/SingleDoctor'
import CartPage from './Pages/Cart/Cart'
import CheckOutPage from './Pages/CheckOut.js/Checkout'
import { Route, Routes, Navigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartData } from './Redux/Slices.js/CartSlice'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import ProtectedRoutes from './Components/ProtectedRoutes'
import ShowOrder from './Components/modals/Order/ShowOrder'



function App() {
  const cart = useSelector(state => state?.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartData())
  }, [])
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Navigate to={'/login'}/>} /> */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/doctor/:id' element={<SingleDoctorPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckOutPage />} />
        </Route>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
        <Route path='/doctors' element={<DoctorPage />} />
        <Route path='/doctors/:name' element={<DoctorPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/attendance' element={<AttendancePage />} />
        <Route path='/myorders' element={<Myorders />}>
          <Route path={'show/:id'} element={<ShowOrder />} />
        </Route>
      </Routes>
      <ToastContainer />

    </>
  );
}

export default App;
