import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import "./ProductSection.css";
import ProductCard from "../ProductCard/ProductCard";
import { StoreContext } from "../../Context/Context";
import ProductGlimpse from "../ProductGlimpse/ProductGlimpse";

// Component to show a section of products with sorting, grid/list view, and quick view
const ProductSection = ({ title, products }) => {
  const { selectedProduct, setSelectedProduct } = useContext(StoreContext); // global state for quick view
  const [view, setView] = useState("grid"); // track current view: grid or list
  const [sortType, setSortType] = useState("Sort by default"); // current sorting option
  const [sortOpen, setSortOpen] = useState(false); // dropdown visibility

  // Sort products based on current sortType
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortType) {
      case "Sort by low to high":
      case "low": // mobile version
        return a.price_one - b.price_one;
      case "Sort by high to low":
      case "high":
        return b.price_one - a.price_one;
      case "Sort by a to z":
      case "az":
        return a.name.localeCompare(b.name);
      default:
        return 0; // default, no sorting
    }
  });

  return (
    <div className="product-section-page">
      {/* Top section with title, view toggle, and sort options */}
      <div className="product-section-page-top">
        <div className="product-section-page-top-left">
          <h2>{title}</h2>

          {/* Grid/List view icons */}
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

        {/* Sort dropdown */}
        <div className="product-section-page-top-right">
          <div className="sort-show">
            <span>Sort by:</span>
            <div className="box" onClick={() => setSortOpen(!sortOpen)}>
              <span>{sortType}</span>
              <FontAwesomeIcon icon={sortOpen ? faAngleUp : faAngleDown} />
            </div>
          </div>

          <div className={`sort-options ${sortOpen ? "sort-display" : ""}`}>
            <span
              onClick={() => {
                setSortType("Sort by default");
                setSortOpen(false);
              }}
            >
              Sort by default
            </span>
            <span
              onClick={() => {
                setSortType("Sort by low to high");
                setSortOpen(false);
              }}
            >
              Sort by low to high
            </span>
            <span
              onClick={() => {
                setSortType("Sort by high to low");
                setSortOpen(false);
              }}
            >
              Sort by high to low
            </span>
            <span
              onClick={() => {
                setSortType("Sort by a to z");
                setSortOpen(false);
              }}
            >
              Sort by a to z
            </span>
          </div>
        </div>
      </div>

      {/* Small screen layout */}
      <div className="product-section-page-top-sm-screen">
        <div className="top-row-one">
          <h2 className="top-row-one-left">{title}</h2>
          <div className="top-row-one-right sort-show">
            <span>Sort by:</span>
            <div className="box" onClick={() => setSortOpen(!sortOpen)}>
              <span>{sortType}</span>
              <FontAwesomeIcon icon={sortOpen ? faAngleUp : faAngleDown} />
            </div>
          </div>
          <div className={`sort-options ${sortOpen ? "sort-display" : ""}`}>
            <span
              onClick={() => {
                setSortType("Sort by default");
                setSortOpen(false);
              }}
            >
              Sort by default
            </span>
            <span
              onClick={() => {
                setSortType("Sort by low to high");
                setSortOpen(false);
              }}
            >
              Sort by low to high
            </span>
            <span
              onClick={() => {
                setSortType("Sort by high to low");
                setSortOpen(false);
              }}
            >
              Sort by high to low
            </span>
            <span
              onClick={() => {
                setSortType("Sort by a to z");
                setSortOpen(false);
              }}
            >
              Sort by a to z
            </span>
          </div>
        </div>

        {/* Small screen grid/list toggle */}
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

      {/* Desktop product cards */}
      <div className={`product-card ${view === "list" ? "product-list" : ""}`}>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={setSelectedProduct} // quick view modal
          />
        ))}
      </div>

      {/* Small screen product cards */}
      <div
        className={`product-card-sm-screen ${view === "list" ? "product-list-sm-screen" : ""}`}
      >
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={setSelectedProduct}
          />
        ))}
      </div>

      {/* Quick view overlay */}
      {selectedProduct && (
        <div
          className="product-glimpse-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <ProductGlimpse
            product={selectedProduct}
            setSelectedProduct={setSelectedProduct} // pass setter to allow closing
          />
        </div>
      )}
    </div>
  );
};

export default ProductSection;
