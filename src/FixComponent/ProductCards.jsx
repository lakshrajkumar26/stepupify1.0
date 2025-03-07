import React from 'react'
import { Link } from 'react-router-dom';
import{FaUser} from 'react-icons/fa'
const ProductCards = ({products,currentPage,selectedCategory,pageSize}) => {
    const filteredProducts =products
    .filter((products) =>!selectedCategory|| products.category===selectedCategory)
    .slice((currentPage -1)*pageSize,currentPage*pageSize);
    console.log(filteredProducts)
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
     {
            filteredProducts.map((product) => <Link to={`/products/${product.id}`} key={product.id} className='p-5 shadow-lg rounded cursor-pointer'>
                <div>
                    <img src ={product.image} alt="" className='w-full'/>
                </div>
                <h3 className='mt-4 mb-2 font-bold  hover:text-blue-600 cursor-pointer'>{product.name}</h3>
                <p className='mb-2 text-grey-600 '><FaUser className='inline-flex items-center mr-2 '></FaUser>{product.detail}</p>
                </Link>)
     }
    </div>
  )
}

export default ProductCards
