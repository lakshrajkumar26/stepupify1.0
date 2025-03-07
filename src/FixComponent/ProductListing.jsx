import React, { useEffect, useState } from 'react'
import ProductCards from './ProductCards';
import PaginationPage from './PaginationPage';
import CategorySelection from './CategorySelection';

const ProductListing = () => {
  const[product,setProduct] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const pageSize = 12 //product per page
  const [selectedCategory,setSelectedCategory]=useState(null);
  const [activeCategory,setActiveCategory] =useState(null);

  useEffect(()=>{
    async function fetchProducts() {
      let url=`http://localhost:5000/products?page=${currentPage}&limit=${pageSize}`;

      //filter by category
      if(selectedCategory){
        url +=`&category =${selectedCategory}`;
      }

      const response =await fetch(url);
      const data =await response.json();
      // console.log(data);
      setProduct(data);
    }
    fetchProducts();
  },[currentPage,pageSize,selectedCategory])
 
  //page changing btn
  const handlePageChange =(pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  const handleCategoryChange =(category) =>{
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }

  return (
    <div>
      {/**category section */}
      <div><CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} /></div>

      {/**productCards section */}
      <div> <ProductCards products={product} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/> </div>

       {/**pagination section */}
      <div> <PaginationPage onPageChange={handlePageChange} products={product} currentPage={currentPage} pageSize={pageSize} /></div>
    </div>
  )
}

export default ProductListing
