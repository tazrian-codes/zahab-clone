import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ product }) => {
  const [activeId, setActiveId] = useState(null);
  const navigate = useNavigate();
  return (
      <div
          className="col"
          onMouseEnter={() => setActiveId(product.id)}
          onMouseLeave={() => setActiveId(null)}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <div className="img-div">
            <img src={product.image} className="product-img" />
            <div
              className={`slide-div ${activeId === product.id ? "show-slide" : "hide-slide"}`}
            >
              <FontAwesomeIcon icon={faShoppingBag} />
              <span>Select options</span>
            </div>
            <FontAwesomeIcon icon={faEye} className={`show-product ${activeId === product.id ? 'show-icon' : 'hide-icon'}`} />
          </div>
          <div className="opt-div-sm-screen">
            <span>Select Options</span>
          </div>
          <div className="text">
            <h5>{product.name}</h5>
            <div className="main-price">
              <span className="price">{product.price_one}</span>
              <span className="price-dash">-</span>
              <span className="price">{product.price_two}</span>
            </div>
            <div className="wishlist">
              <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
              <span className="wishlist-text">Add to Wishlist</span>
            </div>
          </div>
        </div>
  )
}

export default ProductCard