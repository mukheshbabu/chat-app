import React from 'react'
import Add from '../images/addAvatar.png'
const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className="logo">Mukhesh Chat</span>
        <span className="title">Login</span>
            <form>
                <input type="email" name="" id="" placeholder='email' />
                <input type="password" name="" id="" placeholder='password' />
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login
