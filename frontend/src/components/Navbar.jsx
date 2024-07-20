import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import logo from '../assets/images/logowhite.png';
import smlogo from '../assets/images/smlogowhite.png';
import logoblack from '../assets/images/logoblack.png';
import smlogoblack from '../assets/images/smlogoblack.png';

const Navbar = () => {
    
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleHomeClick = () => {
        if(location.pathname==="/"){
            window.scrollTo({top:0, behavior: 'smooth'});
        }
    }

    return (
        <header
        className="fixed top-0 left-0 w-full z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="absolute top-0 left-0 w-full bg-white shadow-sm"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                height: isScrolled || isHovered ? "100%" : 0,
                opacity: isScrolled || isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.2, ease: [0, 0.2, 0.5, 1] }}
            />
            <div className={`grid grid-cols-4 py-1 font-iconaSans text-white ${isScrolled || isHovered ? 'text-black' : ''}`}>
                <div className="col-span-1 grid place-items-start items-center">
                    <img src={isScrolled || isHovered ? logoblack : logo} 
                        className="hidden md:block relative h-8 px-4"/>
                    <img src={isScrolled || isHovered ? smlogoblack : smlogo} 
                        className="block md:hidden relative h-8 px-4"/>
                </div>
                <div className="col-span-2 grid place-items-center text-sm md:text-lg">
                    <NavigationMenu>
                        <NavigationMenuList className="grid grid-cols-3">
                            <NavigationMenuItem className="col-span-1">
                                <Link href='/' onClick={handleHomeClick}>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                                            Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="col-span-1">
                                
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                                            Shop
                                    </NavigationMenuLink>
                    
                            </NavigationMenuItem>
                            <NavigationMenuItem className="col-span-1">
                                <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="col-span-1 grid place-content-end">

                </div>
            </div>
        </header>
    );
};

export default Navbar;
