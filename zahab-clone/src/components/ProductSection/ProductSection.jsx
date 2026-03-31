import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import "./ProductSection.css";
import { product_list } from "../../assets/resources/assets";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductSection = ({ title, products }) => {
  return (
    <div className="product-section-page">
      <div className="product-section-page-top">
        <div className="product-section-page-top-left">
          <h2>{title}</h2>
          <div className="product-section-page-top-grid">
            <FontAwesomeIcon icon={faMicrosoft} className="product-section-page-top-icons" />
            <FontAwesomeIcon icon={faList} className="product-section-page-top-icons" />
          </div>
        </div>
        <div className="product-section-page-top-right">
          <span>Sort by:</span>
          <span></span>
        </div>
      </div>

      <div className="product-section-page-top-sm-screen">
        <div className="top-row-one">
          <h2 className="top-row-one-left">{title}</h2>
          <div className="top-row-one-right">
            <span>Sort by:</span>
            <span></span>
          </div>
        </div>
        <div className="line"></div>
          <div className="top-row-two">
            <FontAwesomeIcon icon={faMicrosoft} className="product-section-page-top-icons" />
            <FontAwesomeIcon icon={faList} className="product-section-page-top-icons" />
          </div>
      </div>
      <div className="line"></div>
      <div className="product-card">
        {products.map((product, index) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>

      <div className="product-card-sm-screen">
        {products.map((product, index) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductSection