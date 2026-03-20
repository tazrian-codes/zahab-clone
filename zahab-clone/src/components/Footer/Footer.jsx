import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faYoutube, faPinterest, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-one">
          <p>Shop no 7, Block C, Level - 1, Bashundhara City Shopping Complex Dhaka, Bangladesh</p>
          <div className="footer-email">
            <span>Email:</span><a href="">contact@zahabperfumes.com</a>
          </div>
          <p>Call Us 11 AM - 7 PM</p>
          <p>09617-642090</p>
        </div>
        <div className="footer-top-two">
          <h4>ACCOUNT</h4>
          <p>Wishlist</p>
          <p>Compare</p>
          <p>Subscribe</p>
          <p>Login</p>
        </div>
        <div className="footer-top-three">
          <h4>QUICK LINKS</h4>
          <p>Shipping & Returns</p>
          <p>Privacy Policy</p>
          <p>Term Of Use</p>
          <p>Vacancies</p>
        </div>
        <div className="footer-top-four">
          <h4>COMPANY</h4>
          <p>About Us</p>
          <p>FAQs</p>
        </div>
        <div className="footer-top-five">
          <h4>CATEGORIES</h4>
          <p>Best Seller</p>
          <p>Perfume Type</p>
          <p>Sweet Type</p>
          <p>Traditional Type</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          Copyright 2025 Zahab. All Rights Reserved.
        </div>
        <div className="footer-bottom-right">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faPinterest} />
          <FontAwesomeIcon icon={faGooglePlus} />
        </div>
      </div>
    </div>
  )
}

export default Footer