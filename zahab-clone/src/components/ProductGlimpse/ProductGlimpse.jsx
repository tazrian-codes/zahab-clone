import React, { useContext, useEffect, useState } from 'react'
import './ProductGlimpse.css'
import { StoreContext } from '../../Context/Context';

export const ProductGlimpse = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart, cartItems } = useContext(StoreContext);
  useEffect(() => {
  console.log("Cart changed:", cartItems);
}, [cartItems]);
  return (
    <div className="product-glimpse" onClick={(e) => e.stopPropagation()}>
      <div className="product-glimpse-top">
        <span>close-</span>
      </div>
      <div className="product-details-body-glimpse">
        <div className="product-details-img">
          <img src={product.image} />
        </div>
        <div className="product-details-text">
          <h2 className="product-name">{product.name}</h2>
          <div className="line"></div>
          <p className="coloured-text">
            {product.price_one} - {product.price_two}
          </p>
          <p>
            <span className="bold-text">{product.name}:</span>
            {product.headline}
          </p>
          <p>
            <span className="bold-text">Fragrance Notes:</span>
            {product.notes}
          </p>
          <p>
            <span className="bold-text">Lasting Time:</span>
            {product.lasting}
          </p>
          <p>
            <span className="bold-text">Smell Projection:</span>
            {product.projection}
          </p>
          <p>
            <span className="bold-text">Usage:</span>
            {product.usage}
          </p>
          <div className="line"></div>
          <h5>Size</h5>
          <div className="size-opts">
            <div
              className={`size-opt ${selectedSize === "12 ML" ? "selected" : ""}`}
              onClick={() => setSelectedSize("12 ML")}
            >
              <span>12 ML (Oil Version)</span>
            </div>
            <div
              className={`size-opt ${selectedSize === "6 ML" ? "selected" : ""}`}
              onClick={() => setSelectedSize("6 ML")}
            >
              <span>6 ML (Oil Version)</span>
            </div>
            <div
              className={`size-opt ${selectedSize === "15 ML" ? "selected" : ""}`}
              onClick={() => setSelectedSize("15 ML")}
            >
              <span>15 ML (Oil Version)</span>
            </div>
          </div>

          <span
            className={selectedSize === null ? "hide-clear-btn" : "clear-btn"}
            onClick={() => setSelectedSize(null)}
          >
            clear
          </span>

          <span className={selectedSize !== null ? "show-price" : "hide-price"}>
            {selectedSize === "6 ML"
              ? product.six_ml
              : selectedSize === "12 ML"
                ? product.twelve_ml
                : product.fifteen_ml}
          </span>
          <div className="cart-div">
            <div className="count-div">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>

            <button
              className="add-to-cart-btn"
              disabled={selectedSize === null}
              onClick={() => addToCart(product.id, selectedSize)}
            >
              Add to Cart
            </button>
            <button className="buy-now-btn" disabled={selectedSize === null}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default ProductGlimpse
