import React from 'react'
import PageWrapper from '@/components/PageWrapper';

const Feature = () => {
    return (
        <>
        <PageWrapper>
            <div className='grid grid-cols-11 grid-rows-9 h-screen max-w-full gap-3'>

                {/* Desktop View */}
                <div className='col-span-full row-span-1 flex justify-center items-end md:pr-6 text-2xl'>
                    <h1 className='font-drukwidebold'>Feature ahh section</h1>
                </div>
                <div className='col-span-5 row-span-4 hidden md:block bg-slate-100'>

                </div>
                <div className='col-span-3 row-span-4 hidden md:block bg-slate-200'>

                </div>
                <div className='col-span-3 row-span-8 hidden md:block bg-slate-300'>

                </div>
                <div className='col-span-3 row-span-4 hidden md:block bg-slate-400'>

                </div>
                <div className='col-span-5 row-span-4 hidden md:block bg-slate-500'>

                </div>

                {/* Mobile Carousel */}
                <div>

                </div>
            </div>
            
        </PageWrapper>
        </>
    );
};

export default Feature;