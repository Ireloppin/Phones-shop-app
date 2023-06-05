import React, { createContext, useEffect, useState } from "react";
import { cartCache } from "../services/cache";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const cartInitialState =
    JSON.parse(localStorage.getItem("productsInCart")) || [];

  const initialsProducts = cartInitialState[0] || [];
  const setupTime = cartInitialState[1];

  const [selectedProducts, setSelectedProducts] = useState(initialsProducts);

  useEffect(() => {
    cartCache(selectedProducts, setupTime);
  }, [selectedProducts]);

  return (
    <CartContext.Provider
      value={{
        selectedProducts,
        setSelectedProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
