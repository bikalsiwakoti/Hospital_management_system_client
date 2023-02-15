import React, { useState } from 'react';
import Navbar from '../../Components/navbar/Navbar'
import './register.css'
import loginPic from '../.././img/loginPic.jpg'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  // const [passwordVisible, setPasswordVisible] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible);
  // };

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
            <form>
              <div class="dbl-field">

                <div class="flex-input">
                  <div class="field">
                    <input type="text" placeholder="First Name"></input>
                  </div>
                  <div class="field">
                    <input type="text" id="lastName" placeholder="Last Name"></input>
                  </div>
                </div>


                <div class="field">
                  <input type="text" placeholder="Username"></input>
                </div>
                <div class="field">
                  <input type="email" id="email" placeholder="Email"></input>
                </div>

                <div class="flex-input">
                  <div class="field">
                    <input type="password" placeholder="Passsword"></input>
                  </div>
                  <div class="field">
                    <input type="password" id="confirmPassword" placeholder="Confirm Password"></input>
                  </div>
                </div>
              </div>





              <div className='rememberForget'>
                <input type='checkbox' id='check'></input>
                <label for='check'>Remember Me</label>
              </div>
              <div className='login-buttons'>
                <button type="button" class="btn btn-info">Signup</button>
                <Link to={'/login'}><button type="button" class="btn btn-outline-info">Login</button></Link>
              </div>
            </form>

            <div className='contact-us'>

            </div>

          </div>
          <div className='loginLine'>

          </div>
        </div>
    </>
  );
};

export default RegisterPage;