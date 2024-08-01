import React, { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import featureImage1 from '/images/Feature/FeatureTest1.jpg';
import featureImage2 from '/images/Feature/FeatureTest2.jpg';
import featureImage3 from '/images/Feature/FeatureTest3.jpg';

const Feature = () => {

    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <>
        {/* Desktop View */}
        <div className='hidden md:grid grid-cols-11 grid-rows-10 h-screen max-w-full gap-4 px-4 pb-4'>
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
                    <h1 className='font-iconaSans text-lg'>SEE MORE IN SHOP</h1>
                </div>   
            </div>
        </div>

        {/* Mobile Carousel */}
        <div className='md:hidden grid grid-cols-6 grid-rows-5 h-screen max-w-full'>
            <div className='col-span-full row-span-1 row-start-1 flex justify-center items-center text-lg md:text-2xl'>
                <h1 className='font-drukwidebold'>Feature ahh section</h1>
            </div>
            <div className='col-span-full row-span-3 row-start-2 flex justify-center'>
                <Carousel className='w-full h-full' setApi={setApi}>
                    <CarouselContent className='h-full'>
                        <CarouselItem className='w-full h-full flex justify-center items-center'>
                            <img src={featureImage1} className='w-full h-auto max-w-[90vw] max-h-[50vh] object-cover'/>
                        </CarouselItem>
                        <CarouselItem className='w-full h-full flex justify-center items-center'>
                            <img src={featureImage2} className='w-full h-auto max-w-[90vw] max-h-[50vh] object-cover'/>
                        </CarouselItem>
                        <CarouselItem className='w-full h-full flex justify-center items-center'>
                            <img src={featureImage3} className='w-full h-auto max-w-[90vw] max-h-[50vh] object-cover'/>
                        </CarouselItem>
                    </CarouselContent>
                    <div className='w-full flex justify-between pt-14 px-2 bottom-0'>
                        <CarouselPrevious/>
                        <span className="pt-2 text-xs font-iconaSans text-muted-foreground">{`Preview ${current} of ${count}`}</span>
                        <CarouselNext/>
                    </div>
                </Carousel>
            </div>
            <div className='col-span-6 col-start-1 row-span-1 row-start-5 mx-5 my-12 grid grid-rows-2 text-sm md:text-xl'>
                <div className='col-span-full row-span-1 border border-black flex items-center justify-center'>
                    <h1 className='font-iconaSans'>SEE MORE IN SHOP</h1>
                </div>
            </div>
        </div>
        </>
    );
};

export default Feature;
