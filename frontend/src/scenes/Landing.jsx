import React from 'react';

const LandingPage = () => {
  return (
    <>
        <div className='grid grid-rows-4 grid-cols-3 w-screen h-screen bg-gray-500'>
          <div className='row-span-1 row-start-4 col-span-1 col-start-2 bg-blue-200 grid place-items-center'>
            <h1 className='font-drukwidebold text-black italic'>brand tagline</h1>
          </div>
          <div className='row-span-2 row-start-2 col-span-1 col-start-2 grid place-items-center'>
            <h1 className='font-drukwidebold text-black italic'>image background and video background carousel</h1>
          </div>
        </div>
    </>
  );
};

export default LandingPage;
