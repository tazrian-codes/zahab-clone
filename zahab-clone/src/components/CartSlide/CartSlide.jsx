import React from 'react'
import './CartSlide.css'
import CartList from '../CartList/CartList'

const CartSlide = ({ cartOpen, setCartOpen }) => {
  return (
    <div className={`cart-slide-overlay ${cartOpen ? 'overlay-show' : 'overlay-hide'}`}>
      <div className={`cart-slide ${cartOpen ? 'slide-show' : 'slide-hide'}`}>
        <div className="slide-top">
          <span>Shopping Cart</span>
          <span onClick={() => setCartOpen(false)}>x</span>
        </div>
        <div className="line"></div>
        <div className="cart-slide-body">
          <CartList />
        </div>
        <div className="cart-slide-bottom">
          <div className="sub-total">
            <span>Subtotal</span>
            <span></span>
          </div>
          <button className='view-cart'>View Cart</button>
          <button className='checkout'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartSlide