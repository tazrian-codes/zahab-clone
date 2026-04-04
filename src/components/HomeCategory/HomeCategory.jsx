import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./HomeCategory.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/Context";
import ProductGlimpse from "../ProductGlimpse/ProductGlimpse";

const HomeCategory = ({ title, imageSrc, subtitle, products }) => {
  // Global state for handling quick view modal
  const { selectedProduct, setSelectedProduct } = useContext(StoreContext);

  const navigate = useNavigate();

  // Generate URL-friendly slug from subtitle
  const slug = subtitle.toLowerCase().replace(/\s/g, "-");

  return (
    <div className="product-category">
      {/* Category header */}
      <div className="category-top">
        <h3>{title}</h3>

        {/* Clickable banner image navigates to category page */}
        <img
          src={imageSrc}
          className="top-img"
          onClick={() => navigate(`/shop/${slug}/`)}
        />

        <span className="underline-text">{subtitle}</span>
      </div>

      <div className="product-category-body">
        {/* Left side image (also navigates to category page) */}
        <div className="col-one" onClick={() => navigate(`/shop/${slug}/`)}>
          <img src={imageSrc} alt="" />
        </div>

        {/* Desktop view: show first 3 products */}
        <div className="product-card">
          {products.slice(0, 3).map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                subtitle={subtitle}
                onQuickView={setSelectedProduct} // pass handler for opening modal
              />
            );
          })}
        </div>

        {/* Small screen view: show more products */}
        <div className="product-card-sm-screen">
          {products.slice(0, 6).map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                subtitle={subtitle}
              />
            );
          })}
        </div>

        {/* Quick view modal (shown when a product is selected) */}
        {selectedProduct && (
          <div
            className="product-glimpse-overlay"
            onClick={() => setSelectedProduct(null)} // close on overlay click
          >
            <ProductGlimpse
              className="product-glimpse-component"
              product={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCategory;
