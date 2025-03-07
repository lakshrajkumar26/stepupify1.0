import React from 'react'

const PaginationPage = ({ onPageChange, currentPage, products = [], pageSize = 12 }) => {
  // Handle empty products array
  if (!Array.isArray(products) || products.length === 0) {
    return null;
  }

  const totalPages = Math.ceil(products.length / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <li 
        className={`pagination-item ${pageNumber === currentPage ? "activePagination" : ""}`} 
        key={pageNumber}
      >
        <button 
          onClick={(e) => {
            e.preventDefault();
            onPageChange(pageNumber);
          }}
          className={`px-3 py-1 rounded ${pageNumber === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {pageNumber}
        </button>
      </li>
    ))
  }

  return (
    <ul className='pagination my-8 flex items-center justify-center gap-2'>
      <li>
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Previous
        </button>
      </li>
      <div className='flex gap-2'>{renderPaginationLinks()}</div>
      <li>
        <button 
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Next
        </button>
      </li>
    </ul>
  )
}

export default PaginationPage