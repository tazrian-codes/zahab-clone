import React, { useContext } from "react";
import "./PageShift.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faHome,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import { StoreContext } from "../../Context/Context";
import CartSlide from "../CartSlide/CartSlide";

const PageShift = ({ title }) => {
  const navigate = useNavigate();
  const { totalQuantity, cartOpen, setCartOpen } = useContext(StoreContext);

  return (
    <div className="page-shift">
      <CartSlide cartOpen={cartOpen} setCartOpen={setCartOpen} />
      {/* Reusable navbar */}
      <div className="nav">
        <Navbar />
      </div>

      {/* Page heading section */}
      <div className="heading">
        <div className="heading-left" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faAngleLeft} />
          <FontAwesomeIcon icon={faHome} />
        </div>

        <div className="heading-center">
          <span>{title}</span>
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

      {/* Breadcrumb + navigation helper */}
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
          {/* Navigate to previous page if history exists, otherwise go home */}
          <span
            className="previous-page-btn"
            onClick={() => {
              window.history.length > 1 ? navigate(-1) : navigate("/");
            }}
          >
            Previous Page
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageShift;
