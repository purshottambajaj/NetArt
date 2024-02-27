import React from 'react';
import toolimg from '../asserts/3.png';

const Services = () => {
  return (
    <div className='container'>
      <p className='text-sm font-medium'>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
      </p>
      <img className='my-3 max-w-full' src={toolimg} alt='tool' />
      <div className='text-sm font-medium '>
        <p className='text-center'>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
        </p>
      </div>
      <hr className="my-5 bg-red-600 min-h-1" />
      <div className='text-sm text-center'>
        <p className='font-bold'>
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
      </div>
      <div className='flex flex-col font-medium text-sm items-center'>
      <div className='flex flex-wrap justify-center'>
        CHEMICALS&amp;PROCESS<span className='text-red-500'>|</span>
        POWER<span className='text-red-500'>|</span>
        WATER&amp;WASTEWATER<span className='text-red-500'>|</span>
        OILS&amp;GAS<span className='text-red-500'>|</span>
        PHARMA<span className='text-red-500'>|</span>
        SUGARS&amp;DISTILLERIES<span className='text-red-500'>|</span>
        PAPER&amp;PULP<span className='text-red-500'>|</span>
        MARINE&amp;DEFENCE<span className='text-red-500'>|</span>
        METAL&amp;MINING<span className='text-red-500'>|</span>
        FOOD&amp;BEVERAGE<span className='text-red-500'>|</span>
   </div>
   <div className='flex flex-wrap justify-center'>
    PETROCHEMICAL&amp;REFINERIES<span className='text-red-500'>|</span>
    SOLAR<span className='text-red-500'>|</span>
    BUILDING<span className='text-red-500'>|</span>
    HVAC<span className='text-red-500'>|</span>
    FIRE FIGHTING<span className='text-red-500'>|</span>
    AGRICULTURE&amp;RESIDENTIAL
  </div>
</div>


    </div>
  );
}

export default Services;
