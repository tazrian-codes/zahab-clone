import React from 'react'
import './SearchDropDown.css'

const SearchDropDown = ({ suggestions, search, dropdown }) => {
  return (
    <div className='search-dropdown'>
      {search && (
        <div className={`main-content ${dropdown ? 'show' : 'hide'}`}>
          <span className='length'>{suggestions.length} results found with <span className='black'>"{search}"</span></span>
          {suggestions.length > 0 ? (
            suggestions.map((product) => (
              <div className="suggestion-product" key={product.id}>
                <div className="img-div">
                  <img src={product.image} alt="" />
                </div>
                <div className="info-div">
                  <h4>{product.name}</h4>
                  <p className='price'>{product.price_one}-{product.price_two}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="suggestion-product">
              <span>No Product Found.</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchDropDown