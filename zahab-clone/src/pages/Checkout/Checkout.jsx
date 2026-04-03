import React, { useContext, useState } from "react";
import "./Checkout.css";
import {
  product_list,
  state_name,
  sweet_type,
  traditional_type,
} from "../../assets/resources/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, totalPrice } = useContext(StoreContext);
  const [isChecked, setIsChecked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [option, setOption] = useState("Dhaka");
  const [search, setSearch] = useState(null);
  const [couponCode, setCouponCode] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const allProducts = [...sweet_type, ...traditional_type, ...product_list];
  return (
    <div className="checkout-page">
      <div className="left-div">
        <img src="/src/assets/resources/logo.webp" onClick={() => navigate('/')} />
        <div className="coupon">
          <span>Have a coupon?</span>
          <span
            className="coupon-code"
            onClick={() => setCouponCode(!couponCode)}
          >
            Click here to enter your code
          </span>
        </div>
        <div
          className={`coupon-code-div ${couponCode ? "show-coupon-div" : ""}`}
        >
          <p>If you have a coupon code, please apply it below.</p>
          <input type="text" placeholder="Coupon code" />
          <button>Apply coupon</button>
        </div>
        <h4>Billing Details</h4>
        <form>
          <label htmlFor="">
            Full Name<span className="star">*</span>
          </label>
          <input type="text" required />
          <label htmlFor="">
            Phone<span className="star">*</span>
          </label>
          <input
            type="text"
            placeholder="01XXXXXXXXX or +8801XXXXXXXXX"
            required
          />
          <label className="country">
            Country / Region<span className="star">*</span>
          </label>
          <label className="bold">Bangladesh</label>
          <label htmlFor="">
            State / County<span className="star">*</span>
          </label>
          <div className="state-dropdown">
            <div
              className="box"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{option}</span>
              <FontAwesomeIcon
                icon={isDropdownOpen ? faAngleUp : faAngleDown}
              />
            </div>
            {isDropdownOpen && (
              <div className="dropdown">
                <div className="top">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSearch(value);

                      const filtered = state_name.filter((state) =>
                        state
                          .toLocaleLowerCase()
                          .includes(value.toLocaleLowerCase()),
                      );
                      setSuggestion(filtered);
                    }}
                  />
                </div>
                {suggestion.length === 0 ? (
                  <div>
                    {[...state_name]
                      .sort((a, b) =>
                        a.toLowerCase().localeCompare(b.toLowerCase()),
                      )
                      .map((state, index) => (
                        <p
                          key={index}
                          onClick={() => {
                            setOption(state);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {state}
                        </p>
                      ))}
                  </div>
                ) : (
                  <div>
                    {suggestion.map((state, index) => (
                      <p
                        key={index}
                        onClick={() => {
                          setOption(state);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {state}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <label htmlFor="">
            Street address<span className="star">*</span>
            <input
              type="text"
              placeholder="House number and street name"
              required
            />
            <input
              type="text"
              placeholder="Apartment, suite, unit, etc. (optional)"
            />
          </label>
          <div className="ship">
            <input
              type="checkbox"
              id="checkBox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="checkBox">Ship to a different address?</label>
          </div>
          <div className={`ship-info ${isChecked ? "show" : "hide"}`}>
            <label htmlFor="">
              Full Name<span className="star">*</span>
            </label>
            <input type="text" required />
            <label htmlFor="">
              Phone<span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder="01XXXXXXXXX or +8801XXXXXXXXX"
              required
            />
            <label className="country">
              Country / Region<span className="star">*</span>
            </label>
            <label className="bold">Bangladesh</label>
            <label htmlFor="">
              State / County<span className="star">*</span>
            </label>
            <div className="state-dropdown">
              <div
                className="box"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{option}</span>
                <FontAwesomeIcon
                  icon={isDropdownOpen ? faAngleUp : faAngleDown}
                />
              </div>
              {isDropdownOpen && (
                <div className="dropdown">
                  <div className="top">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => {
                        const value = e.target.value;
                        setSearch(value);

                        const filtered = state_name.filter((state) =>
                          state
                            .toLocaleLowerCase()
                            .includes(value.toLocaleLowerCase()),
                        );
                        setSuggestion(filtered);
                      }}
                    />
                  </div>
                  {suggestion.length === 0 ? (
                    <div>
                      {[...state_name]
                        .sort((a, b) =>
                          a.toLowerCase().localeCompare(b.toLowerCase()),
                        )
                        .map((state, index) => (
                          <p
                            key={index}
                            onClick={() => {
                              setOption(state);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {state}
                          </p>
                        ))}
                    </div>
                  ) : (
                    <div>
                      {suggestion.map((state, index) => (
                        <p
                          key={index}
                          onClick={() => {
                            setOption(state);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {state}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <label htmlFor="">
              Street address<span className="star">*</span>
              <input
                type="text"
                placeholder="House number and street name"
                required
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </label>
          </div>
        </form>
        <div className="notes-div">
          <span>Order notes (optional)</span>
          <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
        </div>
      </div>
      <div className="right-div">
        <h2>Your Order</h2>
        <div className="items-div">
          <div className="top-div">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          <div className="center-div">
            {Object.entries(cartItems).map(([key, quan]) => {
              const [id, size] = key.split("-");
              const product = allProducts.find((p) => p.id == id);

              const price =
                size === "6 ML"
                  ? product.six_ml
                  : size === "12 ML"
                    ? product.twelve_ml
                    : size === "15 ML"
                      ? product.fifteen_ml
                      : 0;

              const cleanPrice = price.replace("TK", "").trim();

              if (!product) return null;

              return (
                <div key={key} className="items">
                  <div className="div-one">
                    <img src={product.image} alt="" />
                    <div className="info-div">
                      <span>{product.name} - </span>
                      <span>{size}</span>
                      <span className="quantity">(x{quan})</span>
                    </div>
                  </div>
                  <div className="div-two">
                    <span>{cleanPrice * quan}৳</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bottom-div">
            <div className="subtotal">
              <span className="silver-text">Subtotal</span>
              <span className="bold">{totalPrice}৳</span>
            </div>
            <div className="shipping">
              <span className="silver-text">Shipping</span>
              <span>ডেলিভারি চার্জ: 70৳ </span>
            </div>
            <div className="total">
              <span>Total</span>
              <span className="bold">{totalPrice + 70}৳</span>
            </div>
          </div>
        </div>
        <div className="payment-div">
          <h4>Payment Method</h4>
            <div className="payment-options">
              <label><input type="radio" name="payment" /> Cash on delivery</label>
              <label><input type="radio" name="payment" /> bKash</label>
              <label className="nagad"><input type="radio" name="payment" /> nagad</label>
            </div>
            <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
