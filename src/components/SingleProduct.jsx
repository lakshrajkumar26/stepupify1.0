import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const SingleProduct = () => {
    const navigate = useNavigate();
    const data = useLoaderData();

    if (!data || data.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-600">Product not found</p>
            </div>
        );
    }

    const { name, image, detail, category } = data[0];

    return (
        <div className="min-h-screen pt-20">
            <div className='py-8 text-center px-4'>
                <h2 className='text-3xl lg:text-5xl leading-snug font-bold mb-5'>{name}</h2>
                <p className="text-gray-600 mb-4">Category: {category}</p>
            </div>

            <div className='max-w-7xl mx-auto my-12 px-4'>
                <div className="aspect-w-16 aspect-h-9 mb-8">
                    <img 
                        src={image} 
                        alt={name}
                        className='w-full max-h-[600px] object-contain rounded-lg shadow-lg'
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                        }}
                    />
                </div>

                <div className="prose max-w-none">
                    <h2 className='text-2xl font-bold mt-8 mb-4 text-blue-600'>{name}</h2>
                    <p className='mb-6 text-gray-700 leading-relaxed'>{detail}</p>
                </div>

                <button 
                    onClick={() => navigate(-1)}
                    className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Back to Products
                </button>
            </div>
        </div>
    )
}

export default SingleProduct