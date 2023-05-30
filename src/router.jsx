import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';



export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </HashRouter>
  );
};
