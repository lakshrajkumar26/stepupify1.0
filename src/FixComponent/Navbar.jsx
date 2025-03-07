import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom' // Changed from react-scroll to react-router-dom
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Fixed toggle menu function
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
            window.removeEventListener('scroll', handleScroll); // Fixed removeEventListener
        }
    }, []); // Added dependency array

    const navItems = [
        { link: "Home", path: "/" },
        { link: "E-Store", path: "/e-store" },
        { link: "Product", path: "/product" },
        { link: "About US", path: "/aboutus" },
        { link: "Social", path: "/social" }
    ];

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <Link to="/" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} alt="Stepupify Logo" className='w-10 inline-block items-center' />
                        <span className='text-[#263238]'>Stepupify</span>
                    </Link>

                    {/* Navigation items for large devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <Link 
                                to={path} 
                                key={path} 
                                className='block text-base text-gray-900 hover:text-brandPrimary first:font-medium'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/* Auth buttons for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <Link to="/login" className='text-brandPrimary hover:text-gray-900'>Login</Link>
                        <Link to="/signup" className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>
                            Sign up
                        </Link>
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className='md:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='text-neutralDGrey focus:outline-none focus:text-gray-500'
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaXmark className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
                    </button>
                </div>

                {/* Mobile menu items */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link 
                            to={path} 
                            key={path} 
                            className='block text-base text-white hover:text-gray-200 first:font-medium'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;