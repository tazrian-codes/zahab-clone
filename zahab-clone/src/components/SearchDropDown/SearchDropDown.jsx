import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchDropDown.css";

// Dropdown to show search suggestions
const SearchDropDown = ({
  suggestions,
  search,
  dropdown,
  setDropdown,
  setSearchOpen,
}) => {
  const navigate = useNavigate();
  return (
    <div className="search-dropdown" onClick={(e) => e.stopPropagation()}>
      {search && (
        <div className={`main-content ${dropdown ? "show" : "hide"}`}>
          {/* Show number of results */}
          <span className="length">
            {suggestions.length} results found with{" "}
            <span className="black">"{search}"</span>
          </span>

          {/* List of suggestions or no result message */}
          {suggestions.length > 0 ? (
            suggestions.map((product) => (
              <div
                className="suggestion-product"
                key={product.id}
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  setDropdown(false);
                  setSearchOpen(false);
                }}
              >
                <div className="img-div">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="info-div">
                  <h4>{product.name}</h4>
                  <p className="price">
                    {product.price_one}-{product.price_two}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="suggestion-product">
              <span>No Product Found.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropDown;
