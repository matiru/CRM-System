import React, { useState } from 'react'
import './login-page.css'
import logo from '../images/logo1.png'
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(
    {
      email: '',
      password: ''
    });

  function handleOnChange(event) {
    const { name, value } = event.target
    setLoginData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }
  
  // on submit validate the data
  function handleOnSubmit(event) {
    event.preventDefault();
    if (loginData.email === '' || loginData.password === '') {
      alert('please enter valid email and password')
    } else {
      navigate('/dashboard');
    }
  }




  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-header'>
          <img src={logo} alt='logo' className='logo' />
          <p>Welcome<br></br>
            sign in to continue</p>
        </div>

        <form className='login-form'>
          <input type='email'
            placeholder='email'
            className='login-input'
            name='email'
            value={loginData.email}
            onChange={handleOnChange} />

          <input type='password'
            placeholder='password'
            className='login-input'
            name='password'
            value={loginData.password}
            onChange={handleOnChange} />

          <button className='login-btn' onClick={handleOnSubmit}>Login</button>
          <p>forgot password?</p>
        </form>


      </div>

    </div>
  )
}

export default LoginPage