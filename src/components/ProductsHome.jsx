import React from "react";
import SearchBar from "./SearchBar";
import ProductsList from "./ProductsList";
import Header from "./Header";

const ProductsHome = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <ProductsList />
    </div>
  );
};

export default ProductsHome;
