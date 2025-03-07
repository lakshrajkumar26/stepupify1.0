import { Carousel } from 'flowbite-react';
import React, { useEffect } from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import { ReactTyped } from "react-typed";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-neutralSilver pt-20'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto'>
        <Carousel 
          className='w-full mx-auto' 
          indicators={true}
          slideInterval={5000}
        >
          <div className="my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/2">
              <img 
                src={banner1} 
                alt="Agriculture Equipment" 
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-4xl md:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                Stepupify-
                <span className='text-brandPrimary leading-snug block mt-2'>
                  <ReactTyped 
                    strings={[
                      "Green Energy Mechanization",
                      "Agriculture saves",
                      "Environmental Sustainability"
                    ]} 
                    typeSpeed={100} 
                    backSpeed={50}
                    loop
                    cursorChar="|"
                  />
                </span>
              </h1>
              <button className='btn-primary mt-4'>Contact Us</button>
            </div>
          </div>

          <div className="flex h-full items-center justify-center py-12">
            <div className="w-full md:w-3/4 lg:w-2/3">
              <img 
                src={banner2} 
                alt="Agriculture Innovation" 
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;