import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { StoreContext } from "../../Context/Context";
import CartSlide from "../../components/CartSlide/CartSlide";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [quantity, setQuantity] = useState(1); // track desired quantity before add to cart
  const { addToCart, totalQuantity, cartOpen, setCartOpen } = useContext(StoreContext);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (selectedSize) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product.id, selectedSize);
      }
      navigate(`/product/${product.id}`);
    }
  };

  const { id } = useParams();
  const allProducts = [...sweet_type, ...traditional_type, ...product_list];
  const product = allProducts.find((p) => p.id == id);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="product-details">
      <CartSlide cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <div className="product-details-top">
        <div className="nav">
          <Navbar />
        </div>
        <div className="heading">
          <div className="heading-left" onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faHome} />
          </div>

          <div className="heading-center">
            <span>{product.name}</span>
          </div>

          <div className="heading-right cart" onClick={() => setCartOpen(true)}>
            <div className="cart-icon-div">
              <FontAwesomeIcon className="nav-icons" icon={faShoppingBag} />
              <div className="cart-count">
                <span>{totalQuantity}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="top">
          <div className="top-left">
            <div className="div-1">
              <NavLink to="/" className="home-btn">
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
              <span onClick={decreaseQty}>-</span>
              <span>{quantity}</span>
              <span onClick={increaseQty}>+</span>
            </div>

            {/* Add to Cart button: adds first time */}
            <button
              className="add-to-cart-btn"
              disabled={selectedSize === null}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="buy-now-btn"
              disabled={selectedSize === null}
              onClick={() => navigate("/checkout")}
            >
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
        <div
          className="additional-info"
          onClick={() => setShowAdditionalInfo(true)}
        >
          <h3>Additional Information</h3>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="line"></div>
      </div>
      <div
        className={`product-description ${showDescription ? "show-description" : "hide-description"}`}
      >
        <div className="des-top">
          <span>Description</span>
          <span className="remove" onClick={() => setShowDescription(false)}>
            x
          </span>
        </div>
        <div className="des-body">
          <h4>Product Description</h4>
          <p>
            This premium perfume brings a{" "}
            <span className="bold">sweet yet refreshing fragrance</span> with a{" "}
            <span className="bold">long-lasting appeal.</span> With notes of
            dark berry and vanilla, it’s the ideal choice for individuals who
            want to leave a lasting impression throughout the day. Whether
            you’re heading to the office, a special event, or looking for a
            subtle, pleasant fragrance for the masjid, Vampire Blood has got you
            covered.
          </p>
          <p>আপনার ব্যক্তিত্বের জন্য দীর্ঘস্থায়ী সুগন্ধ!</p>
          <p>
            <span className="bold">How To Use:</span> Rub a good amount on your
            wrist then apply on your neck, cloth, or behind your ears.
          </p>
        </div>
      </div>

      <div
        className={`product-additional-info ${showAdditionalInfo ? "show-additional-info" : "hide-additional-info"}`}
      >
        <div className="info-top">
          <span>Additional Information</span>
          <span className="remove" onClick={() => setShowAdditionalInfo(false)}>
            x
          </span>
        </div>
        <div className="info-body">
          <h4>Additional Information</h4>
          <div className="main-content">
            <span className="content-left">Size</span>
            <div className="content-right">
              <div className="divide"></div>
              <span>6 ML, 12 ML, 15 ML</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
