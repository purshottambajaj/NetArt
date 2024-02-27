import React from 'react';
import img1 from '../asserts/1.png';
import img2 from '../asserts/2.png';

const Hero = () => {
  return (
    <div className='container mx-auto font-medium'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='md:w-1/2'>
          <img className='w-screen max-h-screen' src={img1} alt="img1" />
        </div> 
        <div className='md:w-1/2 '>
          <p>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
          <div className='container ml-4 '>
            <ul className='my-9 list-disc   '>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul></div>
          <img className='w-full max-h-full' src={img2} alt="img2" />
          <p className='my-4 md:my-20'>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
