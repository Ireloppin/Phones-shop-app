import React from "react";
import "./App.css";
import { CartProvider } from "./context/cart";
import { ProductsProvider } from "./context/products";
import { Router } from "./router";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ProductsProvider>
          <Router />
        </ProductsProvider>
      </CartProvider>
    </div>
  );
}

export default App;
