import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [wishlistItems, setWishlistItems] = useState({})

  const getKey = (id, size) => `${id}-${size}`

  const addToCart = (id, size) => {
    const key = getKey(id, size);
    setCartItems((prev) => {
      if (!prev[key]) {
        return {...prev, [key]:1}
      } else {
        return {...prev, [key]: prev[key]+1}
      }
    })
  };

  const removeFromCart = (id, size) => {
    const key = getKey(id, size);
    setCartItems((prev) => {
      if ( prev[key] === 1) {
        const updated = {...prev}
        delete updated[key]
        return updated
      } else {
        return {...prev, [key]: prev[key]-1}
      }
    })
};

  const removeAtOnce = (id,size) =>{
    const key = getKey(id, size);
    setCartItems((prev) => {
      const updated = {...prev}
      delete updated[key]
      return updated
    })
  }

  const totalItems = Object.keys(cartItems).length;
  const totalQuantity = Object.values(cartItems).reduce((sum, quan) => sum+quan, 0)

  const addToWishlist = (id) => {
    setWishlistItems(prev => {
      if (prev[id]) {
        return {...prev}
      }
      else {
        return {...prev, [id]: true}
      }
    })
  }

  const totalWishlistItems = Object.values(wishlistItems).reduce((sum, quan) => sum+quan, 0)

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
        totalWishlistItems
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
