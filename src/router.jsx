import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProductsHome from "./components/ProductsHome";
import ProductDetailPage from "./components/ProductDetail";
import Cart from "./components/Cart";

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProductsHome />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="cart/" element={<Cart />} />
      </Routes>
    </HashRouter>
  );
};
