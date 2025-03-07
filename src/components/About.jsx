import React from 'react'

const About = () => {
  return (
    <div>
      {/**about */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 '>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
        <div>
            Left waala 
        </div>
        <div className='md:w-3/5 mx-auto'>
             <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>the company journey</h2>
             <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>content</p>
             <button className='btn-primary'>Learn more</button>
        </div>
        </div>
      </div>

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
  )
}

export default About
