import React from 'react';
import logo from '../asserts/logo.png';

const Header = () => {
  return (
    <div className='flex justify-center items-center my-3 h-28'>
      <img src={logo} alt="Logo" className='h-full' />
    </div>
  );
};

export default Header;
