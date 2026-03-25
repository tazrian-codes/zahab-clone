import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faShield,
  faHeadset,
  faAngleLeft,
  faHome,
  faShoppingBasket,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";
import './Pages.css'
import Navbar from '../components/Navbar/Navbar';
import About from './About/About';
import Blog from './Blog/Blog';
import Home from './Home/Home';

const Pages = () => {

  const { pageName } = useParams();

  const content = {
    blog: 'Blog',
    contact: 'Contact Us',
    about: 'About Us'
  }

  return (
    <div className='pages'>
      <div className='nav'>
              <Navbar />
            </div>
       <div className="heading">
        <div className="heading-left">
          <FontAwesomeIcon icon={faAngleLeft} />
          <FontAwesomeIcon icon={faHome} />
        </div>

        <div className="heading-center">
          <span>{content[pageName]}</span>
        </div>

        <div className="heading-right">
          <FontAwesomeIcon icon={faShoppingBag} />
          <div className="cart-circle"></div>
        </div>
      </div>
      <div className="top">
        <div className="top-left">
          <div className="div-1">
            <NavLink to='/home' className='home-btn'>Home</NavLink>
            <span>/</span>
          </div>
          <span>Page</span>
        </div>

        <div className="top-right">
          <NavLink to='/home' className='home-btn-two'>Previous Page</NavLink>
        </div>
      </div>

      {
        pageName === 'about' ? <About /> :
        pageName === 'blog' ? <Blog /> :
        null
      }
    </div>
  )
}

export default Pages;