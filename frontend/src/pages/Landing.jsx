import React from 'react';
import tagline from '/images/brand-tagline.png';

const LandingPage = () => {
  return (
    <div className='relative h-screen max-w-full grid grid-cols-5 md:grid-cols-3 grid-rows-4 bg-cover bg-center bg-landing-bg'>
      <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
      <div className='col-span-3 md:col-span-1 col-start-2 md:col-start-2 row-span-1 row-start-4 grid place-items-center relative z-20'>
        <img src={tagline} alt="Tagline" />
      </div>
    </div>
  );
};

export default LandingPage;
