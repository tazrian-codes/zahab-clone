import React, { useContext } from "react";
import { product_list } from "../../assets/resources/assets";
import ProductCard from "../ProductCard/ProductCard";
import "./PopularItems.css";
import ProductGlimpse from "../ProductGlimpse/ProductGlimpse";
import { StoreContext } from "../../Context/Context";

const PopularItems = () => {
  // Global state for quick view modal
  const { selectedProduct, setSelectedProduct } = useContext(StoreContext);

  return (
    <div className="product-category">
      {/* Section heading */}
      <div className="category-top">
        <h3>Currently Popular Items</h3>
        <span className="underline-text">Best Seller</span>
      </div>

      <div className="popular-items-product-category-body">
        {/* Display first 6 popular products */}
        <div className="product-card">
          {product_list.slice(0, 6).map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
              />
            );
          })}
        </div>

        {/* Quick view modal */}
        {selectedProduct && (
          <div
            className="product-glimpse-overlay"
            onClick={() => setSelectedProduct(null)}
          >
            <ProductGlimpse
              className="product-glimpse-component"
              product={selectedProduct}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularItems;
