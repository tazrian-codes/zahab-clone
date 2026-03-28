import React, { useState } from "react";
import { sweet_type } from "../../assets/resources/assets";
import ProductCard from "../ProductCard/ProductCard";

const SweetType = () => {
  return (
    <div className="product-category">
      <div className="category-top">
        <h3>Sweet Type</h3>
        <img src="/src/assets/resources/traditional.webp" className="top-img" />
        <span className="underline-text">Sweet Collection</span>
      </div>
      <div className="product-category-body">
        <div className="col-one">
          <img src="/src/assets/resources/sweet.webp" alt="" />
        </div>
        <div className="product-card">
          {sweet_type.slice(0, 3).map((product, index) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>

        <div className="product-card-sm-screen">
          {sweet_type.slice(0, 6).map((product, index) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SweetType;
