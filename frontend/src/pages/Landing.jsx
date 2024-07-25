import React from 'react';
import tagline from '/images/brand-tagline.png';

const LandingPage = () => {
  return (
    <div className='relative h-screen max-w-full grid grid-rows-4 grid-cols-3 bg-cover bg-center bg-landing-bg'>
      <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
      <div className='row-span-1 row-start-4 col-span-1 col-start-2 grid place-items-center relative z-20'>
        <img src={tagline} alt="Tagline" />
      </div>
    </div>
  );
};

export default LandingPage;
