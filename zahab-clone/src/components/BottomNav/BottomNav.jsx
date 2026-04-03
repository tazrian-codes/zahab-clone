import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingBag,
  faHome,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import './BottomNav.css'

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeBtn = location.pathname;
  return (
    <div className="bottom-nav">
          <div className={`bottom-home bottom-div ${activeBtn === '/' ? 'nav-border' : ''}`} onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faHome} className="bottom-nav-icon" />
            <span className="bottom-nav-text">Home</span> 
          </div>

          <div className={`bottom-shop bottom-div ${activeBtn === '/shop' ? 'nav-border' : ''}`} onClick={() => navigate('/shop')}>
            <FontAwesomeIcon icon={faShop} className="bottom-nav-icon" />
            <span className="bottom-nav-text">Shop</span> 
          </div>

          <div className={`bottom-cart bottom-div ${activeBtn === '/cart' ? 'nav-border' : ''}`} onClick={() => navigate('/checkout')}>
            <FontAwesomeIcon icon={faShoppingBag} className="bottom-nav-icon" />
            <span className="bottom-nav-text">Cart</span> 
          </div>

          <div className={`bottom-account bottom-div ${activeBtn === '/account' ? 'nav-border' : ''}`} onClick={() => navigate('/account')}>
            <FontAwesomeIcon icon={faUser} className="bottom-nav-icon" />
            <span className="bottom-nav-text">Account</span> 
          </div>
        </div>
  )
}

export default BottomNav