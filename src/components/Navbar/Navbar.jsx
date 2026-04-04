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
import { product_list } from "../../assets/resources/assets";
import SearchDropDown from "../SearchDropDown/SearchDropDown";
import logo from "../../assets/resources/logo.webp";

const Navbar = () => {
  const navigate = useNavigate();

  // Global cart & wishlist data
  const { totalQuantity, totalWishlistItems, totalPrice } =
    useContext(StoreContext);

  // UI state controls
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Search-related state
  const [search, setSearch] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  // Prevent background scrolling when cart drawer is open
  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cartOpen]);

  return (
    <div className="navbar">
      {/* Cart slide panel */}
      <CartSlide cartOpen={cartOpen} setCartOpen={setCartOpen} />

      {/* Overlay for search dropdown */}
      <div
        className={`nav-overlay ${searchOpen ? "show-nav-overlay" : ""}`}
        onClick={() => {
          setSearchOpen(false);
          setDropdown(false);
        }}
      ></div>

      <div className="navbar-body">
        <div className="nav-top">
          {/* Logo */}
          <div className="logo-div" onClick={() => navigate("/")}>
            <img src={logo} />
          </div>

          {/* Search input with live filtering */}
          <div
            className="search-div"
            onClick={() => {
              setSearchOpen(true);
              setDropdown(true);
            }}
          >
            <FontAwesomeIcon className="search-icon" icon={faSearch} />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                const value = e.target.value;
                setSearch(value);

                // Filter products based on search input
                const filtered = product_list.filter((product) =>
                  product.name.toLowerCase().includes(value.toLowerCase()),
                );

                setSuggestions(filtered);
              }}
            />

            <SearchDropDown
              suggestions={suggestions}
              search={search}
              dropdown={dropdown}
              setDropdown={setDropdown}
              setSearchOpen={setSearchOpen}
            />
          </div>

          {/* User, wishlist, and cart section */}
          <div className="others-div">
            <FontAwesomeIcon
              className="nav-icons"
              onClick={() => navigate("/account")}
              icon={faUser}
            />

            <div className="wishlist" onClick={() => navigate("/wishlist")}>
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
              <div className="cart-amount">{totalPrice}৳</div>
            </div>
          </div>
        </div>

        <div className="line"></div>

        {/* Desktop navigation links */}
        <div className="nav-bottom">
          <div className="nav-opts">
            <nav className="opts">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "list-opts btn-active" : "list-opts-disabled"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "list-opts btn-active" : "list-opts-disabled"
                }
              >
                Shop
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "list-opts btn-active" : "list-opts-disabled"
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "list-opts btn-active" : "list-opts-disabled"
                }
              >
                Contact Us
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "list-opts btn-active" : "list-opts-disabled"
                }
              >
                Blog
              </NavLink>
            </nav>
          </div>
        </div>
      </div>

      {/* small screen navbar */}
      <div className="navbar-body-sm-screen">
        <div className="nav-top-sm-screen">
          <FontAwesomeIcon
            icon={faBars}
            className="menu nav-icons"
            onClick={() => setMenuOpen(true)}
          />

          <div className="logo-div" onClick={() => navigate("/")}>
            <img src={logo} />
          </div>

          <div className="cart" onClick={() => setCartOpen(true)}>
              <div className="cart-icon-div">
                <FontAwesomeIcon className="nav-icons" icon={faShoppingBag} />
                <div className="cart-count">
                  <span>{totalQuantity}</span>
                </div>
              </div>
            </div>
        </div>

        <div className="nav-bottom-mobile">
          <div
            className="search-div"
            onClick={() => {
              setSearchOpen(true);
              setDropdown(true);
            }}
          >
            <FontAwesomeIcon className="search-icon" icon={faSearch} />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                const value = e.target.value;
                setSearch(value);

                // Filter products based on search input
                const filtered = product_list.filter((product) =>
                  product.name.toLowerCase().includes(value.toLowerCase()),
                );

                setSuggestions(filtered);
              }}
            />

            <SearchDropDown
              suggestions={suggestions}
              search={search}
              dropdown={dropdown}
              setDropdown={setDropdown}
              setSearchOpen={setSearchOpen}
            />
          </div>
        </div>
      </div>

      {/* Small screen menu overlay */}
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
