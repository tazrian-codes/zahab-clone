import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faYoutube, faPinterest, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-one">
          <p>Shop no 7, Block C, Level - 1, Bashundhara City Shopping Complex Dhaka, Bangladesh</p>
          <div className="footer-email">
            <span>Email:</span><a href="mailto:contact@zahabperfumes.com">contact@zahabperfumes.com</a>
          </div>
          <p>Call Us 11 AM - 7 PM</p>
          <p className='number'>09617-642090</p>
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
      <div className="footer-top-sm-screen">
        <div className="account-div">
          <div className="div-top account" onClick={() => setAccountOpen(!accountOpen)}>
            <h4>Account</h4>
            <img src="/src/assets/resources/down-arrow.png" className="arrow" />
          </div>
          <ul className={accountOpen ? 'list-open' : 'list-close'}>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>Subscribe</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="sm-screen-line"></div>
        <div className="quick-links-div">
          <div className="div-top links" onClick={() => setLinksOpen(!linksOpen)}>
            <h4>Quick Links</h4>
            <img src="/src/assets/resources/down-arrow.png" className="arrow" />
          </div>
          <ul className={linksOpen ? 'list-open' : 'list-close'}>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Vacancies</li>
          </ul>
        </div>
        <div className="sm-screen-line"></div>
        <div className="company-div">
          <div className="div-top company" onClick={() => setCompanyOpen(!companyOpen)}>
            <h4>Company</h4>
            <img src="/src/assets/resources/down-arrow.png" className="arrow" />
          </div>
          <ul className={companyOpen ? 'list-open' : 'list-close'}>
            <li>About Us</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="sm-screen-line"></div>
        <div className="categories-div">
          <div className="div-top categories" onClick={() => setCategoryOpen(!categoryOpen)}>
            <h4>Categories</h4>
            <img src="/src/assets/resources/down-arrow.png" className="down-arrow" />
          </div>
          <ul className={categoryOpen ? 'list-open' : 'list-close'}>
            <li>Best Seller</li>
            <li>Perfume Type</li>
            <li>Sweet Type</li>
            <li>Traditional Type</li>
          </ul>
        </div>
        <div className="sm-screen-line category-line"></div>
      </div>
      <div className="line"></div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          Copyright 2025 <span>Zahab</span>. All Rights Reserved.
        </div>
        <div className="footer-bottom-right">
          <FontAwesomeIcon className='links' icon={faFacebook} />
          <FontAwesomeIcon className='links' icon={faXTwitter} />
          <FontAwesomeIcon className='links' icon={faYoutube} />
          <FontAwesomeIcon className='links' icon={faPinterest} />
          <FontAwesomeIcon className='links' icon={faGooglePlus} />
        </div>
      </div>
    </div>
  )
}

export default Footer