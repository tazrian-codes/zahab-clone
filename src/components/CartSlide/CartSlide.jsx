import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CartSlide.css";
import CartList from "../CartList/CartList";
import { StoreContext } from "../../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const CartSlide = ({ cartOpen, setCartOpen }) => {
  const navigate = useNavigate();
  const { cartItems } = useContext(StoreContext);
  const hasProducts = Object.keys(cartItems).length > 0;
  return (
    // Overlay to be opened when the cart slide is opened
    <div
      className={`cart-slide-overlay ${cartOpen ? "overlay-show" : "overlay-hide"}`}
      onClick={() => setCartOpen(false)}
    >
      <div
        className={`cart-slide ${cartOpen ? "slide-show" : "slide-hide"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="slide-top">
          <span>Shopping Cart</span>
          <span onClick={() => setCartOpen(false)}>x</span>
        </div>
        {/* divider */}
        <div className="line"></div>
        <div className="cart-slide-body">
          {/* showing cart items through this component */}
          <CartList />
        </div>
        {hasProducts ? (
          <div className="cart-slide-bottom">
            <div className="sub-total">
              <span>Subtotal</span>
              <span></span>
            </div>
            <button className="view-cart" onClick={() => navigate("/checkout")}>
              View Cart
            </button>
            <button className="checkout" onClick={() => navigate("/checkout")}>
              Checkout
            </button>
          </div>
        ) : (
          <div
            className="cart-slide-bottom-shopping"
            onClick={() => navigate("/shop")}
          >
            <span>Continue Shopping</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSlide;
