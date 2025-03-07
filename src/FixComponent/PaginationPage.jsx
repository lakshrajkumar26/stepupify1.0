import React from 'react'

const PaginationPage = ({onPageChange,currentPage,products,pageSize}) => {
   const totalPages=Math.ceil(products.length /pageSize);
   const renderPaginationLinks =() =>{
    return Array.from({length: totalPages},(_, i) => i + 1).map((pageNumber) => (
     <li className={pageNumber===currentPage?"activePagination": ""} key={pageNumber}>
        <a href="#" onClick={() => onPageChange(pageNumber)}> {pageNumber}</a>
     </li>
    ))
   }
  //  console.log(totalPages)
    return (  
      <ul className= 'pagination my-8 flex-wrap gap-4'>
        <li >
            <button onClick={()=>onPageChange(currentPage - 1)}disabled={currentPage === 1}>Previous</button>
        </li>
        <div >{renderPaginationLinks()}</div>
        <li>
            <button onClick={()=>onPageChange(current +1)} disabled={currentPage === totalPages}>Next</button>
        </li>
      </ul>
  )
}

export default PaginationPage
