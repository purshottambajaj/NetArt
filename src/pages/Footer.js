import React from 'react';
import { FaFacebook, FaGlobe, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='container mx-auto bg-red-600 flex flex-col md:flex-row justify-between items-center h-auto p-4'>
      <div className='text-white text-xl flex items-center mb-2 md:mb-0'>
        <FaPhone className='mr-2' />
        <span>1800210</span>
      </div>
      <div className='text-white text-xl flex items-center mb-2 md:mb-0'>
        <FaFacebook className='mr-2' />
        <span>www.facebook/cripumps</span>
      </div>
      <div className='text-white text-xl flex items-center'>
        <FaGlobe className='mr-2' />
        <span>www.crigroups.cpm</span>
      </div>
    </div>
  );
}

export default Footer;
