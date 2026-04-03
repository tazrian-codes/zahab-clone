import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/Context";

const ProductCard = ({ product, onQuickView, subtitle }) => {
  const [activeId, setActiveId] = useState(null);
  const { addToWishlist, wishlistItems } = useContext(StoreContext);
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
          <span onClick={() => navigate(`/product/${product.id}`)}>
            Select options
          </span>
        </div>
        <FontAwesomeIcon
          icon={faEye}
          className={`show-product ${activeId === product.id ? "show-icon" : "hide-icon"}`}
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
        />
      </div>
      <div className="others-div">
         <div className="info-div">
          <p>{product.name}</p>
          <p>{product.headline}</p>
          <p>
            <span className="bold-text">Fragrance notes:</span>
            {product.notes}
          </p>
          <p>
            <span className="bold-text">Lasting time:</span>
            {product.lasting}
          </p>
          <p>
            <span className="bold-text">Smell projection:</span>
            {product.projection}
          </p>
          <p>
            <span className="bold-text">Usage:</span>
            {product.usage}
          </p>
        </div>
        <div className="opt-div-contents">
          <div className="main-price">
            <span className="price">{product.price_one}</span>
            <span className="price-dash">-</span>
            <span className="price">{product.price_two}</span>
          </div>
          <div
            className="opt-div-sm-screen"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <span>Select Options</span>
          </div>
          <div className="opt-div-show-product">
            <FontAwesomeIcon
              icon={faEye}
              className={`show-product`}
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
            />
          </div>
        </div>
        <div className="text">
          <h5>{product.name}</h5>
          <div className="main-price">
            <span className="price">{product.price_one}</span>
            <span className="price-dash">-</span>
            <span className="price">{product.price_two}</span>
          </div>
          <div
            className="wishlist"
            onClick={(e) => {
              e.stopPropagation();
              addToWishlist(product.id);
            }}
          >
            <div>
              <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
              <span className="wishlist-text">
                {wishlistItems[product.id]
                  ? "Product Added!"
                  : "Add to Wishlist"}
              </span>
            </div>
            <div className="browse-div">
              <span
                className={`browse ${wishlistItems[product.id] ? "show-browse" : "hide-browse"}`}
                onClick={() => navigate("/wishlist")}
              >
                Browse Wishlist
              </span>
            </div>
          </div>
        </div>
        <div className="wishlist-product-list">
          <div
            className="wishlist"
            onClick={(e) => {
              e.stopPropagation();
              addToWishlist(product.id);
            }}
          >
            <div>
              <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
              <span className="wishlist-text">
                {wishlistItems[product.id]
                  ? "Product Added!"
                  : "Add to Wishlist"}
              </span>
            </div>
            <div className="browse-div">
              <span
                className={`browse ${wishlistItems[product.id] ? "show-browse" : "hide-browse"}`}
                onClick={() => navigate("/wishlist")}
              >
                Browse Wishlist
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
