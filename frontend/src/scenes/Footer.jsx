import React from 'react';
import { Separator } from "@/components/ui/separator";
import PageWrapper from '@/components/PageWrapper';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <PageWrapper>
            <div className='mt-6'>
                <div className="space-y-1">
                    <h4 className="text-sm font-drukwidebold leading-none">Five and Dime</h4>
                    <p className="text-sm text-muted-foreground font-iconaSans">
                        A Filipino clothing brand.
                    </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon style={{ fontSize: 24 }} />
                    </a>
                    <Separator orientation="vertical" />
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon style={{ fontSize: 24 }} />
                    </a>
                    <Separator orientation="vertical" />
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <XIcon style={{ fontSize: 24 }} />
                    </a>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Footer;
