import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faAnglesDown, faAnglesUp, faAngleUp, faList } from "@fortawesome/free-solid-svg-icons";
import "./ProductSection.css";
import { product_list } from "../../assets/resources/assets";
import ProductCard from "../../components/ProductCard/ProductCard";
import { StoreContext } from "../../Context/Context";
import ProductGlimpse from "../ProductGlimpse/ProductGlimpse";

const ProductSection = ({ title, products }) => {
  const { selectedProduct, setSelectedProduct } = useContext(StoreContext);
  const [view, setView] = useState("grid");
  const [sortType, setSortType] = useState("Sort by default");
  const [sortOpen, setSortOpen] = useState(false);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "Sort by low to high") {
      return a.price_one - b.price_one;
    }

    if (sortType === "Sort by high to low") {
      return b.price_one - a.price_one;
    }

    if (sortType === "Sort by a to z") {
      return a.name.localeCompare(b.name);
    }

    return 0;
  });
  return (
    <div className="product-section-page">
      <div className="product-section-page-top">
        <div className="product-section-page-top-left">
          <h2>{title}</h2>
          <div className="product-section-page-top-grid">
            <FontAwesomeIcon
              icon={faMicrosoft}
              className={`product-section-page-top-icons ${view === "grid" ? "active-btn" : ""}`}
              onClick={() => setView("grid")}
            />
            <FontAwesomeIcon
              icon={faList}
              className={`product-section-page-top-icons ${view === "list" ? "active-btn" : ""}`}
              onClick={() => setView("list")}
            />
          </div>
        </div>
        <div className="product-section-page-top-right">
          <div className="sort-show">
            <span>Sort by:</span>
            <div className="box" onClick={() => setSortOpen(true)}>
              <span>{sortType}</span>
              <FontAwesomeIcon icon={sortOpen ? faAngleUp : faAngleDown} />
            </div>
          </div>
          

          <div className={`sort-options ${sortOpen ? 'sort-display' : ''}`}>
            <span onClick={() => {setSortType("Sort by default"); setSortOpen(false)}}>Sort by default</span>

            <span
              className={sortType === "Sort by low to high" ? "active" : ""}
              onClick={() => {setSortType("Sort by low to high"); setSortOpen(false)}}
            >
              Sort by low to high
            </span>

            <span
              className={sortType === "Sort by high to low" ? "active" : ""}
              onClick={() => {setSortType("Sort by high to low"); setSortOpen(false)}}
            >
              Sort by high to low
            </span>

            <span
              className={sortType === "Sort by a to z" ? "active" : ""}
              onClick={() => {setSortType("Sort by a to z"); setSortOpen(false)}}
            >
              Sort by a to z
            </span>
          </div>
        </div>
      </div>

      <div className="product-section-page-top-sm-screen">
        <div className="top-row-one">
          <h2 className="top-row-one-left">{title}</h2>
          <div className="top-row-one-right">
            <span>Sort by:</span>
            <div className="product-section-page-top-right">
              <span>Sort by:</span>

              <div className="sort-options">
                <span onClick={() => setSortType("")}>Default</span>

                <span
                  className={sortType === "low" ? "active" : ""}
                  onClick={() => setSortType("low")}
                >
                  Low → High
                </span>

                <span
                  className={sortType === "high" ? "active" : ""}
                  onClick={() => setSortType("high")}
                >
                  High → Low
                </span>

                <span
                  className={sortType === "az" ? "active" : ""}
                  onClick={() => setSortType("az")}
                >
                  A → Z
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="top-row-two">
          <FontAwesomeIcon
            icon={faMicrosoft}
            className={`product-section-page-top-icons ${view === "grid" ? "active-btn" : ""}`}
            onClick={() => setView("grid")}
          />
          <FontAwesomeIcon
            icon={faList}
            className={`product-section-page-top-icons ${view === "list" ? "active-btn" : ""}`}
            onClick={() => setView("list")}
          />
        </div>
      </div>
      <div className="line"></div>
      <div className={`product-card ${view === "list" ? "product-list" : ""}`}>
        {sortedProducts.map((product, index) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setSelectedProduct}
            />
          );
        })}
      </div>

      <div
        className={`product-card-sm-screen ${view === "list" ? "product-list-sm-screen" : ""}`}
      >
        {sortedProducts.map((product, index) => {
          return <ProductCard key={product.id} product={product} />;
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
          />
        </div>
      )}
    </div>
  );
};

export default ProductSection;
