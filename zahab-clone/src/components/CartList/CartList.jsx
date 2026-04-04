import React, { useContext } from "react";
import { StoreContext } from "../../Context/Context";
import {
  product_list,
  sweet_type,
  traditional_type,
} from "../../assets/resources/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./CartList.css";

const CartList = () => {
  const { cartItems, addToCart, removeAtOnce, removeFromCart } =
    useContext(StoreContext);

  // combined all products
  const allProducts = [...sweet_type, ...traditional_type, ...product_list];

  const hasProducts = Object.keys(cartItems).length > 0;

  return (
    <div className="cart-list-wrapper">
      {hasProducts ? (
        Object.entries(cartItems).map(([key, quantity]) => {
          const [id, size] = key.split("-");
          const product = allProducts.find((p) => p.id == id);
          if (!product) return null;

          // price according to size
          const price =
            size === "6 ML"
              ? product.six_ml
              : size === "12 ML"
                ? product.twelve_ml
                : size === "15 ML"
                  ? product.fifteen_ml
                  : null;

          return (
            <div className="cart-list" key={key}>
              <div className="cart-content">
                <div className="img-div">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="info-div">
                  <div className="info-top">
                    <span>
                      {product.name} - {size}
                    </span>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="icon"
                      onClick={() => removeAtOnce(product.id, size)}
                    />
                  </div>

                  <div className="info-bottom">
                    <div className="counter-div">
                      <span
                        className="count-btn"
                        onClick={() => removeFromCart(product.id, size)}
                      >
                        -
                      </span>
                      <span>{quantity}</span>
                      <span
                        className="count-btn"
                        onClick={() => addToCart(product.id, size)}
                      >
                        +
                      </span>
                    </div>

                    <div className="price">
                      <span>{price}৳</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="line"></div>
            </div>
          );
        })
      ) : (
        <div className="cart-empty">
          <span className="empy-text">Your cart is empty.</span>
          <FontAwesomeIcon icon={faShoppingBasket} className="cart-icon" />
        </div>
      )}
    </div>
  );
};

export default CartList;
