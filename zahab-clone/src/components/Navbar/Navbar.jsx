import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faHeart,
  faShoppingBag,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { StoreContext } from "../../Context/Context";
import CartSlide from "../CartSlide/CartSlide";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems, totalQuantity, totalWishlistItems } =
    useContext(StoreContext);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  if (cartOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto"; 
  }

  // cleanup (important)
  return () => {
    document.body.style.overflow = "auto";
  };
}, [cartOpen]);
  return (
    <div className="navbar">
      <CartSlide cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <div
        className={`nav-overlay ${searchOpen ? "show-nav-overlay" : ""}`}
        onClick={() => setSearchOpen(false)}
      ></div>
      <div className="navbar-body">
        <div className="nav-top">
          <div className="logo-div" onClick={() => navigate("/")}>
            <img src="/src/assets/resources/logo.webp" />
          </div>
          <div className="search-div" onClick={() => setSearchOpen(true)}>
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="others-div">
            <FontAwesomeIcon className="nav-icons" icon={faUser} />
            <div className="wishlist" onClick={() => navigate('/wishlist')}>
              <FontAwesomeIcon className="nav-icons" icon={faHeart} />
              <div className="wishlist-count">{totalWishlistItems}</div>
            </div>
            <div className="cart" onClick={() => setCartOpen(true)}>
              <div className="cart-icon-div">
                <FontAwesomeIcon className="nav-icons" icon={faShoppingBag} />
                <div className="cart-count">
                  <span>{totalQuantity}</span>
                </div>
              </div>
              <div className="cart-amount">20 TK</div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="nav-bottom">
          <div className="nav-opts">
            <nav className="opts">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "list-opts btn-active" : "list-opts-disabled"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "list-opts btn-active" : "list-opts-disabled"
                }
                to="/shop"
              >
                Shop
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "list-opts btn-active" : "list-opts-disabled"
                }
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "list-opts btn-active" : "list-opts-disabled"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "list-opts btn-active" : "list-opts-disabled"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      <div className="navbar-body-sm-screen">
        <div className="nav-top-sm-screen">
          <FontAwesomeIcon
            icon={faBars}
            className="menu"
            onClick={() => setMenuOpen(true)}
          />
          <div className="logo-div" onClick={() => navigate("/")}>
            <img src="/src/assets/resources/logo.webp" />
          </div>
          <div className="cart">
            <div className="cart-icon-div">
              <FontAwesomeIcon className="cart-icon" icon={faShoppingBag} />
              <div className="cart-count">{totalQuantity}</div>
            </div>
          </div>
        </div>
        <div className="nav-bottom-mobile">
          <div className="search-div-sm-screen">
            <input type="text" placeholder="Search..." />
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon-sm-screen"
            />
          </div>
        </div>
      </div>
      <div
        className={`nav-overlay-sm-screen ${menuOpen ? "show-nav-overlay" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`nav-opts-sm-screen ${menuOpen ? "show-nav-opts" : ""}`}
        >
          <ul>
            <li className="remove" onClick={() => setMenuOpen(false)}>
              x
            </li>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/shop")}>Shop</li>
            <li onClick={() => navigate("/shop/best-seller")}>Best Seller</li>
            <li onClick={() => navigate("/shop/sweet-collection")}>
              Sweet Collection
            </li>
            <li onClick={() => navigate("/about")}>About Us</li>
            <li onClick={() => navigate("/contact-us")}>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
