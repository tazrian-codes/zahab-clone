import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-body'>
        <div className="logo-div">
          <img src="/src/assets/resources/logo.webp" />
        </div>
        <div className="search-div">
          <FontAwesomeIcon className='search-icon' icon={faSearch} />
          <input type="text" placeholder='Search...' />
        </div>
        <div className="others-div">
          <FontAwesomeIcon className='nav-icons' icon={faUser} />
          <div className="wishlist">
            <FontAwesomeIcon className='nav-icons' icon={faHeart} />
            <div className="wishlist-count"></div>
          </div>
          <div className="cart">
            <div className="cart-icon-div">
              <FontAwesomeIcon className='nav-icons' icon={faShoppingBag} />
              <div className="cart-count"></div>
            </div>
            <div className="cart-amount">20 TK</div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="nav-opts">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar