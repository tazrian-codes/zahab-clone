import React, { createContext, useEffect, useState } from "react";
import {
  product_list,
  sweet_type,
  traditional_type,
} from "../assets/resources/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [view, setView] = useState("grid");

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem("wishlistItems");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);
  const allProducts = [...sweet_type, ...traditional_type, ...product_list];

  const getKey = (id, size) => `${id}-${size}`;

  const addToCart = (id, size) => {
    const key = getKey(id, size);
    setCartItems((prev) => {
      if (!prev[key]) {
        return { ...prev, [key]: 1 };
      } else {
        return { ...prev, [key]: prev[key] + 1 };
      }
    });
  };

  const removeFromCart = (id, size) => {
    const key = getKey(id, size);
    setCartItems((prev) => {
      if (prev[key] === 1) {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      } else {
        return { ...prev, [key]: prev[key] - 1 };
      }
    });
  };

  const removeAtOnce = (id, size) => {
    const key = getKey(id, size);
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  const totalItems = Object.keys(cartItems).length;
  const totalQuantity = Object.values(cartItems).reduce(
    (sum, quan) => sum + quan,
    0,
  );
  const totalPrice = Object.entries(cartItems).reduce((total, [key, quan]) => {
    const [id, size] = key.split("-");
    const product = allProducts.find((p) => p.id == id);

    if (!product) return total;

    const price =
      size === "6 ML"
        ? product.six_ml
        : size === "12 ML"
          ? product.twelve_ml
          : size === "15 ML"
            ? product.fifteen_ml
            : 0;

    const cleanPrice = price.replace("TK", "").trim();

    return total + cleanPrice * quan;
  }, 0);

  const addToWishlist = (id) => {
    setWishlistItems((prev) => {
      if (prev[id]) {
        return { ...prev };
      } else {
        return { ...prev, [id]: true };
      }
    });
  };

  const totalWishlistItems = Object.values(wishlistItems).reduce(
    (sum, quan) => sum + quan,
    0,
  );

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <StoreContext.Provider
      value={{
        addToCart,
        removeAtOnce,
        removeFromCart,
        cartItems,
        setCartItems,
        totalItems,
        totalQuantity,
        addToWishlist,
        wishlistItems,
        totalWishlistItems,
        view,
        setView,
        selectedProduct,
        setSelectedProduct,
        totalPrice,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
