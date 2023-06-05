import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const hours = 1;
  const now = new Date().getTime();
  var setupTime = localStorage.getItem("setupTime");
  if (setupTime == null) {
    localStorage.setItem("setupTime", now);
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.removeItem("products");
      localStorage.setItem("setupTime", now);
    }
  }

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
