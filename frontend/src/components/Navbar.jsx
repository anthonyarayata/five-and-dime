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
import { motion, useAnimation } from "framer-motion";
import { Link } from 'react-router-dom';
import logo from '/images/logowhite.png';
import smlogo from '/images/smlogowhite.png';
import logoblack from '/images/logoblack.png';
import smlogoblack from '/images/smlogoblack.png';
import { ListItem } from "@mui/material";
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        controls.start({
            color: isScrolled || isHovered ? 'black' : 'white',
            transition: { duration: 0.2, ease: [0, 0.2, 0.5, 1] },
        });
    }, [isScrolled, isHovered, controls]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleHomeClick = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header
            className="fixed top-0 left-0 w-full z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
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
            <motion.div
                className={`grid grid-cols-4 py-1 font-iconaSans ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}
                animate={controls}
            >
                <div className="col-span-1 grid place-items-start items-center">
                    <motion.img
                        src={isScrolled || isHovered ? logoblack : logo}
                        className="hidden md:block relative h-8 px-4"
                        animate={controls}
                    />
                    <motion.img
                        src={isScrolled || isHovered ? smlogoblack : smlogo}
                        className="block md:hidden relative h-8 px-4"
                        animate={controls}
                    />
                </div>
                <div className="col-span-2 grid place-items-center text-sm md:text-lg">
                    <NavigationMenu>
                        <NavigationMenuList className="grid grid-cols-3">
                            <NavigationMenuItem className="col-span-1">
                                <Link to='/' onClick={handleHomeClick}>
                                    <motion.div
                                        className={navigationMenuTriggerStyle()}
                                        animate={controls}
                                    >
                                        Home
                                    </motion.div>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="col-span-1">
                                <motion.div
                                    className={navigationMenuTriggerStyle()}
                                    animate={controls}
                                >
                                    Shop
                                </motion.div>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="col-span-1">
                                <NavigationMenuTrigger>
                                    <motion.div
                                        animate={controls}
                                    >
                                        Support
                                    </motion.div>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className={`transition duration-300 ease-in-out`}>
                                    <ul className="flex flex-col py-2 text-sm font-iconaSans">
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
                        <ShoppingBagSharpIcon/>
                    </motion.div>
                </div>
            </motion.div>
        </header>
    );
};

export default Navbar;
