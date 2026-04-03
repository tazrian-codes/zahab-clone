import React, { useContext, useState } from "react";
import { product_list } from "../../assets/resources/assets";
import ProductCard from "../ProductCard/ProductCard";
import './PopularItems.css'
import ProductGlimpse from "../ProductGlimpse/ProductGlimpse";
import { StoreContext } from "../../Context/Context";

const PopularItems = () => {
  const {selectedProduct, setSelectedProduct} = useContext(StoreContext);
  return (
    <div className="product-category">
      <div className="category-top">
        <h3>Currently Popular Items</h3>
        <span className="underline-text">Best Seller</span>
      </div>
      <div className="popular-items-product-category-body">
        <div className="product-card">
          {product_list.slice(0, 6).map((product, index) => {
            return <ProductCard key={product.id} product={product} onQuickView={setSelectedProduct} />;
          })}
        </div>
        {selectedProduct && (
          <div className="product-glimpse-overlay" onClick={() => setSelectedProduct(null)}>
            <ProductGlimpse className="product-glimpse-component" product={selectedProduct} />
          </div>
        )}

      </div>
    </div>
  );
};

export default PopularItems;
