import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleProduct = () => {
    const data = useLoaderData();
    console.log(data);
    const {id,category,name,image,detail} = data[0];
 
 
    return (
    <div>
      <div className='py- text-center  px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page {name}</h2>
      </div>
      <div className='max-w-7xl mx-auto my-12'>
        <div>
                <img src={image} alt="" className='w-full mx-auto rounded'/>
        </div>
        <h2 className='text-3xl font-bold mt-8 mb-4 text-blue-500 cursor-pointer'> name{name}</h2>
        <p className='mb-3 text-grey-600 text-base'>details{detail}</p>
      </div>
    </div>
  )
}

export default SingleProduct
