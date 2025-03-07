import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "E-Store", path: "/e-store" },
        { link: "Product", path: "/product" },
        { link: "About US", path: "/about" },
        { link: "Social", path: "/social" }
    ];

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <NavLink to="/" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} alt="Stepupify Logo" className='w-10 inline-block' />
                        <span className='text-[#263238]'>Stepupify</span>
                    </NavLink>

                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <NavLink
                                to={path}
                                key={path}
                                className={({ isActive }) =>
                                    `block text-base ${isActive ? 'text-brandPrimary font-medium' : 'text-gray-900 hover:text-brandPrimary'}`
                                }
                            >
                                {link}
                            </NavLink>
                        ))}
                    </ul>

                    <div className='space-x-12 hidden lg:flex items-center'>
                        <NavLink to="/login" className='text-brandPrimary hover:text-gray-900'>Login</NavLink>
                        <NavLink to="/signup" className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>
                            Sign up
                        </NavLink>
                    </div>
                </div>

                <div className='md:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='text-neutralDGrey focus:outline-none focus:text-gray-500'
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaXmark className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
                    </button>
                </div>

                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <NavLink
                            to={path}
                            key={path}
                            className={({ isActive }) =>
                                `block text-base ${isActive ? 'text-white font-medium' : 'text-gray-200 hover:text-white'}`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;