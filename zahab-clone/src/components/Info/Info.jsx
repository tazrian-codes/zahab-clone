import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faMoneyCheck, faGift, faHeadset } from '@fortawesome/free-solid-svg-icons'
import './Info.css'

const Info = () => {
  return (
    <div className='info'>
      <div className="delivery">
        <FontAwesomeIcon icon={faTruckFast} className='delivery-truck' />
        <div className="delivery-txt">
          <h4>Free Delivery</h4>
          <p>When ordering from 2000 TK</p>
        </div>
      </div>

      <div className="payment">
        <FontAwesomeIcon icon={faMoneyCheck} className='payment-card' />
        <div className="payment-txt">
          <h4>Free Delivery</h4>
          <p>When ordering from 2000 TK</p>
        </div>
      </div>

      <div className="gift">
        <FontAwesomeIcon icon={faGift} className='gift-box' />
        <div className="gift-txt">
          <h4>Gift Certificate</h4>
          <p>Buy now 1500 to 2500</p>
        </div>
      </div>

      <div className="support">
        <FontAwesomeIcon icon={faHeadset} className='support-icon' />
        <div className="support-txt">
          <h4>8 Hours Support</h4>
          <p>11 AM - 7 PM</p>
        </div>
      </div>
    </div>
  )
}

export default Info