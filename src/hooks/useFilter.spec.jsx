import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ProductsContext } from "../context/products";

import SearchBar from "../components/SearchBar";

const MockProductsProvider = ({ children }) => {
  const products = [
    { brand: "Apple", model: "iPhone" },
    { brand: "Samsung", model: "Galaxy" },
  ];

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

const MockFilteredProvider = ({ children }) => {
  const setFiltered = jest.fn();

  return (
    <ProductsContext.Provider value={{ setFiltered }}>
      {children}
    </ProductsContext.Provider>
  );
};

describe("SearchBar", () => {
  test("should update filter state on input change", () => {
    const { getByLabelText } = render(
      <MockProductsProvider>
        <MockFilteredProvider>
          <SearchBar />
        </MockFilteredProvider>
      </MockProductsProvider>
    );

    const input = getByLabelText("Filter by");

    fireEvent.change(input, { target: { value: "iPhone" } });

    expect(input.value).toBe("iPhone");
  });
});
