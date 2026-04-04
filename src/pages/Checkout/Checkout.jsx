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
import logo from "../../assets/resources/logo.webp";

const Checkout = () => {
  const navigate = useNavigate();

  // Access cart data and total price from context
  const { cartItems, totalPrice } = useContext(StoreContext);

  // State variables for form handling
  const [isChecked, setIsChecked] = useState(false); // for "Ship to different address" checkbox
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // for state dropdown
  const [option, setOption] = useState("Dhaka"); // selected state
  const [search, setSearch] = useState(null); // search input in state dropdown
  const [couponCode, setCouponCode] = useState(false); // toggle coupon input
  const [suggestion, setSuggestion] = useState([]); // filtered states for search

  // Combine all product lists for lookup
  const allProducts = [...sweet_type, ...traditional_type, ...product_list];

  return (
    <div className="checkout-page">
      {/* Left section: Billing & Shipping details */}
      <div className="left-div">
        <img
          src={logo}
          onClick={() => navigate("/")}
        />

        {/* Coupon section */}
        <div className="coupon">
          <span>Have a coupon?</span>
          <span
            className="coupon-code"
            onClick={() => setCouponCode(!couponCode)}
          >
            Click here to enter your code
          </span>
        </div>

        {/* Coupon input form */}
        <div
          className={`coupon-code-div ${couponCode ? "show-coupon-div" : ""}`}
        >
          <p>If you have a coupon code, please apply it below.</p>
          <input type="text" placeholder="Coupon code" />
          <button>Apply coupon</button>
        </div>

        <h4>Billing Details</h4>
        <form>
          {/* Name and Phone inputs */}
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

          {/* Country display */}
          <label className="country">
            Country / Region<span className="star">*</span>
          </label>
          <label className="bold">Bangladesh</label>

          {/* State / County dropdown */}
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

            {/* Dropdown with search and suggestions */}
            {isDropdownOpen && (
              <div className="dropdown">
                <div className="top">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSearch(value);

                      // Filter state list based on input
                      const filtered = state_name.filter((state) =>
                        state
                          .toLocaleLowerCase()
                          .includes(value.toLocaleLowerCase()),
                      );
                      setSuggestion(filtered);
                    }}
                  />
                </div>

                {/* Show filtered suggestions or full list */}
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

          {/* Street address inputs */}
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

          {/* Ship to different address */}
          <div className="ship">
            <input
              type="checkbox"
              id="checkBox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="checkBox">Ship to a different address?</label>
          </div>

          {/* Shipping address form (conditional) */}
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

            {/* Duplicate state dropdown for shipping */}
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

            {/* Street address for shipping */}
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

        {/* Order notes */}
        <div className="notes-div">
          <span>Order notes (optional)</span>
          <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
        </div>
      </div>

      {/* Right section: Order summary */}
      <div className="right-div">
        <h2>Your Order</h2>

        <div className="items-div">
          {/* Header row */}
          <div className="top-div">
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          {/* Cart items */}
          <div className="center-div">
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
                      : 0;

              const cleanPrice = price.replace("TK", "").trim();

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

          {/* Subtotal, shipping, total */}
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

        {/* Payment method */}
        <div className="payment-div">
          <h4>Payment Method</h4>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment" /> Cash on delivery
            </label>
            <label>
              <input type="radio" name="payment" /> bKash
            </label>
            <label className="nagad">
              <input type="radio" name="payment" /> nagad
            </label>
          </div>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
