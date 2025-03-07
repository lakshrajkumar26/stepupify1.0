import React from 'react'
// import about_poster1 from '..\assets\about_poster1.jpg'


function About_Us() {
  return (
    <div>
      <div>
      {/**about */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 '>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
        <div>
        pic ya content
        <img src='https://www.stepupify.com/static/images/SDGsStepupify.JPG' alt=""/>
        </div>
        <div className='md:w-3/5 mx-auto'>
             <h1 className='text-5xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Welcome to Stepupify Labs</h1>
             <p className='md:w-3/4 text-lg text-neutralGrey mb-8'>We are a group of experts in robotics, mechanical systems, control systems ,web technologies, computer vision & Artificial Intelligence.

As a team, we strive to to build innovative technology solutions for complex problems in the industry.

We are researcher, developer and manufacturer of solar & battery powered agricultural equipments to reduce the input cost & drudgery in manual farming activities such as spraying, harvesting, weeding, digging, cutting, crop protection, etc And to promote sustainable climate smart agriculture.

We specialize in designing, developing and manufacturing cost-effective solar and battery-powered equipments ,also leveraging AI and Robotics to create efficient and intelligent solutions for the agriculture sector aligned with the achievement of the UN SDGs.</p>
             <button className='btn-primary'>Learn more</button>
        </div>
        </div>
      </div>
 v
      {/**comapny stats */}
      <div className='px-14 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div>
            <div>
                <h2 className='text-4xl text-neutralDGrey font0semibold mb-4 md:w-2/3'>Helping a local<span className='text-brandPrimary'> business reinvent itself</span></h2>
                <p>We reached here with our hard work and dedication</p>
                
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About_Us
