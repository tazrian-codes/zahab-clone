import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faHeart,
  faShoppingBag,
  faHamburger,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <div
        className={`nav-overlay ${searchOpen ? "show-nav-overlay" : ""}`}
        onClick={() => setSearchOpen(false)}
      ></div>
      <div className="navbar-body">
        <div className="nav-top">
          <div className="logo-div">
            <img src="/src/assets/resources/logo.webp" />
          </div>
          <div className="search-div" onClick={() => setSearchOpen(true)}>
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="others-div">
            <FontAwesomeIcon className="nav-icons" icon={faUser} />
            <div className="wishlist">
              <FontAwesomeIcon className="nav-icons" icon={faHeart} />
              <div className="wishlist-count"></div>
            </div>
            <div className="cart">
              <div className="cart-icon-div">
                <FontAwesomeIcon className="nav-icons" icon={faShoppingBag} />
                <div className="cart-count"></div>
              </div>
              <div className="cart-amount">20 TK</div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="nav-bottom">
          <div className="nav-opts">
            <nav className='opts'>
              <NavLink className='list-opts' to='/'>Home</NavLink>
              <NavLink className='list-opts' to='/shop'>Shop</NavLink>
              <NavLink className='list-opts' to='/about'>About Us</NavLink>
              <NavLink className='list-opts' to='/contact'>Contact Us</NavLink>
              <NavLink className='list-opts' to='/blog'>Blog</NavLink>
            </nav>
          </div>
        </div>
      </div>
      <div className="navbar-body-sm-screen">
        <div className="nav-top-sm-screen">
          <FontAwesomeIcon icon={faBars} className="menu" onClick={() => setMenuOpen(true)} />
          <div className="logo-div">
            <img src="/src/assets/resources/logo.webp" />
          </div>
          <div className="cart">
            <div className="cart-icon-div">
              <FontAwesomeIcon className="cart-icon" icon={faShoppingBag} />
              <div className="cart-count"></div>
            </div>
          </div>
        </div>
        <div className="nav-bottom-mobile">
          <div className="search-div-sm-screen">
            <input type="text" placeholder="Search..." />
            <FontAwesomeIcon icon={faSearch} className="search-icon-sm-screen" />
          </div>
        </div>
      </div>
      <div className={`nav-overlay-sm-screen ${menuOpen ? 'show-nav-overlay' : ''}`} onClick={() => setMenuOpen(false)}>
          <div className={`nav-opts-sm-screen ${menuOpen ? 'show-nav-opts' : ''}`}>
            <ul>
              <li className="remove" onClick={() => setMenuOpen(false)}>x</li>
              <li>Home</li>
              <li>Shop</li>
              <li>Best Seller</li>
              <li>Perfume Collection</li>
              <li>Sweet Collection</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
