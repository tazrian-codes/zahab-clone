import React, { use, useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./HomeCategory.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/Context";
import ProductGlimpse from "../ProductGlimpse/ProductGlimpse";

const HomeCategory = ({ title, imageSrc, subtitle, products }) => {
  const { selectedProduct, setSelectedProduct } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="product-category">
      <div className="category-top">
        <h3>{title}</h3>
        <img
          src={imageSrc}
          className="top-img"
          onClick={() =>
            navigate(`/shop/${subtitle.toLowerCase().replace(/\s/g, "-")}/`)
          }
        />
        <span className="underline-text">{subtitle}</span>
      </div>
      <div className="product-category-body">
        <div
          className="col-one"
          onClick={() =>
            navigate(`/shop/${subtitle.toLowerCase().replace(/\s/g, "-")}/`)
          }
        >
          <img src={imageSrc} alt="" />
        </div>
        <div className="product-card">
          {products.slice(0, 3).map((product, index) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                subtitle={subtitle}
                onQuickView={setSelectedProduct}
              />
            );
          })}
        </div>

        <div className="product-card-sm-screen">
          {products.slice(0, 6).map((product, index) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                subtitle={subtitle}
              />
            );
          })}
        </div>
        {selectedProduct && (
          <div
            className="product-glimpse-overlay"
            onClick={() => setSelectedProduct(null)}
          >
            <ProductGlimpse
              className="product-glimpse-component"
              product={selectedProduct}
              setSelectedProduct = {setSelectedProduct}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCategory;
