import React, { useContext } from "react";
import { StoreContext } from "../../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  product_list,
  sweet_type,
  traditional_type,
} from "../../assets/resources/assets";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./WishlistProductCard.css";

const WishlistProductCard = () => {
  const { wishlistItems, removeAtOnce, removeAtOnceWishlist } = useContext(StoreContext);
  const allProducts = [...sweet_type, ...traditional_type, ...product_list];
  const hasProducts = Object.keys(wishlistItems).length > 0;
  return (
    <>
      {hasProducts ? (
        <div className="wishlist-product">
          {Object.entries(wishlistItems).map(([id, isAdded]) => {
            const product = allProducts.find((p) => p.id == id);

            if (!product) return null;

            return (
              <div className="wishlist-product-card" key={id}>
                <div className="img-div">
                  <img src={product.image} alt="" />
                </div>
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  <div className="price">
                    <span>
                      {product.price_one} - {product.price_two}
                    </span>
                  </div>
                </div>
                <button className="opts-btn">Select options</button>
                <FontAwesomeIcon icon={faTrashCan} className="icon" onClick={() => removeAtOnceWishlist(id)} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-wishlist">
          <span>No products added to the wishlist.</span>
        </div>
      )}
    </>
  );
};

export default WishlistProductCard;
