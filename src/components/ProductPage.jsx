import React, { Suspense } from 'react'
import ProductListing from '../FixComponent/ProductListing'

const ProductPage = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-20 min-h-screen'>
      <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
        <ProductListing />
      </Suspense>
    </div>
  )
}

export default ProductPage