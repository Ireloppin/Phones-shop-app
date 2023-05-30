import React from "react";
import { FilteredProvider } from "../context/filters";
import SearchBar from "./SearchBar";
import ProductsList from "./ProductsList";
import CartCounter from "./CartCounter";

const ProductsHome = () => {
  return (
    <div>
      <FilteredProvider>
        <CartCounter />
        <SearchBar />
        <ProductsList />
      </FilteredProvider>
    </div>
  );
};

export default ProductsHome;
