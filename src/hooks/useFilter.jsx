import React, { useContext } from "react";
import { ProductsContext } from "../context/products";

const useFilter = () => {
  const { products, setFiltered, filtered } = useContext(ProductsContext);

  const filterProducts = ({ filter }) => {
    if (filter === "") {
      setFiltered(products);
    } else {
      const newProducts = products.filter(
        (product) =>
          product.brand.toLowerCase().includes(filter.toLowerCase()) ||
          product.model.toLowerCase().includes(filter.toLowerCase())
      );
      setFiltered(newProducts);
    }
  };
  return { filterProducts };
};

export default useFilter;
