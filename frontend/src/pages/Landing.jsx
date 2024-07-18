import React from 'react';
import tagline from '../assets/images/brand-tagline.png';

const LandingPage = () => {
  return (
    <>
        <div className='grid grid-rows-4 grid-cols-3 w-screen h-screen bg-cover bg-center bg-landing-bg'>
          <div className='row-span-1 row-start-4 col-span-1 col-start-2 grid place-items-center'>
            <img src={tagline} />
          </div>
        </div>
    </>
  );
};

export default LandingPage;
