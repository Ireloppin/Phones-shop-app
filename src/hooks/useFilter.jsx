import React, { useContext } from "react";
import { ProductsContext } from "../context/products";
import { FilteredContext } from "../context/filters";

const useFilter = () => {
  const { products } = useContext(ProductsContext);
  const { setFiltered } = useContext(FilteredContext);

  const filterProducts = ({ filter }) => {
    const newProducts = products.filter(
      (product) =>
        product.brand.toLowerCase().includes(filter.toLowerCase()) ||
        product.model.toLowerCase().includes(filter.toLowerCase())
    );
    setFiltered(newProducts);
  };
  return { filterProducts };
};

export default useFilter;
