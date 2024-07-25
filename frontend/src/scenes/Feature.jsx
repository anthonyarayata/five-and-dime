import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Feature = () => {
    return (
        <>
            <PageWrapper>
                {/* Desktop View */}
                <div className='hidden md:grid grid-cols-11 grid-rows-10 h-screen max-w-full gap-3'>
                    <div className='col-span-full row-span-1 flex justify-center items-end md:pr-6 text-2xl'>
                        <h1 className='font-drukwidebold'>Feature ahh section</h1>
                    </div>
                    <div className='col-span-5 row-span-4 bg-slate-100'></div>
                    <div className='col-span-3 row-span-4 bg-slate-200'></div>
                    <div className='col-span-3 row-span-8 bg-slate-300'></div>
                    <div className='col-span-3 row-span-4 bg-slate-400'></div>
                    <div className='col-span-5 row-span-4 bg-slate-500'></div>
                    <div className='col-span-full row-span-1 grid grid-cols-3 grid-rows-5'>
                        <div className='col-span-1 col-start-2 row-span-3 row-start-2 border border-black flex items-center justify-center'>
                            <h1 className='font-iconaSans text-xl'>SEE MORE IN SHOP</h1>
                        </div>   
                    </div>
                </div>

                {/* Mobile Carousel */}
                <div className='md:hidden grid grid-cols-6 grid-rows-9 h-screen max-w-full gap-3'>
                    <div className='col-span-full row-span-1 flex justify-center items-end md:pr-6 text-2xl'>
                        <h1 className='font-drukwidebold'>Feature ahh section</h1>
                    </div>
                    <div className='col-span-4 col-start-2 row-span-4 row-start-3 bg-black'>

                    </div>
                </div>
            </PageWrapper>
        </>
    );
};

export default Feature;
