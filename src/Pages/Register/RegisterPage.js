import React, { useState } from 'react';
// import Navbar from '../../Components/navbar/Navbar'
import './register.css'
import loginPic from '../.././img/loginPic.jpg'
import { Link, useNavigate } from 'react-router-dom';

import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import axios from 'axios'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [error, setError]= useState()
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: ""
  })

  const handleChange = (e) => {
    setRegisterData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleRegister = async(e) => {
    e.preventDefault()
    try {
      await axios.post('/user/registerUser', registerData)
      navigate('/')
      
    } catch (error) {
      setError(error.response.data)
    }
  }


  return (
    <>
      <Navbar />
      <div className='loginContainer'>
        <div className='leftLogin'>
          <div className='leftp para'>
            Trends
          </div>
          <div className='leftp-1 para'>
            Medcare
          </div>
          <div className='leftp-2 para'>
            lorem ipsum dolor sit amet, consectetur
            lorem ipsum dolor sit amet, consectetur
            lorem ipsum dolor sit amet, consectetur
          </div>
          <div className='para'>
            <img src={loginPic}></img>
          </div>
        </div>
        <div className='rightLogin'>
          <div className='rightp leftp-1'>
            Register
          </div>
          <div className='rightp-1  leftp-2'>
            Welcome please register to your account.
          </div>
          <form onSubmit={handleRegister}>
            <div class="dbl-field">

              {/* <div class="flex-input">
                  <div class="field">
                    <input type="text" placeholder="First Name"></input>
                  </div>
                  <div class="field">
                    <input type="text" id="lastName" placeholder="Last Name"></input>
                  </div>
                </div> */}


              <div class="field">
                <input onChange={handleChange} type="text" name='username' placeholder="Username"></input>
              </div>
              <div class="field">
                <input onChange={handleChange} type="email" id="email" name='email' placeholder="Email"></input>
              </div>

              <div class="flex-input">
                <div class="field">
                  <input onChange={handleChange} type="password" placeholder="Passsword" name='password'></input>
                </div>
                <div class="field">
                  <input onChange={handleChange} type="password" id="confirmPassword" name='confirm_password' placeholder="Confirm Password"></input>
                </div>
              </div>
              <div>{error}</div>
            </div>

            <div className='rememberForget'>
              <input type='checkbox' id='check'></input>
              <label for='check'>Remember Me</label>
            </div>
            <div className='login-buttons'>
              <button type="submit" class="btn btn-danger">Signup</button>
              <Link to={'/'}><button type="button" class="btn btn-outline-danger">Login</button></Link>
            </div>
          </form>

          <div className='contact-us'>

          </div>

        </div>
        <div className='loginLine'>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;