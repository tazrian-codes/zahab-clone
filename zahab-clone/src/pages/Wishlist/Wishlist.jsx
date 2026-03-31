import React from "react";
import WishlistProductCard from "../../components/WishlistProductCard/WishlistProductCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './Wishlist.css'

const Wishlist = () => {
  return (
    <div className="wishlist-page">
      <div className="wishlist-nav">
        <Navbar />
      </div>
      <div className="wishlist-contents">
        <h4>Wishlist</h4>
        <h5>My wishlist</h5>
        <div className="wishlist-body">
          <WishlistProductCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
