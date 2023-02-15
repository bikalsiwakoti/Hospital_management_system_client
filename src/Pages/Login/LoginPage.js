import React, { useState } from 'react';
import Navbar from '../../Components/navbar/Navbar'
import './login.css'
import loginPic from '../.././img/loginPic.jpg'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  // const [passwordVisible, setPasswordVisible] = useState(false);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible);
  // };

  return (
    <>
      <div>
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
              Login
            </div>
            <div className='rightp-1  leftp-2'>
              Welcome back! please login to your account.
            </div>
            <form>
              <div class="dbl-field">
                <div class="field">
                  <input type="text" placeholder="Username"></input>
                </div>
                <div class="field">
                  <input type="password" id="password" placeholder="Password"></input>
                </div>
              </div>
              <div className='rememberForget'>
                <input type='checkbox' id='check'></input>
                <label for='check'>Remember Me</label>
              </div>
              <div className='login-buttons'>
                <button type="button" class="btn btn-info">Login</button>
                <Link to={'/register'}><button type="button" class="btn btn-outline-info">Signup</button></Link>
              </div>
            </form>

            <div className='contact-us'>

            </div>

          </div>
          <div className='loginLine'>

          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;