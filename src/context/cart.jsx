import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const cartInitialState = JSON.parse(localStorage.getItem("products")) || [];

  const [selectedProducts, setSelectedProducts] = useState(cartInitialState);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(selectedProducts));
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
