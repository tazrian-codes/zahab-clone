import React, { useContext } from "react";
import { StoreContext } from "../../Context/Context";
import {
  product_list,
  sweet_type,
  traditional_type,
} from "../../assets/resources/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./CartList.css";

const CartList = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const allProducts = [...sweet_type, ...traditional_type, ...product_list];

  return (
    <div className="cart-list-wrapper">
      {Object.entries(cartItems).map(([key, quan]) => {
        const [id, size] = key.split("-");
        const product = allProducts.find((p) => p.id == id);

        if (!product) return null;

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
                <img src={product.image} />
              </div>

              <div className="info-div">
                <div className="info-top">
                  <span>
                    {product.name}-{size}
                  </span>
                  <FontAwesomeIcon icon={faTrashCan} className="icon" />
                </div>

                <div className="info-bottom">
                  <div className="counter-div">
                    <span onClick={() => removeFromCart(product.id, size)}>
                      -
                    </span>
                    <span>{quan}</span>
                    <span onClick={() => addToCart(product.id, size)}>+</span>
                  </div>
                  <div className="price">
                    <span>{price}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="line"></div>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
