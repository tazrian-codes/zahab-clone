import React, { useState } from "react";
import { product_list } from "../../assets/resources/assets";
import ProductCard from "../ProductCard/ProductCard";
import './PopularItems.css'

const PopularItems = () => {
  return (
    <div className="product-category">
      <div className="category-top">
        <h3>Currently Popular Items</h3>
        <span className="underline-text">Best Seller</span>
      </div>
      <div className="popular-items-product-category-body">
        <div className="product-card">
          {product_list.slice(0, 6).map((product, index) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
