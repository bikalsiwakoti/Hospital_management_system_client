import LoginPage from './Pages/Login/LoginPage'
import RegisterPage from './Pages/Register/RegisterPage'
import AboutUsPage from './Pages/AboutUs/AboutUs'
import DoctorPage from './Pages/Doctor/Doctor'
import ProductPage from './Pages/Product/Product'
import HomePage from './Pages/Home/Home'
import SingleProductPage from './Pages/SingleProduct/SingleProduct'
import { Route, Routes, Navigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Navigate to={'/login'}/>} /> */}

        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/doctors' element={<DoctorPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
      </Routes>
    </>
  );
}

export default App;
