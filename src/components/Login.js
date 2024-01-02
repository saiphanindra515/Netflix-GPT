import React from 'react';
import login from '../assets/login.jpg';
import { Header } from './Header';

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src={login}
        />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0'>
        <input type='text' placeholder='Email Address' className='p-2 my-2' />
        <input type='password' placeholder='Password'  className='p-2 my-2' />
        <button className='p-4 m-4'>Sign in</button>
      </form>
    </div>
  )
}

export default Login