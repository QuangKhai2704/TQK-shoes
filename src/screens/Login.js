import React from 'react';
import {
  Link
} from "react-router-dom";
import axios from 'axios';

import EyeClose from '../assets/EyeClose';
import Header from '../components/Header';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onLoginHandle = async () => {
    const data = {
      email, password
    };
    try {
      const response = await axios.post(`http://shoes.hungvu.net/login`, data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='mt-16 px-16 auth-screen'>
      {/* header */}
      <Header />

      {/* content */}
      <div className='wrap-content'>
        <div className='left'></div>
        <div className='flex w-1/2 justify-center items-center right '>
          <div className='w-4/5 p-10 border'>
            <div className='text-center text-3xl font-bold'>Login</div>
            <div className='mt-4'>Email</div>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='type here' className='border-black border rounded pl-2 w-full h-10' />
            <div className='mt-2'>Password</div>
            <div className='relative'>
              <input
                placeholder='Must be at least 8 characters'
                className='border-black border rounded pl-2 w-full h-10'
                type={'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='eye-input'>  <EyeClose /> </div>
            </div>
            <div
              onClick={onLoginHandle}
              className='rounded w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer mt-4'>
              Login
            </div>
            <div className='rounded w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer mt-4'>
              Login as guest
            </div>
            <div className='flex justify-center items-center mt-2 flex-col'>
              <div className='flex'>Not a Member? <Link to={'/register'} className='ml-2 text-blue-700 cursor-pointer'>Sign Up</Link></div>
              <div className='mt-2 px-8 text-center'>By continuing, you agree to accept our Privacy Policy & Terms of Service.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
