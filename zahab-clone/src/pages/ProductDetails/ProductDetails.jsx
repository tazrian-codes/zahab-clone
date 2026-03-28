import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faHome,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./ProductDetails.css";
import {
  sweet_type,
  traditional_type,
  product_list,
} from "../../assets/resources/assets";

const ProductDetails = () => {

  const [selectedSize, setSelectedSize] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const { id } = useParams();
  const allProducts = [...sweet_type, ...traditional_type, ...product_list];
  const product = allProducts.find((p) => p.id == id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <div className="product-details-top">
        <div className="nav">
          <Navbar />
        </div>
        <div className="heading">
          <div className="heading-left">
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faHome} />
          </div>

          <div className="heading-center">
          <span>{product.name}</span>
        </div>

          <div className="heading-right">
            <FontAwesomeIcon icon={faShoppingBag} />
            <div className="cart-circle"></div>
          </div>
        </div>
        <div className="top">
          <div className="top-left">
            <div className="div-1">
              <NavLink to="/home" className="home-btn">
                Home
              </NavLink>
              <span>/</span>
            </div>
            <span>Page</span>
          </div>

          <div className="top-right">
            <NavLink to="/home" className="home-btn-two">
              Previous Page
            </NavLink>
          </div>
        </div>
      </div>

      <div className="product-details-body">
        <div className="product-details-img">
          <img src={product.image} />
        </div>
        <div className="product-details-text">
          <h2 className="product-name">{product.name}</h2>
          <div className="line"></div>
          <p className="coloured-text">
            {product.price_one} - {product.price_two}
          </p>
          <p><span className="bold-text">{product.name}:</span>{product.headline}</p>
          <p><span className="bold-text">Fragrance Notes:</span>{product.notes}</p>
          <p><span className="bold-text">Lasting Time:</span>{product.lasting}</p>
          <p><span className="bold-text">Smell Projection:</span>{product.projection}</p>
          <p><span className="bold-text">Usage:</span>{product.usage}</p>
          <div className="line"></div>
          <h5>Size</h5>
          <div className="size-opts">
            <div className={`size-opt ${selectedSize === '12 ML' ? 'selected' : ''}`} onClick={() => setSelectedSize('12 ML')}>
              <span>12 ML (Oil Version)</span>
            </div>
            <div className={`size-opt ${selectedSize === '6 ML' ? 'selected' : ''}`} onClick={() => setSelectedSize('6 ML')}>
              <span>6 ML (Oil Version)</span>
            </div>
            <div className={`size-opt ${selectedSize === '15 ML' ? 'selected' : ''}`} onClick={() => setSelectedSize('15 ML')}>
              <span>15 ML (Oil Version)</span>
            </div>
          </div>

          <span className={selectedSize === null ? 'hide-clear-btn' : 'clear-btn'} onClick={() => setSelectedSize(null)}>
            clear
          </span>

          <span className={selectedSize !== null ? 'show-price' : 'hide-price'}>
            {selectedSize === '6 ML' ? product.six_ml : selectedSize === '12 ML' ? product.twelve_ml : product.fifteen_ml}
          </span>
          <div className="cart-div">
            <div className="count-div">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>

            <button className="add-to-cart-btn" disabled={selectedSize === null}>
              Add to Cart
            </button>
            <button className="buy-now-btn" disabled={selectedSize === null}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="product-details-bottom">
        <div className="line"></div>
        <div className="des" onClick={() => setShowDescription(true)}>
          <h3>Description</h3>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="line"></div>
        <div className="additional-info">
          <h3>Additional Information</h3>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="line"></div>
      </div>
      <div className={`product-description ${showDescription ? 'show-description' : 'hide-description'}`}>
        <div className="des-top">
          <span>Description</span>
          <span className="remove" onClick={() => setShowDescription(false)}>x</span>
        </div>
        <div className="des-body">
          <h4>Product Description</h4>
          <p>This premium perfume brings a <span className="bold">sweet yet refreshing fragrance</span> with a <span className="bold">long-lasting appeal.</span>  With notes of dark berry and vanilla, it’s the ideal choice for individuals who want to leave a lasting impression throughout the day. Whether you’re heading to the office, a special event, or looking for a subtle, pleasant fragrance for the masjid, Vampire Blood has got you covered.</p>
          <p>আপনার ব্যক্তিত্বের জন্য দীর্ঘস্থায়ী সুগন্ধ!</p>
          <p><span className="bold">How To Use:</span> Rub a good amount on your wrist then apply on your neck, cloth, or behind your ears.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
