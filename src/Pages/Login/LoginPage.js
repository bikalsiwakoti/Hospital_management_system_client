import React, { useState } from 'react';
// import Navbar from '../../Components/navbar/Navbar'
import './login.css'
import loginPic from '../.././img/loginPic.jpg'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import {LoginStart, LoginSuccess, LoginFailed, Logout} from '../.././Redux/Slices.js/UserSlice'

const LoginPage = () => {
  const user = useSelector(state=>state?.user)
  const dispatch = useDispatch()


  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleLogin = async(e) => {
    e.preventDefault()
    try {
      dispatch(LoginStart())
      const res = await axios.post('/user/loginUser', loginData)
      localStorage.setItem('loginDetails', JSON.stringify(res?.data))
      dispatch(LoginSuccess(res?.data))
      navigate('/')
      
    } catch (error) {
      console.log(error)
      dispatch(LoginFailed(error?.response?.data?.message))
    }
  }
  console.log(user)
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
            <form onSubmit={handleLogin}>
              <div class="dbl-field">
                <div class="field">
                  <input type="text" name='username' onChange={handleChange} placeholder="Username"></input>
                </div>
                <div class="field">
                  <input type="password" name='password' id="password" onChange={handleChange} placeholder="Password"></input>
                </div>
              </div>
              <div className='rememberForget'>
                <input type='checkbox' id='check'></input>
                <label for='check'>Remember Me</label>
              </div>
              <div>{user?.error}</div>
              <div className='login-buttons'>
                <button type="submit" class="btn btn-danger">Login</button>
                <Link to={'/register'}><button type="button" class="btn btn-outline-danger">Signup</button></Link>
              </div>
            </form>

            <div className='contact-us'>

            </div>

          </div>
          <div className='loginLine'>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;