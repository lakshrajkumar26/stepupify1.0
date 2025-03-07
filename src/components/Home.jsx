import { Carousel } from 'flowbite-react';
import React from 'react'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import { ReactTyped } from "react-typed";

const  Home = () => {
  return (
    <div className='bg-neutralSilver'>
        <div className='px-4 lg:px-14 max-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center  justify-between gap-12">
          <div>
            <img src={banner1} alt=""/>
        </div>
        {/**hero text */}
        <div className='md:w-1/2'>
       <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Stepupify-
       <span className='text-brandPrimary leading-snug font-primary'>

       {/**typer check */}
       <ReactTyped strings={["Green Energy Mechanization","Agriculture saves","Environmental Sustainablity"]} typeSpeed={100} 
      backSpeed={50}
      // attr="placeholder"
      loop/>
      
       </span>
       </h1>
        <button className='btn-primary'>Contact Us</button>
        </div>
        </div>
       {/* <div className="my-28 md flex h-full items-center justify-center">
          Slide 2
        </div>   property of previous slide */}
        <div className="flex h-full items-center justify-center">
        <div>
            <img src={banner2} alt=""/>
        </div>
        </div>
      </Carousel>
       </div>
    </div>
  );
};

export default Home
