import React, { useEffect, useState, useContext } from "react";
import { ProductsContext } from "../context/products";
import { FilteredContext } from "../context/filters";

const SearchBar = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { filtered, setFiltered } = useContext(FilteredContext);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const newProducts = products.filter(
      (product) =>
        product.brand.toLowerCase().includes(filter.toLowerCase()) ||
        product.model.toLowerCase().includes(filter.toLowerCase())
    );
    setFiltered(newProducts);
  }, [filter]);

  const handleReset = () => {
    setFilter("");
    setFiltered(products);
  };

  return (
    <div>
      <form>
        <label htmlFor="search">Filter by</label>
        <input
          type="test"
          id="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        ></input>
      </form>
      <button onClick={handleReset}>Reset Filter</button>
    </div>
  );
};

export default SearchBar;
