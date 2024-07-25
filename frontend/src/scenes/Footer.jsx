import React from 'react';
import { Separator } from "@/components/ui/separator";
import PageWrapper from '@/components/PageWrapper';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className='pt-8 bg-zinc-950 text-white'>
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-2">
                <div className='px-4 col-span-full row-span-1 row-start-1 grid grid-rows-3'>
                    <h4 className="text-sm font-drukwidebold leading-none row-span-1 row-start-1">Five and Dime</h4>
                    <p className="text-xs text-muted-foreground font-iconaSans row-span-1 row-start-3">
                        A Filipino clothing brand.
                    </p>
                </div>
            
                <Separator className="col-span-full row-span-1 row-start-2 self-center" />

                {/*Desktop Layout*/}
                <div className="hidden px-4 col-span-full row-span-1 row-start-3 md:grid grid-cols-2">
                    <div className='col-span-1 col-start-1 grid grid-cols-2'>
                        <div className='col-span-1 grid grid-cols-9 text-sm'>
                            <div className='col-span-1'>
                                <a href="https://www.facebook.com/fiveanddime.cvt" target="_blank" rel="noopener noreferrer">
                                    <FacebookIcon className='text-xl' />
                                </a>
                            </div>
                            <div className='col-span-1'>
                                <a href="https://www.instagram.com/fiveanddime.cvt/" target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon className='text-xl' />
                                </a>
                            </div>
                            <div className='col-span-1'>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <XIcon className='text-xl'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 col-start-2 flex justify-end items-center text-xs font-iconaSans text-muted-foreground'>
                        <span>Website created by:</span>
                        <a href="https://www.linkedin.com/in/anthony-ross-arayata-4195a4195/" target="_blank" rel="noopener noreferrer" className="underline ml-2">
                            Anthony Ross Arayata
                        </a>
                    </div>
                </div>

                {/*Mobile Layout*/}
                <div className='md:hidden col-span-full row-start-3 px-4 pb-4 grid grid-cols-3 grid-rows-3'>
                    <div className='col-span-1 flex justify-center items-center'>
                        <a href="https://www.facebook.com/fiveanddime.cvt" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className='text-xl' />
                        </a>
                    </div>
                    <div className='col-span-1 flex justify-center items-center'>
                        <a href="https://www.instagram.com/fiveanddime.cvt/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className='text-xl' />
                        </a>
                    </div>
                    <div className='col-span-1 flex justify-center items-center'>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <XIcon className='text-xl'/>
                        </a>
                    </div>
                    <div className='col-span-full row-span-1 row-start-3 flex justify-center items-center text-xs font-iconaSans text-muted-foreground'>
                        <span>Website created by:</span>
                        <a href="https://www.linkedin.com/in/anthony-ross-arayata-4195a4195/" target="_blank" rel="noopener noreferrer" className="underline ml-2">
                            Anthony Ross Arayata
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
