import React from 'react'

const SweetType = () => {
  return (
    <div className='product-category'>
      <div className="top">
        <h3>Sweet Type</h3>
        <span>Sweet Collection </span>
      </div>
      <div className="product-category-body">
        <div className="col-one">
          <img src="/src/assets/resources/sweet.webp" alt="" />
        </div>

        <div className="col-two">
          <div className='img-div'>
            <img src="/src/assets/resources/p1.webp" alt="" />
          </div>
          <div className="text">
            <h5>Vampire Blood Perfume Oil</h5>
            <div className="strike-price">
              <span>500 TK</span>
              <span>500 TK</span>
              <span>500 TK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SweetType