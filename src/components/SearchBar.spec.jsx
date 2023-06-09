import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import { ProductsContext } from "../context/products";
import SearchBar from "../components/SearchBar";

describe("<SearchBar />", () => {
  const setProducts = jest.fn();
  const setFiltered = jest.fn();
  const products = [{ brand: "Brand1", model: "Model1" }];

  it("renders correctly", () => {
    render(
      <ProductsContext.Provider
        value={{ products, setProducts, filtered: products, setFiltered }}
      >
        <SearchBar />
      </ProductsContext.Provider>
    );

    expect(screen.getByLabelText("Filter by")).toBeInTheDocument();
  });

  it("filters the products correctly", () => {
    render(
      <ProductsContext.Provider
        value={{ products, setProducts, filtered: products, setFiltered }}
      >
        <SearchBar />
      </ProductsContext.Provider>
    );

    fireEvent.change(screen.getByLabelText("Filter by"), {
      target: { value: "Brand1" },
    });

    expect(setFiltered).toHaveBeenCalledWith([
      { brand: "Brand1", model: "Model1" },
    ]);
  });

  it("resets the filter correctly", () => {
    render(
      <ProductsContext.Provider
        value={{ products, setProducts, filtered: products, setFiltered }}
      >
        <SearchBar />
      </ProductsContext.Provider>
    );

    expect(setFiltered).toHaveBeenCalledWith(products);
  });
});
