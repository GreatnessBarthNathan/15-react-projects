import React from "react"

function Categories({ categories, filterItems }) {
  return (
    <div className='button-container'>
      {categories.map((category, index) => {
        return (
          <button onClick={() => filterItems(category)} key={index}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
