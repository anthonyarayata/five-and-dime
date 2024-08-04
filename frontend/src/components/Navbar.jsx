import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import { motion, useAnimation } from "framer-motion";
import { Link } from 'react-router-dom';
import logo from '/images/Navbar/logowhite.png';
import smlogo from '/images/Navbar/smlogowhite.png';
import logoblack from '/images/Navbar/logoblack.png';
import smlogoblack from '/images/Navbar/smlogoblack.png';
import { ListItem } from "@mui/material";
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isSupportHovered, setIsSupportHovered] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const controls = useAnimation();

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    const handleTouchOutside = (event) => {
        if (!event.target.closest('header')) {
            setIsTouched(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        document.addEventListener("touchstart", handleTouchOutside);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("touchstart", handleTouchOutside);
        };
    }, []);

    useEffect(() => {
        controls.start({
            color: isScrolled || isHovered || isTouched ? 'black' : 'white',
            transition: { duration: 0.2, ease: [0, 0.2, 0.5, 1] },
        });
    }, [isScrolled, isHovered, isTouched, controls]);

    const handlePointerEnter = () => {
        setIsHovered(true);
    };

    const handlePointerLeave = () => {
        setIsHovered(false);
    };

    const handleTouchStart = () => {
        setIsTouched(true);
    };

    const handleHomeClick = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleSupportPointerEnter = () => {
        setIsSupportHovered(true);
    };

    const handleSupportPointerLeave = () => {
        setIsSupportHovered(false);
    };

    useEffect(() => {
        const header = document.querySelector('header');
        const supportItem = document.querySelector('.support-item');

        header.addEventListener('pointerenter', handlePointerEnter);
        header.addEventListener('pointerleave', handlePointerLeave);
        header.addEventListener('touchstart', handleTouchStart);
        supportItem.addEventListener('pointerenter', handleSupportPointerEnter);
        supportItem.addEventListener('pointerleave', handleSupportPointerLeave);

        return () => {
            header.removeEventListener('pointerenter', handlePointerEnter);
            header.removeEventListener('pointerleave', handlePointerLeave);
            header.removeEventListener('touchstart', handleTouchStart);
            supportItem.removeEventListener('pointerenter', handleSupportPointerEnter);
            supportItem.removeEventListener('pointerleave', handleSupportPointerLeave);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <motion.div
                className="absolute top-0 left-0 w-full bg-white shadow-sm"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isScrolled || isHovered || isTouched ? "100%" : 0,
                    opacity: isScrolled || isHovered || isTouched ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0, 0.2, 0.5, 1] }}
            />
            <motion.div
                className={`grid grid-cols-4 py-1 font-iconaSans ${isScrolled || isHovered || isTouched ? 'text-black' : 'text-white'}`}
                animate={controls}
            >
                <div className="col-span-1 grid place-items-start items-center">
                    <motion.img
                        src={isScrolled || isHovered || isTouched ? logoblack : logo}
                        className="hidden md:block relative h-8 px-4"
                        animate={controls}
                    />
                    <motion.img
                        src={isScrolled || isHovered || isTouched ? smlogoblack : smlogo}
                        className="block md:hidden relative h-8 px-4"
                        animate={controls}
                    />
                </div>
                <div className="col-span-2 grid place-items-center">
                    <NavigationMenu>
                        <NavigationMenuList className="flex justify-between w-full gap-8 md:gap-16">
                            <NavigationMenuItem className="relative">
                                <Link to='/' onClick={handleHomeClick}>
                                    <motion.div
                                        className={`${navigationMenuTriggerStyle()} text-xs md:text-sm`}
                                        animate={controls}
                                    >
                                        Home
                                    </motion.div>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="relative">
                                <motion.div
                                    className={`${navigationMenuTriggerStyle()} text-xs md:text-sm`}
                                    animate={controls}
                                >
                                    Shop
                                </motion.div>
                            </NavigationMenuItem>
                            <NavigationMenuItem
                                className="relative support-item"
                            >
                                <NavigationMenuTrigger>
                                    <motion.div
                                        className={`${navigationMenuTriggerStyle()} text-xs md:text-sm`}
                                        animate={controls}
                                    >
                                        Support
                                    </motion.div>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="flex flex-col py-2 text-xs md:text-sm font-iconaSans">
                                        <ListItem><span className="animated-underline-content">Payment</span></ListItem>
                                        <ListItem><span className="animated-underline-content">Shipping</span></ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="col-span-1 grid place-content-end items-center text-xs md:text-sm">
                    <motion.div
                        className="relative h-8 px-4"
                        animate={controls}
                    >
                        <ShoppingBagSharpIcon />
                    </motion.div>
                </div>
            </motion.div>
        </header>
    );
};

export default Navbar;