import React from 'react';
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
 
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import {
  Link
} from "react-router-dom";

export default function Header() {
  return (
    <div className='flex flex-row h-14 items-center fixed w-full top-0 z-50'>
      <div className='flex flex-1 flex-row bg-white px-20 items-center h-full'>
        <div className='flex flex-row'>
          <Link to="/">
            <div className='page-link mr-10 cursor-pointer w-16'>Home</div>
          </Link>
          <Link to="/product">
            <div className='page-link cursor-pointer w-20'>Product</div>
          </Link>
        </div>
      </div>
      <div className='flex w-1/2 h-full flex-row items-center justify-between'>
        <div className='ml-4 relative w-64'>
        </div>
        <div className='flex flex-row'>
          <FaUser className='text-2xl mr-10 text-gray-300' />
          <FaHeart className='text-2xl mr-10 text-gray-300' />
          <FaShoppingCart className='text-2xl mr-10 text-gray-300' />
          <Link to="/login">
            <FiLogOut className='text-2xl mr-10 text-gray-300' />
          </Link>
        </div>
      </div>
    </div>
  );
}
