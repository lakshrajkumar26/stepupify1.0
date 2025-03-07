import React from 'react'

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = [
    { id: "brushcutter", label: "Brush Cutter" },
    { id: "sprayer", label: "Sprayer" },
    { id: "weeder", label: "Weeder" },
    { id: "auger", label: "Auger" },
    { id: "poultary", label: "Poultry" },
    { id: "chainsaw", label: "Chainsaw" },
    { id: "bcaccessories", label: "BC Accessories" },
    { id: "others", label: "Others" }
  ];

  const handleCategoryClick = (categoryId) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
  };

  return (
    <div className='px-4 mb-7 flex flex-wrap items-center border-b-2 py-5 gap-4'>
      <button 
        onClick={() => handleCategoryClick(null)}
        className={`px-4 py-2 rounded-lg transition-colors ${
          !activeCategory 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {categories.map(({ id, label }) => (
        <button 
          key={id}
          onClick={() => handleCategoryClick(id)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeCategory === id 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default CategorySelection