import React from 'react';
import tagline from '../assets/images/brand-tagline.png';

const LandingPage = () => {
  return (
    <>
        <div className='grid grid-rows-4 grid-cols-3 max-w-full h-screen bg-cover bg-center bg-landing-bg'>
          <div className='h-screen max-w-full absolute z-0 bg-black opacity-50'></div>
          <div className='row-span-1 row-start-4 col-span-1 col-start-2 grid place-items-center z-20'>
            <img src={tagline}/>
          </div>
        </div>
    </>
  );
};

export default LandingPage;
