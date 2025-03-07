import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'

const ProductCards = ({ products = [], currentPage = 1, selectedCategory = null, pageSize = 12 }) => {
  // Add default values and ensure products is an array
  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }

  const filteredProducts = products
    .filter((product) => !selectedCategory || product.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  if (filteredProducts.length === 0) {
    return <div className="text-center py-10">No products found in this category</div>;
  }

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {filteredProducts.map((product) => (
        <Link 
          to={`/products/${product.id}`} 
          key={product.id} 
          className='p-5 shadow-lg rounded cursor-pointer hover:shadow-xl transition-shadow'
        >
          <div className='aspect-w-16 aspect-h-9'>
            <img 
              src={product.image} 
              alt={product.name} 
              className='w-full h-64 object-cover rounded'
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
              }}
            />
          </div>
          <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer line-clamp-2'>
            {product.name}
          </h3>
          <p className='mb-2 text-gray-600 line-clamp-3'>
            <FaUser className='inline-flex items-center mr-2' />
            {product.detail}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default ProductCards