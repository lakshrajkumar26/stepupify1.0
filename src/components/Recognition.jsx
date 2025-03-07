import React from 'react'

const Recognition = () => {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>   
        <div className='text-center my-8'>
             <h2 className='text-4xl text-brandPrimary font-semibold mb-2'>Recognised By</h2>
            <p className='text-neutralDGrey'> We are proud to be recognized by leading industry organizations and esteemed bodies for our 
                commitment to excellence, innovation, and customer satisfaction. 
                Our awards and certifications reflect our dedication to maintaining the highest standards in everything we do.</p>
        {/**company logos */}
        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
            <img href="" src="src\assets\dailyhunt logo.png" alt=""/>
            <img href="" src="src\assets\hindustanlive logo.png" alt=""/>
            <img href="" src="src\assets\indian express logo.png" alt=""/>
            <img href="" src="src\assets\krishi jagran logo.png" alt=""/>
            <img href="" src="src\assets\News_18_India logo.png" alt=""/>
            <img href="" src="src\assets\prakhat khabar ogo.jpeg" alt=""/>
            <img href="" src="src\assets\toi logo final.png" alt=""/>
        </div>
        </div>
    </div>
  )
}

export default Recognition
