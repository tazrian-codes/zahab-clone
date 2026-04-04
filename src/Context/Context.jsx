import React, { createContext, useEffect, useState } from "react";
import {
  product_list,
  sweet_type,
  traditional_type,
} from "../assets/resources/assets";

// Create context for store
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  // State for product view mode (grid or list)
  const [view, setView] = useState("grid");

  // State for cart items, load from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : {};
  });

  // Save cart items to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // State for wishlist items, load from localStorage if available
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem("wishlistItems");
    return saved ? JSON.parse(saved) : {};
  });

  // Save wishlist items to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Combine all products into one array for easy lookup
  const allProducts = [...sweet_type, ...traditional_type, ...product_list];

  // Helper to generate unique key for cart item based on id and size
  const getKey = (id, size) => `${id}-${size}`;

  // Add product to cart or increase quantity if already exists
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

  // Remove one quantity of a product from cart
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

  // Remove all quantity of a product from cart at once
  const removeAtOnce = (id, size) => {
    const key = getKey(id, size);
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  // Calculate total items in cart (unique products)
  const totalItems = Object.keys(cartItems).length;

  // Calculate total quantity of all items in cart
  const totalQuantity = Object.values(cartItems).reduce(
    (sum, quan) => sum + quan,
    0,
  );

  // Calculate total price of all items in cart
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

    // Remove "TK" text and convert to number
    const cleanPrice = price.replace("TK", "").trim();

    return total + cleanPrice * quan;
  }, 0);

  // Add product to wishlist
  const addToWishlist = (id) => {
    setWishlistItems((prev) => {
      if (prev[id]) {
        return { ...prev };
      } else {
        return { ...prev, [id]: true };
      }
    });
  };

  // Total number of items in wishlist
  const totalWishlistItems = Object.values(wishlistItems).reduce(
    (sum, quan) => sum + quan,
    0,
  );

  // State for selected product in quick view
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
