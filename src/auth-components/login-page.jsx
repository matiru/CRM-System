import React from 'react'
import './login-page.css'
import logo from '../images/logo1.png'

function LoginPage() {
  return (
    <div className='login-page'>
       <div className='login-container'>
        <div className='login-header'>
        <img src = {logo} alt = 'logo' className = 'logo' />
        <p>Welcome<br></br>
        sign in to continue</p>
        </div>       
        
            <form className='login-form'>
                <input type='email' placeholder='email' className='login-input' />
                <input type='password' placeholder='password' className='login-input' />
                <button className='login-btn'>Login</button>
                <p>forgot password?</p>
            </form>
        

       </div>

    </div>
  )
}

export default LoginPage