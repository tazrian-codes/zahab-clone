import React from 'react'
import './PageShift.css'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faHome,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from '../Navbar/Navbar';

const PageShift = ({title}) => {
  return (
    <div className='page-shift'>
      <div className="nav">
        <Navbar />
      </div>
      <div className="heading">
        <div className="heading-left">
          <FontAwesomeIcon icon={faAngleLeft} />
          <FontAwesomeIcon icon={faHome} />
        </div>

        <div className="heading-center">
          <span>{title}</span>
        </div>

        <div className="heading-right">
          <FontAwesomeIcon icon={faShoppingBag} />
          <div className="cart-circle"></div>
        </div>
      </div>
      <div className="top">
        <div className="top-left">
          <div className="div-1">
            <NavLink to="/home" className="home-btn">
              Home
            </NavLink>
            <span>/</span>
          </div>
          <span>Page</span>
        </div>

        <div className="top-right">
          <NavLink to="/home" className="home-btn-two">
            Previous Page
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default PageShift